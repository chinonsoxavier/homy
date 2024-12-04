<script setup lang="ts">
import {
  advantagesIcon1,
  advantagesIcon2,
  advantagesIcon3,
} from "../../../../assets/exports";
import ImageComponent from "../../../../components/ReComponents/ImageComponent.vue";
import HomeAdvantagesCardComponent from "./HomeAdvantagesCardComponent.vue";
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <div class="max-width text-center">
      <p class="text-3xl xs:text-4xl md:text-5xl font-medium text-darkText">
        Unlock Homy advantages
      </p>
      <p class="text-lg  font-normal text-lightText mt-5">
        Your trusted real estate partner in every transaction.
      </p>
    </div>
    <div
      class="flex items-center tablet:flex-col max-width gap-10 mt-10 justify-center"
    >
      <HomeAdvantagesCardComponent
        label="BUY A HOME"
        text="Explore homy’s 2 million+ homes and uncover your ideal living space."
      >
        <ImageComponent
          alt="our advantages image"
          :src="advantagesIcon1"
          class="max-w-32"
        />
      </HomeAdvantagesCardComponent>
      <HomeAdvantagesCardComponent
        label="RENT A HOME"
        text="Discover a rental you'll love on homy, thanks to 35+ filters and tailored keywords."
      >
        <ImageComponent
          alt="our advantages image"
          :src="advantagesIcon2"
          class="max-w-32"
        />
      </HomeAdvantagesCardComponent>
      <HomeAdvantagesCardComponent
        label="SELL PROPERTY"
        text="List, sell, thrive – with our top-notch real estate agency. It’s super easy & fun."
      >
        <ImageComponent
          alt="our advantages image"
          :src="advantagesIcon3"
          class="max-w-32"
        />
      </HomeAdvantagesCardComponent>
    </div>
  </div>
</template>
