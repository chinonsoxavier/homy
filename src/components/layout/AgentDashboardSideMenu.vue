<script setup lang="ts">
import { ref } from "vue";
import { image1 } from "../../assets/exports";
import CityDuoIcon from "../icons/duo/CityDuoIcon.vue";
import Speedometer from "../icons/duo/Speedometer.vue";
import CaretIcon from "../icons/regular/CaretIcon.vue";
import ImageComponent from "../ReComponents/ImageComponent.vue";
import Logo from "../ReComponents/Logo.vue";
import AddressBookDuoIcon from "../icons/duo/AddressBookDuoIcon.vue";
import ChatCircleDotDuoIcon from "../icons/duo/ChatCircleDotDuoIcon.vue";
import EnvelopeSimpleDuoIcon from "../icons/duo/EnvelopeSimpleDuoIcon.vue";
import WareHouseDuoIcon from "../icons/duo/WareHouseDuoIcon.vue";
import SignOutDuoIcon from "../icons/duo/SignOutDuoIcon.vue";
import { computed } from "vue";
import { useMainStore } from "../../utilities/store";
const store = useMainStore();
const dropDown = ref(false);
const menuMode = computed(() => store.agentSidebar);

const setDropDown = () => {
  dropDown.value = !dropDown.value;
};
</script>

<template>
  <div
    class="max-w-[280px] bg-trasnparent w-full h-full text-[#a8b2b5] fill-[#a8b2b5]"
  >
    <div class="py-7 px-4 mb-4 h-[15%]">
      <Logo class="fill-white" />
    </div>
    <div class="flex flex-col items-start justify-between h-[85%]">
      <div class="flex flex-col gap-3 px-2 w-full">
        <RouterLink
          to="/agent/dashboard"
          :exact-active="false"
          active-class="active"
        >
          <div
            class="flex items-center px-2 py-2 justify-start gap-2 bg-[bue] hover:fill-white hover:text-white duration-500"
          >
            <Speedometer class="w-5 h-5" />
            <p
              class="d duration-500"
              :class="[menuMode ? 'w-0 overflow-clip':'w-auto overflow-auto']"
            >
              Dashboard
            </p>
          </div>
        </RouterLink>
        <RouterLink
          to="/agent/inbox"
          :exact-active="false"
          active-class="active"
        >
          <div
            class="flex items-center px-2 py-2 justify-start gap-2 bg-[bue] hover:fill-white hover:text-white duration-500"
          >
            <EnvelopeSimpleDuoIcon class="w-5 h-5" />
            <p   class="d duration-500"
              :class="[menuMode ? 'w-0 overflow-clip':'w-auto overflow-auto']">Inbox</p>
          </div>
        </RouterLink>
        <RouterLink
          to="/agent/orders"
          :exact-active="false"
          active-class="active"
        >
          <div
            class="flex items-center px-2 py-2 justify-start gap-2 bg-[bue] hover:fill-white hover:text-white duration-500"
          >
            <WareHouseDuoIcon class="w-5 h-5" />
            <p   class="d duration-500"
              :class="[menuMode ? 'w-0 overflow-clip':'w-auto overflow-auto']">Orders</p>
          </div>
        </RouterLink>
        <div
          class="flx items-center px-2 py-2 justify-start gap-2 bg-[bue] hover:fill-white duration-500"
        >
          <div
            class="flex items-start justify-between w-full"
            @click="setDropDown()"
          >
            <span class="flex items-center gap-2">
              <CityDuoIcon class="w-5 h-5" />
              <p   class="d duration-500 text-white"
              :class="[menuMode ? 'w-0 overflow-clip':'w-auto overflow-auto']">Property</p>
            </span>
            <span :class="[menuMode ? 'w-0 overflow-clip':'w-auto overflow-auto']" >
              <CaretIcon class="w-4 h-4" />
            </span>
          </div>
          <Transition>
            <div v-if="dropDown" class="flex flex-col gap-2 pt-3 px-7">
              <p
                class="text-base duration-500 hover:text-white cursor-pointer hover:translate-x-1"
              >
                Property Grid
              </p>
              <p
                class="text-base duration-500 hover:text-white cursor-pointer hover:translate-x-1"
              >
                Property List
              </p>
              <p
                class="text-base duration-500 hover:text-white cursor-pointer hover:translate-x-1"
              >
                Property Details
              </p>
              <p
                class="text-base duration-500 hover:text-white cursor-pointer hover:translate-x-1"
              >
                Add Property
              </p>
            </div>
          </Transition>
        </div>
        <RouterLink
          to="/agent/customers"
          :exact-active="false"
          active-class="active"
        >
          <div
            class="flex items-center px-2 py-2 justify-start gap-2 bg-[bue] hover:fill-white hover:text-white duration-500"
          >
            <AddressBookDuoIcon class="w-5 h-5" />
            <p   class="d duration-500"
              :class="[menuMode ? 'w-0 overflow-clip':'w-auto overflow-auto']">Customers</p>
          </div>
        </RouterLink>
        <RouterLink
          to="/agent/reviews"
          :exact-active="false"
          active-class="active"
        >
          <div
            class="flex items-center px-2 py-2 justify-start gap-2 bg-[bue] hover:fill-white hover:text-white duration-500"
          >
            <ChatCircleDotDuoIcon class="w-5 h-5" />
            <p   class="duration-500"
              :class="[menuMode ? 'w-0 overflow-clip':'w-auto overflow-auto']">Reviews</p>
          </div>
        </RouterLink>
      </div>
      <div class="py-7">
        <div
          class="cursor-pointer flex items-center px-2 py-2 justify-start gap-2 bg-[bue] hover:fill-white hover:text-white duration-500"
        >
          <SignOutDuoIcon class="w-5 h-5" />
          <p   class="duration-500"
              :class="[menuMode ? 'w-0 overflow-clip':'w-auto overflow-auto']">Log Out</p>
        </div>
        <div class="flex mt-1 gap-2">
          <ImageComponent
            :rounded="true"
            alt="agent profile picture"
            :src="image1"
            class="max-w-11 max-h-11"
          />
          <div class="flex flex-col">
            <p   class="text-base duration-500 font-semibold" :class="[menuMode ? 'w-0 overflow-clip':'w-auto overflow-auto']">Chinonso Xavier</p>
            <p class="text-sm duration-500" :class="[menuMode ? 'w-0 overflow-clip':'w-auto overflow-auto']" >Agent Administrator</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
a.active > div {
  @apply bg-[rgba(255,255,255,0.1)] px-2 py-2 rounded-md cursor-pointer fill-white text-white;
}
</style>
