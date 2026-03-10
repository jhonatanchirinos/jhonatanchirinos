<script setup lang="js">
import { computed } from "vue";

const props = defineProps({
  title: String,
  description: String,
  technologies: Array,
  image: String,
  url: String,
  index: Number,
});

const slug = computed(
  () => props.title?.toLowerCase().replace(/\s+/g, "-") ?? "project",
);
</script>

<template>
  <div
    class="group relative flex flex-col lg:flex-row items-center gap-6 lg:gap-8 cursor-pointer px-5 sm:px-6 lg:px-8 py-5 border-2 transition-all duration-500 bg-blue-500/5 border-blue-500 rounded-sm w-full max-w-5xl mx-auto hover:-translate-y-1"
  >
    <!-- INFO  -->
    <div
      class="flex flex-col justify-between h-full py-1 min-h-45 flex-1 text-center lg:text-left"
    >
      <!-- Número -->
      <div class="flex items-center mb-6">
        <span
          class="text-xl text-blue-500 lg:text-white sm:text-3xl lg:text-4xl tracking-widest group-hover:text-blue-500 transition-all duration-300"
        >
          {{ String(index + 1).padStart(2, "0") }}
        </span>
      </div>

      <!-- Título, subrayado, descripción -->
      <div class="flex-1">
        <div class="inline-block">
          <h3
            class="leading-none text-3xl sm:text-4xl lg:text-[54px] tracking-[0.03em] text-white transition-colors duration-400"
          >
            {{ title }}
          </h3>

          <div
            class="w-full h-1 mt-0 mb-4 bg-blue-500 group-hover:bg-blue-500 origin-center scale-x-100 lg:scale-x-0 lg:group-hover:scale-x-100 transition-transform duration-500 lg:mb-4 lg:mt-0"
          ></div>
        </div>

        <p
          class="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed lg:max-w-xs transition-colors duration-400"
        >
          {{ description }}
        </p>
      </div>

      <!-- Tegnologías -->
      <div
        class="flex gap-4 flex-wrap pt-4 border-white/5 group-hover:border-blue-500/10 transition-colors duration-500 justify-center"
      >
        <div v-for="tech in technologies" :key="tech">
          <i
            :class="[
              tech,
              'text-slate-300 hover:text-blue-500 transition duration-300 text-3xl',
            ]"
          ></i>
        </div>
      </div>
    </div>

    <!-- DIVISOR -->
    <div
      class="hidden lg:blockw-px self-stretch bg-blue-500 transition-colors duration-500 shrink-0"
    ></div>

    <!-- IMAGEN -->
    <a
      :href="url"
      target="_blank"
      rel="noopener noreferrer"
      class="block group"
    >
      <div
        class="relative overflow-hidden aspect-video w-full lg:max-w-xl rounded-sm shrink-0"
      >
        <img
          :src="image"
          :alt="title + ' preview'"
          class="w-full h-full object-cover transition-all duration-500 rounded-sm border-2 border-blue-500 lg:border-slate-500 lg:brightness-[0.38] lg:saturate-[0.07] lg:group-hover:border-blue-500 lg:group-hover:brightness-100 lg:group-hover:saturate-100"
        />
      </div>
    </a>
  </div>
</template>

<style scoped></style>
