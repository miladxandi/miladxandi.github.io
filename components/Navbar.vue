<script setup lang="ts">
const colorMode = useColorMode()
const { locale, locales, setLocale, t } = useI18n()
const isLangOpen = ref(false)

function toggleTheme() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

function switchLang(code: string) {
  setLocale(code)
  isLangOpen.value = false
}
</script>

<template>
  <header class="fixed top-0 w-full z-50 backdrop-blur-lg bg-bg-header border-b border-border-custom">
    <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

      <!-- logo -->
      <div class="flex items-center gap-3">
        <NuxtImg src="/images/logo.jpg"
                 class="w-10 h-10 rounded-lg"
                 :alt="t('nav.name')"/>
        <h1 class="font-semibold text-lg text-text-main">
          {{ t('nav.name') }}
        </h1>
      </div>

      <!-- menu -->
      <nav class="hidden md:flex gap-8 text-sm">
        <a href="#home" class="text-text-main hover:text-primary transition">
          {{ t('nav.home') }}
        </a>
        <a href="#about" class="text-text-main hover:text-primary transition">
          {{ t('nav.about') }}
        </a>
        <a href="#skills" class="text-text-main hover:text-primary transition">
          {{ t('nav.skills') }}
        </a>
        <a href="#testimonials" class="text-text-main hover:text-primary transition">
          {{ t('nav.testimonials') }}
        </a>
        <a href="#projects" class="text-text-main hover:text-primary transition">
          {{ t('nav.projects') }}
        </a>
        <a href="https://xandi-interactives.s3.ir-thr-at1.arvanstorage.ir/Resume.pdf" target="_blank" class="text-text-main hover:text-primary transition">
          {{ t('nav.resume') }}
        </a>
      </nav>

      <!-- actions -->
      <div class="flex items-center gap-3">

        <!-- theme toggle -->
        <button
            @click="toggleTheme"
            class="w-9 h-9 flex items-center justify-center rounded-lg border border-border-custom hover:bg-bg-card transition"
        >
          <Icon
              :name="colorMode.value === 'dark' ? 'mdi:white-balance-sunny' : 'mdi:moon-waning-crescent'"
              class="w-5 h-5 text-text-main"
          />
        </button>

        <!-- language dropdown -->
        <div class="relative">
          <button
              @click="isLangOpen = !isLangOpen"
              class="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border-custom hover:bg-bg-card transition text-sm text-text-main"
          >
            {{ locale.toUpperCase()=="FA"?"فا":"En" }}
            <Icon name="mdi:chevron-down" class="w-4 h-4" />
          </button>

          <div
              v-if="isLangOpen"
              class="absolute mt-2 w-32 rounded-xl border border-border-custom bg-bg-card shadow-lg overflow-hidden z-50"
              :class="locale.toUpperCase()=='FA'?'left-0':'right-0'"
          >
            <button
                v-for="lang in locales"
                :key="lang.code"
                @click="switchLang(lang.code)"
                class="w-full text-right px-4 py-2 hover:bg-bg-header transition text-sm text-text-main"
                :class="locale === lang.code ? 'text-primary' : ''"
            >
              {{ lang.name }}
            </button>
          </div>
        </div>

      </div>
    </div>
  </header>
</template>
