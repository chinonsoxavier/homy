<script setup lang="ts" >
import { slider01 } from '../../../../assets/exports';
// import ImageComponent from '../../../../components/ReComponents/ImageComponent.vue';
</script>

<template>
    <div class="property-deals before:absolute w-full group h-[400px] relative flex items-center justify-center" >
        <div class="absolute group-hover:bottom-14 text-center duration-500 bottom-9" >
            <p class="text-white font-normal text-xl mb-2" >Lelowo</p>
            <p class="text-white text-base font-light" >1909 pdjsucxscx</p>
        </div>
        <img alt="slider 1" :src="slider01" class="rounded-md  min-h-[360px] w-full h-full object- object-fill" />
    </div>
</template>

<style scoped >

.property-deals::before {
  @apply rounded-2xl;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
  background: linear-gradient(
    9.93deg,
    #000000a1 0.33%,
    #00000082 35.5%,
    #0000 99.93%
  );
};

</style>