<script setup>
import SidebarLeft from "./SidebarLeft.vue";
import SidebarRight from "./SidebarRight.vue";
</script>

<template>
  <div class="flex flex-col 2xl:flex-row min-h-screen portfolio-bg">
    <SidebarLeft class="order-2 2xl:order-1 2xl:w-24 shrink-0 w-full" />

    <main class="flex-1 order-1 2xl:order-2 min-h-[70vh] pb-16 2xl:pb-10">
      <div class="max-w-7xl w-full mx-auto px-4 sm:px-8">
        <slot />
      </div>
    </main>

    <SidebarRight class="order-3 2xl:w-24 shrink-0 w-full" />
  </div>
</template>

<style scoped>
.portfolio-bg {
}
</style>