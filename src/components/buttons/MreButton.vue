<script setup lang="ts" >
import { ref } from 'vue';



const props = defineProps({
    outline: {
        type: Boolean,
        default: false
    },
    text: {
        type: String,
    },
    variant: {
        type: String,
        default: "admin"
    }
});

const buttonTheme = ref("");

switch (props.variant) {
    case "admin":
        buttonTheme.value = 'admin'
        break;

    default:
        break;
}

</script>


<template>
    <div :class=""  class="text-center flex items-center justify-center" >
        <slot/>
    </div>
</template>