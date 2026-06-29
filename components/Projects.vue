<script setup lang="ts">
import { computed, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'

const { locale, t } = useI18n()

interface Project {
  title: string
  image: string
  link?: string
  tags: string[]
}

const isFa = computed(() => locale.value.toUpperCase() === 'FA')

const projects: Project[] = [
  {
    title: t('projects.esht.title'),
    image: "https://xandi-interactives.s3.ir-thr-at1.arvanstorage.ir/projects/esht.png",
    link: "https://github.com/miladxandi/esht",
    tags: ["Rust"]
  },
  {
    title: t('projects.ayarplus_service.title'),
    image: "https://xandi-interactives.s3.ir-thr-at1.arvanstorage.ir/projects/ayarplus-installer.png",
    link: "https://ayarplus.com/homepage/",
    tags: [".NET Framework", "C#", "Windows Service"]
  },
  {
    title: t('projects.alvanmarketapp.title'),
    image: "https://xandi-interactives.s3.ir-thr-at1.arvanstorage.ir/projects/alvanmarket-app.jpg",
    link: "https://alvanmarket.net",
    tags: [".NET MAUI", "C#", "XAML"]
  },
  {
    title: t('projects.ayarplus.title'),
    image: "https://www.karlancer.com/api/file/x/x764/2552/1766606156-Pi78.jpg",
    link: "https://ayarplus.com/homepage/",
    tags: [".NET MAUI", "C#", "XAML"]
  },
  {
    title: t('projects.currency.title'),
    image: "https://www.karlancer.com/api/file/x/x764/2604/1769095446-Yb1L.png",
    link: "https://sabad-app.ir",
    tags: [".NET MAUI", "C#"]
  },
  {
    title: t('projects.alvan.title'),
    image: "https://www.karlancer.com/api/file/2606/1770047218-OQwS.png",
    link: "https://alvanmarket.net",
    tags: ["Laravel", "Nuxt"]
  }
]

const loadedImages = reactive<Record<number, boolean>>({})

const handleImageLoad = (index: number) => {
  loadedImages[index] = true
}
</script>

<template>
  <section id="projects" class="py-24 overflow-hidden">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="text-3xl font-bold mb-14 text-center text-text-main">
        {{ t('projects.title') }}
      </h2>

      <Swiper
          class="py-8"
          :modules="[Autoplay]"
          :slides-per-view="1"
          :space-between="30"
          :loop="true"
          :centered-slides="true"
          :autoplay="{ delay: 4000, disableOnInteraction: false }"
          :breakpoints="{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }"
      >
        <SwiperSlide
            v-for="(p, index) in projects"
            :key="index"
            class="p-4"
        >
          <div class="project-card group rounded-xl border border-border-custom bg-bg-card hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">

            <div class="relative h-48 overflow-hidden rounded-t-xl bg-bg-card">
              <!-- Skeleton -->
              <div
                  v-if="!loadedImages[index]"
                  class="absolute inset-0 skeleton"
              />

              <!-- Image -->
              <NuxtImg
                  :src="p.image"
                  :alt="p.title"
                  loading="lazy"
                  @load="handleImageLoad(index)"
                  class="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition duration-500"
                  :class="loadedImages[index] ? 'opacity-100' : 'opacity-0'"
              />
            </div>

            <div class="p-6">
              <!-- title skeleton -->
              <div v-if="!loadedImages[index]" class="space-y-3">
                <div class="skeleton h-6 w-2/3 rounded-md"></div>
                <div class="flex flex-wrap gap-2 mt-4">
                  <div class="skeleton h-6 w-16 rounded-md"></div>
                  <div class="skeleton h-6 w-20 rounded-md"></div>
                  <div class="skeleton h-6 w-14 rounded-md"></div>
                </div>
                <div class="skeleton h-4 w-24 rounded-md mt-6"></div>
              </div>

              <!-- real content -->
              <template v-else>
                <h3 class="font-semibold mb-3 text-lg text-text-main">
                  {{ p.title }}
                </h3>

                <div class="flex flex-wrap gap-2">
                  <span
                      v-for="(tag, tagIndex) in p.tags"
                      :key="tagIndex"
                      class="text-xs px-2 py-1 rounded-md bg-tag-bg text-tag-text"
                  >
                    {{ tag }}
                  </span>
                </div>

                <a
                    v-if="p.link"
                    :href="p.link"
                    target="_blank"
                    class="inline-block mt-6 text-sm text-primary hover:text-primary-hover transition"
                >
                  {{ t('projects.view_project') }} {{ isFa ? '←' : '→' }}
                </a>
              </template>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<style scoped>
.swiper {
  overflow: visible !important;
}

.swiper-wrapper {
  overflow: visible !important;
}

.project-card {
  backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
}

.skeleton {
  position: relative;
  overflow: hidden;
  background: linear-gradient(
      90deg,
      rgba(255,255,255,0.04) 25%,
      rgba(255,255,255,0.10) 50%,
      rgba(255,255,255,0.04) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.4s infinite linear;
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
