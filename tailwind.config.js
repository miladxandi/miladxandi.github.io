/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './app.vue',
    ],
    theme: {
        extend: {
            colors: {
                primary: 'var(--primary)',
                'primary-hover': 'var(--primary-hover)',
                accent: 'var(--accent)',
                'bg-main': 'var(--bg)',
                'bg-card': 'var(--bg-card)',
                'bg-header': 'var(--bg-header)',
                'text-main': 'var(--text)',
                'text-soft': 'var(--text-soft)',
                'border-custom': 'var(--border)',
                'tag-bg': 'var(--tag-bg)',
                'tag-text': 'var(--tag-text)',
            },
        },
    },
    plugins: [],
}
