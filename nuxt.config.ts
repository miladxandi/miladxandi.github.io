export default defineNuxtConfig({

  ssr: true, // ✅ برای SEO فعال شد

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@nuxtjs/sitemap',
  ],
  icon: {
    serverBundle: 'local'
  },
  site: {
    url: 'https://miladzandi.ir'
  },

  sitemap: {
    enabled: true
  },

  googleFonts: {
    families: {
      Vazirmatn: [100, 200, 300, 400, 500, 600, 700, 800, 900]
    },
    download: true,
    inject: true
  },

  image: {
    format: ['webp', 'avif'],
    quality: 80
  },

  css: [
    '~/assets/css/main.css'
  ],

  app: {
    head: {
      // متاتگ‌های ثابت اینجا می‌مونن
      // title و description وابسته به زبان توی app.vue تنظیم میشن

      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "theme-color", content: "#030712" },

        // Open Graph ثابت
        { property: "og:type", content: "website" },
        { property: "og:image", content: "/images/logo.jpg" },
        { property: "og:url", content: "https://miladzandi.ir" }, // ✅ اصلاح شد

        // Twitter ثابت
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: "/images/logo.jpg" },

        // اضافی
        { name: "author", content: "Milad Zandi Zand" },
        { name: "robots", content: "index, follow" }
      ],

      link: [
        // لینک‌های فونت حذف شدن چون @nuxtjs/google-fonts خودش محلی تزریق می‌کنه

        {
          rel: "icon",
          type: "image/jpeg",
          href: "/images/logo.jpg"
        },
        {
          rel: "apple-touch-icon",
          href: "/images/logo.jpg"
        }
      ]
    }
  },

  colorMode: {
    preference: "dark",
    fallback: "dark",
    classSuffix: ""
  },

  i18n: {
    defaultLocale: "fa",
    strategy: "prefix_except_default",
    langDir: "locales",

    // برای ساخت خودکار hreflang و canonical
    baseUrl: "https://miladzandi.ir",

    locales: [
      {
        code: "fa",
        iso: "fa-IR",
        file: "fa.json",
        name: "فارسی",
        dir: "rtl"
      },
      {
        code: "en",
        iso: "en-US",
        file: "en.json",
        name: "English",
        dir: "ltr"
      }
    ],

    detectBrowserLanguage: false
  },

  nitro: {
    preset: "static",
    prerender: {
      crawlLinks: true,
      routes: ['/']
    },
    compressPublicAssets: true
  },

  experimental: {
    payloadExtraction: false
  },

  vite: {
    build: {
      cssCodeSplit: true
    }
  }
})
