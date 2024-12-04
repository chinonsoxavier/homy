<script setup lang="ts">
// import EnvelopeSimpleDuoIcon from "../../../components/icons/duo/EnvelopeSimpleDuoIcon.vue";
import {slider1 } from "../../../assets/exports";
import CityDuoIcon from "../../../components/icons/duo/CityDuoIcon.vue";
import MagnifyingGlass from "../../../components/icons/duo/MagnifyingGlass.vue";
import CaretIcon from "../../../components/icons/regular/CaretIcon.vue";
import IconComponent from "../../../components/ReComponents/IconComponent.vue";
import ImageComponent from "../../../components/ReComponents/ImageComponent.vue";
// import IconComponent from "../../../components/ReComponents/IconComponent.vue";
</script>

<template>
  <div class="px-5 py-3 h-[90%] overflow-scroll ">
    <div class="flex h-[10%] items-center justify-between w-full ">
      <p class="text-[28px] font-mediu pop-medium text-darkText">Inbox</p>
      <div class="flex items-center justify-end text-[15px] text-lightText">
        <span>Agent</span>
        <CaretIcon class="w-3 h-3 -rotate-90" />
        <span>Inbox</span>
      </div>
    </div>
    <div class="flex h-[90%] shadow-lg mt5 bg-transparent rounded-md">
      <div
        class="flex-1 overflow-hidden max-w-96 border-r rounded-b-md text-xl font-medium text-darkText bg-white p-3 rounded-l-md"
      >
      <div class="h-[15%]" >

          <p>My Inbox</p>
          <div
          class="rounded-md mt-3 text-sm relative flex items-center justify-center border"
          >
          <MagnifyingGlass class="w-5 h-5 absolute left-1" />
          <input placeholder="Search..."
          class="bg-transparent pl-8 w-full h-full outline-none placeholder:text-sm placeholder:font-medium px-2 py-2 rounded-md"
          type="text"
          />
        </div>
        </div>

        <div class="flex gap-2 mt-3 flex-col h-[85%] pb-3 overflow-y-scroll" >
           <div class="duration-500 hover:bg-[#eee] w-full p-3 border rounded-md cursor-pointer" >
            <div class="flex items-center justify-between" >
                <p class="text-darkText text-base font-medium" >Chinonso Xavier</p>
                <p class="text-xs font-normal text-lightText" >1 min ago</p>
            </div>
            <div class="flex items-start justify-start my-1" >
                <p class="text-sm text-lightText font-medium" >Subject: Schedule Meeting</p>
            </div>
            <div class="text-xs font-normal text-lightText tracking-wider " >
              <p class="text-ellipsis" >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus eligendi ut ab libero quidem voluptas ipsum, facere corporis dolorum.
              </p>
            </div>
           </div> <div class="duration-500 hover:bg-[#eee] w-full p-3 border rounded-md cursor-pointer" >
            <div class="flex items-center justify-between" >
                <p class="text-darkText text-base font-medium" >Chinonso Xavier</p>
                <p class="text-xs font-normal text-lightText" >1 min ago</p>
            </div>
            <div class="flex items-start justify-start my-1" >
                <p class="text-sm text-lightText font-medium" >Subject: Schedule Meeting</p>
            </div>
            <div class="text-xs font-normal text-lightText tracking-wider " >
              <p class="text-ellipsis" >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus eligendi ut ab libero quidem voluptas ipsum, facere corporis dolorum.
              </p>
            </div>
           </div> <div class="duration-500 hover:bg-[#eee] w-full p-3 border rounded-md cursor-pointer" >
            <div class="flex items-center justify-between" >
                <p class="text-darkText text-base font-medium" >Chinonso Xavier</p>
                <p class="text-xs font-normal text-lightText" >1 min ago</p>
            </div>
            <div class="flex items-start justify-start my-1" >
                <p class="text-sm text-lightText font-medium" >Subject: Schedule Meeting</p>
            </div>
            <div class="text-xs font-normal text-lightText tracking-wider " >
              <p class="text-ellipsis" >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus eligendi ut ab libero quidem voluptas ipsum, facere corporis dolorum.
              </p>
            </div>
           </div> <div class="duration-500 hover:bg-[#eee] w-full p-3 border rounded-md cursor-pointer" >
            <div class="flex items-center justify-between" >
                <p class="text-darkText text-base font-medium" >Chinonso Xavier</p>
                <p class="text-xs font-normal text-lightText" >1 min ago</p>
            </div>
            <div class="flex items-start justify-start my-1" >
                <p class="text-sm text-lightText font-medium" >Subject: Schedule Meeting</p>
            </div>
            <div class="text-xs font-normal text-lightText tracking-wider " >
              <p class="text-ellipsis" >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus eligendi ut ab libero quidem voluptas ipsum, facere corporis dolorum.
              </p>
            </div>
           </div> <div class="duration-500 hover:bg-[#eee] w-full p-3 border rounded-md cursor-pointer" >
            <div class="flex items-center justify-between" >
                <p class="text-darkText text-base font-medium" >Chinonso Xavier</p>
                <p class="text-xs font-normal text-lightText" >1 min ago</p>
            </div>
            <div class="flex items-start justify-start my-1" >
                <p class="text-sm text-lightText font-medium" >Subject: Schedule Meeting</p>
            </div>
            <div class="text-xs font-normal text-lightText tracking-wider " >
              <p class="text-ellipsis" >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus eligendi ut ab libero quidem voluptas ipsum, facere corporis dolorum.
              </p>
            </div>
           </div>
        </div>
      </div>
      <div class="flex-1 bg-white">
        <div class="px-5 py-3 flex items-start justify-start gap-2 h-[20%]" >
           <IconComponent class="bg-[#eee]" >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="current" viewBox="0 0 256 256"><path d="M192,96a64,64,0,1,1-64-64A64,64,0,0,1,192,96Z" opacity="0.2"></path><path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path></svg>
            <!-- <EnvelopeSimpleDuoIcon class="w-5 h-5" /> -->
           </IconComponent>
           <div class="" >
                <p class="text-darkText text-[19px] font-medium" >Chinonso Xavier</p>
                                <p class="text-[15px] text-lightText font-light pop-regular" >Subject: Schedule Meeting</p>
                <p class="text-[15px] text-lightText font-light pop-regular" >Email: chinonsoxavier26@gmail.com</p>

            </div>
        </div>
        <hr>
        <div class="p-3 py-5 h-[80%] overflow-y-scroll" >
            <ImageComponent alt="property image" :src="slider1" class="c max-w-80 object-contain max-h-52 mb-3 "/>
            <p class="text-darkText" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur optio amet earum quas temporibus odio fuga placeat quia, neque blanditiis!</p>
            <button class="py-1 px-2 bg-adminPrimary text-white flex gap-1 mt-4" ><CityDuoIcon class="w-5 h-5 fill-white"/><p>View Details</p>
            </button>
        </div>
      </div>
    </div>
  </div>
</template>
