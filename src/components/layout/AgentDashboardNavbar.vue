<script setup lang="ts">
import SunDimDuoIcon from "../icons/duo/SunDimDuoIcon.vue";
import MenuIcon from "../icons/regular/MenuIcon.vue";
import IconComponent from "../ReComponents/IconComponent.vue";
import MoonDuoIcon from "../icons/duo/MoonDuoIcon.vue";
import NotificationDuoIcon from "../icons/duo/NotificationDuoIcon.vue";
import SettingsDuoIcon from "../icons/duo/SettingsDuoIcon.vue";
import ImageComponent from "../ReComponents/ImageComponent.vue";
import { image1 } from "../../assets/exports";
import MagnifyingGlass from "../icons/duo/MagnifyingGlass.vue";
import { useMainStore } from "../../utilities/store";
import { ref } from "vue";
// import MagnifyingGlassIcon from '../icons/regular/MagnifyingGlassIcon.vue';
const store = useMainStore();
const mode = ref(null);

const toggleMenu = () => {
  store.setAgentSide();
};

const setThemeMode = () => {
  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
      mode.value = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
      mode.value = "light";
    }
  } else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
      mode.value = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
      mode.value = "dark";
    }
  }
};
</script>

<template>
  <div class="px-5 py-4 flex items-center justify-between">
    <div class="flex items-center justify-start gap-3">
      <div @click="toggleMenu()" class="hidden mobile:flex" v-on:click="store.toggleagentSideMenu" >
        <MenuIcon class="w-7 h-7 cursor-pointer" />
        
      </div>
      <div @click="toggleMenu()" class="flex mobile:hidden" >
        <MenuIcon class="w-7 h-7 cursor-pointer" />
      </div>

      <div
        class="rounded-md tablet:hidden text-sm relative flex items-center justify-center border"
      >
        <MagnifyingGlass class="w-5 h-5 absolute left-1" />
        <input
          placeholder="Search..."
          class="bg-transparent pl-8 w-full h-full outline-none placeholder:text-sm placeholder:font-medium px-2 py-2 rounded-md"
          type="text"
        />
      </div>
    </div>
    <div class="flex items-center justify-end gap-1">
      <IconComponent @click="setThemeMode()">
        <SunDimDuoIcon v-if="mode == 'dark'" class="w-8 h-8" />
        <MoonDuoIcon v-else class="w-7 h-7" />
      </IconComponent>
      <IconComponent class="relative hover:bg-lightPrimary">
        <span
          class="absolute bottom-6 font-semibold -right-0 bg-[#e82968] rounded-full flex items-center justify-center w-4 h-4"
          ><span class="text-white mt-[1px] text-xs">0</span></span
        >
        <NotificationDuoIcon class="w-7 h-7" />
      </IconComponent>
      <IconComponent>
        <SettingsDuoIcon class="w-7 h-7" />
      </IconComponent>
      <ImageComponent
        rounded
        alt="agent profile pic"
        :src="image1"
        class="max-w-7 max-h-7 cursor-pointer"
      />
    </div>
  </div>
</template>
