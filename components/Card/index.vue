<script setup lang="ts">
import type { ApiData } from "~/utils/services/type";
import "./index.css";

defineProps<{ ebook: ApiData }>();
</script>

<template>
  <div class="card_element">
    <div>
      <img
        v-bind:src="ebook.volumeInfo.imageLinks.smallThumbnail"
        v-bind:alt="ebook.volumeInfo.title"
        v-if="ebook.volumeInfo.imageLinks?.smallThumbnail"
      />
      <p :style="{ fontSize: '22px', fontWeight: 'bold' }" v-else>?</p>
    </div>
    <div>
      <p v-if="ebook.volumeInfo.authors?.length">
        {{ ebook.volumeInfo.authors[0] }}
      </p>
      <p v-else>...</p>
    </div>
    <div>
      <p v-if="ebook.volumeInfo.title">{{ ebook.volumeInfo.title }}</p>
      <p v-else>...</p>
    </div>
    <div>
      <p v-if="ebook.volumeInfo.categories">
        {{ ebook.volumeInfo.categories[0] }}
      </p>
      <p v-else>...</p>
    </div>
    <div>
      <a
        v-bind:href="ebook.saleInfo.buyLink"
        target="_blank"
        :style="!ebook.saleInfo.buyLink && { opacity: 0.5 }"
        >Acheter</a
      >
    </div>
  </div>
</template>
