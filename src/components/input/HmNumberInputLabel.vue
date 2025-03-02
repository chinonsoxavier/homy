<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
  },
  icon: {
    type: Boolean,
  },
});
</script>

<template>
  <div class="flex-1">
    <label class="t text-lightText font-medium" for="hm-input-label">
      {{ props.label }}
    </label>
    <div class="border relative mt-1 rounded-md border-[#eaedf1]">
      <div
        v-if="props.icon"
        class="h-full w-10 flex items-center justify-center absolute bg-primary left-0"
      >
        <slot />
      </div>
      <input
        v-bind="$attrs"
        id="hm-input-label"
        class="w-full outline-none h-full bg-transparent py-2 pr-2"
        :class="[icon ?'pl-12':'pl-2']"
        type="number"
      />
    </div>
  </div>
</template>
