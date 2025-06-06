<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="8" class="d-flex flex-column ga-10">
        <h1 class="font-weight-bold text-rose-900">Desserts</h1>
        <ListProducts />
      </v-col>
      <v-col cols="12" md="4" class="position-relative">
        <CartList />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import CartList from '@/components/CartList.vue';
import ListProducts from '@/components/ListProducts.vue';


</script>
