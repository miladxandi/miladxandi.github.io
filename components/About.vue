<script setup lang="ts">
import { ref } from 'vue'

const { t } = useI18n()

const isAboutImageLoaded = ref(false)

const handleAboutImageLoad = () => {
  isAboutImageLoaded.value = true
}
</script>

<template>
  <section id="about" class="py-24">
    <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

      <!-- image -->
      <div class="relative w-full overflow-hidden rounded-2xl shadow-xl bg-slate-800 aspect-[4/3]">
        <!-- skeleton -->
        <div
            v-if="!isAboutImageLoaded"
            class="absolute inset-0 skeleton z-10"
        />

        <!-- image -->
        <NuxtImg
            src="/images/jungle-macbook.jpg"
            :alt="t('nav.name')"
            class="w-full h-full object-cover transition-all duration-700 ease-out"
            :class="isAboutImageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'"
            @load="handleAboutImageLoad"
        />
      </div>

      <!-- content -->
      <div>
        <h2 class="text-3xl font-bold mb-6">
          {{ t('about.title') }}
        </h2>

        <p class="text-slate-400 mb-4 leading-relaxed">
          {{ t('about.p1') }}
        </p>

        <p class="text-slate-400 mb-8 leading-relaxed">
          {{ t('about.p2') }}
        </p>

        <div class="grid grid-cols-3 gap-6 text-center">
          <div>
            <h3 class="text-3xl font-bold text-teal-400">10+</h3>
            <p class="text-sm text-slate-400">
              {{ t('about.stats.years') }}
            </p>
          </div>

          <div>
            <h3 class="text-3xl font-bold text-teal-400">100+</h3>
            <p class="text-sm text-slate-400">
              {{ t('about.stats.projects') }}
            </p>
          </div>

          <div>
            <h3 class="text-3xl font-bold text-teal-400">100%</h3>
            <a
                href="https://karlancer.com/profile/43315"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-block"
            >
              <p class="text-sm text-slate-400 hover:text-teal-400 transition-colors duration-300">
                {{ t('about.stats.role') }}
              </p>
            </a>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.skeleton {
  position: relative;
  overflow: hidden;
  background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.04) 25%,
      rgba(255, 255, 255, 0.10) 50%,
      rgba(255, 255, 255, 0.04) 75%
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
