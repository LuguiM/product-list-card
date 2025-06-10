<template>
  <div class="d-flex justify-space-between text-rose-900 py-3 border-b">
    <div class="d-flex ga-2 align-center">
      <Image v-if="ConfirmOrder" :img="item.image" preview width="60" />
      <div>
        <p>
          {{ item.name }}
        </p>

        <div class="d-flex ga-3 text-caption">
          <span class="text-red font-weight-bold"
            >x{{ item.selectedUnit }}</span
          >
          <span class="text-rose-400">@ ${{ item.productPrice }}</span>
          <span v-if="!ConfirmOrder" class="font-weight-bold"
            >${{ item.totalPrice }}</span
          >
        </div>
      </div>
    </div>

    <p v-if="ConfirmOrder" class="font-weight-bold">${{ item.totalPrice }}</p>

    <v-btn
      v-else
      @click="desssertStore.deleteDessert(item.name)"
      rounded="xl"
      variant="outlined"
      icon
      density="compact"
      class="border-rose-50"
      base-color="rose-300"
    >
      <img src="/assets/images/icon-remove-item.svg" alt="add cart" />
      <template #append></template>
    </v-btn>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useDessert } from "@/store/useDessert";
import Image from "./Image.vue";

const props = defineProps({
  name: String,
  ConfirmOrder: {
    type: Boolean,
    default: false,
  },
});

const desssertStore = useDessert();

const item = computed(() => desssertStore.getTotalForProduct(props.name));
</script>
