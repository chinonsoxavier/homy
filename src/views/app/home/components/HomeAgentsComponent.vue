<script setup lang="ts">
import { Shape5 } from '../../../../assets/exports';
import ImageComponent from '../../../../components/ReComponents/ImageComponent.vue';
</script>

<template>
    <div class="flex items-center justify-center flex-col" >
       <div class="max-width flex flex-col items-center justify-center" >
            <div class="flex items-center justify-between w-full" >
            <div class="text-left w-full" >
                <p class="text-5xl font-medium text-black text-left" >Our Agents </p>
                <p class="text-lg text-lightText font-normal my-7 text-left" >Lorem is placeholder text commonly used graphic.</p>
            </div>
            <div>
                <button class="py-2 px-4 whitespace-nowrap border border-adminPrimary rounded-md text-adminPrimary" >Meet Entire Team</button>
            </div>
            </div>

            <ImageComponent alt="agents" :src="Shape5" />

        </div>
    </div>
</template>