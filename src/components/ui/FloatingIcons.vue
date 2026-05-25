<script setup>
import { ref } from "vue";
import { icons } from "../../data/icons";
import { useFloatingAnimation } from "../../composables/useFloatingAnimation";

const container = ref(null);
const { positions } = useFloatingAnimation(container, icons);
</script>

<template>
  <div
    ref="container"
    class="w-full h-full relative pointer-events-none overflow-visible "
  >
    <div
      v-for="(icon, index) in icons"
      :key="index"
      class="absolute text-5xl md:text-8xl"
      :style="{
        transform: `translate(${positions[index]?.x}px, ${positions[index]?.y}px)`,
        opacity: positions[index]?.opacity,
      }"
    >
      <i :class="icon"></i>
    </div>
  </div>
</template>

