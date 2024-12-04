<script setup lang="ts" >
import ArrowUpRightDuoIcon from '../../../../components/icons/duo/ArrowUpRightDuoIcon.vue';
import BathTubDuoIcon from '../../../../components/icons/duo/BathTubDuoIcon.vue';
import BedDuoIcon from '../../../../components/icons/duo/BedDuoIcon.vue';
import KitchenDuoIcon from '../../../../components/icons/duo/KitchenDuoIcon.vue';
import WareHouseDuoIcon from '../../../../components/icons/duo/WareHouseDuoIcon.vue';
import IconComponent from '../../../../components/ReComponents/IconComponent.vue';
</script>

<template>
    <div class="bg-white p-10 rounded-lg shadow-md" >
        <p class="text-3xl base:text-xl font-medium text-darkText text-left" >Property Overview</p>
        <div class="flex items-stretch flex-wrap justify-between h-full gap-10" >
            <div class="flex items-center justify-between flex-1" >
            <div class="flex flex-col text-start items-start justify-start my-7 gap-2" >
                <IconComponent class="" >
                    <ArrowUpRightDuoIcon class="w-8 h-8" />
                </IconComponent>
               <p class="text-xl font-normal text-darkText base:text-base whitespace-nowrap min-w-[90px]" >Sqft. 3,720</p>
            </div>
            <div class="h-[60%] bg-[#eee] w-[1px] rotate-[20deg]" ></div>
            </div>
            <div class="flex items-center justify-between flex-1" >
            <div class="flex flex-col text-start items-start justify-start my-7 gap-2" >
                <IconComponent class="border-darkText" >
                    <BedDuoIcon class="w-8 h-8" />
                </IconComponent>
               <p class="text-xl font-normal text-darkText base:text-base whitespace-nowrap min-w-[90px]" >Bed. 03</p>
            </div>
            <div class="h-[60%] bg-[#eee] w-[1px] rotate-[20deg]" ></div>
            </div>
            <div class="flex items-center justify-between flex-1" >
            <div class="flex flex-col text-start items-start justify-start my-7 gap-2" >
                <IconComponent class="border-darkText" >
                    <BathTubDuoIcon class="w-8 h-8" />
                </IconComponent>
               <p class="text-xl font-normal text-darkText base:text-base whitespace-nowrap min-w-[90px]" >Bath. 02</p>
            </div>
            <div class="h-[60%] bg-[#eee] w-[1px] rotate-[20deg]" ></div>
            </div>
            <div class="flex items-center justify-between flex-1" >
            <div class="flex flex-col text-start items-start justify-start my-7 gap-2" >
                <IconComponent class="w-8 h-8  border-darkText" >
                    <KitchenDuoIcon class="w-8 h-8" />
                </IconComponent>
               <p class="text-xl font-normal text-darkText base:text-base whitespace-nowrap min-w-[90px]" >Kitchen. 01</p>
            </div>
            <div class="h-[60%] bg-[#eee] w-[1px] rotate-[20deg]" ></div>
            </div>  
             <div class="flex items-center justify-between flex-1" >
            <div class="flex flex-col text-start items-start justify-start my-7 gap-3" >
                <IconComponent class="w-8 h-8  border-darkText" >
                    <WareHouseDuoIcon class="w-8 h-8" />
                </IconComponent>
               <p class="text-xl font-normal text-darkText base:text-base whitespace-nowrap min-w-[90px]" >Type. Apartment</p>
            </div>
            </div>
        </div>
    </div>
</template>