// Dark/Light Mode Toggle
document.getElementById('theme-toggle').addEventListener('change', function() {
    document.body.classList.toggle('light-mode');

    // Update particles color based on theme
    if (document.body.classList.contains('light-mode')) {
        updateParticles('light');
    } else {
        updateParticles('dark');
    }
});

// Particles.js Configuration
function initParticles() {
    particlesJS('particles-js', {
        particles: {
            number: { value: 50, density: { enable: true, value_area: 800 } },
            color: { value: "#00ffcc" },
            shape: { type: "triangle", stroke: { width: 0, color: "#000000" } },
            opacity: { value: 0.5, random: true, anim: { enable: true } },
            size: { value: 3, random: true, anim: { enable: true, speed: 2 } },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#00ffcc",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out"
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" }
            }
        }
    });
}

function updateParticles(theme) {
    const color = theme === 'light' ? "#cc00ff" : "#00ffcc";
    document.querySelector('#particles-js canvas').style.setProperty('--particle-color', color);

    // Reinitialize particles with new color
    const container = document.getElementById('particles-js');
    while (container.firstChild) container.removeChild(container.firstChild);
    particlesJS('particles-js', {
        particles: {
            color: { value: color },
            line_linked: { color: color }
        }
        // ... (sisa konfigurasi sama)
    });
}

// 3D Photo Effect
document.addEventListener('DOMContentLoaded', function() {
    initParticles();

    // Three.js setup for 3D photo
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(200, 200);
    document.getElementById('photo-scene').appendChild(renderer.domElement);

    // Create a sphere for the photo
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const texture = new THREE.TextureLoader().load('{{ profile.foto }}');
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    camera.position.z = 2;

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        sphere.rotation.y += 0.005;
        renderer.render(scene, camera);
    }
    animate();

    // Handle window resize
    window.addEventListener('resize', function() {
        camera.aspect = 200 / 200;
        camera.updateProjectionMatrix();
        renderer.setSize(200, 200);
    });
});