<script setup lang="js">
import { computed } from "vue";

const props = defineProps({
  title: String,
  description: String,
  technologies: Array,
  image: String,
  url: String,
});

const slug = computed(
  () => props.title?.toLowerCase().replace(/\s+/g, "-") ?? "project",
);
</script>

<template>
  <div
    class="group relative flex items-center gap-8 cursor-pointer px-8 py-5 bg-white/10 border-2 border-white/20 transition-all duration-500 hover:bg-blue-500/5 hover:border-blue-500 rounded-sm w-full max-w-5xl mx-auto"
  >
    <!-- INFO — izquierda -->
    <div class="flex flex-col justify-between h-full py-1 min-h-45">
      <!-- Header -->
      <div class="flex items-center mb-6">
        <span
          class="text-4xl tracking-widest text-white group-hover:text-blue-500 transition-all duration-300"
        >
          {{ String(index ?? 1).padStart(2, "0") }}
        </span>
      </div>

      <!-- Núcleo -->
      <div class="flex-1">
        <h3
          class="leading-none mb-4 text-[clamp(38px,4vw,54px)] tracking-[0.03em] text-white transition-colors duration-400"
        >
          {{ title }}
        </h3>

        <div
          class="w-1/8 h-1 bg-white/20 group-hover:bg-blue-500 mb-4 group-hover:w-1/2 transition-all duration-500"
        ></div>

        <p
          class="text-slate-300 text-xl leading-relaxed max-w-xs transition-colors duration-400"
        >
          {{ description }}
        </p>
      </div>

      <!-- Tech -->
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
      class="w-px self-stretch bg-white/5 group-hover:bg-blue-500 transition-colors duration-500 shrink-0"
    ></div>

    <!-- IMAGEN -->
    <a
      :href="url"
      target="_blank"
      rel="noopener noreferrer"
      class="block group"
    >
      <div
        class="relative overflow-hidden aspect-video w-xl rounded-sm shrink-0"
      >
        <img
          :src="image"
          :alt="title + ' preview'"
          class="w-full h-full object-cover brightness-[0.38] saturate-[0.07] group-hover:brightness-100 group-hover:saturate-100 transition-all duration-900 group-hover:border-2 border-blue-500 rounded-sm"
        />

        <!-- Overlay azul -->
        <div
          class="absolute inset-0 opacity-0 bg-blue-500/5 mix-blend-color group-hover:opacity-100 transition-opacity duration-900"
        ></div>

        <!-- Shimmer -->
        <div
          class="absolute inset-0 opacity-0 pointer-events-none bg-[linear-gradient(135deg,rgba(255,255,255,0.05)_0%,transparent_50%)] group-hover:opacity-100 transition-opacity duration-700"
        ></div>

        <!-- Viñeta radial -->
        <div
          class="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(15,23,42,0.45)_100%)]"
        ></div>
      </div>
    </a>
  </div>
</template>

<style scoped></style>
