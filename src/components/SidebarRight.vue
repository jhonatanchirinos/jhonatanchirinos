<script setup>
import { navLinks } from "../data/navigation";
</script>

<template>
  <aside
    class="fixed bottom-0 left-0 w-full py-6 2xl:right-0 2xl:left-auto 2xl:top-0 2xl:h-screen 2xl:w-60 px-8 2xl:py-10 border-slate-800 backdrop-blur-xl bg-slate-900/40 border-t border-white/10 2xl:backdrop-blur-none 2xl:bg-transparent 2xl:border-none 2xl:flex 2xl:items-center 2xl:justify-center"
  >
    <nav
      class="relative flex items-center justify-around h-full 2xl:flex-col 2xl:items-start 2xl:justify-center gap-7 2xl:gap-5"
    >
      <!-- LOGO -->
      <a
        href="#landing"
        class="text-4xl sm:text-5xl 2xl:text-7xl font-bold tracking-widest text-blue-500 order-2 2xl:order-1 2xl:absolute 2xl:top-0 2xl:left-1/2 2xl:-translate-x-1/2"
      >
        JH.
      </a>

      <!-- LINKS -->
      <a
        v-for="link in navLinks"
        :key="link.name"
        :href="link.href"
        class="nav-section text-lg sm:text-xl 2xl:text-2xl order-1 2xl:order-2 text-white 2xl:text-slate-500"
      >
        {{ link.name }}
      </a>
    </nav>
  </aside>
</template>

<style scoped></style>
