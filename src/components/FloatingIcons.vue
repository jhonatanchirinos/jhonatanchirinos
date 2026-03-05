<script setup>
import { ref, onMounted } from "vue";

const icons = [
  "devicon-javascript-plain colored",
  "devicon-typescript-plain colored",
  "devicon-html5-plain colored",
  "devicon-css3-plain colored",
  "devicon-vuejs-plain colored",
  "devicon-react-original colored",
  "devicon-nuxtjs-plain colored",
  "devicon-nextjs-original colored",
  "devicon-tailwindcss-plain colored",
  "devicon-bootstrap-plain colored",
  "devicon-vitejs-plain colored",
  "devicon-git-plain colored",
  "devicon-github-original colored",
  "devicon-nodejs-plain colored",
  "devicon-express-original colored",
  "devicon-mongodb-plain colored",
  "devicon-mysql-plain colored",
  "devicon-vscode-plain colored",
  "devicon-figma-plain colored",
  "devicon-postman-plain colored",
  "devicon-vercel-original colored",
  "devicon-npm-original-wordmark colored",
];

const container = ref(null);

const speed = 0.8;
const icon_size = 80;
const spawn_margin = 120;

const positions = ref([]);

function spawn(rect) {
  const side = Math.floor(Math.random() * 4);

  let x, y;

  if (side === 0) {
    x = Math.random() * rect.width;
    y = -spawn_margin;
  } else if (side === 1) {
    x = rect.width + spawn_margin;
    y = Math.random() * rect.height;
  } else if (side === 2) {
    x = Math.random() * rect.width;
    y = rect.height + spawn_margin;
  } else {
    x = -spawn_margin;
    y = Math.random() * rect.height;
  }

  const angle = Math.random() * Math.PI * 2;

  return {
    x,
    y,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    opacity: 0,
  };
}

onMounted(() => {
  const rect = container.value.getBoundingClientRect();

  positions.value = icons.map(() => spawn(rect));

  const animate = () => {
    const rect = container.value.getBoundingClientRect();

    positions.value.forEach((p, i) => {
      p.x += p.vx;
      p.y += p.vy;

      const inside =
        p.x > -icon_size &&
        p.x < rect.width &&
        p.y > -icon_size &&
        p.y < rect.height;

      // fade
      if (inside) {
        p.opacity = Math.min(0.35, p.opacity + 0.01);
      } else {
        p.opacity = Math.max(0, p.opacity - 0.01);
      }

      // respawn
      if (
        p.x < -spawn_margin ||
        p.x > rect.width + spawn_margin ||
        p.y < -spawn_margin ||
        p.y > rect.height + spawn_margin
      ) {
        positions.value[i] = spawn(rect);
      }
    });

    requestAnimationFrame(animate);
  };

  animate();
});
</script>

<template>
  <div
    ref="container"
    class="w-full h-full relative pointer-events-none overflow-visible"
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

<style scoped></style>
