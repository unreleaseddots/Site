// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Glitch effect on hover for h1
const glitchTitle = document.querySelector('h1.glitch');
if (glitchTitle) {
    glitchTitle.addEventListener('mouseenter', function() {
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = 'glitch-text 0.3s infinite';
        }, 10);
    });
}

// Terminal typing effect
const terminalText = document.querySelector('.terminal p');
if (terminalText) {
    const originalText = terminalText.textContent;
    terminalText.textContent = '';
    let i = 0;
    
    function typeWriter() {
        if (i < originalText.length) {
            terminalText.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    
    // Start typing after a short delay
    setTimeout(typeWriter, 500);
}

// Active nav link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('#sidebar nav a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Parallax effect for images
window.addEventListener('scroll', () => {
    const images = document.querySelectorAll('.spotlights .image img');
    images.forEach(img => {
        const speed = 0.5;
        const yPos = -(window.pageYOffset * speed);
        img.style.transform = `translateY(${yPos}px)`;
    });
});

// Form submission handling (you can replace this with actual backend logic)
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (name && email && message) {
            // Create terminal-style success message
            const successMsg = document.createElement('div');
            successMsg.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: #000;
                border: 2px solid var(--color-primary);
                padding: 2rem;
                z-index: 10000;
                font-family: 'Share Tech Mono', monospace;
                color: var(--color-primary);
                text-align: center;
                box-shadow: 0 0 50px rgba(0, 255, 65, 0.5);
            `;
            successMsg.innerHTML = `
                <p style="margin: 0; font-size: 1.2rem;">$ message.send()</p>
                <p style="margin: 1rem 0; color: var(--color-text-dim);">Message sent successfully!</p>
                <p style="margin: 0; font-size: 0.9rem; color: var(--color-text-dim);">I'll get back to you soon.</p>
            `;
            
            document.body.appendChild(successMsg);
            
            // Reset form
            form.reset();
            
            // Remove message after 3 seconds
            setTimeout(() => {
                successMsg.style.opacity = '0';
                successMsg.style.transition = 'opacity 0.5s ease';
                setTimeout(() => {
                    document.body.removeChild(successMsg);
                }, 500);
            }, 3000);
        } else {
            alert('Please fill in all fields');
        }
    });
}

// Add hover effect to feature sections
const featureSections = document.querySelectorAll('.features section');
featureSections.forEach(section => {
    section.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    section.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(-5px)';
    });
});

// Random glitch effect on page load
function randomGlitch() {
    const glitchElements = document.querySelectorAll('h1, h2');
    const randomElement = glitchElements[Math.floor(Math.random() * glitchElements.length)];
    
    if (randomElement) {
        randomElement.style.animation = 'glitch 0.3s';
        setTimeout(() => {
            randomElement.style.animation = '';
        }, 300);
    }
}

// Trigger random glitch every 5-10 seconds
setInterval(randomGlitch, Math.random() * 5000 + 5000);

// Matrix rain effect (optional, uncomment if you want this)
/*
function createMatrixRain() {
    const canvas = document.createElement('canvas');
    canvas.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        opacity: 0.1;
    `;
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const chars = '01';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);
    
    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00ff41';
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    setInterval(draw, 33);
}

createMatrixRain();
*/

// Preloader
window.addEventListener('load', function() {
    document.body.classList.remove('is-preload');
});

// Console easter egg
console.log('%c> System initialized', 'color: #ff0055; font-family: monospace; font-size: 14px; font-weight: bold;');
console.log('%c> Welcome to unreleaseddots portfolio', 'color: #ff3366; font-family: monospace; font-size: 14px;');
console.log('%c> GitHub: https://github.com/unreleaseddots', 'color: #ff6b9d; font-family: monospace; font-size: 12px;');
console.log('%c> Domain: unreleaseddots.com.br', 'color: #ff6b9d; font-family: monospace; font-size: 12px;');
console.log('%c> Type help() for available commands', 'color: #a0a0a0; font-family: monospace; font-size: 12px;');

window.help = function() {
    console.log('%cAvailable commands:', 'color: #ff0055; font-weight: bold; font-family: monospace;');
    console.log('%c  about()     - Learn more about me', 'color: #ff6b9d; font-family: monospace;');
    console.log('%c  skills()    - View technical skills', 'color: #ff6b9d; font-family: monospace;');
    console.log('%c  projects()  - See my projects', 'color: #ff6b9d; font-family: monospace;');
    console.log('%c  contact()   - Get contact info', 'color: #ff6b9d; font-family: monospace;');
};

window.about = function() {
    console.log('%cDeveloper | Low-level | Automation | Security', 'color: #ff0055; font-family: monospace;');
    console.log('%cFocused on understanding systems from the inside out', 'color: #a0a0a0; font-family: monospace;');
};

window.skills = function() {
    console.log('%cTechnical Stack:', 'color: #ff0055; font-weight: bold; font-family: monospace;');
    console.log('%c  → C, C++, Lua', 'color: #ff6b9d; font-family: monospace;');
    console.log('%c  → Python, PHP', 'color: #ff6b9d; font-family: monospace;');
    console.log('%c  → ESP8266 & IoT', 'color: #ff6b9d; font-family: monospace;');
    console.log('%c  → Linux & Shell', 'color: #ff6b9d; font-family: monospace;');
};

window.projects = function() {
    window.open('https://github.com/unreleaseddots', '_blank');
    console.log('%cOpening GitHub profile...', 'color: #ff0055; font-family: monospace;');
};

window.contact = function() {
    console.log('%cContact Information:', 'color: #ff0055; font-weight: bold; font-family: monospace;');
    console.log('%c  GitHub:   github.com/unreleaseddots', 'color: #ff6b9d; font-family: monospace;');
    console.log('%c  Twitter:  @unreleaseddots', 'color: #ff6b9d; font-family: monospace;');
    console.log('%c  Website:  unreleaseddots.com.br', 'color: #ff6b9d; font-family: monospace;');
};
