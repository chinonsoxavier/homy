<script setup lang="ts">
import { listing2 } from "../../../../../assets/exports";
import ArrowSquareUpLeftDuoIcon from "../../../../../components/icons/duo/ArrowSquareUpLeftDuoIcon.vue";
import BathTubDuoIcon from "../../../../../components/icons/duo/BathTubDuoIcon.vue";
import BedDuoIcon from "../../../../../components/icons/duo/BedDuoIcon.vue";
import WareHouseDuoIcon from "../../../../../components/icons/duo/WareHouseDuoIcon.vue";
import ImageComponent from "../../../../../components/ReComponents/ImageComponent.vue";
</script>

<template>
  <div class="flex-1 basis-1/4 rounded-t-md max-w-[500px] bg-white border relative duration-500 hover:shadow-md">
    <div class="absolute px-2 rounded-md top-3 right-3 text-white bg-[#604ae3]">
      <p class="text-[15px]">For Sale</p>
    </div>
    <ImageComponent
      alt="property image"
      :src="listing2"
      class="rounded-md max-"
    />

    <div class="flex items-start justify-start px-4 py-3 gap-2">
      <div
        class="bg-[#f9f9fc] flex items-center justify-center w-11 h-11 rounded fill-[rgba(96,74,227)]"
      >
        <svg
          class="w-6 h-6 fill-[rgba(96,74,227)]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <defs>
            <path
              id="solarHomeBoldDuotone0"
              d="M10.75 9.5a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0"
            ></path>
          </defs>
          <path
            fill="current"
            fill-rule="evenodd"
            d="m21.532 11.586l-.782-.626v10.29H22a.75.75 0 0 1 0 1.5H2a.75.75 0 1 1 0-1.5h1.25V10.96l-.781.626a.75.75 0 1 1-.937-1.172l8.125-6.5a3.75 3.75 0 0 1 4.686 0l8.125 6.5a.75.75 0 1 1-.936 1.172M12 6.75a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5m1.746 6.562c-.459-.062-1.032-.062-1.697-.062h-.098c-.665 0-1.238 0-1.697.062c-.491.066-.963.215-1.345.597s-.531.854-.597 1.345c-.062.459-.062 1.032-.062 1.697v4.299h7.5v-4.423c0-.612-.004-1.143-.062-1.573c-.066-.491-.215-.963-.597-1.345s-.853-.531-1.345-.597"
            clip-rule="evenodd"
          ></path>
          <g
            fill="current"
            fill-rule="evenodd"
            clip-rule="evenodd"
            opacity=".5"
          >
            <use href="#solarHomeBoldDuotone0"></use>
            <use href="#solarHomeBoldDuotone0"></use>
          </g>
          <path
            fill="current"
            d="M12.05 13.25c.664 0 1.237 0 1.696.062c.492.066.963.215 1.345.597s.531.853.597 1.345c.058.43.062.96.062 1.573v4.423h-7.5v-4.3c0-.664 0-1.237.062-1.696c.066-.492.215-.963.597-1.345s.854-.531 1.345-.597c.459-.062 1.032-.062 1.697-.062zM16 3h2.5a.5.5 0 0 1 .5.5v4.14l-3.5-2.8V3.5A.5.5 0 0 1 16 3"
            opacity=".5"
          ></path>
        </svg>
      </div>
      <div class="flex flex-col items-start">
        <p class="text-darkText font-medium text-">Dvilla Residences Batu</p>
        <p class="text-sm text-lightText">4604 , Philli Lane Kiowa</p>
      </div>
    </div>
    <div class="flex flex-wrap item-center justify-between gap-3 px-4 py-3">
      <div
        class="px-3 py-1 rounded-sm bg-[#f9f9fc] flex gap-1 items-center justify-between"
      >
        <BedDuoIcon class="w-4 h-4 fill-lightText" />
        <p class="text-xs text-lightText">5</p>
        <p class="text-xs text-lightText">Beds</p>
      </div>
      <div
        class="px-3 py-1 rounded-sm bg-[#f9f9fc] flex gap-1 items-center justify-between"
      >
        <BathTubDuoIcon class="w-4 h-4 fill-lightText" />
        <p class="text-xs text-lightText">5</p>
        <p class="text-xs text-lightText">Baths</p>
      </div>
      <div
        class="px-3 py-1 rounded-sm bg-[#f9f9fc] flex gap-1 items-center justify-between"
      >
        <ArrowSquareUpLeftDuoIcon class="w-4 h-4 fill-lightText" />
        <p class="text-xs text-lightText">1200ft</p>
      </div>
      <div
        class="px-3 py-1 rounded-sm bg-[#f9f9fc] flex gap-1 items-center justify-between"
      >
        <WareHouseDuoIcon class="w-4 h-4 fill-lightText" />
        <p class="text-xs text-lightText">5</p>
        <p class="text-xs text-lightText">Floors</p>
      </div>
    </div>
    <hr>
    <div class="flex items-center justify-between px-4 py-3" >
        <p class="text-darkText font-medium" >$90,00.00</p>
    </div>
  </div>
</template>
