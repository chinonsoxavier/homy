<script setup lang="ts">
import CaretIcon from "../../../../components/icons/regular/CaretIcon.vue";
import IconComponent from "../../../../components/ReComponents/IconComponent.vue";
import HomePopularLocationCardComponent from "./HomePopularLocationCardComponent.vue";
import { onMounted, ref } from "vue";

const slides = [1, 2, 3, 4, 5];
const productCardContainer = ref(null);
const productCardWrapper = ref(null);
const productCardWidth = ref(0);
const productPerSlide = 4;
// const gapPerSlide = ref(24);
const translateX = ref(0);

onMounted(() => {
  productCardWidth.value =
    productCardWrapper.value.offsetWidth / productPerSlide;

  // alert(productCardWidth.value);
});

 const next = () => {
      if (translateX.value > -productCardWidth.value * (slides.length - productPerSlide)) {
        translateX.value -= productCardWidth.value;
      }
    };

    const prev = () => {
      if (translateX.value < 0) {
        translateX.value += productCardWidth.value;
      }
    };
</script>

<template>
  <div class="flex items-center flex-col justify-center flex-1 basis-1/5">
    <div class="max-width flex flex-col items-center justify-center">
      <p class="text-2xl xs:text-3xl md:text-4xl lg:text-4xl tablet:text-center  font-medium text-darkText">Explore Popular Location</p>
      <p class="text-lg font-normal mobile:text-base tablet:text-center text-lightText mt-5">
        Explore the latest listings & projects in diverse areas
      </p>
    </div>
    <div class="max-width relative flex items-center justify-center">
      <div class="b absolute w-fll h-10 max-width" >
        <div v-on:click="prev()" class="hidden" >
          <IconComponent  class="absolute left-14 z-10 bg-white shadow duration-500 hover:shadow-md fill-black hover:bg-adminPrimary hover:fill-white">
            <CaretIcon class=" w-6 h-6 rotate-90" />
          </IconComponent>
        </div>
        <div v-on:click="next()" class="hidden" >
          <IconComponent  class="absolute right-20 z-10 shadow duration-500 hover:shadow-md fill-black hover:bg-adminPrimary hover:fill-white bg-white">
            <CaretIcon class=" w-6 h-6 -rotate-90" />
          </IconComponent>
        </div>
      </div>
      <div
        ref="productCardWrapper"
        class="mt-4 relative flex items-center duration-500 justify-start overflow-xclip w-full"
        >
        <div
        ref="productCardContainer"
        :style="{transform:`translateX(${translateX}px)`}"
          class="flex items-start overflow-scroll bg-[ble] justify-start gap-6 duration-500"
        >
          
          <div
            class=" h-full flex-1 min-w-[230px] bg-[pik] "
            v-for="slide in slides"
            :key="slide"
          >
            <HomePopularLocationCardComponent />
          </div>
        </div>
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>


<style>
.hvj{
  transform: translateX();
}
</style>