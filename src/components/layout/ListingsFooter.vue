<script setup lang="ts">
import FacebookFilledIcon from "../icons/filled/FacebookFilledIcon.vue";
import InstagramFilledIcon from "../icons/filled/nstagramFilledIcon.vue";
import XTwitterFilledIcon from "../icons/filled/XTwitterFilledIcon.vue";
import IconComponent from "../ReComponents/IconComponent.vue";
// import Logo from "../ReComponents/Logo.vue";
</script>

<template>
  <div class="flex items-center flex-col justify-center py-12">
    <div class="max-width flex items-stretch justify-center">
      <div
        class="relative flex-1 flex items-center justify-center max-w-[380px]"
      >
       
        <div
          class="px-10 h-[90%] py-10 flex flex-col items-center justify-around rounded-md absolute"
        >
          <div class="flex flex-col items-center justify-center">
            <!-- <Logo /> -->
            <p class="text-left w-full">Logo</p>
            <p class="text-lightText font-normal mt-5 text-lg">
              11910 Clyde Rapid Suite 70, <br />
              Lagos,Nigeria
            </p>
          </div>
          <div class="flex flex-col items-start w-full justify-start">
            <p class="text-xs text-lightText font-medium">CONTACT</p>
            <p
              class="text-lightText text-lg cursor-pointer font-normal hover:text-adminPrimary duration-500 underline"
            >
              Chihomes@demo.com
            </p>
          </div>
          <div class="flex gap-3 items-center w-full justify-start">
            <IconComponent
              class="border duration-500 hover:bg-black hover:fill-white border-darkText"
            >
              <FacebookFilledIcon class="w-7 h-7" />
            </IconComponent>
            <IconComponent
              class="border duration-500 hover:bg-black hover:fill-white border-darkText"
            >
              <InstagramFilledIcon class="w-7 h-7" />
            </IconComponent>
            <IconComponent
              class="border duration-500 hover:bg-black hover:fill-white border-darkText"
            >
              <XTwitterFilledIcon class="w-6 h-6" />
            </IconComponent>
          </div>
        </div>
      </div>
      <div class="flex items-start justify-between flex-1 py-20">
        <div class="px-10 border-r h-full border-r-darkText">
            <div class="flex flex-col h-full items-start justify-between gap-2">
          <p class="text-black font-medium text-2xl ">Links</p>
            <p
              class="duration-500 text-lg font-normal text-lightText hover:text-adminPrimary cursor-pointer"
            >
              Home
            </p>
            <p
              class="duration-500 text-lg font-normal text-lightText hover:text-adminPrimary cursor-pointer"
            >
              Membership
            </p>
            <p
              class="duration-500 text-lg font-normal text-lightText hover:text-adminPrimary cursor-pointer"
            >
              About Company
            </p>
            <p
              class="duration-500 text-lg font-normal text-lightText hover:text-adminPrimary cursor-pointer"
            >
              Blog
            </p>  <p
              class="duration-500 text-lg font-normal text-lightText hover:text-adminPrimary cursor-pointer"
            >
              Explore Careers
            </p>  <p
              class="duration-500 text-lg font-normal text-lightText hover:text-adminPrimary cursor-pointer"
            >
              Pricing
            </p>  <p
              class="duration-500 text-lg font-normal text-lightText hover:text-adminPrimary cursor-pointer"
            >
              Blog
            </p>  <p
              class="duration-500 text-lg font-normal text-lightText hover:text-adminPrimary cursor-pointer"
            >
              Dashboard
            </p>
          </div>
        </div> 
        <div class="px-10 border-r h-full border-r-darkText bg]">
            <div class="flex flex-col h-full  gap-2 items-start justify-start">
          <p class="text-black font-medium text-2xl ">Legal</p>
            <p
              class="duration-500 text-lg font-normal text-lightText hover:text-adminPrimary cursor-pointer"
            >
              Terms & conditions
            </p>
            <p
              class="duration-500 text-lg font-normal text-lightText hover:text-adminPrimary cursor-pointer"
            >
              Cookie
            </p>
            <p
              class="duration-500 text-lg font-normal text-lightText hover:text-adminPrimary cursor-pointer"
            >
              Privacy policy
            </p>
            <p
              class="duration-500 text-lg font-normal text-lightText hover:text-adminPrimary cursor-pointer"
            >
              Faq’s
            </p> 
          </div>
        </div> 
        <div class="px-10 h-full">
            <div class="flex flex-col h-full items-start justify-evenly">
          <p class="text-black font-medium text-2xl ">New Listing</p>
            <p
              class="duration-500 text-lg font-normal text-lightText hover:text-adminPrimary cursor-pointer"
            >
              ​Buy Apartments
            </p>
            <p
              class="duration-500 text-lg font-normal text-lightText hover:text-adminPrimary cursor-pointer"
            >
              Buy Condos
            </p>
            <p
              class="duration-500 text-lg font-normal text-lightText hover:text-adminPrimary cursor-pointer"
            >
             Rent Houses
            </p>
            <p
              class="duration-500 text-lg font-normal text-lightText hover:text-adminPrimary cursor-pointer"
            >
              Rent Industrial
            </p>  <p
              class="duration-500 text-lg font-normal text-lightText hover:text-adminPrimary cursor-pointer"
            >
             Buy Villas
            </p>  <p
              class="duration-500 text-lg font-normal text-lightText hover:text-adminPrimary cursor-pointer"
            >
              Pricing
            </p>  <p
              class="duration-500 text-lg font-normal text-lightText hover:text-adminPrimary cursor-pointer"
            >
              Rent Office
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center py-10 max-width" >
        <hr class="w-full py-5" >
        <p class="text-sm" >Copyright @2024 Chihomes</p>
    </div>
  </div>
</template>
