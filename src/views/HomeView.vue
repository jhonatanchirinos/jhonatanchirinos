<script setup>
import { ref, onMounted } from "vue";
import FloatingIcons from "../components/FloatingIcons.vue";

import ProjectCard from "../components/ProjectCard.vue";
import gb_preview from "@/assets/project-previews/gb_preview.png";
import peloteada_preview from "@/assets/project-previews/peloteada_preview.png";
import pokeapp_preview from "@/assets/project-previews/pokeapp_preview.png";

const palabras = [
  "Clean",
  "Modern",
  "Fast",
  "Scalable",
  "Responsive",
  "Elegant",
];

const projects = [
  {
    title: "GunBound Info",
    image: gb_preview,
    description:
      "Proyecto web que contiene información sobre el juego GunBound",
    url: "https://gunbound-info.vercel.app/emotes",
    technologies: [
      "devicon-vuejs-plain",
      "devicon-javascript-plain",
      "devicon-tailwindcss-plain",
    ],
  },
  {
    title: "Peloteada Chirinos",
    image: peloteada_preview,
    description:
      "Proyecto web para crear alineaciones de fútbol 6vs6.",
    url: "https://peloteada-chirinos.vercel.app/",
    technologies: [
      "devicon-vuejs-plain",
      "devicon-javascript-plain",
      "devicon-tailwindcss-plain",
    ],
  },
  {
    title: "Pokébuscador",
    image: pokeapp_preview,
    description:
      "Proyecto web para buscar Pokémon por nombre y por tipos utilizando PokéAPI.",
    url: "https://buscadordepokemon.vercel.app/",
    technologies: [
      "devicon-react-original",
      "devicon-javascript-plain",
      "devicon-tailwindcss-plain",
    ],
  },
];

const textoActual = ref("");
const indicePalabra = ref(0);
const indiceLetra = ref(0);
const escribiendo = ref(true);

const velocidadEscritura = 80;
const velocidadBorrado = 50;
const pausaEntrePalabras = 1200;

function animarTexto() {
  const palabra = palabras[indicePalabra.value];

  if (escribiendo.value) {
    // ESCRIBIENDO
    if (indiceLetra.value < palabra.length) {
      textoActual.value += palabra[indiceLetra.value];
      indiceLetra.value++;
      setTimeout(animarTexto, velocidadEscritura);
    } else {
      setTimeout(() => {
        escribiendo.value = false;
        animarTexto();
      }, pausaEntrePalabras);
    }
  } else {
    // BORRANDO
    if (indiceLetra.value > 0) {
      textoActual.value = palabra.substring(0, indiceLetra.value - 1);
      indiceLetra.value--;
      setTimeout(animarTexto, velocidadBorrado);
    } else {
      escribiendo.value = true;
      indicePalabra.value = (indicePalabra.value + 1) % palabras.length;
      setTimeout(animarTexto, velocidadEscritura);
    }
  }
}

onMounted(() => {
  animarTexto();
});
</script>

<template>
  <div class="min-h-screen">
    <!-- ================= LANDING PAGE ================= -->
    <section
      id="landing"
      class="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <!-- CONTENEDOR PADRE -->
      <div
        class="flex items-center justify-center relative w-fit p-6 sm:p-8 md:p-10"
      >
        <!-- ICONOS FLOTANTES -->
        <div class="absolute inset-0 pointer-events-none">
          <FloatingIcons />
        </div>

        <!-- CONTENIDO -->
        <div class="relative">
          <div class="max-w-4xl mx-auto text-center">
            <h1
              class="text-5xl sm:text-6xl md:text-7xl 2xl:text-8xl text-white leading-none"
            >
              JHONATAN
            </h1>

            <h1
              class="text-5xl sm:text-6xl md:text-7xl 2xl:text-8xl text-white leading-none ml-6 sm:ml-10 md:ml-24"
            >
              CHIRINOS
            </h1>

            <p
              class="mt-10 text-lg sm:text-xl md:text-2xl tracking-[0.3em] text-blue-500"
            >
              FRONTEND DEVELOPER
            </p>

            <p
              class="mt-8 text-lg sm:text-xl md:text-2xl text-slate-300 max-w-2xl leading-relaxed"
            >
              Diseño y desarrollo interfaces modernas, estructuradas y
              visualmente sólidas enfocadas en experiencia y escalabilidad.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= PROYECTOS ================= -->
    <section class="min-h-screen px-4 sm:px-6 lg:px-8 pb-10">
      <h2
        id="proyectos"
        class="text-4xl sm:text-5xl md:text-6xl text-white text-center mb-20 scroll-mt-20"
      >
        PROYECTOS
      </h2>

      <!-- COMPONENTE PROYECTO -->
      <div class="max-w-6xl mx-auto grid md:grid-cols-1 gap-5">
        <ProjectCard
          v-for="(project, index) in projects"
          :key="project.title"
          v-bind="project"
          :index="index"
        />
      </div>
    </section>
  </div>
</template>

<style scoped></style>
