<script setup>
import HomeView from "./views/HomeView.vue";
import SidebarLeft from "./components/SidebarLeft.vue";
import SidebarRight from "./components/SidebarRight.vue";
</script>

<template>
  <div class="flex min-h-screen portfolio-bg">
    <!-- ================= NAVBAR IZQUIERDO ================= -->
    <SidebarLeft />

    <!-- ================= CONTENIDO CENTRAL ================= -->
    <main class="flex-1 px-6">
      <!-- CONTENEDOR LIMITADO -->
      <div class="max-w-6xl mx-auto">
        <HomeView />
      </div>
    </main>

    <!-- ================= NAVBAR DERECHO ================= -->
    <SidebarRight />
  </div>
</template>

<style>
/* Fondo cuadriculado */
.portfolio-bg {
  background-color: #0f172a;
  background-image:
    linear-gradient(to right, rgba(255, 255, 255, 0.025) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
  background-size: 40px 40px;
}
</style>
