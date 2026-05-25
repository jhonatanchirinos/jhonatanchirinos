<script setup>
import { socialLinks } from "../data/socials";
import IconGithub from "../components/icons/IconGithub.vue";
import IconLinkedin from "../components/icons/IconLinkedin.vue";
import IconMail from "../components/icons/IconMail.vue";
</script>

<template>
  <aside
    class="static 2xl:fixed 2xl:left-0 2xl:top-0 h-auto 2xl:h-screen w-full 2xl:w-60 flex items-center justify-center 2xl:justify-between px-4 sm:px-6 2xl:px-8 pt-8 pb-24 2xl:py-10"
  >
    <nav
      class="flex flex-row 2xl:flex-col items-center gap-10 text-2xl 2xl:pl-7"
    >
      <a :href="socialLinks.github" target="_blank" class="nav-social">
        <IconGithub />
      </a>

      <a :href="socialLinks.linkedin" target="_blank" class="nav-social">
        <IconLinkedin />
      </a>

      <a :href="socialLinks.email" class="nav-social">
        <IconMail />
      </a>
    </nav>
  </aside>
</template>

