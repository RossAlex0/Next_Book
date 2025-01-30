<template>
  <slot></slot>
</template>
<script setup lang="ts">
import { getEbooks } from "~/utils/services/request";
import type { ApiResponse } from "~/utils/services/type";

const ebooks: Ref<ApiResponse | undefined> = ref();

onMounted(async () => {
  ebooks.value = await getEbooks();
});

provide("ebooks", ebooks);
</script>
