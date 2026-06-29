<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
const { t } = useI18n()

const MAX_LENGTH = 160
const COLLAPSED_HEIGHT = 280
const intervalMs = 5000

const current = ref(0)
const expandedIndex = ref<number | null>(null)
const cardHeights = ref<Record<number, number>>({})
let timer: any = null

const testimonials = [
  { name: "Sajjad.Kh", role: "Project Manager", avatar: "https://cdn.karlancer.com/assets/icons/images/user.svg", text: t('testimonials.t1') },
  { name: "Fereydon.Ah", role: "Project Manager", avatar: "https://cdn.karlancer.com/assets/icons/images/user.svg", text: t('testimonials.t2') },
  { name: "Reza.M", role: "Project Owner", avatar: "https://www.karlancer.com/f/avatar/1718444320-JBvK.jpg", text: t('testimonials.t3') },
  { name: "Hossein.Sh", role: "Project Owner", avatar: "https://www.karlancer.com/f/avatar/1710082261ACg8ocJMQP-oJ4cBO_6zIjcZ--zceWSs7TDdGl87jASlueKk=s96-c", text: t('testimonials.t4') },
  { name: "Mehran.Ra", role: "Product Manager", avatar: "https://www.karlancer.com/f/avatar/1704554554-q1dz.png", text: t('testimonials.t5') },
  { name: "Ali.Sa", role: "CEO", avatar: "https://xandi-interactives.s3.ir-thr-at1.arvanstorage.ir/persons/ali_sadeghi.jpg", text: t('testimonials.t6') },
  { name: "Mehran.Za", role: "CEO", avatar: "https://xandi-interactives.s3.ir-thr-at1.arvanstorage.ir/persons/mehran_zandi.jpg", text: t('testimonials.t7') }
]

const trimText = (text: string) =>
    text.length > MAX_LENGTH ? text.slice(0, MAX_LENGTH) + "..." : text

const next = () => {
  current.value = (current.value + 1) % testimonials.length
}

const pauseSlider = () => clearInterval(timer)
const resumeSlider = () => timer = setInterval(next, intervalMs)

const expandCard = async (index: number) => {
  expandedIndex.value = index
  pauseSlider()
  await nextTick()

  const el = document.getElementById(`card-${index}`)
  if (el) {
    cardHeights.value[index] = el.scrollHeight
  }
}

const collapseCard = () => {
  expandedIndex.value = null
  resumeSlider()
}

onMounted(() => {
  timer = setInterval(next, intervalMs)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<template>
  <section id="testimonials" class="py-24 bg-slate-100 dark:bg-slate-900 relative overflow-hidden">
    <div class="container mx-auto px-6">

      <h2 class="text-3xl md:text-4xl font-bold text-center mb-16">
        {{ t('testimonials.title') }}
      </h2>

      <div class="grid md:grid-cols-3 gap-8 items-start transition-all duration-500"
           :class="expandedIndex !== null ? 'blur-sm scale-[0.98] opacity-60' : ''">

        <div
            v-for="(item, i) in testimonials"
            :key="i"
            :id="`card-${i}`"
            @mouseenter="expandCard(i)"
            @mouseleave="collapseCard"
            @click.stop="expandCard(i)"
            class="relative bg-white dark:bg-slate-800 p-8 rounded-2xl
               shadow-lg transition-all duration-500 ease-[cubic-bezier(.4,0,.2,1)]
               flex flex-col justify-between cursor-pointer overflow-hidden"
            :style="{
          height: expandedIndex === i
            ? cardHeights[i] + 'px'
            : COLLAPSED_HEIGHT + 'px'
        }"
        >

          <p class="text-slate-600 dark:text-slate-300 leading-relaxed">
            “{{ expandedIndex === i ? item.text : trimText(item.text) }}”
          </p>

          <div class="flex items-center gap-4 mt-6">
            <img :src="item.avatar"
                 :alt="item.name"
                 class="w-12 h-12 rounded-full object-cover" />

            <div>
              <div class="font-semibold">{{ item.name }}</div>
              <div class="text-sm text-slate-500">{{ item.role }}</div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

