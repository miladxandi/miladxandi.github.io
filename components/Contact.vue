<script setup lang="ts">
const { t } = useI18n()
</script>

<template>

  <section id="contact" class="py-24 bg-slate-900">

    <div class="max-w-xl mx-auto text-center px-6">

      <h2 class="text-3xl font-bold mb-6">
        {{ t('contact.title') }}
      </h2>

      <p class="text-slate-400 mb-10">
        {{ t('contact.subtitle') }}
      </p>

      <div class="space-y-4">

        <a
            href="mailto:info@miladzandi.ir"
            class="block bg-teal-500 py-3 rounded-lg hover:bg-teal-600 transition"
        >

          {{ t('contact.email') }}

        </a>

        <a
            href="https://t.me/milad_xandi"
            target="_blank"
            class="block border border-white/20 py-3 rounded-lg hover:bg-white/10 transition"
        >

          {{ t('contact.telegram') }}

        </a>

      </div>

    </div>

  </section>

</template>
