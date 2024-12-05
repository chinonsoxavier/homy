<script setup lang="ts">
import MapPinDuoIcon from "../../../../components/icons/duo/MapPinDuoIcon.vue";
import BookmarkIcon from "../../../../components/icons/regular/BookmarkIcon.vue";
import HeartIcon from "../../../../components/icons/regular/HeartIcon.vue";
import PlusCircleIcon from "../../../../components/icons/regular/PlusCircleIcon.vue";
import ShareNetworkIcon from "../../../../components/icons/regular/ShareNetworkIcon.vue";
import IconComponent from "../../../../components/ReComponents/IconComponent.vue";
</script>

<template>
  <div class="flex items-stretch justify-between flex-wrap base:justify-center base:flex-col base:gap-8  w-full base:py-10 py-28">
    <div class="flex flex-col items-start base:items-start base:text-left justify-between gap-4 flex-1">
      <p class="text-3xl xs:text-4xl md:text-5xl  text-darkText font-medium">
        Luxury Apartments on California.
      </p>
      <div class="flex items-center flex-wrap justify-start gap-2">
        <button
          class="px-4 whitespace-nowrap py-1 bg-black text-sm text-white cursor-pointer rounded-full"
        >
          FOR SELL
        </button>
        <div class="flex items-center mobile:items-start justify-start">
          <MapPinDuoIcon class="w-5 h-5" />
          <p class="text-lg whitespace-nowrap mobile:whitespace-normal mobile:text-sm text-left" >3891 Ranchview Dr. Richardson, California</p>
        </div>
      </div>
    </div>
    <div
      class="flex items-end justify-between tablet:gap-1 text-left base:items-start flex-1 flex-col gap-6 tablet:justify-center "
    >
      <p class="text-2xl lg:text-5xl  whitespace-nowrap text-darkText font-medium text-left tablet:text-center">
        Price: $1,670.00
      </p>
      <p class="text-lg mobile:text-base font-normal text-lightText">
        Est. Payment <span class="font-medium text-darkText">$8,343/mo*</span>
      </p>
      <div class="flex items-center justify-end gap-4" >
         <div class="flex items-center justify-end gap-2" >
            <ShareNetworkIcon class="w-5 h-5" />
            <p class="text-lg mobile:text-base text-darkText font-medium" >Share</p>
         </div>
         <div class="flex gap-3 items-center w-full justify-start">
            <IconComponent
              class="border w-12 h-12 tablet:w-9 tablet:h-9 duration-500 hover:bg-black hover:fill-white border-darkText"
            >
              <HeartIcon class="w-7 h-7 tablet:h-5 tablet:w-5" />
            </IconComponent>
            <IconComponent
              class="border w-12 h-12 tablet:w-9 tablet:h-9 duration-500 hover:bg-black hover:fill-white border-darkText"
            >
              <BookmarkIcon class="w-7 h-7 tablet:h-5 tablet:w-5" />
            </IconComponent>
            <IconComponent
              class="border w-12 h-12 tablet:w-9 tablet:h-9 duration-500 hover:bg-black hover:fill-white border-darkText"
            >
              <PlusCircleIcon class="w-6 h-6 tablet:h-5 tablet:w-5" />
            </IconComponent>
          </div>
      </div>
    </div>
  </div>
</template>
