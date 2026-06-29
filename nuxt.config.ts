export default defineNuxtConfig({

  ssr: false,

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
    '@nuxtjs/i18n'
  ],

  css: [
    '~/assets/css/main.css'
  ],

  app: {
    head: {

      title: "Milad Zandi Zand | Developer",

      htmlAttrs: {
        lang: "fa",
        dir: "rtl"
      },

      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Personal website of Milad Zandi Zand" },
        { name: "theme-color", content: "#030712" }
      ],

      link: [

        {
          rel: "icon",
          type: "image/jpeg",
          href: "/images/logo.jpg"
        },

        {
          rel: "apple-touch-icon",
          href: "/images/logo.jpg"
        },

        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com"
        },

        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: ""
        },

        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100..900&display=swap"
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
    preset: "static"
  }

})
