<script setup>
defineProps({
  rounded: {
    type: Boolean,
  },
});
</script>

<template>
  <div class="w-full h-full" :class="[rounded ? 'rounded-full' : '']">
    <img
      class="w-full h-full object-cover"
      :class="[rounded ? 'rounded-full' : 'rounded-none']"
      v-bind="$attrs"
    />
  </div>
</template>
