<script setup lang="ts" >
import HomePropertyListingComponent from './HomePropertyListingComponent.vue';
</script>

<template>
    <div class="flex flex-col items-center justify-center " >
        <div class="max-width flex flex-col items-center justify-center " >
            <div class="text-left w-full" >
                <p class="text-3xl font-medium md:text-4xl lg:text-5xl tablet:text-center text-black text-left " >New Listings </p>
                <p class="text-lg text-lightText font-normal mobile:text-center mobile:text-base my-7 text-left" >Explore latest & featured properties for sale.</p>
            </div>
        </div>
        <div class="flex flex-wrap gap-3 items-center w-full justify-center px-10 max-width" >
           <HomePropertyListingComponent/>
           <HomePropertyListingComponent/>
           <HomePropertyListingComponent/>
           <HomePropertyListingComponent/>
           <HomePropertyListingComponent/>
           <HomePropertyListingComponent/>
        </div>
    </div>
</template>