// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
        }
    });
});

// Navbar shadow on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.style.boxShadow = window.scrollY > 50
        ? '0 4px 6px -1px rgba(0,0,0,0.1)'
        : '0 2px 4px -1px rgba(0,0,0,0.06)';
});

// Skill bars animation
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBar = entry.target.querySelector('.skill-bar');
            if (skillBar) {
                const width = skillBar.style.width;
                skillBar.style.width = '0';
                setTimeout(() => { skillBar.style.width = width; }, 100);
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.skill-card').forEach(card => skillObserver.observe(card));

// Fade-in on scroll
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('fade-in-up'), index * 100);
            fadeObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.skill-card, .project-card, .stat-item').forEach(el => fadeObserver.observe(el));

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        if (scrollY > sectionTop && scrollY <= sectionTop + section.offsetHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) link.classList.add('active');
            });
        }
    });
});

// Active nav style
const style = document.createElement('style');
style.textContent = `.nav-link.active { color: var(--primary-color); } .nav-link.active::after { width: 100%; }`;
document.head.appendChild(style);

// Random Code in Hero
const codeSnippets = [
    {
        title: 'PlayerController.cs',
        lines: [
            '<span class="code-keyword">public class</span> <span class="code-class">PlayerController</span> : <span class="code-class">MonoBehaviour</span> {',
            '  <span class="code-keyword">private</span> <span class="code-type">float</span> <span class="code-var">speed</span> = <span class="code-number">5f</span>;',
            '  <span class="code-keyword">void</span> <span class="code-method">Update</span>() {',
            '    <span class="code-var">transform</span>.<span class="code-method">Translate</span>(<span class="code-var">Vector3</span>.<span class="code-property">forward</span> * <span class="code-var">speed</span> * <span class="code-type">Time</span>.<span class="code-property">deltaTime</span>);',
            '  }',
            '}'
        ]
    },
    {
        title: 'UserController.php',
        lines: [
            '<span class="code-keyword">&lt;?php</span>',
            '<span class="code-keyword">namespace</span> <span class="code-class">App\\Http\\Controllers</span>;',
            '<span class="code-keyword">class</span> <span class="code-class">UserController</span> <span class="code-keyword">extends</span> <span class="code-class">Controller</span> {',
            '  <span class="code-keyword">public function</span> <span class="code-method">index</span>() {',
            '    <span class="code-keyword">return</span> <span class="code-var">User</span>::<span class="code-method">all</span>();',
            '  }',
            '}'
        ]
    },
    {
        title: 'index.vue',
        lines: [
            '<span class="code-keyword">&lt;template&gt;</span>',
            '  <span class="code-keyword">&lt;div</span> <span class="code-var">class</span>=<span class="code-string">"container"</span><span class="code-keyword">&gt;</span>',
            '    <span class="code-keyword">&lt;h1&gt;</span>{{ <span class="code-var">title</span> }}<span class="code-keyword">&lt;/h1&gt;</span>',
            '  <span class="code-keyword">&lt;/div&gt;&lt;/template&gt;</span>',
            '<span class="code-keyword">&lt;script</span> <span class="code-var">setup</span><span class="code-keyword">&gt;</span>',
            '  <span class="code-keyword">const</span> <span class="code-var">title</span> = <span class="code-method">ref</span>(<span class="code-string">\'Nuxt App\'</span>)',
            '<span class="code-keyword">&lt;/script&gt;</span>'
        ]
    },
    {
        title: 'GameManager.cs',
        lines: [
            '<span class="code-keyword">using</span> <span class="code-class">UnityEngine</span>;',
            '<span class="code-keyword">public class</span> <span class="code-class">GameManager</span> : <span class="code-class">MonoBehaviour</span> {',
            '  <span class="code-keyword">public static</span> <span class="code-class">GameManager</span> <span class="code-var">Instance</span>;',
            '  <span class="code-keyword">void</span> <span class="code-method">Awake</span>() {',
            '    <span class="code-var">Instance</span> = <span class="code-keyword">this</span>;',
            '  }',
            '}'
        ]
    },
    {
        title: 'composable.ts',
        lines: [
            '<span class="code-keyword">export const</span> <span class="code-method">useApi</span> = () => {',
            '  <span class="code-keyword">const</span> <span class="code-var">fetchData</span> = <span class="code-keyword">async</span> (<span class="code-var">url</span>: <span class="code-type">string</span>) => {',
            '    <span class="code-keyword">const</span> { <span class="code-var">data</span> } = <span class="code-keyword">await</span> <span class="code-var">$fetch</span>(<span class="code-var">url</span>);',
            '    <span class="code-keyword">return</span> <span class="code-var">data</span>;',
            '  };',
            '  <span class="code-keyword">return</span> { <span class="code-var">fetchData</span> };',
            '};'
        ]
    }
];

function renderCode() {
    const codeAnimation = document.querySelector('.code-animation');
    if (!codeAnimation) return;

    const snippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
    const codeTitle = codeAnimation.querySelector('.code-title');
    const codeContent = codeAnimation.querySelector('.code-content');

    codeTitle.style.opacity = '0';
    setTimeout(() => {
        codeTitle.textContent = snippet.title;
        codeTitle.style.transition = 'opacity 0.3s';
        codeTitle.style.opacity = '1';
    }, 150);

    codeContent.innerHTML = '';
    snippet.lines.forEach((line, index) => {
        const div = document.createElement('div');
        div.className = 'code-line';
        div.innerHTML = line || '&nbsp;';
        div.style.animationDelay = `${index * 0.15}s`;
        codeContent.appendChild(div);
    });

    setTimeout(() => {
        codeContent.querySelectorAll('.code-line').forEach((line, i) => {
            setTimeout(() => { line.style.opacity = '1'; }, i * 150);
        });
    }, 200);
}

window.addEventListener('DOMContentLoaded', renderCode);

console.log('وب‌سایت شخصی میلاد زندی زند - بارگذاری شد ✓');
