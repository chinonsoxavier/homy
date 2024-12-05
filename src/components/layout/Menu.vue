<script setup lang="ts">
import { computed, ref } from "vue";
import { useMainStore } from "../../utilities/store";
import ArrowUpRightIcon from "../icons/regular/ArrowUpRightIcon.vue";
import Logo from "../ReComponents/Logo.vue";
import LockSimpleDuoIcon from "../icons/duo/LockSimpleDuoIcon.vue";

const store = useMainStore();

const menuOpen = computed(() => store.menuOpen);
const windowWidth = ref(window.innerWidth);

window.addEventListener("resize", () => {
  windowWidth.value = window.innerWidth;
});

window.removeEventListener("resize", () => {
  windowWidth.value = window.innerWidth;
});
</script>

<template>
  <div
    :class="[
      menuOpen && windowWidth <= 1000
        ? 'translate-x-0'
        : 'trans -translate-x-full',
    ]"
    class="overflow-hidden w-[800px] mobile:max-w-[70vw] max-w-[300px] shadow-2xl bg-white fixed h-screen z-50 left-0 duration-500"
  >
    <div class="p-3 mb-10">
      <Logo />
    </div>
    <div class="h-full flex flex-col items-start gap-8 p-5 justify-start">
      <p class="text-lg text-darkText font-medium">Dashboard</p>
      <p class="text-lg text-darkText font-medium">Home</p>
      <p class="text-lg text-darkText font-medium">Listing</p>
      <p class="text-lg text-darkText font-medium">Pages</p>
      <p class="text-lg text-darkText font-medium">Blog</p>

      <button
        class="py-3 tablet:py-3 mobile:flex hidden px-5 items-center gap-3 rounded-md border border-adminPrimary text-adminPrimary fill-adminPrimary justify-center"
      >
        <LockSimpleDuoIcon class="w-5 h-5 fill-darkText" />
        <p>Log In</p>
      </button>
     
      <button
        class="py-3 tablet:py-2 tablet:flex px-5 hidden items-center gap-3 rounded-md border bg-adminPrimary text-white fill-white justify-center"
      >
        <p>Sign In</p>
        <ArrowUpRightIcon class="w-5 h-5" />
      </button>
    </div>
  </div>
</template>
