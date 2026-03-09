<script setup>
import { ref, onMounted } from "vue";
import FloatingIcons from "../components/FloatingIcons.vue";

import ProjectCard from "../components/ProjectCard.vue";
import gb_preview from "@/assets/project-previews/gb_preview.png";
import netflixPreview from "@/assets/project-previews/netflix_preview.jpg";
import peloteada_preview from "@/assets/project-previews/peloteada_preview.png";

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
    title: "GunBound",
    image: gb_preview,
    description:
      "Sitio web que aloja información de los emotes y móviles del juego GunBound.",
    url: "https://gunbound-weld.vercel.app/emotes",
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
      "Sitio web para organizar y gestionar partidos de fútbol de la familia Chirinos.",
    url: "https://peloteada-chirinos.vercel.app/",
    technologies: [
      "devicon-react-original",
      "devicon-css3-plain",
      "devicon-sass-original",
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
    <!-- GRID PRINCIPAL 3 COLUMNAS -->
    <div>
      <!-- ================= LANDING PAGE ================= -->
      <section
        id="landing"
        class="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <!-- CONTENEDOR PADRE -->
        <div class="flex items-center justify-center relative w-fit p-10">
          <!-- ICONOS FLOTANTES -->
          <div class="absolute inset-0 pointer-events-none">
            <FloatingIcons />
          </div>

          <!-- CONTENIDO -->
          <div class="relative">
            <div class="max-w-3xl mx-auto text-left">
              <h1 class="text-7xl md:text-9xl text-white leading-none">
                JHONATAN
              </h1>

              <h1
                class="text-7xl md:text-9xl text-white leading-none ml-12 md:ml-24"
              >
                CHIRINOS
              </h1>

              <p
                class="mt-10 text-xl md:text-2xl tracking-[0.3em] text-blue-500"
              >
                FRONTEND DEVELOPER
              </p>

              <p
                class="mt-8 text-xl md:text-2xl text-slate-300 max-w-2xl leading-relaxed"
              >
                Diseño y desarrollo interfaces modernas, estructuradas y
                visualmente sólidas enfocadas en experiencia y escalabilidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- ================= PROYECTOS ================= -->
      <section class="min-h-screen px-6 pb-10">
        <h2
          id="proyectos"
          class="text-6xl text-white text-center mb-20 scroll-mt-20"
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
  </div>
</template>

<style scoped></style>
