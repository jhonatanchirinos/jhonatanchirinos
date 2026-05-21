<script setup>
import ProjectCard from "./ProjectCard.vue";
import { projects } from "../data/projects";
</script>

<template>
  <section class="min-h-screen px-4 sm:px-6 lg:px-8 pb-10">
    <h2 id="proyectos" class="text-4xl sm:text-5xl md:text-6xl text-white text-center mb-20 scroll-mt-20">
      PROYECTOS
    </h2>

    <!-- COMPONENTE PROYECTO -->
    <div class="max-w-7xl mx-auto grid md:grid-cols-1 gap-5">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="project.title"
        v-bind="project"
        :index="index"
      />
    </div>
  </section>
</template>
