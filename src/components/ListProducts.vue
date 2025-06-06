<template>
  <v-row>
    <v-col cols="12" sm="6" lg="4" v-for="dessert in desssertStore.desserts">
      <CardProduct
        :key="dessert.name"
        :product="dessert"
        :add-product="() => desssertStore.addDessert(dessert)"
        :delete-product="() => desssertStore.deleteUnitDessert(dessert.name)"
      />
    </v-col>
  </v-row>
</template>

<script setup>
import CardProduct from "./CardProduct.vue";
import { useDessert } from "@/store/useDessert";

const desssertStore = useDessert();
</script>
