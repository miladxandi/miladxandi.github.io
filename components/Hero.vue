<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// مدیریت وضعیت بارگذاری تصویر پروفایل
const isImageLoaded = ref(false)

const handleImageLoad = () => {
  isImageLoaded.value = true
}
</script>

<template>
  <section id="home" class="min-h-screen flex items-center pt-24">
    <div class="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

      <!-- بخش متن‌ها -->
      <div>
        <p class="text-teal-400 mb-2">
          {{ t('hero.hello') }}
        </p>

        <h1 class="text-5xl font-bold mb-4 text-text-main">
          {{ t('hero.name') }}
        </h1>

        <p class="text-lg text-slate-400 mb-6">
          {{ t('hero.title') }}
        </p>

        <p class="text-slate-400 max-w-xl mb-8 leading-relaxed">
          {{ t('hero.description') }}
        </p>

        <div class="flex gap-4">
          <a
              href="https://xandi-interactives.s3.ir-thr-at1.arvanstorage.ir/Resume.pdf"
              target="_blank"
              class="bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 transition duration-300"
          >
            {{ t('hero.resume') }}
          </a>

          <a
              href="#projects"
              class="border border-white/20 px-6 py-3 rounded-lg hover:bg-white/10 transition duration-300"
          >
            {{ t('hero.projects') }}
          </a>
        </div>
      </div>

      <!-- بخش تصویر به همراه Skeleton Loader -->
      <div class="relative w-full aspect-[4/5] max-w-md mx-auto lg:mx-0 overflow-hidden rounded-2xl bg-slate-800">

        <!-- Skeleton -->
        <div
            v-if="!isImageLoaded"
            class="absolute inset-0 skeleton z-10"
        />

        <!-- تصویر اصلی -->
        <NuxtImg
            src="/images/formal.jpg"
            :alt="t('nav.name')"
            class="w-full h-full object-cover transition-all duration-700 ease-out"
            :class="isImageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'"
            @load="handleImageLoad"
        />
      </div>

    </div>
  </section>
</template>

<style scoped>
/* استایل اسکلتون با افکت شیمر */
.skeleton {
  background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.03) 25%,
      rgba(255, 255, 255, 0.08) 50%,
      rgba(255, 255, 255, 0.03) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite linear;
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>
