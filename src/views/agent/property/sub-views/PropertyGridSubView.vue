<script setup lang="ts" >
import CaretIcon from '../../../../components/icons/regular/CaretIcon.vue';
import Paginations from '../../../../components/ReComponents/Paginations.vue';
import PropertyGridCardComponent from './components/PropertyGridCardComponent.vue';
</script>

<template>
  <div class="px-5 py-3 h-full overflow-scroll">
    <div class="flex  py-5 items-center justify-between w-full">
      <p class="text-[28px] font-mediu pop-medium text-darkText">
        Property List
      </p>
      <div class="flex items-center justify-end text-[15px] text-lightText">
        <span>Agent</span>
        <CaretIcon class="w-3 h-3 -rotate-90" />
        <span>Property</span>  <CaretIcon class="w-3 h-3 -rotate-90" />
        <span>Grid</span>
      </div>
    </div>

    <div class="flex items-center justify-start gap-3 flex-wrap" >
        <PropertyGridCardComponent/>
        <PropertyGridCardComponent/>
        <PropertyGridCardComponent/>
        <PropertyGridCardComponent/>
        <PropertyGridCardComponent/>
        <PropertyGridCardComponent/>
        <PropertyGridCardComponent/>
    </div>
    <div class="my-5" >
      <Paginations/>
    </div>
    </div>
</template>