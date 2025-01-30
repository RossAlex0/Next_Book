<script setup lang="ts">
import { DataContext } from "#components";
</script>

<template>
  <main>
    <DataContext>
      <NuxtPage />
    </DataContext>
  </main>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
main {
  height: 100vh;
  width: 100vw;
  padding: 1.5rem;
  display: flex;
  flex-direction: raw;
  gap: 2rem;
  background-color: #e6e6e6;

  & * {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
}
</style>
