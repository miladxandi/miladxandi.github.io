// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    }
});

// Animate skill bars on scroll
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBar = entry.target.querySelector('.skill-bar');
            if (skillBar) {
                const width = skillBar.style.width;
                skillBar.style.width = '0';
                setTimeout(() => {
                    skillBar.style.width = width;
                }, 100);
            }
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-card').forEach(card => {
    observer.observe(card);
});

// Form submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Here you would typically send the form data to a server
    // For now, we'll just show an alert
    alert(`پیام شما با موفقیت ارسال شد!\n\nنام: ${name}\nایمیل: ${email}\nموضوع: ${subject}\n\nدر حال حاضر این یک دمو است. برای فعال‌سازی کامل، باید یک سرویس backend اضافه کنید.`);

    // Reset form
    contactForm.reset();
});

// Add fade-in animation on scroll
const fadeElements = document.querySelectorAll('.skill-card, .project-card, .stat-item');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('fade-in-up');
            }, index * 100);
            fadeObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

fadeElements.forEach(element => {
    fadeObserver.observe(element);
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Add active class styling
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--primary-color);
    }
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// Typing effect for hero title (optional enhancement)
const typingElements = document.querySelectorAll('.hero-title span');
let currentElement = 0;
let currentChar = 0;
let isDeleting = false;

function typeWriter() {
    if (currentElement < typingElements.length) {
        const element = typingElements[currentElement];
        const text = element.textContent;

        if (!isDeleting && currentChar < text.length) {
            element.textContent = text.substring(0, currentChar + 1);
            currentChar++;
            setTimeout(typeWriter, 100);
        } else if (isDeleting && currentChar > 0) {
            element.textContent = text.substring(0, currentChar - 1);
            currentChar--;
            setTimeout(typeWriter, 50);
        } else if (!isDeleting && currentChar === text.length) {
            isDeleting = true;
            setTimeout(typeWriter, 2000);
        } else if (isDeleting && currentChar === 0) {
            isDeleting = false;
            currentElement++;
            if (currentElement >= typingElements.length) {
                currentElement = 0;
            }
            setTimeout(typeWriter, 500);
        }
    }
}

// Uncomment the line below to enable typing effect
// window.addEventListener('load', () => setTimeout(typeWriter, 1000));

