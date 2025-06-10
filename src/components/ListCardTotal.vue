<template>
  <div class="px-4">
    <Image
      img="/assets/images/icon-order-confirmed.svg"
      alt="icon"
      height="40"
      width="40"
      :cover="false"
    />
  </div>
  <v-card-title class="text-rose-900 text-h4 text-start font-weight-bold mr-15">
    Order Confirmed
  </v-card-title>
  <v-card-subtitle class="text-rose-900 text-start"
    >We hope you enjoy your food!</v-card-subtitle
  >
  <div class="bg-rose-100 py-3 px-5 rounded my-3 text-rose-900">
    <CartItem v-for="item in cart" :name="item.name" ConfirmOrder />
    <div class="text-rose-900 my-3 d-flex justify-space-between align-center">
      <p class="text-caption">Order Total</p>
      <p class="font-weight-bold text-h6">${{ desssertStore.cartTotal }}</p>
    </div>
  </div>

  <v-btn @click="onClick" base-color="red" rounded="xl" size="large" class="text-subtitle-2"
    >Start New Order</v-btn
  >
</template>

<script setup>
import CartItem from "./CartItem.vue";
import { useDessert } from "@/store/useDessert";
import { storeToRefs } from "pinia";

const props = defineProps({
  onClick: Function
})

const desssertStore = useDessert();

const { cart } = storeToRefs(desssertStore);
</script>
