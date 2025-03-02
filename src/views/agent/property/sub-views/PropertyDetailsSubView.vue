<script setup lang="ts" >
import CaretIcon from '../../../../components/icons/regular/CaretIcon.vue';
import DropFile from './components/DropFile.vue';

</script>

<template>
   <div class="px-5 py-3 h-full overflow-scroll ">
    <div class="flex h-[10%] items-center justify-between w-full ">
      <p class="text-[28px] font-mediu pop-medium text-darkText">Property Details</p>
      <div class="flex items-center justify-end text-[15px] text-lightText">
        <span>Agent</span>
        <CaretIcon class="w-3 h-3 -rotate-90" />
        <span>Property Details</span>
      </div>
    </div>
        <div class="flx h-[90%] mt-5 bg-transparent rounded-md">
    <div class="p-5 h-min bg-white rounded-md shadow w-full">
                <DropFile/>
            </div>
            <div class="p-5 bg-white rounded-md shadow w-full my-5">
               <p class="text-lg text-lightText font-medium" >Property Information</p>
         </div>
        </div>
    </div>
</template>