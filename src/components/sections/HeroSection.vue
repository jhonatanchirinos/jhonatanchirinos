<script setup>
import FloatingIcons from "../ui/FloatingIcons.vue";
</script>

<template>
  <section
    id="landing"
    class="min-h-screen flex items-center justify-center relative overflow-hidden"
  >
    <div class="flex items-center justify-center relative w-fit p-6 sm:p-8 md:p-10">
      <div class="absolute inset-0 pointer-events-none">
        <FloatingIcons />
      </div>

      <div class="relative">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl sm:text-6xl md:text-7xl 2xl:text-8xl text-white leading-none">
            JHONATAN
          </h1>

          <h1 class="text-5xl sm:text-6xl md:text-7xl 2xl:text-8xl text-white leading-none ml-6 sm:ml-10 md:ml-24">
            CHIRINOS
          </h1>

          <p class="mt-10 text-lg sm:text-xl md:text-2xl tracking-[0.3em] text-blue-500">
            FRONTEND DEVELOPER
          </p>

          <p class="mt-8 text-lg sm:text-xl md:text-2xl text-slate-300 max-w-2xl leading-relaxed">
            Diseño y desarrollo interfaces modernas, estructuradas y visualmente sólidas enfocadas en experiencia y escalabilidad.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
