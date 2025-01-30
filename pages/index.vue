<script setup lang="ts">
import type { ApiResponse } from "~/utils/services/type";

const ebooks: ApiResponse | undefined = inject("ebooks");
</script>
<template>
  <NavAside />
  <div class="home">
    <h2>Découvrer vos prochaines oeuvres littéraires !</h2>
    <section
      v-if="ebooks?.data && ebooks.data.length > 1"
      class="container_card"
    >
      <Card v-for="ebook in ebooks.data" :key="ebook.id" :ebook="ebook" />
    </section>
    <p v-else>Chargement ...</p>
  </div>
</template>

<style lang="css">
.home {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
}
.container_card {
  flex: 1;
  width: 70vw;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: scroll;
}
</style>
