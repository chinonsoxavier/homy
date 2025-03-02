<script setup lang="ts" >
import { image1 } from '../../../assets/exports';
import EyeDuoIcon from '../../../components/icons/duo/EyeDuoIcon.vue';
import PencilSimpleLineDuoIcon from '../../../components/icons/duo/PencilSimpleLineDuoIcon.vue';
import TrashDuoIcon from '../../../components/icons/duo/TrashDuoIcon.vue';
import CaretIcon from '../../../components/icons/regular/CaretIcon.vue';
import IconComponent from '../../../components/ReComponents/IconComponent.vue';
import ImageComponent from '../../../components/ReComponents/ImageComponent.vue';
import Paginations from '../../../components/ReComponents/Paginations.vue';
</script>

<template>
    <div class="px-5 py-3 h-[88%] overflow-scroll ">
    <div class="flex h-[10%] items-center justify-between w-full ">
      <p class="text-[28px] font-mediu pop-medium text-darkText">Orders</p>
      <div class="flex items-center justify-end text-[15px] text-lightText">
        <span>Agent</span>
        <CaretIcon class="w-3 h-3 -rotate-90" />
        <span>Orders</span>
      </div>
    </div>
    <table class="overflow-x-scroll rounded-md bg-white p-3 w-full">
        <thead>
          <tr>
            <th class="text-left">
              <input type="checkbox" />
            </th>
            <th class="text-sm text-darkText text-left font-medium">
              Purchase ID
            </th>
            <th class="text-sm text-darkText text-left font-medium">
              Buyer Name
            </th>
            <th class="text-sm text-darkText text-left font-medium">
              Purchase Date
            </th>
            <th class="text-sm text-darkText text-left font-medium">
              Total Amount
            </th>
            <th class="text-sm text-darkText text-left font-medium">
              Payment Method
            </th>
            <th class="text-sm text-darkText text-left font-medium">
              Payment Status
            </th>
            <th class="text-sm text-darkText text-left font-medium">Action</th>
          </tr>
        </thead>
        <tbody class="my-4 overflow-x-scroll">
          <tr class="py-4">
            <td class="w-10">
              <input type="checkbox" name="" id="" />
            </td>
            <td class="text-sm py-5 text-lightText font-semibold">#201</td>
            <td class="text-sm py-5 text-lef w-44 text-lightText font-normal">
              <div class="flex items-center gap-2">
                <ImageComponent
                  alt="buyer image"
                  :src="image1"
                  rounded
                  class="max-w-8 min-w-8"
                />
                <p class="h whitespace-nowrap">Chinonso O. Xavier</p>
              </div>
            </td>
            <!-- <td class="text-xs py-5 text-lightText font-normal">#201</td> -->
            <td class="text-sm py-5 text-lightText font-normal">
              Oct 10, 2024
            </td>
            <td class="text-sm py-5 text-lightText font-normal">$45,842</td>
            <td class="text-sm py-5 text-lightText font-normal">Mastercard</td>
            <td class="text-sm py-5 text-lightText font-normal">
              <div
                class="bg-[#def3e6] w-min px-2 text-[rgba(92,193,132)] py-1 text-center text-xs font-medium"
              >
                Completed
              </div>
            </td>
            <td class="text-sm py-5 text-lightText font-normal w-32">
              <div class="flex gap-2 items-center justify-center">
                <IconComponent
                  class="rounded-sm bg-[#eef2f7] fill-[#323a46] hover:bg-[rgba(210,214,220)] duration-300 w-10 h-8"
                >
                  <EyeDuoIcon class="w-5 h-5" />
                </IconComponent>
                <IconComponent
                  class="rounded-sm bg-[rgba(96,74,227,.1)] fill-[#604ae3] hover:bg-[#604ae3] hover:fill-white duration-300 w-10 h-8"
                >
                  <PencilSimpleLineDuoIcon class="w-5 h-5" />
                </IconComponent>
                <IconComponent
                  class="rounded-sm bg-[rgba(233,103,103,.3)] fill-[#e96767] hover:fill-white hover:bg-[#e96767] duration-300 w-10 h-8"
                >
                  <TrashDuoIcon class="w-5 h-5" />
                </IconComponent>
              </div>
            </td>
          </tr>
          <tr class="py-4 bg-[#f9f9fc]">
            <td class="w-10">
              <input type="checkbox" name="" id="" />
            </td>
            <td class="text-sm py-5 text-lightText font-semibold">#201</td>
            <td class="text-sm py-5 text-lef w-44 text-lightText font-normal">
              <div class="flex items-center gap-2">
                <ImageComponent
                  alt="buyer image"
                  :src="image1"
                  rounded
                  class="max-w-8 min-w-8"
                />
                <p class="h whitespace-nowrap">Chinonso O. Xavier</p>
              </div>
            </td>
            <!-- <td class="text-xs py-5 text-lightText font-normal">#201</td> -->
            <td class="text-sm py-5 text-lightText font-normal">
              Oct 10, 2024
            </td>
            <td class="text-sm py-5 text-lightText font-normal">$45,842</td>
            <td class="text-sm py-5 text-lightText font-normal">Mastercard</td>
            <td class="text-sm py-5 text-lightText font-normal">
              <div
                class="bg-[#def3e6] w-min px-2 text-[rgba(92,193,132)] py-1 text-center text-xs font-medium"
              >
                Completed
              </div>
            </td>
            <td class="text-sm py-5 text-lightText font-normal w-32">
              <div class="flex gap-2 items-center justify-center">
                <IconComponent
                  class="rounded-sm bg-[#eef2f7] fill-[#323a46] hover:bg-[rgba(210,214,220)] duration-300 w-10 h-8"
                >
                  <EyeDuoIcon class="w-5 h-5" />
                </IconComponent>
                <IconComponent
                  class="rounded-sm bg-[rgba(96,74,227,.1)] fill-[#604ae3] hover:bg-[#604ae3] hover:fill-white duration-300 w-10 h-8"
                >
                  <PencilSimpleLineDuoIcon class="w-5 h-5" />
                </IconComponent>
                <IconComponent
                  class="rounded-sm bg-[rgba(233,103,103,.3)] fill-[#e96767] hover:fill-white hover:bg-[#e96767] duration-300 w-10 h-8"
                >
                  <TrashDuoIcon class="w-5 h-5" />
                </IconComponent>
              </div>
            </td>
          </tr>
          <tr class="py-4">
            <td class="w-10">
              <input type="checkbox" name="" id="" />
            </td>
            <td class="text-sm py-5 text-lightText font-semibold">#201</td>
            <td class="text-sm py-5 text-lef w-44 text-lightText font-normal">
              <div class="flex items-center gap-2">
                <ImageComponent
                  alt="buyer image"
                  :src="image1"
                  rounded
                  class="max-w-8 min-w-8"
                />
                <p class="h whitespace-nowrap">Chinonso O. Xavier</p>
              </div>
            </td>
            <!-- <td class="text-xs py-5 text-lightText font-normal">#201</td> -->
            <td class="text-sm py-5 text-lightText font-normal">
              Oct 10, 2024
            </td>
            <td class="text-sm py-5 text-lightText font-normal">$45,842</td>
            <td class="text-sm py-5 text-lightText font-normal">Mastercard</td>
            <td class="text-sm py-5 text-lightText font-normal">
              <div
                class="bg-[#def3e6] w-min px-2 text-[rgba(92,193,132)] py-1 text-center text-xs font-medium"
              >
                Completed
              </div>
            </td>
            <td class="text-sm py-5 text-lightText font-normal w-32">
              <div class="flex gap-2 items-center justify-center">
                <IconComponent
                  class="rounded-sm bg-[#eef2f7] fill-[#323a46] hover:bg-[rgba(210,214,220)] duration-300 w-10 h-8"
                >
                  <EyeDuoIcon class="w-5 h-5" />
                </IconComponent>
                <IconComponent
                  class="rounded-sm bg-[rgba(96,74,227,.1)] fill-[#604ae3] hover:bg-[#604ae3] hover:fill-white duration-300 w-10 h-8"
                >
                  <PencilSimpleLineDuoIcon class="w-5 h-5" />
                </IconComponent>
                <IconComponent
                  class="rounded-sm bg-[rgba(233,103,103,.3)] fill-[#e96767] hover:fill-white hover:bg-[#e96767] duration-300 w-10 h-8"
                >
                  <TrashDuoIcon class="w-5 h-5" />
                </IconComponent>
              </div>
            </td>
          </tr>
          <tr class="py-4 bg-[#f9f9fc]">
            <td class="w-10">
              <input type="checkbox" name="" id="" />
            </td>
            <td class="text-sm py-5 text-lightText font-semibold">#201</td>
            <td class="text-sm py-5 text-lef w-44 text-lightText font-normal">
              <div class="flex items-center gap-2">
                <ImageComponent
                  alt="buyer image"
                  :src="image1"
                  rounded
                  class="max-w-8 min-w-8"
                />
                <p class="h whitespace-nowrap">Chinonso O. Xavier</p>
              </div>
            </td>
            <!-- <td class="text-xs py-5 text-lightText font-normal">#201</td> -->
            <td class="text-sm py-5 text-lightText font-normal">
              Oct 10, 2024
            </td>
            <td class="text-sm py-5 text-lightText font-normal">$45,842</td>
            <td class="text-sm py-5 text-lightText font-normal">Mastercard</td>
            <td class="text-sm py-5 text-lightText font-normal">
              <div
                class="bg-[#fbe1e1] w-min px-2 text-[rgba(230,103,102)] py-1 text-center text-xs font-medium"
              >
                Canceled
              </div>
            </td>
            <td class="text-sm py-5 text-lightText font-normal w-32">
              <div class="flex gap-2 items-center justify-center">
                <IconComponent
                  class="rounded-sm bg-[#eef2f7] fill-[#323a46] hover:bg-[rgba(210,214,220)] duration-300 w-10 h-8"
                >
                  <EyeDuoIcon class="w-5 h-5" />
                </IconComponent>
                <IconComponent
                  class="rounded-sm bg-[rgba(96,74,227,.1)] fill-[#604ae3] hover:bg-[#604ae3] hover:fill-white duration-300 w-10 h-8"
                >
                  <PencilSimpleLineDuoIcon class="w-5 h-5" />
                </IconComponent>
                <IconComponent

                  class="rounded-sm bg-[rgba(233,103,103,.3)] fill-[#e96767] hover:fill-white hover:bg-[#e96767] duration-300 w-10 h-8"
                >
                  <TrashDuoIcon class="w-5 h-5" />
                </IconComponent>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Paginations/>
    </div>
</template>


<style scoped >
th,
td {
  @apply px-2 py-4 whitespace-nowrap;
}
</style>