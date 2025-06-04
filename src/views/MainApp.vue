<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="7" class="d-flex flex-column ga-10">
        <h1 class="font-weight-bold text-rose-900">Desserts</h1>
        <ListProducts />
      </v-col>
      <v-col cols="12" md="5">
        <div>carrito</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import ListProducts from '@/components/ListProducts.vue';


</script>
