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
  <div class="grid-bg min-h-screen font-inter">
    <!-- GRID PRINCIPAL 3 COLUMNAS -->
    <div>
      <!-- ================= NAVBAR IZQUIERDO ================= -->
      <aside
        class="fixed left-0 top-0 h-screen w-60 flex flex-col justify-between px-8 py-10 border-slate-800 z-20"
      >
        <!-- Espacio superior vacío -->
        <div></div>

        <!-- Redes sociales centradas -->
        <div class="flex flex-col items-start gap-6 text-2xl">
          <!-- GitHub -->
          <a
            href="https://github.com/jhonatanchirinos"
            target="_blank"
            class="text-slate-500 hover:text-blue-500 hover:scale-120 hover:-translate-y-1 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.66-.22.66-.48
      0-.24-.01-1.04-.02-1.88-2.78.62-3.37-1.22-3.37-1.22-.46-1.2-1.12-1.52-1.12-1.52
      -.92-.64.07-.63.07-.63 1.02.07 1.56 1.08 1.56 1.08 .9 1.6 2.36 1.14
      2.94.87.09-.67.35-1.14.64-1.4-2.22-.26-4.56-1.14-4.56-5.07
      0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.72 0 0 .84-.27
      2.75 1.05A9.3 9.3 0 0112 6.84c.85.004 1.7.12 2.5.35
      1.9-1.32 2.74-1.05 2.74-1.05.55 1.42.2 2.46.1 2.72
      .64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06
      .36.32.69.94.69 1.9 0 1.37-.01 2.47-.01 2.8
      0 .27.16.59.67.48A10.26 10.26 0 0022 12.26
      C22 6.58 17.52 2 12 2z"
              />
            </svg>
          </a>

          <!-- LinkedIn -->
          <a
            href="https://www.linkedin.com/in/jhonatan-chirinos/"
            target="_blank"
            class="text-slate-500 hover:text-blue-500 hover:scale-120 hover:-translate-y-1 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-12h4v2
      a4 4 0 014-2zM2 9h4v12H2z"
              />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>

          <!-- Correo / X -->
          <a
            href="mailto:jhonnych97@gmail.com"
            class="text-[#64748b] hover:text-blue-500 hover:scale-120 hover:-translate-y-1 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.8"
            >
              <rect
                x="3"
                y="5"
                width="18"
                height="14"
                rx="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3 7l9 6 9-6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>

        <!-- Espacio inferior vacío -->
        <div></div>
      </aside>

      <!-- ================= LANDING PAGE ================= -->
      <section
        id="landing"
        class="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <!-- CONTENEDOR PADRE -->
        <div class="flex items-center justify-center relative w-fit p-10">
          <!-- ICONOS FLOTANTES -->
          <div class="absolute inset-0 pointer-events-none z-0">
            <FloatingIcons />
          </div>

          <!-- CONTENIDO -->
          <div class="relative z-10">
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
      <section class="min-h-screen px-6 pb-20">
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

      <!-- ================= NAVBAR DERECHO ================= -->
      <aside
        class="fixed right-0 top-0 h-screen w-60 flex flex-col justify-between px-8 py-10 border-slate-800 z-20"
      >
        <!-- Logo -->
        <div>
          <a
            href="#landing"
            class="text-5xl font-bold tracking-widest text-blue-500"
          >
            JH.
          </a>
        </div>

        <!-- Navegación centrada verticalmente -->
        <nav class="flex flex-col gap-6 items-start text-2xl">
          <!-- <a href="#about" class="nav-link">Sobre mí</a> -->
          <!-- <a href="#skills" class="nav-link">Conocimientos</a> -->
          <a href="#proyectos" class="nav-link">Proyectos</a>
          <a href="#contact" class="nav-link">Contáctame</a>
        </nav>

        <!-- Espacio inferior vacío -->
        <div></div>
      </aside>
    </div>
  </div>
</template>

<style>
/* @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap"); */

@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Permanent+Marker&display=swap");

.font-inter {
  /* font-family: "Inter", sans-serif; */
  font-family: "Bebas Neue", sans-serif;
}

/* Fondo cuadriculado */
.grid-bg {
  background-color: #0f172a;
  background-image:
    linear-gradient(to right, rgba(255, 255, 255, 0.025) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
  background-size: 40px 40px;
}

/* Secciones */
.section {
  scroll-margin-top: 100px;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  color: #ccd6f6;
}

/* Línea decorativa */
.section-title::after {
  content: "";
  display: block;
  width: 60%;
  height: 2px;
  margin-top: 8px;
  background: linear-gradient(to right, #facc15, transparent);
}

.section-text {
  color: #94a3b8;
  line-height: 1.8;
}

/* Navbar */
.nav-link {
  /* font-size: 0.95rem; */
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #64748b;
  transition: 0.3s ease;
}

.nav-link:hover {
  color: #3b82f6; /* Tailwind's blue-500 */
  transform: translateX(4px);
}

html {
  scroll-behavior: smooth;
}
</style>
