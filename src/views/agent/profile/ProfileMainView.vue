<script setup lang="ts">
import { image1 } from "../../../assets/exports";
import HmButton from "../../../components/buttons/HmButton.vue";
import MreButton from "../../../components/buttons/HmButton.vue";
import CaretIcon from "../../../components/icons/regular/CaretIcon.vue";
import HmInputLabel from "../../../components/input/HmInputLabel.vue";
import HmLabelTextArea from "../../../components/input/HmLabelTextArea.vue";
import HmNumberInputLabel from "../../../components/input/HmNumberInputLabel.vue";
import HmSelectOption from "../../../components/input/HmSelectOption.vue";
import ImageComponent from "../../../components/ReComponents/ImageComponent.vue";
</script>
<template>
  <div class="px-5 h-[88%] overflow-y-scroll pt-5">
    <div class="flex items-center justify-between w-full mb-5">
      <p class="text-[28px] font-mediu pop-medium text-darkText">Profile</p>
      <div
        class="flex items-center justify-end text-[15px] tablet:hidden text-lightText"
      >
        <span>Agent</span>
        <CaretIcon class="w-3 h-3 -rotate-90" />
        <span>Profile</span>
      </div>
    </div>
    <div class="rounded-md bg-white my-5 p-8 shadow-md">
      <div class="flex items-center justify-start">
        <ImageComponent
          class="max-w-12 max-h-12 mr-3"
          rounded
          alt="agent profile picture"
          :src="image1"
        />
        <MreButton
          text="Upload new photo"
          variant="admin"
          fill-mode="outline"
          class="r rounded hover:bg-black hover:text-white hover:border-none"
        />
        <!-- <button>Upload new photo</button> -->
        <MreButton
          text="Delete"
          variant="admin"
          class="hover:text-adminPrimary"
        />
      </div>
      <div class="flex items-center justify-center gap-5 my-6 flex-wrap">
        <HmInputLabel class="basis-[100%]"> Username* </HmInputLabel
        ><HmInputLabel class="basis-1/3"> FirstName* </HmInputLabel
        ><HmInputLabel class="basis-1/3"> LastName* </HmInputLabel
        ><HmInputLabel class="basis-1/3"> Email* </HmInputLabel>
        <HmSelectOption class="basis-1/3"> Role* </HmSelectOption>
        <HmInputLabel class="basis-1/3"> Phone Number* </HmInputLabel
        ><HmInputLabel class="basis-1/3"> Website* </HmInputLabel>
        <HmLabelTextArea class="basis-[100%]" rows="6">
          About*
        </HmLabelTextArea>
      </div>
    </div>
    <div class="rounded-md bg-white my-5 p-8 shadow-md">
      <p class="text-[28px] font-mediu pop-medium text-darkText my-5">
        Address & Location
      </p>
      <div class="flex flex-wrap items-center justify-center gap-6">
        <HmInputLabel class="basis-[100%]"> Address* </HmInputLabel>
        <!-- <div cl"></div> -->
        <HmSelectOption class="basis-1/5" > Country* </HmSelectOption>
        <HmSelectOption class="basis-1/5" > City* </HmSelectOption>
        <HmNumberInputLabel class="basis-1/5" >
          Zip Code*
        </HmNumberInputLabel>
        <HmSelectOption class="basis-1/5" > State* </HmSelectOption>

      </div>
    </div>
    <div class="my-10 flex items-center justify-start" >
      <HmButton text="SAVE" variant="admin" fill-mode="fill" class="hover:bg-black hover:text-white" />
      <HmButton text="Cancel" variant="admin" class="hover:text-adminPrimary" />
    </div>
  </div>
</template>
