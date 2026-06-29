<script setup lang="ts">
const { t } = useI18n()
</script>

<template>

  <section id="about" class="py-24">

    <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

      <NuxtImg src="/images/jungle-macbook.jpg"
               class="rounded-2xl shadow-xl"
               :alt="t('nav.name')"/>

      <div>

        <h2 class="text-3xl font-bold mb-6">
          {{ t('about.title') }}
        </h2>

        <p class="text-slate-400 mb-4">
          {{ t('about.p1') }}
        </p>

        <p class="text-slate-400 mb-8">
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
            <a href="karlancer.com/profile/43315" target="_blank" >
              <p class="text-sm text-slate-400">
                {{ t('about.stats.role') }}
              </p>
            </a>
          </div>

        </div>

      </div>

    </div>

  </section>

</template>