// Random Code Generator for Hero Section
const codeSnippets = [
    {
        title: 'PlayerController.cs',
        language: 'csharp',
        lines: [
            { content: '<span class="code-keyword">public class</span> <span class="code-class">PlayerController</span> : <span class="code-class">MonoBehaviour</span>', indent: 0 },
            { content: '<span class="code-indent">    </span><span class="code-keyword">private</span> <span class="code-type">float</span> <span class="code-var">speed</span> = <span class="code-number">5f</span>;', indent: 1 },
            { content: '<span class="code-indent">    </span><span class="code-keyword">void</span> <span class="code-method">Update</span>()', indent: 1 },
            { content: '<span class="code-indent">        </span><span class="code-var">transform</span>.<span class="code-method">Translate</span>(<span class="code-var">Vector3</span>.<span class="code-property">forward</span> * <span class="code-var">speed</span> * <span class="code-type">Time</span>.<span class="code-property">deltaTime</span>);', indent: 2 },
            { content: '<span class="code-indent">    </span>}', indent: 1 },
            { content: '}', indent: 0 }
        ]
    },
    {
        title: 'UserController.php',
        language: 'php',
        lines: [
            { content: '<span class="code-keyword">&lt;?php</span>', indent: 0 },
            { content: '', indent: 0 },
            { content: '<span class="code-keyword">namespace</span> <span class="code-class">App</span>\\<span class="code-class">Http</span>\\<span class="code-class">Controllers</span>;', indent: 0 },
            { content: '', indent: 0 },
            { content: '<span class="code-keyword">class</span> <span class="code-class">UserController</span> <span class="code-keyword">extends</span> <span class="code-class">Controller{</span>', indent: 0 },
            { content: '<span class="code-indent">    </span><span class="code-keyword">public function</span> <span class="code-method">index</span>(){', indent: 1 },
            { content: '<span class="code-indent">        </span><span class="code-keyword">return</span> <span class="code-var">User</span>::<span class="code-method">all</span>();', indent: 2 },
            { content: '<span class="code-indent">    </span>}', indent: 1 },
            { content: '}', indent: 0 }
        ]
    },
    {
        title: 'index.vue',
        language: 'javascript',
        lines: [
            { content: '<span class="code-keyword">&lt;template&gt;</span>', indent: 0 },
            { content: '<span class="code-indent">    </span><span class="code-keyword">&lt;div</span> <span class="code-var">class</span>=<span class="code-string">"container"</span><span class="code-keyword">&gt;</span>', indent: 1 },
            { content: '<span class="code-indent">        </span><span class="code-keyword">&lt;h1&gt;</span>{{ <span class="code-var">title</span> }}<span class="code-keyword">&lt;/h1&gt;</span>', indent: 2 },
            { content: '<span class="code-indent">    </span><span class="code-keyword">&lt;/div&gt;</span>', indent: 1 },
            { content: '<span class="code-keyword">&lt;/template&gt;</span>', indent: 0 },
            { content: '', indent: 0 },
            { content: '<span class="code-keyword">&lt;script</span> <span class="code-var">setup</span><span class="code-keyword">&gt;</span>', indent: 0 },
            { content: '<span class="code-indent">    </span><span class="code-keyword">const</span> <span class="code-var">title</span> = <span class="code-string">ref</span>(<span class="code-string">\'Nuxt.js App\'</span>);', indent: 1 },
            { content: '<span class="code-keyword">&lt;/script&gt;</span>', indent: 0 }
        ]
    },
    {
        title: 'GameManager.cs',
        language: 'csharp',
        lines: [
            { content: '<span class="code-keyword">using</span> <span class="code-class">UnityEngine</span>;', indent: 0 },
            { content: '', indent: 0 },
            { content: '<span class="code-keyword">public class</span> <span class="code-class">GameManager</span> : <span class="code-class">MonoBehaviour{</span>', indent: 0 },
            { content: '<span class="code-indent">    </span><span class="code-keyword">public static</span> <span class="code-class">GameManager</span> <span class="code-var">Instance</span>;', indent: 1 },
            { content: '<span class="code-indent">    </span><span class="code-keyword">void</span> <span class="code-method">Awake</span>(){', indent: 1 },
            { content: '<span class="code-indent">        </span><span class="code-var">Instance</span> = <span class="code-keyword">this</span>;', indent: 2 },
            { content: '<span class="code-indent">    </span>}', indent: 1 },
            { content: '}', indent: 0 }
        ]
    },
    {
        title: 'api.php',
        language: 'php',
        lines: [
            { content: '<span class="code-keyword">&lt;?php</span>', indent: 0 },
            { content: '', indent: 0 },
            { content: '<span class="code-keyword">use</span> <span class="code-class">Illuminate</span>\\<span class="code-class">Support</span>\\<span class="code-class">Facades</span>\\<span class="code-class">Route</span>;', indent: 0 },
            { content: '', indent: 0 },
            { content: '<span class="code-var">Route</span>::<span class="code-method">get</span>(<span class="code-string">\'/api/users\'</span>, [<span class="code-class">UserController</span>::<span class="code-keyword">class</span>, <span class="code-string">\'index\'</span>]);', indent: 0 },
            { content: '<span class="code-var">Route</span>::<span class="code-method">post</span>(<span class="code-string">\'/api/users\'</span>, [<span class="code-class">UserController</span>::<span class="code-keyword">class</span>, <span class="code-string">\'store\'</span>]);', indent: 0 }
        ]
    },
    {
        title: 'composable.ts',
        language: 'typescript',
        lines: [
            { content: '<span class="code-keyword">export const</span> <span class="code-method">useApi</span> = () => {', indent: 0 },
            { content: '<span class="code-indent">    </span><span class="code-keyword">const</span> <span class="code-var">fetchData</span> = <span class="code-keyword">async</span> (<span class="code-var">url</span>: <span class="code-type">string</span>) => {', indent: 1 },
            { content: '<span class="code-indent">        </span><span class="code-keyword">const</span> { <span class="code-var">data</span> } = <span class="code-keyword">await</span> <span class="code-var">$fetch</span>(<span class="code-var">url</span>);', indent: 2 },
            { content: '<span class="code-indent">        </span><span class="code-keyword">return</span> <span class="code-var">data</span>;', indent: 2 },
            { content: '<span class="code-indent">    </span>};', indent: 1 },
            { content: '<span class="code-indent">    </span><span class="code-keyword">return</span> { <span class="code-var">fetchData</span> };', indent: 1 },
            { content: '};', indent: 0 }
        ]
    }
];

function generateRandomCode() {
    const randomIndex = Math.floor(Math.random() * codeSnippets.length);
    return codeSnippets[randomIndex];
}

function renderCode() {
    const codeData = generateRandomCode();
    const codeAnimation = document.querySelector('.code-animation');

    if (!codeAnimation) return;

    const codeHeader = codeAnimation.querySelector('.code-header');
    const codeContent = codeAnimation.querySelector('.code-content');

    // Update title with fade effect
    const codeTitle = codeHeader.querySelector('.code-title');
    if (codeTitle) {
        codeTitle.style.opacity = '0';
        setTimeout(() => {
            codeTitle.textContent = codeData.title;
            codeTitle.style.transition = 'opacity 0.3s';
            codeTitle.style.opacity = '1';
        }, 150);
    }

    // Clear existing code lines
    codeContent.innerHTML = '';

    // Create and append new code lines
    codeData.lines.forEach((line, index) => {
        const codeLine = document.createElement('div');
        codeLine.className = 'code-line';
        codeLine.innerHTML = line.content || '&nbsp;';
        codeLine.style.animationDelay = `${index * 0.15}s`;
        codeContent.appendChild(codeLine);
    });

    // Trigger fade-in animation for each line
    setTimeout(() => {
        const codeLines = codeContent.querySelectorAll('.code-line');
        codeLines.forEach((line, index) => {
            setTimeout(() => {
                line.style.opacity = '1';
            }, index * 150);
        });
    }, 200);
}

// Initialize random code on page load
window.addEventListener('DOMContentLoaded', () => {
    renderCode();
});

console.log('وب‌سایت شخصی میلاد زندی زند - بارگذاری شد ✓');

