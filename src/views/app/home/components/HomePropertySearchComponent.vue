<script setup lang="ts">
import { ref } from "vue";
import MapPinDuoIcon from "../../../../components/icons/duo/MapPinDuoIcon.vue";
import CaretIcon from "../../../../components/icons/regular/CaretIcon.vue";

const propertyPreference = ref("Buy Apartment");
const locationPreference = ref("Lagos,Nigeria");
const pricePreference = ref("$10,000- $20,000");

const propertyPreferenceOptions = [
  "Buy Apartments",
  "Rent Condos",
  "Sell Houses",
  "Rent Industries",
  "Sell Villas",
];

const locationPreferenceOptions = [
  "Lagos,Nigeria",
  "Kanu,Nigeria",
  "Accra,Ghana",
  "Paris,France",
];

const pricePreferenceOptions = [
  "$10,000 - $20,000",
  "$20,000 - $30,000",
  "$30,000 - $40,000",
  "$40,000 - 50,000",
];

const setpropetyPreference = (prop) => {
  propertyPreference.value = prop;
  showDropDown.value = '';
};
const setlocationPreference = (prop) => {
  locationPreference.value = prop;
    showDropDown.value = '';

};
const setpricePreference = (prop) => {
  pricePreference.value = prop;
    showDropDown.value = '';

};


const setShowDropDown = (prop) => {
   showDropDown.value = showDropDown.value == prop ? '' : prop
}

const showDropDown = ref("");
</script>

<template>
  <div class="flex flex-col items-center bg-[d] justify-center -mt-5 relative w-full py-32">
    <!-- <div class="w-full h-full relative tablet:hidden"> -->
    <!-- </div> -->
    <div
      class="tablet:relative searchP:flex-col gap-5 w-full py shadow-md p-6 bg-white z-20 border flex items-center justify-center rounded-xl"
    >
      <div class="flex items-center justify-between  flex-wrap  fle-col tablet:flex-col w-full bg-white ">
        <div class="flex-1 relative flex flex-col gap-3 min-w-[200px] basis-1/5 w-full pr-6  border-r tablet:border-b tablet:border-r-0 mr-4 py-2">
          <p class="text-[15px] text-lightText">I’m looking to...</p>
          <div class="relative flex-1">
            
            <div
            @click="setShowDropDown('property')"
              class="flex items-center justify-between w-full cursor-pointer"
            >
              <p class="text-darkText font-medium">{{ propertyPreference }}</p>
              <CaretIcon class="w-4 h-4" />
            </div>
          </div>
          <div
            v-if="showDropDown == 'property'"
            class="z-20 w-full  bg-white shadow-md top-[70px] rounded-md absolute border"
          >
            <p
              class="text-sm leading-6 text-lightText font-medium p-2 duration-500 hover:bg-adminPrimary hover:text-white cursor-pointer"
              @click="setpropetyPreference(item)"
              v-for="(item, index) in propertyPreferenceOptions"
              :key="index"
            >
              {{ item }}
            </p>
          </div>
        </div>
        <div class="flex-1 flex flex-col gap-3 min-w-[200px] basis-1/5 w-full pr-6  border-r tablet:border-b tablet:border-r-0 mr-4 py-2 relative">
          <p class="text-[15px] text-lightText">Location</p>
          <div class="relative flex-1">
            <div
            @click="setShowDropDown('location')"
              class="flex items-center justify-between w-full cursor-pointer"
            >
              <p class="text-darkText font-medium">{{ locationPreference }}</p>
              <MapPinDuoIcon class="w-4 h-4" />
            </div>
          </div>
          <div
            v-if="showDropDown == 'location'"
            class="z-20 w-full  bg-white shadow-md top-[70px] rounded-md absolute border"
          >
            <p
              class="text-sm leading-6 text-lightText font-medium p-2 duration-500 hover:bg-adminPrimary hover:text-white cursor-pointer"
              @click="setlocationPreference(item)"
              v-for="(item, index) in locationPreferenceOptions"
              :key="index"
            >
              {{ item }}
            </p>
          </div>
        </div>
        <div class="flex-1 flex flex-col gap-3 min-w-[200px] basis-1/5 w-full pr-6 border-r tablet:border-b tablet:border-r-0 mr-4 py-2 relative">
          <p class="text-[15px] text-lightText">Price Range</p>
          <div class="relative flex-1">
            <div
            @click="setShowDropDown('price')"
              class="flex items-center justify-between w-full cursor-pointer"
            >
              <p class="text-darkText font-medium">{{ pricePreference }}</p>
              <CaretIcon class="w-4 h-4" />
            </div>
          </div>
          <div
            v-if="showDropDown == 'price'"
            class="z-20 w-full  bg-white shadow-md top-[70px] rounded-md absolute border"
          >
            <p
              class="text-sm leading-6 text-lightText font-medium p-2 duration-500 hover:bg-adminPrimary hover:text-white cursor-pointer"
              @click="setpricePreference(item)"
              v-for="(item, index) in pricePreferenceOptions"
              :key="index"
            >
              {{ item }}
            </p>
          </div>
        </div>
      </div>
      <button class="flex-1  tablet:mt-10 w-full bg-adminPrimary text-white py-3 rounded-md text-lg px-7" >Search</button>
    </div>
  </div>
</template>
