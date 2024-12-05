<script setup lang="ts">
import { onBeforeMount, onMounted, onUnmounted, ref } from "vue";
import LockSimpleDuoIcon from "../icons/duo/LockSimpleDuoIcon.vue";
import ArrowUpRightIcon from "../icons/regular/ArrowUpRightIcon.vue";
//import { store } from "../../utilities/store";
// import { store } from "../../utilities/store";
import { useMainStore } from "../../utilities/store";
// import { storeToRefs } from "pinia";
import { computed } from "vue";
import Logo from "../ReComponents/Logo.vue";
const navbarHeight = ref(null);
const navbar = ref(null);

const store = useMainStore();

// const { isMenuVisible } = storeToRefs(store)
// const { toggleMenu } = storeToRefs(store);

onMounted(() => {
  navbarHeight.value = navbar.value.offsetHeight;
  console.log(navbarHeight);
});

const menuOpen = computed(() => store.menuOpen);
const toggleMenu = () => {
  store.toggleMenu();
};
const scrollThreshold = 400;
var isFixed = ref(false);
const windowWidth = ref(window.innerWidth);

const FixedNavbarScroll = () => {
  isFixed.value = scrollThreshold <= window.scrollY ? true : false;
  windowWidth.value = window.innerWidth;
  console.log(navbarHeight.value);
  // console.log(window.scrollY + "scrollY");
  // console.log(this.scrollThreshold + "threshold");
};

// onMounted(() => {

// });

onMounted(() => {
  window.addEventListener("scroll", FixedNavbarScroll);
  window.addEventListener("resize", FixedNavbarScroll);
});

onBeforeMount(() => {
  window.addEventListener("scroll", FixedNavbarScroll);
  window.addEventListener("resize", FixedNavbarScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", FixedNavbarScroll);
  window.removeEventListener("resize", FixedNavbarScroll);
});

// import Logo from '../ReComponents/Logo.vue';
</script>

<template>
  <header class="">
    <div
      ref="navbar"
      class="flex items-center tablet:py-4 justify-center z-40 relativ py-8 w-full duration-500"
      :class="[isFixed ? 'fixed top-0 bg-white shadow-md ' : 'relative']"
    >
      <div class="flex items-center justify-between py-5 max-width">
        <Logo class="w-10 fill-black" />
        <!-- Logo -->

        <div class="flex gap-3 items-center justify-center searchP:hidden">
          <p class="text-lg text-darkText font-medium">Dashboard</p>
          <p class="text-lg text-darkText font-medium">Home</p>
          <p class="text-lg text-darkText font-medium">Listing</p>
          <p class="text-lg text-darkText font-medium">Pages</p>
          <p class="text-lg text-darkText font-medium">Blog</p>
        </div>

        <div class="flex items-center tablet:gap-2 justify-end gap-4">
          <router-link to="/auth/login">
          <button
            class="py-3 tablet:px-3 tablet:py-2 mobile:hidden px-5 flex items-center gap-3 rounded-md border border-adminPrimary text-adminPrimary fill-adminPrimary justify-center"
          >
            <LockSimpleDuoIcon class="w-5 h-5 fill-darkText" />
            <p>Log In</p>
          </button>
        </router-link>
          <router-link to="/agent"
          >
          <button
            class="py-3 tablet:py-2 tablet:hidden px-5 flex items-center gap-3 rounded-md border bg-adminPrimary text-white fill-white justify-center"
          >
          <p>Add Listing</p>
          <ArrowUpRightIcon class="w-5 h-5" />
        </button>
      </router-link>
          <div
            class="hidden searchP:flex bg-adminPrimary rounded-md py-[2px] px-2 "
          >
            <div
              @click="toggleMenu"
              class="cursor-pointer searchP:flex items-center w-11 h-10 gap-3 justify-center relative flex-col"
            >
              <span
                class="bg-white w-full h-1 duration-700 asolute"
                v-bind:class="
                  menuOpen ? 'rotate-45  w-[79%]  absolute' : 'rotate-0'
                "
              ></span>
              <span
                class="bg-white w-full h-1 duration-700 absolute"
                v-bind:class="menuOpen ? 'hidden' : 'block'"
              ></span>
              <span
                class="bg-white w-full h-1 duration-700 abolute"
                v-bind:class="
                  menuOpen ? '-rotate-45 w-[79%] absolute ' : 'rotate-0'
                "
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
