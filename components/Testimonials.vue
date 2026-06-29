<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
const { t } = useI18n()

const MAX_LENGTH = 160
const intervalMs = 5000

const activeCard = ref<number | null>(null)
let timer: any = null

const testimonials = [
  { name: "Sajjad.Kh", role: "Project Manager", avatar: "https://xandi-interactives.s3.ir-thr-at1.arvanstorage.ir/persons/avatar.jpg", text: t('testimonials.t1') },
  { name: "Fereydon.Ah", role: "Project Manager", avatar: "https://xandi-interactives.s3.ir-thr-at1.arvanstorage.ir/persons/avatar.jpg", text: t('testimonials.t2') },
  { name: "Reza.M", role: "Project Owner", avatar: "https://xandi-interactives.s3.ir-thr-at1.arvanstorage.ir/persons/reza_mohammadi.jpg", text: t('testimonials.t3') },
  { name: "Hossein.Sh", role: "Project Owner", avatar: "https://xandi-interactives.s3.ir-thr-at1.arvanstorage.ir/persons/hossein_shahmohammadi.jpg", text: t('testimonials.t4') },
  { name: "Mehran.Ra", role: "Product Manager", avatar: "https://xandi-interactives.s3.ir-thr-at1.arvanstorage.ir/persons/mehran_rahmani.jpg", text: t('testimonials.t5') },
  { name: "Ali.Sa", role: "CEO", avatar: "https://xandi-interactives.s3.ir-thr-at1.arvanstorage.ir/persons/ali_sadeghi.jpg", text: t('testimonials.t6') },
  { name: "Mehran.Za", role: "CEO", avatar: "https://xandi-interactives.s3.ir-thr-at1.arvanstorage.ir/persons/mehran_zandi.jpg", text: t('testimonials.t7') }
]

const trimText = (text: string) =>
    text.length > MAX_LENGTH ? text.slice(0, MAX_LENGTH) + "..." : text

const pauseSlider = () => clearInterval(timer)
const resumeSlider = () => timer = setInterval(nextSlide, intervalMs)

const nextSlide = () => {
  // اینجا اگر خواستی auto slide واقعی اضافه کنیم
}

const openCard = (index: number) => {
  activeCard.value = index
  pauseSlider()
}

const closeCard = () => {
  activeCard.value = null
  resumeSlider()
}

const handleEsc = (e: KeyboardEvent) => {
  if (e.key === "Escape") closeCard()
}

onMounted(() => {
  timer = setInterval(nextSlide, intervalMs)
  window.addEventListener("keydown", handleEsc)
})

onUnmounted(() => {
  clearInterval(timer)
  window.removeEventListener("keydown", handleEsc)
})
</script>

<template>
  <section id="testimonials" class="py-24 bg-slate-100 dark:bg-slate-900 relative">

    <div class="container mx-auto px-6">

      <h2 class="text-3xl md:text-4xl font-bold text-center mb-16">
        {{ t('testimonials.title') }}
      </h2>

      <!-- Grid -->
      <div
          class="grid md:grid-cols-3 gap-8 transition-all duration-500"
          :class="activeCard !== null ? 'blur-sm scale-[0.98] opacity-60 pointer-events-none' : ''"
      >

        <div
            v-for="(item,i) in testimonials"
            :key="i"
            @click="openCard(i)"
            class="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg
               min-h-[260px] flex flex-col justify-between
               cursor-pointer hover:-translate-y-2
               transition-all duration-300"
        >

          <p class="text-slate-600 dark:text-slate-300 leading-relaxed">
            “{{ trimText(item.text) }}”
          </p>

          <div class="flex items-center gap-4 mt-6">
            <img
                :src="item.avatar"
                :alt="item.name"
                class="w-12 h-12 rounded-full object-cover"
            />

            <div>
              <div class="font-semibold">
                {{ item.name }}
              </div>
              <div class="text-sm text-slate-500">
                {{ item.role }}
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>

    <!-- Overlay Modal -->
    <transition name="modal">
      <div
          v-if="activeCard !== null"
          class="fixed inset-0 z-50 flex items-center justify-center
             bg-black/40 backdrop-blur-sm px-6"
          @click="closeCard"
      >

        <div
            @click.stop
            class="bg-white dark:bg-slate-800 p-10 rounded-2xl
               shadow-2xl max-w-2xl w-full
               transition-all duration-500 ease-[cubic-bezier(.4,0,.2,1)]"
        >

          <p class="text-slate-700 dark:text-slate-200 leading-relaxed text-lg">
            “{{ testimonials[activeCard].text }}”
          </p>

          <div class="flex items-center gap-4 mt-10">
            <img
                :src="testimonials[activeCard].avatar"
                class="w-16 h-16 rounded-full object-cover"
            />

            <div>
              <div class="font-semibold text-lg">
                {{ testimonials[activeCard].name }}
              </div>
              <div class="text-sm text-slate-500">
                {{ testimonials[activeCard].role }}
              </div>
            </div>
          </div>

        </div>

      </div>
    </transition>

  </section>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: all .35s cubic-bezier(.4,0,.2,1);
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(.9);
}
</style>
