<script setup>
import ProjectCard from "../ui/ProjectCard.vue";
import { projects } from "../../data/projects";
</script>

<template>
  <section class="min-h-screen pb-10">
    <h2 id="proyectos" class="text-4xl sm:text-5xl md:text-6xl text-white text-center mb-20 scroll-mt-20">
      PROYECTOS
    </h2>

    <div class="grid gap-5">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="project.title"
        v-bind="project"
        :index="index"
      />
    </div>
  </section>
</template>
