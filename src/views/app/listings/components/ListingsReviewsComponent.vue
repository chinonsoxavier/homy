<script setup lang="ts">
import { image1 } from '../../../../assets/exports';
import ThumbsDownDuoIcon from '../../../../components/icons/duo/ThumbsDownDuoIcon.vue';
import ThumbsUpDuoIcon from '../../../../components/icons/duo/ThumbsUpDuoIcon.vue';
import StartFilledIcon from '../../../../components/icons/filled/StartFilledIcon.vue';
import ImageComponent from '../../../../components/ReComponents/ImageComponent.vue';
</script>

<template>
    <div class="flex bg-[d] gap-3 w-full border-b p-5 items-start justify-start" >
        <ImageComponent alt="profile pic" :src="image1" rounded class="max-w-14" />

        <div class="flex flex-col items-start gap-5 justify-between w-full " >
            <div class="w-full " >
            <div class="flex items-center flex-wrap tablet:flex-col tablet:items-start tablet:gap-3 justify-between w-full" >
                <p>Chinonso Xavier</p>
                <div class="" >
                    <span class="whitespace-nowrap" >(4.7 Rating)</span>
                    <span class="flex items-center" >
                        <StartFilledIcon class="w-4 h-4 fill-orange-600"/>
                        <StartFilledIcon class="w-4 h-4 fill-orange-600"/>
                        <StartFilledIcon class="w-4 h-4 fill-orange-600"/>
                        <StartFilledIcon class="w-4 h-4 fill-orange-600"/>
                        <StartFilledIcon class="w-4 h-4 fill-orange-600"/>
                    </span>
                </div>
            </div>
            <p class="text-lightText font-normal tablet:mt-3" >
                1 Dec, 2024
            </p>
        </div>
        <div class="" >
    <p class="text-lightText mobile:text-sm" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae!
    </p>
        </div>
        <div class="flex items-center justify-start gap-5" >
            <ThumbsUpDuoIcon class="w-5 h-5" />
            <ThumbsDownDuoIcon class="w-5 h-5" />
        </div>
        </div>
        
    </div>
</template>