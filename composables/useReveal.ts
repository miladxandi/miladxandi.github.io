// composables/useReveal.ts
export const useReveal = (selector = '.reveal') => {
    onMounted(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll(selector).forEach((el) => observer.observe(el));
    });
};
