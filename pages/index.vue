<script setup>
// این جادو می‌کنه
import {useReveal} from "~/composables/useReveal.ts";
import Navbar from "~/components/Navbar.vue";
import Hero from "~/components/Hero.vue";
import Skills from "~/components/Skills.vue";
import Projects from "~/components/Projects.vue";
import Footer from "~/components/Footer.vue";
import About from "~/components/About.vue";
import Testimonials from "~/components/Testimonials.vue";

useReveal('.reveal');
</script>

<template>
  <main>
    <Navbar class="reveal" />
    <Hero class="reveal" />
    <About class="reveal" />
    <Skills class="reveal" />
    <Testimonials class="reveal" />
    <Projects class="reveal" />
    <Footer class="reveal" />
  </main>
</template>
