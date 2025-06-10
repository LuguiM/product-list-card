<template>
  <v-card
    elevation="0"
    class="bg-rose-50 pa-5 position-sticky top-0"
    rounded="lg"
    position="sticky"
  >
    <v-card-title class="text-red font-weight-bold"
      >Your Cart ({{ desssertStore.totalUnits }})</v-card-title
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
      <div class="overflow-y-auto cartItemsContainer">
        <CartItem v-for="item in cartItem" :name="item.name" />
      </div>

      <div class="text-rose-900 my-3 d-flex justify-space-between align-center">
        <p class="text-caption">Order Total</p>
        <p class="font-weight-bold text-h6">${{ desssertStore.cartTotal }}</p>
      </div>

      <v-sheet color="rose-100" rounded="lg" class="pa-5 d-flex align-center justify-center ga-3">
        <div>
          <Image img="/assets/images/icon-carbon-neutral.svg" width="25" height="25" :cover="false" />
        </div>
       <p class="text-rose-900 text-caption">This is a <span class="font-weight-bold">carbon-neutral</span> delivery</p>
      </v-sheet>

      <ConfirmOrder />
    </div>
  </v-card>
</template>

<script setup>
import { ref, watch } from "vue";
import CartItem from "./CartItem.vue";
import Image from "./Image.vue";
import { useDessert } from "@/store/useDessert";
import { storeToRefs } from "pinia";
import ConfirmOrder from "./ConfirmOrder.vue";

const desssertStore = useDessert();
const { cart } = storeToRefs(desssertStore);

const cartItem = ref(cart);

watch(
  () => cart,
  (newVal) => {
    cartItem.value = newVal;
  }
);
</script>
<style>
.cartItemsContainer {
  height: 100%;
  max-height: 20rem;
}
</style>
