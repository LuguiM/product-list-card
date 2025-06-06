<template>
  <v-card class="d-flex flex-column" variant="text">
    <div
      class="position-relative"
      :class="
        active
          ? 'rounded-lg border-md border-red border-opacity-100'
          : undefined
      "
    >
      <Image :img="product?.image" />
      <AddCardBtn
        :cantidad="unit"
        v-model:shopActive="active"
        class="position-absolute bottom-center m-2"
        :quit-product="deleteProduct"
        :add-cart="addProduct"
      />
    </div>

    <p class="text-caption text-rose-400 mt-4">{{ product?.category }}</p>
    <div class="flex text-body-2 font-weight-medium">
      <p class="text-rose-900">{{ product?.name }}</p>
      <p class="text-red">${{ product?.price }}</p>
    </div>
  </v-card>
</template>

<script setup>
import { ref, watch, computed } from "vue";
import AddCardBtn from "./AddCardBtn.vue";
import Image from "./Image.vue";
import useDesserts from "@/helpers/useDesserts.js";

const props = defineProps({
  product: {
    type: [Object, Array],
  },
  addProduct: Function,
  deleteProduct: Function,
});

const { getUnitFromCart } = useDesserts();

const unit = computed(() => getUnitFromCart(props.product.name));
const active = ref(false);

watch(unit, (newVal) => {
  active.value = newVal > 0;
}, {immediate: true});
</script>

<style scoped>
.position-relative {
  position: relative;
}

.position-absolute {
  position: absolute;
}

.bottom-center {
  bottom: -1rem;
  left: 50%;
  transform: translateX(-50%);
}
</style>
