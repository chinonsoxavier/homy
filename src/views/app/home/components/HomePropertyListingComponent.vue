<script setup lang="ts">
import { propertyImage1 } from "../../../../assets/exports";
import ArrowSquareUpLeftDuoIcon from "../../../../components/icons/duo/ArrowSquareUpLeftDuoIcon.vue";
import BathTubDuoIcon from "../../../../components/icons/duo/BathTubDuoIcon.vue";
import BedDuoIcon from "../../../../components/icons/duo/BedDuoIcon.vue";
import ArrowUpRightIcon from "../../../../components/icons/regular/ArrowUpRightIcon.vue";
import IconComponent from "../../../../components/ReComponents/IconComponent.vue";
import ImageComponent from "../../../../components/ReComponents/ImageComponent.vue";
</script>

<template>
  <RouterLink to="listings/hbdhbchdchjds" class="flex-1 basis-[300px]" >
  <div class="flex-1  p-4 rounded-xl bg-white w-full duration-500 hover:shadow-lg">
    <ImageComponent
      alt="product image"
      :src="propertyImage1"
      class="rounded-xl"
    />

    <p
      class="text-darkText mobile:text-lg font-medium duration-500 mt-4 hover:text-adminPrimary text-xl"
    >
      Blueberry villa
    </p>
    <p class="text-lightText mobile:text-sm fi-light text-base font-normal my-1">
      Mirpur 10, Stadium dhaka 1208
    </p>

    <div
      class="flex items-center justify-between mt-2 border-b b border-dashed border-b-lightText pb-4"
    >
      <div class="flex items-center justify-start gap-1">
        <ArrowSquareUpLeftDuoIcon class="w-5 h-5 mobile:w-4 mobile:h-4 fill-lightText" />
        <p class="text-base mt-1 text-lightText font-light mobile:text-sm">1370 sqft</p>
      </div>
      <div class="flex items-center justify-start gap-1">
        <BedDuoIcon class="w-5 h-5 fill-lightText mobile:w-4 mobile:h-4" />
        <p class="text-base mt-1 text-lightText font-light mobile:text-sm">3 bed</p>
      </div>
      <div class="flex items-center justify-start gap-1">
        <BathTubDuoIcon class="w-5 h-5 fill-lightText mobile:w-4 mobile:h-4"  />
        <p class="text-base mt-1 text-lightText font-light mobile:text-sm">2 baths</p>
      </div>
    </div>
    <div class="flex items-center justify-between py-5 mobile:py-1" >
        <p class="text-darkText text-2xl font-medium mobile:text-lg" >$3,280 / <span class="text-[19px] font-normal" >m</span></p>
         <IconComponent class="bg-black fill-white mobile:w-10 mobile:h-10 w-14 h-14 duration-500 hover:bg-adminPrimary" >
             <ArrowUpRightIcon class="w-6 h-6" />
         </IconComponent>
    </div>
  </div>
  </RouterLink>
</template>
