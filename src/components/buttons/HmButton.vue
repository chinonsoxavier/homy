<script setup lang="ts" >
// import { ref } from 'vue';



const props = defineProps({
    fillMode: {
        type: String,
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

// const buttonTheme = ref("");
var buttonStyle = "";

if (props.variant == 'admin') {
    if (props.fillMode == 'outline') {
        buttonStyle ="border text-white text-adminPrimary border-adminPrimary"
    } else if(props.fillMode == 'fill') {
        buttonStyle = "bg-adminPrimary text-white"
    } else {
        buttonStyle = ""
    }
}

console.log(buttonStyle);



</script>


<template>
    <button :class="buttonStyle"  class="text-center rounded-md duration-500 px-4 py-2  flex items-center justify-center" >
{{ text }}
</button>
</template>