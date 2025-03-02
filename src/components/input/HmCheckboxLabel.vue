<script setup >

const props = defineProps({
    basis: {
        type: String
    }
});

const basisStyle = ()=>{
    return props.basis && props.basis
}

console.log(props.basis);

</script>

<template>

  <div class="flex-1 flex items-start justify-start gap-1" :class="basis" >
      <div class=" mt-1 min-w-5 flex items-center justify-center rounded max-w-4 max-h-4 bg[red] ">
        <input
        type="checkbox"
          v-bind="$attrs"
          id="hm-checkbox-input-label"
          class=" outline-none bg-transparent min-w-4 w-4 h-4"
        />
      </div>
    <label class="text-center mt-[2px] w-min whitespace-nowrap  text-lightText font-medium" for="hm-checkbox-input-label">
      <slot />
    </label>
  </div>
</template>
