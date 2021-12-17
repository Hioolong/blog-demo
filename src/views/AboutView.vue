<script setup lang="ts">
  import GlobalCounter from '@/components/GlobalCounter.vue';
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <GlobalCounter />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
