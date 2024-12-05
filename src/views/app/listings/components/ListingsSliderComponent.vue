<script setup lang="ts">
import { ref } from "vue";
import {
  listing1,
  listing2,
  listing3,
  listing4,
} from "../../../../assets/exports";
import CaretIcon from "../../../../components/icons/regular/CaretIcon.vue";
import IconComponent from "../../../../components/ReComponents/IconComponent.vue";
import ImageComponent from "../../../../components/ReComponents/ImageComponent.vue";

const currentActiveSlide = ref(0);

const slides = [listing1, listing2, listing3, listing4];

const setCurrentActiveSlide = (param) => {
  currentActiveSlide.value = param;
  console.log(currentActiveSlide.value);
};

const nextSlide = () => {
  currentActiveSlide.value >= slides.length - 1
    ? (currentActiveSlide.value = 0)
    : (currentActiveSlide.value += 1);
};
const prevSlide = () => {
  currentActiveSlide.value > 0
    ? (currentActiveSlide.value -= 1)
    : (currentActiveSlide.value = slides.length - 1);
};
</script>

<template>
  <div
    class="h-[80vh] searchP:h-auto searchP:flex-col gap-4 flex items-start justify-center"
  >
    <div
      class="h-full w-full flex  items-start rounded-xl justify-center relative flex-1"
    >
      <div
        class="flex items-center flex-wrap gap-5  justify-between w-full px-10 absolute mt-8 z-10 top-2"
      >
        <div class="flex items-center justify-start gap-3 absoute top-5">
          <div v-on:click="prevSlide()">
            <IconComponent
              class="bg-white w-14 h-14 tablet:w-10 tablet:h-10 shadow hover:shadow-md hover:bg-black hover:fill-white duration-500"
            >
              <CaretIcon class="w-5 -5 rotate-90" />
            </IconComponent>
          </div>
          <div v-on:click="nextSlide()">
            <IconComponent
              class="bg-white w-14 h-14 tablet:w-10 tablet:h-10 shadow hover:shadow-md hover:bg-black hover:fill-white duration-500"
            >
              <CaretIcon class="w-5 -5 -rotate-90" />
            </IconComponent>
          </div>
        </div>
        <button class="bg-white tablet:px-3 mobile:hidden searchP:py-[7px] hdden px-10 py-3 rounded-lg">
          See all 37 Photos
        </button>
      </div>
      <div class="w-full h-full rounded-xl" >
      <ImageComponent
      v-for="(img, index) in slides" :key="index" 
        alt="property listing"
        :class="[index==currentActiveSlide ? 'block' : 'hidden']"
        :src="img"
        class="duration-500 rounded-xl inset0 abslute object-cover w-full h-full"
      />
      </div>
    </div>
    <div
    class="flex searchP:flex-row items-center mobile:gap-1 h-full flex-col justify-center overflw-clip gap-3"
    >
      <img
        v-on:click="setCurrentActiveSlide(0)"
        alt="listings slider component"
        :src="listing1"
        class="flex-1 min-w-[50px]  basis-1/5 searchP:max-w-[100%]  cursor-pointer h-full rounded-md max-w-[190px]"
      />
      <img
        v-on:click="setCurrentActiveSlide(1)"
        alt="listings slider component"
        :src="listing2"
        class="flex-1 min-w-[50px]  basis-1/5 searchP:max-w-[100%]  cursor-pointer h-full rounded-md max-w-[190px]"
      />
      <img
        v-on:click="setCurrentActiveSlide(2)"
        alt="listings slider component"
        :src="listing3"
        class="flex-1 min-w-[50px]  basis-1/5 searchP:max-w-[100%]  cursor-pointer h-full rounded-md max-w-[190px]"
      />
      <img
        v-on:click="setCurrentActiveSlide(3)"
        alt="listings slider component"
        :src="listing4"
        class="flex-1 min-w-[50px] basis-1/5 searchP:max-w-[100%]  cursor-pointer h-full rounded-md max-w-[190px]"
      />
    </div>
  </div>
</template>
