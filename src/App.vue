<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <main>
    <section>
      <RouterView/>
    </section>
  </main>
</template>

<style scoped>
main {
  display: grid;
  width: 100%;
  height: 100%;
}

section {
  position: relative;
  width: 50%;
  margin: auto;
}
</style>
