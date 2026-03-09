<script setup>
import HomeView from "./views/HomeView.vue";
import SidebarLeft from "./components/SidebarLeft.vue";
import SidebarRight from "./components/SidebarRight.vue";
</script>

<template>
  <div class="flex flex-col lg:flex-row min-h-screen portfolio-bg">
    <!-- ================= NAVBAR IZQUIERDO ================= -->
    <SidebarLeft class="order-2 lg:order-1" />

    <!-- ================= CONTENIDO CENTRAL ================= -->
    <main class="flex-1 pb-10 lg:pb-10 order-1 lg:order-2">
      <!-- CONTENEDOR LIMITADO -->
      <div class="max-w-6xl mx-auto px-6">
        <HomeView />
      </div>
    </main>

    <!-- ================= NAVBAR DERECHO ================= -->
    <SidebarRight class="order-3 lg:order-3" />
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
