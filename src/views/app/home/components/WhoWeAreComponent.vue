<script setup lang="ts">
import { whoWeAreImage, whoWeAreImage2, whoWeAreImage3 } from "../../../../assets/exports";
import PlayDuoIcon from "../../../../components/icons/duo/PlayDuoIcon.vue";
import CheckIcon from "../../../../components/icons/regular/CheckIcon.vue";
import IconComponent from "../../../../components/ReComponents/IconComponent.vue";
import ImageComponent from "../../../../components/ReComponents/ImageComponent.vue";
</script>

<template>
  <div class="flex flex-col items-center justify-center tablet:h-max h-[110vh]">
    <div class="px-2 h-full flex gap-5 w-full tablet:flex-col ">
      <div class="h-full tablet:flex tablet:items-center tablet:justify-center tablet:flex-col flex-1 relative">
        <p class="text-[44px] mobile:text-3xl font-medium relative z-10 p-7 tablet:text-center">
          Secure your family's dream home.
        </p>
        <div class="flex items-center justify-between z-10 relative px-10">
          <IconComponent
            class="fill-white base:absolute w-12 duration-500 h-12 bg-black hover:bg-adminPrimary"
          >
            <PlayDuoIcon class="w-6 h-6" />
          </IconComponent>

          <div class="bg-white mobile:p-4 base:z-10 p-6 rounded-2xl text-center max-w-60 ">
            <p class="text-5xl mobile:text-4xl font-medium mb-3">07+</p>
            <p class="text-lightText text-lg mobile:text-sm" >Years Experience with proud.</p>
          </div>
        </div>
        <div class="absolute z-20 bottom-0 p-6 tablet:relative" >
            <ImageComponent alt="who we are happy clients ratings" :src="whoWeAreImage2" class="max-w-48" />
        </div>
        <div>
          
        </div>
        <ImageComponent
          alt="who we are image"
          :src="whoWeAreImage"
          class="rounded-2xl absolute inset-0 h-full w-full"
        />
      </div>
      <div class="h-full flex-1 relative">
        <div class="relative z-10 h-full p-10 base:p-3" >
        <div class="bg-white flex flex-col items-center justify-between relative z-10 h-full p-10 tablet:p-3 rounded-xl" >
          <div>
            <p class="text-2xl text-darkText font-semibold" >Who We Are?</p>
            <p class="text-lightText text-lg my-7 tracking-wide " >Your premier partner in real estate.
              Transforming properties into dreams. Let us guide you home with expertise.</p>
            </div>
<hr class="bg-darkText w-full h-1" >
<div class="flex items-center justify-between tablet:gap-3 py-10 tablet:py-5" >
    <div>
        <p class="text-4xl pop-semibold tablet:text-2xl text-darkText" >1.7K+</p>
        <p class="text-sm font-normal text-lightText " >Completed Projects</p>
    </div>
    <div>
        <p class="text-4xl pop-semibold text-darkText tablet:text-2xl" >1.3M+</p>
        <p class="text-sm font-normal text-lightText" >Happy Customers</p>
    </div>
</div>
<hr class="bg-darkText w-full h-1 tablet:mb-5" >
<div class="py-10 base:py-0 flex flex-col items-center justify-between" >
    <div class="flex-1 flex flex-col gap-3 w-full" >
    <div class="flex items-center justify-start gap-3" >
       <CheckIcon class="w-5 h-5"/>
       <p  class="text-lg font-medium text-darkText">Loan & low Interest facility</p>
    </div>
      <div class="flex items-center justify-start gap-3" >
       <CheckIcon class="w-5 h-5"/>
       <p  class="text-lg font-medium text-darkText">Loan & low Interest facility</p>
    </div>  <div class="flex items-center justify-start gap-3" >
       <CheckIcon class="w-5 h-5"/>
       <p  class="text-lg font-medium text-darkText">Loan & low Interest facility</p>
    </div>
    </div>
    <div class="py-5 flex justify-start w-full" ><button class="bg-adminPrimary text-white py-2 rounded-md text-lg px-7" >More Details</button>

    </div>
</div>

        </div>
        <ImageComponent
          alt="who we are image"
          :src="whoWeAreImage3"
          class="rounded-2xl absolute inset-0"
        />
      </div>
      </div>
    </div>
  </div>
</template>
