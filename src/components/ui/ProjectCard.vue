<script setup lang="js">
const props = defineProps({
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
</script>

<template>
  <div
    class="group relative flex flex-col 2xl:flex-row items-center gap-6 2xl:gap-8 px-5 sm:px-6 2xl:px-8 py-5 border-2 transition-all duration-500 bg-blue-500/5 border-blue-500 rounded-sm w-full max-w-7xl mx-auto 2xl:hover:-translate-y-1 backdrop-blur-md"
  >
    <div
      class="flex flex-col justify-between h-full py-1 min-h-45 flex-1 min-w-0 text-center 2xl:text-left 2xl:pr-4"
    >
      <div class="flex items-center mb-6">
        <span
          class="text-xl text-blue-500 2xl:text-white sm:text-3xl 2xl:text-2xl tracking-widest group-hover:text-blue-500 transition-all duration-300"
        >
          {{ String(index + 1).padStart(2, "0") }}
        </span>
      </div>

      <div class="flex-1 min-w-0">
        <div class="inline-block max-w-full">
          <h3
            class="leading-none text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl tracking-[0.03em] text-white transition-colors duration-400 uppercase"
          >
            {{ title }}
          </h3>

          <div
            class="w-full h-1 mt-0 mb-4 bg-blue-500 group-hover:bg-blue-500 origin-center scale-x-100 2xl:scale-x-0 2xl:group-hover:scale-x-100 transition-transform duration-500 2xl:mb-4 2xl:mt-0"
          ></div>
        </div>

        <p
          class="text-slate-300 text-base sm:text-lg 2xl:text-lg leading-relaxed max-w-md 2xl:max-w-xs transition-colors duration-400"
        >
          {{ description }}
        </p>
      </div>

      <div
        class="flex gap-4 flex-wrap pt-4 border-white/5 group-hover:border-blue-500/10 transition-colors duration-500 justify-center"
      >
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
          loading="lazy"
          decoding="async"
          class="w-full h-full object-cover transition-all duration-500 rounded-sm border-2 border-blue-500 2xl:border-slate-500 2xl:brightness-[0.38] 2xl:saturate-[0.07] 2xl:group-hover:border-blue-500 2xl:group-hover:brightness-100 2xl:group-hover:saturate-100"
        />
      </div>
    </a>
  </div>
</template>

<style scoped></style>
