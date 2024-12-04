<script setup lang="ts">
import {
  dealsImage,
  image1,
  ratingsImage,
  retailerimage,
  shape02,
} from "../../../assets/exports";
// import HeroBg from '../../../assets/HeroBg.vue';

import NavbarComponent from "../../../components/layout/NavbarComponent.vue";
import ImageComponent from "../../../components/ReComponents/ImageComponent.vue";
import HomeAdvantagesComponent from "./components/HomeAdvantagesComponent.vue";
import HomeAdvertComponent from "./components/HomeAdvertComponent.vue";
// import HomeAgentsComponent from "./components/HomeAgentsComponent.vue";
import HomeDealsComponent from "./components/HomeDealsComponent.vue";
import HomeHeroComponent from "./components/HomeHeroComponent.vue";
import HomeNewHomeComponent from "./components/HomeNewHomeComponent.vue";
import HomeNewListingsComponent from "./components/HomeNewListingsComponent.vue";
import HomeNewsLetterComponent from "./components/HomeNewsLetterComponent.vue";
import HomePopularLocation from "./components/HomePopularLocation.vue";
import HomePropertySearchComponent from "./components/HomePropertySearchComponent.vue";
import WhoWeAreComponent from "./components/WhoWeAreComponent.vue";
import HomeRetialerComponent from "./components/HomeRetialerComponent.vue";
import { ref } from "vue";
import AppFooter from "../../../components/layout/AppFooter.vue";
import AppInquiry from "../../../components/layout/AppInquiry.vue";
import Menu from "../../../components/layout/Menu.vue";
// import HeroBg from "../../../assets/HeroBg.vue";

const currentActive = ref(0);

const setCurrentActivePag = (currentActivepag) => {
  currentActive.value = currentActivepag;
};
// const currentActiveAgents = ref(0);

// const setCurrentActiveAgentsPag = (currentActivepag) => {
//   currentActiveAgents.value = currentActivepag;
// };

const heroData = [
  {
    image: image1,
    name: "Chinonso Xavier",
    location: "Lagos Nigeria",
    text: `Efficient, knowledgeable, & made our home search a smooth experience.
          Highly recommended agency!`,
    rating: "10K rating",
    ratingStar: 4.5,
  },
  {
    image: image1,
    name: "Chinonso Xavier2",
    location: "Lagos Nigeria",
    text: `Efficient, knowledgeable, & made our home search a smooth experience.
          Highly recommended agency!`,
    rating: "10K rating",
    ratingStar: 4.5,
  },
  {
    image: image1,
    name: "Chinonso Xavier3",
    location: "Lagos Nigeria",
    text: `Efficient, knowledgeable, & made our home search a smooth experience.
          Highly recommended agency!`,
    rating: "10K rating",
    ratingStar: 4.5,
  },
];

// import NavbarComponent from "../../../components/layout/NavbarComponent.vue";
</script>

