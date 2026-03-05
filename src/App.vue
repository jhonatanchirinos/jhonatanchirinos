<script setup>
import SidebarNavigation from "./components/SidebarNavigation.vue";
import HomeView from "./views/HomeView.vue";
</script>

<template>
  <div class="flex min-h-screen text-gray-800 relative">
    <!-- Sidebar -->
    <SidebarNavigation />

    <!-- Contenido -->
    <main
      class="flex-1 overflow-y-auto scroll-smooth bg-[repeating-linear-gradient( to_bottom, transparent, transparent_28px, rgba(0,0,0,0.04)_29px )]"
    >
      <HomeView />
    </main>
  </div>
</template>
