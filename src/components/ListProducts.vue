<template>
  <v-row>
    <v-col cols="12" md="4" v-for="dessert in desserts">
      <!-- {{ dessert }} -->
      <!-- <Image img="../assets/images/image-baklava-desktop.jpg" /> -->
      <Image :img="dessert.image" />
    </v-col>
  </v-row>
</template>

<script setup>
import useDesserts from "@/helpers/useDesserts.js";
import Image from "./Image.vue";

const { desserts } = useDesserts();
</script>
