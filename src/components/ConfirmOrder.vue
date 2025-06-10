<template>
  <v-btn
    @click="openOrder = true"
    base-color="red"
    rounded="xl"
    size="large"
    class="text-subtitle-2"
  >
    Confirm Orden
  </v-btn>

  <v-dialog v-model="openOrder" width="auto" v-if="mdAndUp" persistent>
    <v-card max-width="800" class="pa-4 rounded-xl">
      <ListCardTotal :onClick="newOrder" />
    </v-card>
  </v-dialog>

  <v-bottom-sheet v-model="openOrder" inset v-else persistent>
    <v-card class="text-center pa-4 rounded-t-xl">
      <ListCardTotal :onClick="newOrder" />
    </v-card>
  </v-bottom-sheet>
</template>

<script setup>
import { ref } from "vue";
import { useDisplay } from "vuetify";
import ListCardTotal from "./ListCardTotal.vue";
import { useDessert } from "@/store/useDessert";

const desssertStore = useDessert();

const { mdAndUp } = useDisplay();
const openOrder = ref(false);

const newOrder = () => {
  openOrder.value = false
  desssertStore.clearCart()
}
</script>
