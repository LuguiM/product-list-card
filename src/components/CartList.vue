<template>
  <v-card
    elevation="0"
    class="bg-rose-50 pa-5 position-sticky top-0"
    rounded="lg"
    position="sticky"
  >
    <v-card-title class="text-red font-weight-bold"
      >Your Cart ({{ totalUnits }})</v-card-title
    >

    <div
      v-if="cart.length === 0"
      class="d-flex flex-column justify-center align-center"
    >
      <Image img="/assets/images/illustration-empty-cart.svg" width="120" />
      <p class="text-rose-500 font-weight-bold text-caption">
        Your added itmes will appear here
      </p>
    </div>
    <div v-else class="d-flex flex-column ga-3">
      <CartItem v-for="item in cartItem" :name="item.name" />
    </div>
  </v-card>
</template>

<script setup>
import { ref, watch, computed } from "vue";
import CartItem from "./CartItem.vue";
import Image from "./Image.vue";
import useDesserts from "@/helpers/useDesserts";
import { useDessert } from "@/store/useDessert";
import { storeToRefs } from "pinia";

const desssertStore = useDessert();
const { cart } = storeToRefs(desssertStore);

const cartItem = ref(cart);

const totalUnits = computed(() =>
  cart.value.reduce((sum, item) => sum + item.unit, 0)
);

watch(
  () => cart,
  (newVal) => {
    cartItem.value = newVal;
  }
);
</script>