<template>
  <main class="relative" >
    <Menu/>
  <section class="relative h-fit tablet:pb-10 tablet:h-max">
    <HomeAdvertComponent />
    <NavbarComponent />
    <div class="flex h-full flex-col items-center justify-center relative py-20">
      
      <!-- <div class="absolute bg-[geen] -bottom-[200px] botto inset-0 w-full h-full" > -->
        <!-- <HeroBg class="f object-cover w-full h-[100%]" /> -->
      <!-- </div> -->
      <div
      class="flex flex-col items-center relative justify-center max-width"
      >
      <HomeHeroComponent />
      
      <HomePropertySearchComponent />
    </div>
    <img src="/src/assets/herobg.svg" class="w-full h-full object-contain absolut -mt-[40%] inset-0" alt="">
    </div>
  </section>
  <section
    class="border-b-2 border-b-darkText relative tablet:py-10 pb-20 flex items-center justify-center"
  >
    <div
      class="flex items-center searchP:flex-col searchP:gap-4 tablet:gap-5 justify-between max-width duration-1000"
      v-for="(data, index) in heroData"
      :key="data.name"
      :class="[
        currentActive == index
          ? 'ring-opacity-100 relative'
          : 'opacity-0 absolute',
      ]"
    >
      <div class="flex flex-col items-center justify-center">
        <ImageComponent
          alt="profile pic"
          :src="data.image"
          rounded
          class="max-w-14 min-w-11"
        />
        <p class="text-darkText font-medium text-base">{{ data.name }}</p>
        <p class="text-lightText font-normal text-sm">{{ data.location }}</p>
      </div>
      <div class="text-center">
        <p class="text-lg lg:text-xl font-normal text-darkText max-w-[620px]">
          {{ data.text }}
        </p>
      </div>
      <div>
        <ImageComponent alt="ratings image" :src="ratingsImage" />
        <p class="text-darkText font-medium mt-3">
          {{ data.rating }}
          <span class="font-normal">{{ data.ratingStar }}</span>
        </p>
      </div>
    </div>
    <div
      class="bg-white p3 absolute flex items-center justify-center -bottom-[6px] gap-2 px-5"
    >
      <span
        v-on:click="setCurrentActivePag(0)"
        class="cursor-pointer duration-1000 rounded-full w-3 h-3"
        :class="[currentActive == 0 ? 'bg-adminPrimary' : 'bg-darkText']"
      ></span>
      <span
        v-on:click="setCurrentActivePag(1)"
        class="cursor-pointer duration-1000 rounded-full w-3 h-3"
        :class="[currentActive == 1 ? 'bg-adminPrimary' : 'bg-darkText']"
      ></span>
      <span
        v-on:click="setCurrentActivePag(2)"
        class="cursor-pointer duration-1000 rounded-full w-3 h-3"
        :class="[currentActive == 2 ? 'bg-adminPrimary' : 'bg-darkText']"
      ></span>
    </div>
  </section>
  <section class="py-20">
    <HomeAdvantagesComponent />
  </section>
  <section class="py-20">
    <WhoWeAreComponent />
  </section>
  <section class="py-20">
    <HomePopularLocation />
  </section>

  <section class="py-20 bg-[#f5ede8]">
    <HomeNewListingsComponent />
  </section>

  <section
    :style="{
      background: `url(${dealsImage})`,
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }"
    class="home-deals tablet:bg-centr py-28 flex items-center justify-center relative before:absolute"
  >
    <div class="max-width relative z-40">
      <HomeDealsComponent />
    </div>
  </section>
  <!-- <section
    class="py-20 border-b-2 border-b-darkText relative flex items-center justify-center"
  >
    <HomeAgentsComponent />
        <div
      class="bg-white p3 absolute flex items-center justify-center -bottom-[6px] gap-2 px-5"
    >
      <span
        v-on:click="setCurrentActiveAgentsPag(0)"
        class="cursor-pointer duration-1000 rounded-full w-3 h-3"
        :class="[currentActiveAgents==0 ? 'bg-adminPrimary' : 'bg-darkText']"
      ></span>
      <span
        v-on:click="setCurrentActiveAgentsPag(1)"
        class="cursor-pointer duration-1000 rounded-full w-3 h-3"
        :class="[currentActiveAgents==1 ? 'bg-adminPrimary' : 'bg-darkText']"
      ></span>
      <span
        v-on:click="setCurrentActiveAgentsPag(2)"
        class="cursor-pointer duration-1000 rounded-full w-3 h-3"
        :class="[currentActiveAgents==2 ? 'bg-adminPrimary' : 'bg-darkText']"
      ></span>
    </div>
  </section> -->
  <section class="py-20">
    <HomeNewsLetterComponent />
  </section>
  <section
    class="py-20 home-new-home flex items-center justify-between relative before:absolute after:absolute"
  >
    <HomeNewHomeComponent />
  </section>

  <section
    class="py-20 flex items-center justify-center relative before:absolute home-retail"
    :style="{
      background: `url(${retailerimage})`,
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }"
  >
    <div class="relative z-10">
      <HomeRetialerComponent />
    </div>
  </section>

  <section class="py-20 relative flex items-center justify-center">
    <ImageComponent
      alt="footer bg"
      :src="shape02"
      class="w-full h-full absolute"
    />
    <AppInquiry />
  </section>
  <section class="py0">
    <AppFooter />
  </section>
    </main>

</template>

<style scoped>
.home-deals::before {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
  background: linear-gradient(
    89.93deg,
    #000000a1 0.33%,
    #00000082 45.5%,
    #0000 99.93%
  );
}

.home-retail::before {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
  background: linear-gradient(
    89.93deg,
    #000000a1 0.33%,
    #00000082 45.5%,
    #0000 99.93%
  );
}

.home-new-home::before {
  background: url("../../../assets/shape_07.svg");
  width: 50%;
  height: 100%;
  opacity: 0.6;
  z-index: 0;
  background-position: left;
  background-size: contain;
  background-repeat: no-repeat;
}
.home-new-home::after {
  background: url("../../../assets/shape_08.svg");
  width: 50%;
  opacity: 0.6;
  height: 100%;
  z-index: 0;
  right: 0;
  background-position: right;
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
