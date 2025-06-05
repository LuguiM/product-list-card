<template>
  <v-row>
    <v-col cols="12" sm="6" lg="4" v-for="dessert in desserts">
      <CardProduct
        :key="dessert.name"
        :product="dessert"
        :add-product="() => addProduct(dessert)"
        :delete-product="() => deleteUnitDessert(dessert.name)"
      />
    </v-col>
  </v-row>
</template>

<script setup>
import useDesserts from "@/helpers/useDesserts.js";
import CardProduct from "./CardProduct.vue";

const { desserts, addDessert, deleteDessert, deleteUnitDessert } = useDesserts();

const addProduct = (item) => {
  addDessert(item);
};

const deleteProduct = (name) => {
  deleteDessert(name);
};
</script>
