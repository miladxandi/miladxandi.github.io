<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

interface Project {
  title: string
  image: string
  link?: string
  tags: string[]
}

const projects: Project[] = [
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
</script>

<template>
  <section id="projects" class="py-24">
    <div class="max-w-6xl mx-auto px-6">

      <h2 class="text-3xl font-bold mb-14 text-center text-text-main">
        {{ t('projects.title') }}
      </h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        <div
            v-for="(p, index) in projects"
            :key="index"
            class="group rounded-xl overflow-hidden border border-border-custom bg-bg-card hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 transition duration-300"
        >
          <div class="relative h-48 overflow-hidden">
            <NuxtImg :src="p.image"
                     :alt="p.title"
                     loading="lazy"
                     class="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition duration-500"
                     />
          </div>

          <div class="p-6">
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
              {{ t('projects.view_project') }} →
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
