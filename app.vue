<script setup lang="ts">
import { useI18n } from "vue-i18n"

const { t, locale } = useI18n()

// متاتگ‌های SEO چندزبانه (lang, dir, hreflang, canonical) خودکار ساخته میشن
const head = useLocaleHead({
  addDirAttribute: true,
  addSeoAttributes: true
})

useHead({
  htmlAttrs: {
    lang: () => head.value.htmlAttrs?.lang,
    dir: () => head.value.htmlAttrs?.dir
  },
  link: () => head.value.link,
  meta: () => head.value.meta,

  // متاتگ‌های وابسته به زبان
  title: () => t('seo.title'),
  // @ts-ignore
  meta: [
    { name: 'description', content: () => t('seo.description') },
    { property: 'og:title', content: () => t('seo.title') },
    { property: 'og:description', content: () => t('seo.description') },
    { property: 'og:locale', content: () => locale.value === 'fa' ? 'fa_IR' : 'en_US' },
    { name: 'twitter:title', content: () => t('seo.title') },
    { name: 'twitter:description', content: () => t('seo.description') }
  ]
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
