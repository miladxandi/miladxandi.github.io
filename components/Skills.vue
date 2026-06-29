<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// یک فلگ برای شبیه‌سازی یا مدیریت وضعیت لودینگ
const isPending = ref(true)

const skills = [
  { name: "Nuxt", icon: "simple-icons:nuxtdotjs" },
  { name: "Laravel", icon: "simple-icons:laravel" },
  { name: ".NET", icon: "simple-icons:dotnet" },
  { name: "Unity", icon: "simple-icons:unity" },
  { name: "Tailwind", icon: "simple-icons:tailwindcss" },
  { name: "PostgreSQL", icon: "simple-icons:postgresql" }
]

onMounted(() => {
  // اینجا می‌تونی صبر کنی تا آیکون‌ها لود بشن یا اگر دیتا از API میاد فلگ رو عوض کنی
  // برای تست فعلاً یک تایمر ۱.۵ ثانیه‌ای می‌ذاریم
  setTimeout(() => {
    isPending.value = false
  }, 1500)
})
</script>

<template>
  <section id="skills" class="py-24">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="text-3xl font-bold mb-14 text-text-main">
        {{ t('skills.title') }}
      </h2>

      <div class="grid grid-cols-3 md:grid-cols-6 gap-10 text-center">
        <!-- نمایش Skeleton ها -->
        <template v-if="isPending">
          <div
              v-for="n in 6"
              :key="n"
              class="flex flex-col items-center gap-3"
          >
            <!-- دایره اسکلتون برای آیکون -->
            <div class="skeleton w-12 h-12 rounded-full"></div>
            <!-- مستطیل اسکلتون برای نام -->
            <div class="skeleton h-3 w-16 rounded-md"></div>
          </div>
        </template>

        <!-- نمایش دیتای اصلی -->
        <template v-else>
          <div
              v-for="s in skills"
              :key="s.name"
              class="flex flex-col items-center gap-3 opacity-70 hover:opacity-100 transition-all duration-300 transform hover:scale-110"
          >
            <Icon :name="s.icon" class="text-4xl text-teal-400" />
            <span class="text-sm font-medium">{{ s.name }}</span>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* انیمیشن Shimmer که توی پروژه مشترک استفاده می‌کنیم */
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

/* اگر تم پروژه لایت هست، این رنگ‌ها رو استفاده کن:
.skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
}
*/

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>
