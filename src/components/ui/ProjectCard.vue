<script setup>
import { ref, onMounted, onUnmounted } from "vue";

defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "Sin descripción",
  },
  technologies: {
    type: Array,
    default: () => [],
  },
  image: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    default: "#",
  },
  index: {
    type: Number,
    required: true,
  },
});

const titleRef = ref(null);
const underlineWidth = ref("100%");

function updateUnderlineWidth() {
  if (!titleRef.value) return;
  const range = document.createRange();
  range.selectNodeContents(titleRef.value);
  const rects = range.getClientRects();
  if (!rects.length) return;
  underlineWidth.value = `${Math.ceil(Math.max(...Array.from(rects, (r) => r.width)))}px`;
}

let resizeObserver;

onMounted(() => {
  document.fonts.ready.then(updateUnderlineWidth);
  resizeObserver = new ResizeObserver(updateUnderlineWidth);
  if (titleRef.value) resizeObserver.observe(titleRef.value);
});

onUnmounted(() => resizeObserver?.disconnect());
</script>

<template>
  <div
    class="group relative flex flex-col 2xl:flex-row items-center gap-6 2xl:gap-8 px-5 sm:px-6 2xl:px-8 py-5 border-2 transition-transform duration-500 bg-blue-500/5 border-blue-500 rounded-sm w-full max-w-7xl mx-auto 2xl:hover:-translate-y-1 backdrop-blur-md"
  >
    <div
      class="flex flex-col justify-between h-full py-1 min-h-45 flex-1 min-w-0 text-center 2xl:text-left 2xl:pr-4"
    >
      <div class="flex items-center mb-6">
        <span
          class="text-xl text-blue-500 2xl:text-white sm:text-3xl 2xl:text-2xl tracking-widest group-hover:text-blue-500 transition-colors duration-300"
        >
          {{ String(index + 1).padStart(2, "0") }}
        </span>
      </div>

      <div class="flex-1 min-w-0">
        <div class="inline-block max-w-full 2xl:max-w-lg">
          <h3
            ref="titleRef"
            class="leading-none text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl tracking-[0.03em] text-white transition-colors duration-400 uppercase"
          >
            {{ title }}
          </h3>

          <div
            :style="{ width: underlineWidth }"
            class="h-1 mb-4 bg-blue-500 origin-center scale-x-100 2xl:scale-x-0 2xl:group-hover:scale-x-100 transition-transform duration-500"
          ></div>
        </div>

        <p
          class="text-slate-300 text-base sm:text-lg leading-relaxed sm:text-start max-w-xs mx-auto sm:max-w-none sm:mx-0"
        >
          {{ description }}
        </p>
      </div>

      <div class="flex gap-4 flex-wrap pt-4 justify-center">
        <div v-for="tech in technologies" :key="tech">
          <i
            :class="[
              tech,
              'text-slate-300 hover:text-blue-500 transition duration-300 text-2xl sm:text-3xl',
            ]"
          ></i>
        </div>
      </div>
    </div>

    <div
      class="hidden 2xl:block w-px self-stretch bg-blue-500 transition-colors duration-500 shrink-0"
    ></div>

    <a
      :href="url"
      target="_blank"
      rel="noopener noreferrer"
      class="block shrink-0"
    >
      <div
        class="relative overflow-hidden aspect-video w-full max-w-lg 2xl:max-w-xl rounded-sm"
      >
        <img
          :src="image"
          :alt="title + ' preview'"
          width="800"
          height="450"
          loading="lazy"
          decoding="async"
          class="w-full h-full object-cover transition-[filter,border-color] duration-500 border-2 border-blue-500 2xl:border-slate-500 2xl:brightness-[0.38] 2xl:saturate-[0.07] 2xl:group-hover:border-blue-500 2xl:group-hover:brightness-100 2xl:group-hover:saturate-100"
        />
      </div>
    </a>
  </div>
</template>
