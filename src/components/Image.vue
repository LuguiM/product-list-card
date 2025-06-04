<template>
  <span v-if="typeof img === 'object'">
    <template v-if="!preview">
      <v-img
        :src="img.mobile"
        alt="Imagen móvil"
        class="d-md-none"
        :width="width"
        :height="height"
        cover
      />
      <v-img
        :src="img.tablet"
        alt="Imagen tablet"
        class="d-none d-md-inline d-lg-none"
        :width="width"
        :height="height"
        cover
      />
      <v-img
        :src="img.desktop"
        alt="Imagen escritorio"
        class="d-none d-lg-inline"
        :width="width"
        :height="height"
        cover
      />
    </template>
    <v-img
      v-else
      :src="img.thumbnail"
      alt="Miniatura"
      :width="width"
      :height="height"
      cover
    />
  </span>

  <v-img v-else :src="img" alt="Imagen" :width="width" :height="height" cover />
</template>

<script setup>
const props = defineProps({
  img: {
    type: [String, Object],
    required: true,
  },
  preview: {
    type: Boolean,
    default: false,
  },
  width: {
    type: [String, Number],
  },
  height: {
    type: [String, Number],
  },
});
</script>
