<script setup lang="ts">
import {useI18n} from "vue-i18n";

const { locale, locales } = useI18n()

watch(locale, (newLocale) => {
  const lang = locales.value.find(l => l.code === newLocale)
  document.documentElement.lang = lang?.iso || 'fa'
  document.documentElement.dir = lang?.dir || 'rtl'
}, { immediate: true })
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
