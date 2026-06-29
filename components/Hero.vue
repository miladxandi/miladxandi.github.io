<script setup lang="ts">

const { t } = useI18n()

</script>

<template>

  <section id="home" class="min-h-screen flex items-center pt-24">

    <div class="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

      <!-- text -->

      <div>

        <p class="text-teal-400 mb-2">
          {{ t('hero.hello') }}
        </p>

        <h1 class="text-5xl font-bold mb-4">
          {{ t('hero.name') }}
        </h1>

        <p class="text-lg text-slate-400 mb-6">
          {{ t('hero.title') }}
        </p>

        <p class="text-slate-400 max-w-xl mb-8">
          {{ t('hero.description') }}
        </p>

        <div class="flex gap-4">

          <a
              href="#contact"
              class="bg-teal-500 px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 transition"
          >
            {{ t('hero.contact') }}
          </a>

          <a
              href="#projects"
              class="border border-white/20 px-6 py-3 rounded-lg hover:bg-white/10 transition"
          >
            {{ t('hero.projects') }}
          </a>

        </div>

      </div>


      <!-- image -->

      <div class="space-y-6">

        <NuxtImg src="/images/formal.jpg"
                 class="rounded-2xl shadow-xl"
                 :alt="t('nav.name')"/>

      </div>

    </div>

  </section>

</template>
