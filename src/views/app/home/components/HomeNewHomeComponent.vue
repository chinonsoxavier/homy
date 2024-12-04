<script setup lang="ts">
import { icon7, icon8, icon9 } from "../../../../assets/exports";
import CaretIcon from "../../../../components/icons/regular/CaretIcon.vue";
import ImageComponent from "../../../../components/ReComponents/ImageComponent.vue";
import HomeAdvantagesCardComponent from "./HomeAdvantagesCardComponent.vue";
</script>

<template>
  <div class=" relative z-20 flex flex-col items-center justify-center">
    <div class="max-width text-center">
      <p class="text-4xl font-medium text-darkText">We’r here to help
you get your dream home</p>
      <p class="text-lg font-normal text-lightText mt-5">
    It’s easy to start with us with these simple steps
      </p>
    </div>
    <div class="flex items-center mt-10 justify-center max-width base:flex-col base:gap-8">
      <HomeAdvantagesCardComponent
        label="Create Account"
        text="It’s very easy to open an account and start your journey."
      >
        <ImageComponent
          alt="our advantages image"
          :src="icon7"
          class="max-w-32"
        />
      </HomeAdvantagesCardComponent>
      <div class="flex items-center justify-center base:hidden" >
          <span class="flex-1 border-b border-dashed h border-lightText border min-w-32" >
        </span>
            <CaretIcon class="w-8 h-8 -ml-4 -rotate-90" />
    </div>
      <HomeAdvantagesCardComponent
        label="Find HOME"
        text="Complete your profile with all the info to get attention of client."
      >
        <ImageComponent
          alt="our advantages image"
          :src="icon8"
          class="max-w-32"
        />
      </HomeAdvantagesCardComponent>
       <div class="flex items-center justify-center base:hidden" >
          <span class="flex-1 border-b border-dashed h border-lightText border min-w-32" >
        </span>
            <CaretIcon class="w-8 h-8 -ml-4 -rotate-90" />
    </div>
      <HomeAdvantagesCardComponent
        label="Quick Process"
        text="Apply & get your preferable jobs with all the requirements and get it."
      >
        <ImageComponent
          alt="our advantages image"
          :src="icon9"
          class="max-w-32"
        />
      </HomeAdvantagesCardComponent>
    </div>
  </div>
</template>
