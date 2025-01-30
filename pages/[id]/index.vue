<script setup lang="ts">
import { getBookById } from "~/utils/services/request";
import type { ApiIdResponse } from "~/utils/services/type";

const { params } = useRoute();
const ebook: Ref<ApiIdResponse | undefined> = ref();

onMounted(async () => {
  if (params) {
    ebook.value = await getBookById(params.id as string);
  }
});
</script>
<template>
  <section class="desc_container">
    <NuxtLink to="/" class="back">Retour</NuxtLink>
    <div class="element" v-if="ebook">
      <div class="desc_header">
        <img :src="ebook.data.volumeInfo.imageLinks?.thumbnail" alt="jo" />
        <div>
          <h1>{{ ebook?.data.volumeInfo.title }}</h1>
          <p v-for="author in ebook.data.volumeInfo.authors">{{ author }}</p>
        </div>
      </div>
      <div class="body_header">
        <p v-html="ebook.data.volumeInfo.description"></p>
        <p>
          Nombre de page: <i>{{ ebook.data.volumeInfo.pageCount }}</i>
        </p>
        <p>
          Publié le: <i>{{ ebook.data.volumeInfo.publishedDate }}</i>
        </p>
        <p>Catégories :</p>
        <li v-for="categorie in ebook.data.volumeInfo.categories">
          {{ categorie }}
        </li>
        <p>
          Prix:
          <span v-if="ebook.data.saleInfo.listPrice"
            ><strong>{{ ebook.data.saleInfo.listPrice?.amount }}</strong>
            {{ ebook.data.saleInfo.listPrice?.currencyCode }}</span
          >
          <span v-else>Non renseigné</span>
        </p>
        <div class="container_link">
          <a
            v-bind:href="ebook.data.saleInfo.buyLink"
            target="_blank"
            :style="!ebook.data.saleInfo.buyLink && { opacity: 0.5 }"
            class="desc_link"
            >Acheter</a
          >
        </div>
      </div>
    </div>
    <div class="element" v-else><p>Ca arrive</p></div>
  </section>
</template>

<style>
.desc_container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & .element {
    height: 80%;
    width: 70%;
    overflow: auto;
    border-radius: 48px;
    background-color: #1d1d1d;
    box-shadow: 4px 0 12px rgba(16, 16, 16, 0.3);
    padding: 2rem;

    & * {
      color: #e6e6e6c7;
    }
  }
}

.desc_header {
  display: flex;
  gap: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #e6e6e6c7;
}
.body_header {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.container_link {
  display: flex;
  width: 100%;
  align-items: center;
  & .desc_link {
    border: 1px solid rgb(27, 126, 255);
    padding: 0.3rem 0.5rem;
    color: rgb(26, 123, 249) !important;
    text-decoration: none;
    border-radius: 24px;
    font-size: 14px;
    margin-inline: auto;
  }
}
.back {
  position: absolute;
  top: 2rem;
  left: 2rem;
  color: #1d1d1d;
  border: 1px solid #1d1d1d;
  text-decoration: none;
  border-radius: 24px;
  padding: 0.3rem 1rem;
}
</style>
