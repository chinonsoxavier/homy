<script setup lang="ts">
import ArrowUpRightDuoIcon from "../../../../components/icons/duo/ArrowUpRightDuoIcon.vue";
import BathTubDuoIcon from "../../../../components/icons/duo/BathTubDuoIcon.vue";
import BedDuoIcon from "../../../../components/icons/duo/BedDuoIcon.vue";
import WareHouseDuoIcon from "../../../../components/icons/duo/WareHouseDuoIcon.vue";
import CaretIcon from "../../../../components/icons/regular/CaretIcon.vue";
// import HmInput from '../../../../components/input/HmInput.vue';
import HmInputLabel from "../../../../components/input/HmInputLabel.vue";
import HmNumberInputLabel from "../../../../components/input/HmNumberInputLabel.vue";
import HmSelectOption from "../../../../components/input/HmSelectOption.vue";
import DropFile from "./components/DropFile.vue";
</script>

<template>
  <div class="px-5 py-3 h-full overflow-scroll">
    <div class="flex h-[10%] items-center justify-between w-full">
      <p class="text-[28px] font-mediu pop-medium text-darkText">
        Property Edit
      </p>
      <div class="flex items-center justify-end text-[15px] text-lightText">
        <span>Agent</span>
        <CaretIcon class="w-3 h-3 -rotate-90" />
        <span>Property Edit</span>
      </div>
    </div>
    <div class="flx h-[90%] mt-5 bg-transparent rounded-md">
      <div class="p-5 h-min bg-white rounded-md shadow w-full">
        <DropFile />
      </div>
      <div class="p-5 bg-white rounded-md shadow w-full my-5">
        <p class="text-lg text-lightText font-medium mb-5">
          Property Information
        </p>
        <div class="flex gap-5 flex-wrap items-center justify-center">
          <div class="basis-1/3 flex-1">
            <HmInputLabel
              placeholder="Property Title"
              defaultValue="Luxury Apartments on California. "
              >Property Title</HmInputLabel
            >
          </div>
          <div class="basis-1/3 flex-1">
            <HmInputLabel placeholder="Property Price" defaultValue="1,670.00 "
              >Property Price</HmInputLabel
            >
          </div>
          <div class="basis-1/3 flex-1">
            <HmInputLabel
              placeholder="Property Location"
              defaultValue="3891 Ranchview Dr. Richardson, California"
              >Property Location</HmInputLabel
            >
          </div>
          <div class="basis-1/3 flex-1">
            <HmInputLabel
              placeholder="Property Condition"
              defaultValue="For Sale"
              >Property Status</HmInputLabel
            >
          </div>
          <div class="basis-1/3 flex-1">
            <HmSelectOption class="basis-1/3"> Category* </HmSelectOption>
          </div>
          <div class="basis-1/3 flex-1">
            <HmSelectOption class="basis-1/3"> Listed in* </HmSelectOption>
          </div>
          <!-- <HmInputLabel placeholder="Property Title" defaultValue="123455677">Property Title</HmInputLabel> -->
          <!-- <HmInput placeholder="Property Title" defaultValue="123455677" /> -->
        </div>
    </div>
    <div class="my-5 bg-white shadow rounded-md p-5">
      <p class="text-lg text-lightText font-medium mb-5">Overview</p>
      <div class="flex flex-wrap gap-5">
        <HmNumberInputLabel
          placeholder="0"
          icon
          label="Bedroom"
          class="basis-1/3"
          defaultValue="2"
        >
          <BedDuoIcon class="w-6 h-6 fill-lightText" />
        </HmNumberInputLabel>
        <HmInputLabel
          defaultValue="2"
          class="basis-1/3"
          placeholder="Ex: 1,230 sqft"
        >
          Garage Size
        </HmInputLabel>
        <HmSelectOption class="b basis-1/3"> Garage </HmSelectOption>

        <HmNumberInputLabel
          placeholder="0"
          icon
          label="Bathrooms"
          class="basis-1/3"
          defaultValue="2"
        >
          <BathTubDuoIcon class="w-6 h-6 fill-lightText" />
        </HmNumberInputLabel>
        <HmNumberInputLabel
          placeholder="0"
          icon
          label="Square Foot"
          class="basis-1/3"
          defaultValue="2"
        >
          <ArrowUpRightDuoIcon class="w-6 h-6 fill-lightText" />
        </HmNumberInputLabel>
        <HmNumberInputLabel
          placeholder="0"
          icon
          label="Floors"
          class="basis-1/3"
          defaultValue="2"
        >
          <WareHouseDuoIcon class="w-6 h-6 fill-lightText" />
        </HmNumberInputLabel>
        <HmNumberInputLabel
          placeholder="0"
          icon
          label="Year built"
          class="basis-1/3"
          defaultValue="2"
        >
          <WareHouseDuoIcon class="w-6 h-6 fill-lightText" />
        </HmNumberInputLabel>
        <HmNumberInputLabel
          placeholder="0"
          icon
          label="Kitchens"
          class="basis-1/3"
          defaultValue="2"
        >
          <WareHouseDuoIcon class="w-6 h-6 fill-lightText" />
        </HmNumberInputLabel>
      </div>
    </div>
    </div>
  </div>
</template>
