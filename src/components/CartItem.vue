<template>
  <div class="d-flex justify-space-between text-rose-900 py-3 border-b">
    <div>
      {{ item.name }}
      <div class="d-flex ga-3 text-caption">
        <span class="text-red font-weight-bold">x{{ item.selectedUnit }}</span>
        <span class="text-rose-400">@ ${{ item.productPrice }}</span>
        <span class="font-weight-bold">${{ item.totalPrice }}</span>
      </div>
    </div>
    <v-btn
      @click="desssertStore.deleteDessert(item.name)"
      rounded="xl"
      variant="outlined"
      icon
      density="compact"
      class="border-rose-50"
      base-color="rose-300"
    >
      <img src="/assets/images/icon-remove-item.svg" alt="add cart" />
    </v-btn>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useDessert } from "@/store/useDessert";

const props = defineProps({
  name: String,
});

const desssertStore = useDessert();

const item = computed(() => desssertStore.getTotalForProduct(props.name));
</script>
