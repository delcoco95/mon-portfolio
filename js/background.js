/**
 * Dotted Glow Background
 * Traduction en Vanilla JS du composant React
 */

document.addEventListener("DOMContentLoaded", () => {
  // Configuration
  const config = {
    gap: 15,
    radius: 1.5,
    color: "rgba(100, 150, 200, 0.4)",      // Points bleu/gris translucides par défaut
    glowColor: "rgba(100, 180, 240, 0.7)",  // Effet glow cyan-bleuté
    opacity: 0.8,
    speedMin: 0.3,
    speedMax: 1.0,
    speedScale: 0.6,
  };

  // Créer le conteneur et le canvas dynamiquement s'ils n'existent pas
  let container = document.querySelector(".dotted-glow-bg");
  if (!container) {
    container = document.createElement("div");
    container.className = "dotted-glow-bg";
    document.body.prepend(container);
  }

  let el = container.querySelector("canvas");
  if (!el) {
    el = document.createElement("canvas");
    el.style.display = "block";
    el.style.width = "100%";
    el.style.height = "100%";
    container.appendChild(el);
  }

  const ctx = el.getContext("2d");
  if (!ctx) return;

  let raf = 0;
  let stopped = false;

  const dpr = Math.max(1, window.devicePixelRatio || 1);

  const resize = () => {
    const { width, height } = container.getBoundingClientRect();
    el.width = Math.max(1, Math.floor(width * dpr));
    el.height = Math.max(1, Math.floor(height * dpr));
    el.style.width = `${width}px`;
    el.style.height = `${height}px`;
    ctx.scale(dpr, dpr);
  };

  const ro = new ResizeObserver(resize);
  ro.observe(container);
  setTimeout(resize, 0);

  let dots = [];

  const regenDots = () => {
    dots = [];
    const { width, height } = container.getBoundingClientRect();
    const cols = Math.ceil(width / config.gap) + 2;
    const rows = Math.ceil(height / config.gap) + 2;
    for (let i = -1; i < cols; i++) {
      for (let j = -1; j < rows; j++) {
        const x = i * config.gap + (j % 2 === 0 ? 0 : config.gap * 0.5);
        const y = j * config.gap;
        dots.push({
          x,
          y,
          phase: Math.random() * Math.PI * 2,
          speed: config.speedMin + Math.random() * (config.speedMax - config.speedMin),
        });
      }
    }
  };

  regenDots();
  window.addEventListener("resize", regenDots);

  const draw = (now) => {
    if (stopped) return;
    const { width, height } = container.getBoundingClientRect();
    ctx.clearRect(0, 0, width, height);
    ctx.globalAlpha = config.opacity;

    const time = (now / 1000) * config.speedScale;

    dots.forEach((d) => {
      const mod = (time * d.speed + d.phase) % 2;
      const lin = mod < 1 ? mod : 2 - mod;
      const intensity = 0.1 + 0.9 * (lin * lin);

      ctx.beginPath();
      ctx.arc(d.x, d.y, config.radius, 0, Math.PI * 2);

      if (intensity > 0.7) {
        ctx.fillStyle = config.glowColor;
        ctx.shadowColor = config.glowColor;
        ctx.shadowBlur = 8 * (intensity - 0.7) * 3;
      } else {
        ctx.fillStyle = config.color;
        ctx.shadowBlur = 0;
      }
      ctx.globalAlpha = config.opacity * (intensity > 0.7 ? 1 : 0.3 + intensity * 0.5);
      ctx.fill();
    });

    raf = requestAnimationFrame(draw);
  };

  raf = requestAnimationFrame(draw);
});
