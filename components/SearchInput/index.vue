<script setup lang="ts">
import type { ApiResponse } from "~/utils/services/type";
import "./index.css";
import { getEbooks } from "~/utils/services/request";

const isFocus = ref(false);

const props = defineProps({
  type: String,
});

let ebooks: any = inject("ebooks");
const inputValue = ref("");

const getEbooksByQuery = async () => {
  console.info(ebooks.value);
  const response: any = await getEbooks(props.type, inputValue.value, 40);
  console.info(response);
  ebooks.value = response;
  console.info("fin", ebooks.value);
  inputValue.value = "";
};

const focusedInput = () => {
  isFocus.value = !isFocus.value;
};
</script>
<!--  -->
<template>
  <div
    class="input_container"
    :style="isFocus && { backgroundColor: '#252525' }"
  >
    <input
      type="text"
      class="input_element"
      v-model="inputValue"
      @focus="focusedInput"
      @blur="focusedInput"
    />
    <button type="button" class="input_button" @click="getEbooksByQuery">
      <img src="/utils/assets/search.svg" />
    </button>
  </div>
</template>
