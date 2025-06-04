<template>
  <span v-if="typeof img === 'object'">
    <template v-if="!preview">
      <img :src="img?.mobile" alt="" class="d-md-none" />
      <img :src="img?.tablet" alt="" class="d-none d-md-inline d-lg-none" />
      <img :src="img?.desktop" alt="" class="d-none d-lg-inline" />
    </template>
    <img v-else :src="img?.thumbnail" alt="thumbnail" class="" />
  </span>

  <img v-else :src="img" alt="image" />
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
});

const { img, preview } = props;
</script>

<style scoped>
img{
  object-fit: contain;
  height: 100px;
}
</style>
