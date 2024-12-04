<script setup lang="ts" >

defineProps({
    text: {
        type:String
    },
    label: {
   type:String
    }
})

</script>

<template>
    <div class="flex flex-col items-center justify-center gap-3" >
        <div>
            <slot />
        </div>
        <p class="text-lightText text-lg font-normal" >{{ label }}</p>
        <p class="text-xl tablet:font-normal tablet:text-lightText text-center text-darkText font-normal tablet:max-w-[520px]" >{{ text }}</p>
    </div>
</template>