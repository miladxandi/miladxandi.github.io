<script setup lang="ts">

import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const skills = [
  { name:"Nuxt",icon:"simple-icons:nuxtdotjs"},
  { name:"Laravel",icon:"simple-icons:laravel"},
  { name:".NET",icon:"simple-icons:dotnet"},
  { name:"Unity",icon:"simple-icons:unity"},
  { name:"Tailwind",icon:"simple-icons:tailwindcss"},
  { name:"PostgreSQL",icon:"simple-icons:postgresql"}
]

</script>

<template>

  <section id="skills" class="py-24">

    <div class="max-w-6xl mx-auto px-6">

      <h2 class="text-3xl font-bold mb-14">
        {{ t('skills.title') }}
      </h2>

      <div class="grid grid-cols-3 md:grid-cols-6 gap-10 text-center">

        <div
            v-for="s in skills"
            :key="s.name"
            class="flex flex-col items-center gap-3 opacity-70 hover:opacity-100 transition"
        >

          <Icon :name="s.icon" class="text-4xl text-teal-400"/>

          <span class="text-sm">{{ s.name }}</span>

        </div>

      </div>

    </div>

  </section>

</template>
