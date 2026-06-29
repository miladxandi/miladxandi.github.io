<script setup lang="ts">

const { t } = useI18n()

const year = new Date().getFullYear()

</script>

<template>

  <footer class="border-t border-white/10 py-10">

    <div class="max-w-6xl mx-auto px-6 text-center">

      <img
          src="/images/logo.jpg"
          class="w-12 mx-auto mb-4 rounded-lg"
      />

      <p class="text-sm text-slate-400">

        {{ t('footer.copyright',{year}) }}

      </p>

      <div class="flex justify-center gap-6 mt-4 text-xl">

        <a
            href="https://github.com/miladxandi"
            target="_blank"
            class="hover:text-teal-400 transition"
        >
          <Icon name="mdi:github"/>
        </a>

        <a
            href="https://t.me/milad_xandi"
            target="_blank"
            class="hover:text-teal-400 transition"
        >
          <Icon name="mdi:telegram"/>
        </a>

        <a
            href="https://linkedin.com/in/miladxandi"
            target="_blank"
            class="hover:text-teal-400 transition"
        >
          <Icon name="mdi:linkedin"/>
        </a>

      </div>

    </div>

  </footer>

</template>
