<template>
  <div class="flex-1 bg-[ed]">
    <label class="t text-lightText font-medium" for="hm-input-label">
      <slot />
    </label>
    <div class="border mt-1 rounded group  border-[#eaedf1]">
      <input
        v-bind="$attrs"
        id="hm-input-label"
        class="w-full  outline-none h-full bg-transparent p-2"
        type="text"
      />
    </div>
  </div>
</template>
