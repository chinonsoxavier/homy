<script setup lang="ts">
// import EnvelopeSimpleDuoIcon from "../../../components/icons/duo/EnvelopeSimpleDuoIcon.vue";
import { slider1 } from "../../../assets/exports";
import HmButton from "../../../components/buttons/HmButton.vue";
// import CityDuoIcon from "../../../components/icons/duo/CityDuoIcon.vue";
import MagnifyingGlass from "../../../components/icons/duo/MagnifyingGlass.vue";
import CaretIcon from "../../../components/icons/regular/CaretIcon.vue";
// import HmInput from "../../../components/input/HmInput.vue";
import IconComponent from "../../../components/ReComponents/IconComponent.vue";
import ImageComponent from "../../../components/ReComponents/ImageComponent.vue";
// import IconComponent from "../../../components/ReComponents/IconComponent.vue";
</script>

<template>
  <div class="px-5 py-3 h-[88%] overflow-scroll">
    <div class="flex h-[10%] items-center justify-between w-full">
      <p class="text-[28px] font-mediu pop-medium text-darkText">Inbox</p>
      <div class="flex items-center justify-end text-[15px] text-lightText">
        <span>Agent</span>
        <CaretIcon class="w-3 h-3 -rotate-90" />
        <span>Inbox</span>
      </div>
    </div>
    <div class="flex h-[90%] shadow-lg mt-5 bg-transparent rounded-md">
      <div
        class="flex-1 overflow-hidden max-w-96 border-r rounded-b-md text-xl font-medium text-darkText bg-white p-5 rounded-l-md"
      >
        <div class="h-[18%]">
          <div class="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="iconify iconify--solar align-middle"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M1 12c0-5.185 0-7.778 1.61-9.39C4.223 1 6.816 1 12 1s7.778 0 9.39 1.61C23 4.223 23 6.816 23 12s0 7.778-1.61 9.39C19.777 23 17.184 23 12 23s-7.778 0-9.39-1.61C1 19.777 1 17.184 1 12"
                opacity=".5"
              ></path>
              <path
                fill="currentColor"
                d="M2.61 21.389c1.612 1.61 4.205 1.61 9.39 1.61s7.778 0 9.39-1.61c1.492-1.493 1.601-3.829 1.61-8.29h-3.476c-.996 0-1.494 0-1.931.202c-.438.201-.762.58-1.41 1.335l-.666.777c-.648.756-.972 1.134-1.41 1.335s-.935.202-1.93.202h-.353c-.996 0-1.494 0-1.931-.202c-.438-.2-.762-.579-1.41-1.335l-.666-.777c-.648-.756-.972-1.134-1.41-1.335s-.935-.201-1.93-.201H1c.008 4.46.118 6.796 1.61 8.289"
              ></path>
            </svg>
            <p>Inbox Mail</p>
          </div>
          <div
            class="rounded-md my-3 text-sm relative flex items-center justify-center border"
          >
            <MagnifyingGlass class="w-5 h-5 absolute left-1" />
            <input
              placeholder="Search..."
              class="bg-transparent pl-8 w-full h-full outline-none placeholder:text-sm placeholder:font-medium px-2 py-2 rounded-md"
              type="text"
            />
          </div>
        </div>

        <div class="flex gap-2 mt-3 flex-col h-[82%] pb-3 overflow-y-scroll">
          <div
            class="duration-500 hover:bg-[#eee] w-full p-3 border rounded-md cursor-pointer"
          >
            <div class="flex items-center justify-between">
              <p class="text-darkText text-base font-medium">Chinonso Xavier</p>
              <p class="text-xs font-normal text-lightText">1 min ago</p>
            </div>

            <div class="text-xs font-normal text-lightText tracking-wider">
              <p class="text-ellipsis">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
                eligendi ut ab libero quidem voluptas ipsum, facere corporis
                dolorum.
              </p>
            </div>
          </div>
          <div
            class="duration-500 hover:bg-[#eee] w-full p-3 border rounded-md cursor-pointer"
          >
            <div class="flex items-center justify-between">
              <p class="text-darkText text-base font-medium">Chinonso Xavier</p>
              <p class="text-xs font-normal text-lightText">1 min ago</p>
            </div>

            <div class="text-xs font-normal text-lightText tracking-wider">
              <p class="text-ellipsis">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
                eligendi ut ab libero quidem voluptas ipsum, facere corporis
                dolorum.
              </p>
            </div>
          </div>
          <div
            class="duration-500 hover:bg-[#eee] w-full p-3 border rounded-md cursor-pointer"
          >
            <div class="flex items-center justify-between">
              <p class="text-darkText text-base font-medium">Chinonso Xavier</p>
              <p class="text-xs font-normal text-lightText">1 min ago</p>
            </div>

            <div class="text-xs font-normal text-lightText tracking-wider">
              <p class="text-ellipsis">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
                eligendi ut ab libero quidem voluptas ipsum, facere corporis
                dolorum.
              </p>
            </div>
          </div>
          <div
            class="duration-500 hover:bg-[#eee] w-full p-3 border rounded-md cursor-pointer"
          >
            <div class="flex items-center justify-between">
              <p class="text-darkText text-base font-medium">Chinonso Xavier</p>
              <p class="text-xs font-normal text-lightText">1 min ago</p>
            </div>

            <div class="text-xs font-normal text-lightText tracking-wider">
              <p class="text-ellipsis">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
                eligendi ut ab libero quidem voluptas ipsum, facere corporis
                dolorum.
              </p>
            </div>
          </div>
          <div
            class="duration-500 hover:bg-[#eee] w-full p-3 border rounded-md cursor-pointer"
          >
            <div class="flex items-center justify-between">
              <p class="text-darkText text-base font-medium">Chinonso Xavier</p>
              <p class="text-xs font-normal text-lightText">1 min ago</p>
            </div>

            <div class="text-xs font-normal text-lightText tracking-wider">
              <p class="text-ellipsis">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
                eligendi ut ab libero quidem voluptas ipsum, facere corporis
                dolorum.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-1 bg-white">
        <div class="px-5 py-3 h-[20%]">
          <div class="flex items-center justify-between">
            <div class="flex items-start justify-start gap-2">
              <IconComponent class="bg-[#eee]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="current"
                  viewBox="0 0 256 256"
                >
                  <path
                    d="M192,96a64,64,0,1,1-64-64A64,64,0,0,1,192,96Z"
                    opacity="0.2"
                  ></path>
                  <path
                    d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"
                  ></path>
                </svg>
                <!-- <EnvelopeSimpleDuoIcon class="w-5 h-5" /> -->
              </IconComponent>
              <div class="">
                <p class="text-darkText text-[19px] font-medium">
                  Chinonso Xavier
                </p>

                <p class="text-[14px] text-lightText font-regular pop-regular">
                  <span class="text- font-medium">Email : </span>
                  chinonsoxavier26@gmail.com
                </p>
             
                 <p class="text-[15px] text-lightText font-regular pop-regular">
            <span class="text- font-medium">From : </span>
            <router-link to="/listing/ds hdchsdcscds">Chinonso Xavier Onyeachosim</router-link>
          </p>
              </div>
            </div>
            <p class="text-lightText font-medium text-sm">
              Mon ,1 Apr 2024 ,12:00
            </p>
            
          </div>
        </div>
        <hr />
        <div class="p-3 py-5 h-[60%] overflow-y-scroll">
          <p class="text-[15px] text-lightText font-regular pop-regular">
            <span class="text- font-medium">Property Id : </span>
            <router-link to="/listing/ds hdchsdcscds">123456789</router-link>
          </p>
             <p class="text-[15px] text-lightText font-regular pop-regular">
                  <span class="text- font-medium">Client Phone Number : </span>
                   09168945115
                </p>
         
          <div
            class="flex gap-1 p-2 my-4 rounded-md items-center justify-center bg-[rgba(238,242,247)]"
          >
            <ImageComponent
              alt="property image"
              :src="slider1"
              class="max object-contain max-h-52"
            />
          </div>
          <p class="text-sm text-darkText">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consectetur optio amet earum quas temporibus odio fuga placeat quia,
            neque blanditiis!
          </p>
          <!-- <button class="py-1 px-2 bg-adminPrimary text-white flex gap-1 mt-4">
            <CityDuoIcon class="w-5 h-5 fill-white" />
            <p>View Details</p>
          </button> -->
        </div>
        <div class="h-[20%] flex items-center justify-center border-t w-full">
          <div class="px-5 py-3 bg- hidden items-start justify-start gap-2">
            <IconComponent class="bg-[#eee] w-8 h-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                fill="current"
                viewBox="0 0 256 256"
              >
                <path
                  d="M192,96a64,64,0,1,1-64-64A64,64,0,0,1,192,96Z"
                  opacity="0.2"
                ></path>
                <path
                  d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"
                ></path>
              </svg>
              <!-- <EnvelopeSimpleDuoIcon class="w-5 h-5" /> -->
            </IconComponent>
            <div>
              <p class="text-[15px] text-lightText font-regular pop-regular">
                <span class="text-darkText">To :</span>
                chinonsoxavier26@gmail.com
              </p>
            </div>
          </div>
          <div class="p-2 flex items-end w-full gap-2">
            <textarea
              class="resize-none w-full p-2 border rounded-lg placeholder:font-regular placeholder:text-lightText outline-none"
              cols="1"
              rows="2"
              placeholder="Type Message..."
            ></textarea>
            <HmButton fillMode="fill" text="Send" class="h-min" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
