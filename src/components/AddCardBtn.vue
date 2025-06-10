<template>
  <v-btn
    v-if="!shopProduct"
    variant="outlined"
    rounded="xl"
    class="btn-addCart bg-rose-50 text-caption text-capitalize border-sm border-red border-opacity-100"
    @click="activeShop"
  >
    <img src="/assets/images/icon-add-to-cart.svg" alt="add cart" />
    Add to Card
  </v-btn>

  <v-sheet
    v-else
    variant="outlined"
    rounded="xl"
    class="d-flex align-center justify-between ga-4 py-1 px-4 bg-red text-caption text-capitalize border-sm border-red border-opacity-100"
    style="width: fit-content"
  >
    <v-btn
      @click="deleteProduct()"
      rounded="xl"
      variant="outlined"
      icon
      density="compact"
    >
      <img src="/assets/images/icon-decrement-quantity.svg" alt="add cart" />
    </v-btn>
    {{ unit }}
    <v-btn
      @click="addProduct()"
      rounded="xl"
      variant="outlined"
      icon
      density="compact"
    >
      <img src="/assets/images/icon-increment-quantity.svg" alt="add cart" />
    </v-btn>
  </v-sheet>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";

const props = defineProps({
  cantidad: {
    type: [String, Number],
  },
  addCart: {
    type: Function,
  },
  quitProduct: {
    type: Function,
  },
  shopActive: {
    type: Boolean,
    default: false,
  },
});

const { addCart, quitProduct } = props;

const emit = defineEmits(["update:cantidad", "update:shopActive"]);

const shopProduct = ref(props.shopActive);
const unit = ref(props.cantidad);

const addProduct = () => {
  unit.value = unit.value + 1;
  addCart();
};

const deleteProduct = () => {
  unit.value = unit.value - 1;
  quitProduct();
};

const activeShop = () => {
  shopProduct.value = true;
  emit("update:shopActive", shopProduct.value);
  addProduct()
};

watch(
  () => props.shopActive,
  (newVal) => {
    shopProduct.value = newVal;
  }
);

watch(
  () => props.cantidad,
  (newVal) => {
    unit.value = newVal;
  }
);

watch(unit, (newVal) => {
  if (newVal <= 0) {
    shopProduct.value = false;
    emit("update:shopActive", false);
    unit.value = 0;
  }
});
</script>

<style scoped>
.btn-addCart:hover {
  color: var(--red) !important;
}
</style>
