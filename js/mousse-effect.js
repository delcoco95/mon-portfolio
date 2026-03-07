/**
 * Mousse Effect - Vanilla JS Canvas
 * Un effet de bulles organiques et interactives (Type "Mousse")
 */
document.addEventListener("DOMContentLoaded", () => {
    // 1. Création et injection du Canvas dynamiquement
    let canvas = document.getElementById("mousse-canvas");
    if (!canvas) {
        canvas = document.createElement("canvas");
        canvas.id = "mousse-canvas";
        // Application stricte des contraintes z-index et superposition
        Object.assign(canvas.style, {
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            zIndex: "-1",
            pointerEvents: "none"
        });
        // Insertion au tout début du body
        document.body.prepend(canvas);
    }
    const ctx = canvas.getContext("2d");

    // 2. Variables & Configuration
    let width, height;
    let particles = [];
    const config = {
        particleCount: 100, // Nombre de bulles de mousse
        maxRadius: 80,
        minRadius: 15,
        mouseRepelRadius: 200,
        mouseRepelForce: 0.04
    };

    let mouse = { x: -1000, y: -1000 };

    // 3. Suivi de la souris (avec tolérance tactile)
    document.addEventListener("mousemove", (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });
    document.addEventListener("touchmove", (e) => {
        if (e.touches.length > 0) {
            mouse.x = e.touches[0].clientX;
            mouse.y = e.touches[0].clientY;
        }
    });

    // 4. Redimensionnement
    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
        initParticles();
    }

    // 5. Classe de Particule (Bulle de mousse)
    class Particle {
        constructor() {
            this.radius = Math.random() * (config.maxRadius - config.minRadius) + config.minRadius;
            this.x = Math.random() * width;
            this.y = Math.random() * height + height; // Démarrage par le bas
            this.vx = (Math.random() - 0.5) * 1.5; // Dérive latérale
            this.vy = -(Math.random() * 1.5 + 0.5); // Remontée vers le haut
            this.wobble = Math.random() * Math.PI * 2;
            this.wobbleSpeed = Math.random() * 0.03 + 0.01;
            this.opacity = Math.random() * 0.4 + 0.1; // Transparence pour donner de la profondeur
        }

        update() {
            // Effet organique "wobble" (oscillation)
            this.wobble += this.wobbleSpeed;
            this.x += Math.cos(this.wobble) * 0.5;

            // Interaction Souris : Répulsion fluide
            let dx = this.x - mouse.x;
            let dy = this.y - mouse.y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < config.mouseRepelRadius) {
                let force = (config.mouseRepelRadius - distance) / config.mouseRepelRadius;
                this.x += dx * force * config.mouseRepelForce;
                this.y += dy * force * config.mouseRepelForce;
            }

            // Mouvement constant
            this.x += this.vx;
            this.y += this.vy;

            // Réapparition en bas quand la bulle sort par le haut
            if (this.y < -this.radius) {
                this.y = height + this.radius;
                this.x = Math.random() * width;
            }
            if (this.x < -this.radius) this.x = width + this.radius;
            if (this.x > width + this.radius) this.x = -this.radius;
        }

        draw() {
            ctx.beginPath();
            // Gradient radial pour la bulle 3D (adapté profond foncé)
            let gradient = ctx.createRadialGradient(
                this.x - this.radius * 0.3,
                this.y - this.radius * 0.3,
                this.radius * 0.1,
                this.x,
                this.y,
                this.radius
            );
            // Couleurs claires organiques pour contraster sur le fond très sombre
            gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity + 0.4})`); // Cœur très brillant
            gradient.addColorStop(0.6, `rgba(180, 220, 255, ${this.opacity})`);     // Halos cyan clair
            gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);

            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = gradient;
            ctx.fill();
        }
    }

    // 6. Initialisation
    function initParticles() {
        particles = [];
        let nb = config.particleCount;
        if (width < 768) nb = Math.floor(nb / 2); // Moins de particules sur mobile pour opti
        for (let i = 0; i < nb; i++) {
            let p = new Particle();
            p.y = Math.random() * height; // Répartition initiale sur tout l'écran
            particles.push(p);
        }
    }

    // 7. Boucle d'animation
    function animate() {
        ctx.clearRect(0, 0, width, height); // Nettoyage total (pas d'effet trainée pour la mousse)

        // Optionnel : superposition des couleurs pour un effet fusion "mousse" 
        // ctx.globalCompositeOperation = 'lighter'; 

        particles.forEach(p => {
            p.update();
            p.draw();
        });

        requestAnimationFrame(animate);
    }

    // Écouteurs
    window.addEventListener("resize", resize);

    // Lancement
    resize();
    animate();
});
