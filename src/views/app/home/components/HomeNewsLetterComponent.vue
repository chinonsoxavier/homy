<script setup lang="ts">
import {
  NewsLetterImage,
  NewsLetterImage2,
  shape6,
} from "../../../../assets/exports";
import ImageComponent from "../../../../components/ReComponents/ImageComponent.vue";
</script>

<template>
  <div class="flex items-center justify-center">
    <div class="max-width flex  items-center justify-between gap-28 searchP:flex-col">
      <div
        class="relative flex items-center justify-center flex-1 max-w-[450px]"
      >
        <ImageComponent alt="news letter shape" :src="shape6" class="" />
        <ImageComponent
          alt="new letter image"
          :src="NewsLetterImage"
          class="rounded-full top-4 left-4 absolute news-letter-image h-[500px]"
        />
        <div
          class="flex items-center justify-center absolute flex-col bg-[ed] rounded-2xl z0 duration-500 bottom-0 translate-y-20 shadow-lg -left-8"
        >
          <p class="text-lg text-darkText font-medium z-10 top-8 absolute">
            Your estimate is in!
          </p>
          <p class="text-xl text-darkText font-medium z-10 top-16 mb-20 absolute">$378,30.00</p>
          <img
            alt="news letter image2"
            :src="NewsLetterImage2"
            class="absolte max-w-80 object-contain w-full rounded-2xl"
          />
        </div>
      </div>
      <div class="flex flex-col items-start flex-1 mt-28 laptop:mt-0">
        <p class="text-lightText text-lg">CB ESTIMATE</p>
        <p class="my-8 tablet:my-4 text-3xl  md:text-4xl lg:text-5xl  font-medium text-darkText">
          Get quick estimate on your home.
        </p>
        <p class="text-lg tablet:mb-4 text-darkText mb-8 tablet:text-base">
          Master your property's valuation for a poised entry into the real
          estate market, armed with self-assurance and insight.
        </p>
        <div
          class="relative w-full flex items-center justify-between p-2 border-2 border-darkText rounded-md"
        >
          <input
            type="text"
            class="h-full w-full pl-2 pr-3 bg-transparent outline-none"
          />
          <button
            class="bg-adminPrimary tablet:px-8 whitespace-nowrap rounded-md shadow-md py-3 px-16 text-white text-lg"
          >
            Find Out
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.news-letter-image {
  @apply rounded-2xl;
}
</style>
