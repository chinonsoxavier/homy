<script setup lang="ts">
import { ref } from "vue";
import CheckIcon from "../../../components/icons/regular/CheckIcon.vue";
import PlusCircleIcon from "../../../components/icons/regular/PlusCircleIcon.vue";
import NavbarComponent from "../../../components/layout/NavbarComponent.vue";
import IconComponent from "../../../components/ReComponents/IconComponent.vue";
import ListingOverviewComponent from "./components/ListingOverviewComponent.vue";
import ListingsContactFormComponent from "./components/ListingsContactFormComponent.vue";
import ListingsDetailComponent from "./components/ListingsDetailComponent.vue";
import ListingsSliderComponent from "./components/ListingsSliderComponent.vue";
import ListingsReviewsComponent from "./components/ListingsReviewsComponent.vue";
import ArrowUpRightIcon from "../../../components/icons/regular/ArrowUpRightIcon.vue";
import { retailerimage } from "../../../assets/exports";
import ListingsFooter from "../../../components/layout/ListingsFooter.vue";
import HomeRetialerComponent from "../home/components/HomeRetialerComponent.vue";

const accordion = ref("");

const setaccordion = (params) => {
  accordion.value = accordion.value != params ? params : "";
};
</script>

<template>
  <section class="bg-[#fff8f4] relative">
      <NavbarComponent />
    <div class="flex items-center justify-center">
      <div class="max-width flex flex-col gap-10">
        <ListingsDetailComponent />
        <ListingsSliderComponent />
        <ListingOverviewComponent />
        <div class="flex items-start flex-wrap-reverse justify-between gap-5">
          <div class="flex-1 gap-5 flex  flex-col">
            <div class="p-10 rounded-xl bg-white shadow-md flex-1 tablet:p-5">
              <p class="text-3xl base:text-xl font-medium text-black text-left">Overview</p>
              <p class="text-lg mobile:text-sm text-lightText font-normal mt-5">
                Lorem ipsum dolor sit amet consectetur. Et velit varius ipsum
                tempor vel dignissim tincidunt. Aliquam accumsan laoreet
                ultricies tincidunt faucibus fames augue in sociis. Nisl enim
                integer neque nec.
              </p>
            </div>
            <div class="p-10 rounded-xl bg-white shadow-md flex-1 tablet:p-5">
              <div class="pb-5">
                <p class="text-3xl base:text-xl font-medium text-black text-left">
                  Property Features
                </p>
                <p class="text-lg text-lightText mobile:text-sm font-normal mt-5">
                  Risk management and compliance, when approached strategically,
                  have the potential to go beyond mitigating threats.
                </p>
              </div>
              <div class="">
                <div
                  v-on:click="setaccordion('property details')"
                  class="border-y py-5 flex items-center justify-between"
                >
                  <p class="text-xl text-darkText font-medium">
                    Property Details
                  </p>
                  <IconComponent class="bg-black fill-white">
                    <PlusCircleIcon class="w-7 h-7" />
                  </IconComponent>
                </div>
                <Transition>
                  <div
                    v-if="accordion == 'property details'"
                    class="flex duration-500 items-center justify-center flex-wrap gap-4"
                  >
                    <div
                      class="flex-1 flex-wrap flex items-center justify-between w-full py-3 basis-1/3"
                    >
                      <p class="text-darkText tablet:text-sm">Bedrooms:</p>
                      <p class="text-black tablet:text-xs text-[17px]">03</p>
                    </div>
                    <div
                      class="flex-1 flex-wrap flex items-center justify-between w-full py-3 basis-1/3"
                    >
                      <p class="text-darkText tablet:text-sm">Status:</p>
                      <p class="text-black tablet:text-xs text-[17px]">For Sale</p>
                    </div>
                    <div
                      class="flex-1 flex-wrap flex items-center justify-between w-full py-3 basis-1/3"
                    >
                      <p class="text-darkText tablet:text-sm">Bathrooms:</p>
                      <p class="text-black tablet:text-xs text-[17px]">03</p>
                    </div>
                    <div
                      class="flex-1 flex-wrap flex items-center justify-between w-full py-3 basis-1/3"
                    >
                      <p class="text-darkText tablet:text-sm">Furnishing: :</p>
                      <p class="text-black tablet:text-xs text-[17px]">Semi furnished</p>
                    </div>
                    <div
                      class="flex-1 flex-wrap flex items-center justify-between w-full py-3 basis-1/3"
                    >
                      <p class="text-darkText tablet:text-sm">Renovation:</p>
                      <p class="text-black tablet:text-xs text-[17px]">2023</p>
                    </div>
                    <div
                      class="flex-1 flex-wrap flex items-center justify-between w-full py-3 basis-1/3"
                    >
                      <p class="text-darkText tablet:text-sm">Year Built::</p>
                      <p class="text-black tablet:text-xs text-[17px]">2003</p>
                    </div>
                    <div
                      class="flex-1 flex-wrap flex items-center justify-between w-full py-3 basis-1/3"
                    >
                      <p class="text-darkText tablet:text-sm">Floor:</p>
                      <p class="text-black tablet:text-xs text-[17px]">Ground</p>
                    </div>
                    <div
                      class="flex-1 flex-wrap flex items-center justify-between w-full py-3 basis-1/3"
                    >
                      <p class="text-darkText tablet:text-sm">Garage:</p>
                      <p class="text-black tablet:text-xs text-[17px]">03</p>
                    </div>
                    <div
                      class="flex-1 flex-wrap flex items-center justify-between w-full py-3 basis-1/3"
                    >
                      <p class="text-darkText tablet:text-sm">Ceiling Height:</p>
                      <p class="text-black tablet:text-xs text-[17px]">3.2.m</p>
                    </div>
                    <div
                      class="flex-1 flex-wrap flex items-center justify-between w-full py-3 basis-1/3"
                    >
                      <p class="text-darkText tablet:text-sm">Property Type:</p>
                      <p class="text-black tablet:text-xs text-[17px]">Apartment</p>
                    </div>
                  </div>
                </Transition>
              </div>
              <div class="">
                <div
                  v-on:click="setaccordion('utility details')"
                  class="border-y py-5 flex items-center justify-between"
                >
                  <p class="text-xl text-darkText font-medium">
                    Utility Details
                  </p>
                  <IconComponent class="bg-black fill-white">
                    <PlusCircleIcon class="w-7 h-7" />
                  </IconComponent>
                </div>
                <Transition>
                  <div
                    v-if="accordion == 'utility details'"
                    class="flex duration-500 items-center justify-center flex-wrap gap-4"
                  >
                    <div
                      class="flex-1 flex-wrap flex items-center justify-between w-full py-3 basis-1/3"
                    >
                      <p class="text-darkText tablet:text-sm">Heating:</p>
                      <p class="text-black tablet:text-xs text-[17px]">Natural gas</p>
                    </div>
                    <div
                      class="flex-1 flex-wrap flex items-center justify-between w-full py-3 basis-1/3"
                    >
                      <p class="text-darkText tablet:text-sm">Intercom:</p>
                      <p class="text-black tablet:text-xs text-[17px]">Yes</p>
                    </div>
                    <div
                      class="flex-1 flex-wrap flex items-center justify-between w-full py-3 basis-1/3"
                    >
                      <p class="text-darkText tablet:text-sm">Air Condition: :</p>
                      <p class="text-black tablet:text-xs text-[17px]">Yes</p>
                    </div>
                    <div
                      class="flex-1 flex-wrap flex items-center justify-between w-full py-3 basis-1/3"
                    >
                      <p class="text-darkText tablet:text-sm">Window Type:</p>
                      <p class="text-black tablet:text-xs text-[17px]">Aluminum frame</p>
                    </div>
                    <div
                      class="flex-1 flex-wrap flex items-center justify-between w-full py-3 basis-1/3"
                    >
                      <p class="text-darkText tablet:text-sm">Fireplace:</p>
                      <p class="text-black tablet:text-xs text-[17px]">--</p>
                    </div>
                    <div
                      class="flex-1 flex-wrap flex items-center justify-between w-full py-3 basis-1/3"
                    >
                      <p class="text-darkText tablet:text-sm">Cable TV:</p>
                      <p class="text-black tablet:text-xs text-[17px]">--</p>
                    </div>
                    <div
                      class="flex-1 flex-wrap flex items-center justify-between w-full py-3 basis-1/3"
                    >
                      <p class="text-darkText tablet:text-sm">Elevator:</p>
                      <p class="text-black tablet:text-xs text-[17px]">Yes</p>
                    </div>
                    <div
                      class="flex-1 flex-wrap flex items-center justify-between w-full py-3 basis-1/3"
                    >
                      <p class="text-darkText tablet:text-sm">wifi:</p>
                      <p class="text-black tablet:text-xs text-[17px]">Yes</p>
                    </div>
                    <div
                      class="flex-1 flex-wrap flex items-center justify-between w-full py-3 basis-1/3"
                    >
                      <p class="text-darkText tablet:text-sm">Ventilation:</p>
                      <p class="text-black tablet:text-xs text-[17px]">Yes</p>
                    </div>
                  </div>
                </Transition>
              </div>
              <div class="">
                <div
                  v-on:click="setaccordion('outdoor features')"
                  class="border-y py-5 flex items-center justify-between"
                >
                  <p class="text-xl text-darkText font-medium">
                    Property Details
                  </p>
                  <IconComponent class="bg-black fill-white">
                    <PlusCircleIcon class="w-7 h-7" />
                  </IconComponent>
                </div>
                <Transition>
                  <div
                    v-if="accordion == 'outdoor features'"
                    class="flex duration-500 items-center justify-center flex-wrap gap-4"
                  >
                    <div
                      class="flex-1 flex-wrap flex items-center justify-between w-full py-3 basis-1/3"
                    >
                      <p class="text-darkText tablet:text-sm">Garage:</p>
                      <p class="text-black tablet:text-xs text-[17px]">Yes</p>
                    </div>
                    <div
                      class="flex-1 flex-wrap flex items-center justify-between w-full py-3 basis-1/3"
                    >
                      <p class="text-darkText tablet:text-sm">Parking:</p>
                      <p class="text-black tablet:text-xs text-[17px]">Yes</p>
                    </div>
                    <div
                      class="flex-1 flex-wrap flex items-center justify-between w-full py-3 basis-1/3"
                    >
                      <p class="text-darkText tablet:text-sm">Garden:</p>
                      <p class="text-black tablet:text-xs text-[17px]">30m2</p>
                    </div>
                    <div
                      class="flex-1 flex-wrap flex items-center justify-between w-full py-3 basis-1/3"
                    >
                      <p class="text-darkText tablet:text-sm">Disabled Access:</p>
                      <p class="text-black tablet:text-xs text-[17px]">Ramp</p>
                    </div>
                    <div
                      class="flex-1 flex-wrap flex items-center justify-between w-full py-3 basis-1/3"
                    >
                      <p class="text-darkText tablet:text-sm">Swimming Pool:</p>
                      <p class="text-black tablet:text-xs text-[17px]">--</p>
                    </div>
                    <div
                      class="flex-1 flex-wrap flex items-center justify-between w-full py-3 basis-1/3"
                    >
                      <p class="text-darkText tablet:text-sm">Fence:</p>
                      <p class="text-black tablet:text-xs text-[17px]">--</p>
                    </div>
                    <div
                      class="flex-1 flex-wrap flex items-center justify-between w-full py-3 basis-1/3"
                    >
                      <p class="text-darkText tablet:text-sm">Security:</p>
                      <p class="text-black tablet:text-xs text-[17px]">2 Cameras</p>
                    </div>
                    <div
                      class="flex-1 flex-wrap flex items-center justify-between w-full py-3 basis-1/3"
                    >
                      <p class="text-darkText tablet:text-sm">Pet Friendly:</p>
                      <p class="text-black tablet:text-xs text-[17px]">Yes</p>
                    </div>
                  </div>
                </Transition>
              </div>
            </div>
            <div class="p-10 rounded-xl bg-white shadow-md flex-1 tablet:p-5">
              <p class="text-3xl base:text-xl font-medium text-black text-left">Amenities</p>
              <p class="text-[17px] my-6 mobile:text-sm text-lightText font-normal mt-5">
                Risk management & compliance, when approached strategically,
                have the potential
              </p>
              <div class="flex flex-wrap gap-5">
                <div
                  class="flex items-center gap-2 justify-start flex-1 basis-1/4"
                >
                  <CheckIcon class="w-6 h-6" />
                  <p class="text-black font-medium text-lg tablet:text-sm whitespace-nowrap">A/C & Heating</p>
                </div>
                <div
                  class="flex items-center gap-2 justify-start flex-1 basis-1/4"
                >
                  <CheckIcon class="w-6 h-6" />
                  <p class="text-black font-medium text-lg tablet:text-sm whitespace-nowrap">Garages</p>
                </div>
                <div
                  class="flex items-center gap-2 justify-start flex-1 basis-1/4"
                >
                  <CheckIcon class="w-6 h-6" />
                  <p class="text-black font-medium text-lg tablet:text-sm whitespace-nowrap">Garden</p>
                </div>
                <div
                  class="flex items-center gap-2 justify-start flex-1 basis-1/4"
                >
                  <CheckIcon class="w-6 h-6" />
                  <p class="text-black font-medium text-lg tablet:text-sm whitespace-nowrap">Disabled Access</p>
                </div>
                <div
                  class="flex items-center gap-2 justify-start flex-1 basis-1/4"
                >
                  <CheckIcon class="w-6 h-6" />
                  <p class="text-black font-medium text-lg tablet:text-sm whitespace-nowrap">Swimming Pool</p>
                </div>
                <div
                  class="flex items-center gap-2 justify-start flex-1 basis-1/4"
                >
                  <CheckIcon class="w-6 h-6" />
                  <p class="text-black font-medium text-lg tablet:text-sm whitespace-nowrap">Parking</p>
                </div>
                <div
                  class="flex items-center gap-2 justify-start flex-1 basis-1/4"
                >
                  <CheckIcon class="w-6 h-6" />
                  <p class="text-black font-medium text-lg tablet:text-sm whitespace-nowrap">Wifi</p>
                </div>
                <div
                  class="flex items-center gap-2 justify-start flex-1 basis-1/4"
                >
                  <CheckIcon class="w-6 h-6" />
                  <p class="text-black font-medium text-lg tablet:text-sm whitespace-nowrap">Pet Friendly</p>
                </div>
                <div
                  class="flex items-center gap-2 justify-start flex-1 basis-1/4"
                >
                  <CheckIcon class="w-6 h-6" />
                  <p class="text-black font-medium text-lg tablet:text-sm whitespace-nowrap">Ceiling Height</p>
                </div>
                <div
                  class="flex items-center gap-2 justify-start flex-1 basis-1/4"
                >
                  <CheckIcon class="w-6 h-6" />
                  <p class="text-black font-medium text-lg tablet:text-sm whitespace-nowrap">Fireplace</p>
                </div>
                <div class="flex items-center justify-start flex-1 basis-1/4">
                  <CheckIcon class="w-5 h-5 fill-black" />
                  <p class="text-black font-medium text-lg tablet:text-sm whitespace-nowrap">Play Ground</p>
                </div>
                <div
                  class="flex items-center gap-2 justify-start flex-1 basis-1/4"
                >
                  <CheckIcon class="w-6 h-6" />
                  <p class="text-black font-medium text-lg tablet:text-sm whitespace-nowrap">Elevator</p>
                </div>
              </div>
            </div>
            <div class="p-10 rounded-xl bg-white shadow-md flex-1 tablet:p-5">
              <div class="flex items-center justify-between">
                <p class="text-3xl base:text-xl font-medium text-black text-left">Reviews</p>
              </div>
              <div class="flex items-center justify-center gap-4 mt-5 flex-col">
                <ListingsReviewsComponent />
                <ListingsReviewsComponent />
                <ListingsReviewsComponent />
                <button
                  class="w-full py-5 tablet:px-6 gap-3 rounded-md flex items-center justify-center px-10 bg-black duration-500 fill-white text-white hover:bg-adminPrimary"
                >
                  View All Reviews
                  <ArrowUpRightIcon class="w-5 h-5"/>
                </button>
              </div>
            </div>
            <div class="p-10 rounded-xl bg-white shadow-md flex-1 tablet:p-5 text-left">
                 <p class="text-3xl base:text-xl font-medium text-black text-left">Leave A Review</p>
              <p class="text-lg text-lightText font-normal mt-5 base:text-base">
                 <router-link to="/auth/sign-in" class="underline" >Sign in</router-link>   in to post your comment or signup if you don't have any account.
              </p>
              <div class="flex flex-col items-start gap-6 py-6 justify-center" >
                <div class="p bg-red] w-full flex-1  ">
        <label htmlFor="nameLabel" for="Your Full Name">Your Name</label>
        <div class="border rounded-xl w-full mt-1">
          <input
            class="outline-none w-full h-full rounded-xl py-4 px-2"
            placeholder="Enter your name"
            id="nameLabel"
            type="text"
          />
        </div>
        </div> 
        <div class="flex flex-wrap gap-6 w-full" >
        <div class="p min-w-[200px] w-full flex-1">
        <label htmlFor="nameLabel" for="Your Full Name">Your Email</label>
        <div class="border rounded-xl w-full mt-1">
          <input
            class="outline-none w-full h-full rounded-xl py-4 px-2"
            placeholder="Enter your Email"
            id="nameLabel"
            type="email"
          />
        </div>
        </div> 
        <div class="p min-w-[200px] w-full flex-1">
             <label htmlFor="nameLabel" for="Your Full Name">Your Rating</label>
            <select name="reviewMessageLabel" id="" class="w-full mt-1 bg-transparent border rounded-xl py-4 px-4" >
                <option value="One Star">One Star</option>
                <option value="Two Star">Two Star</option>
                <option value="Three Star">Three Star</option>
                <option value="Four Star">Four Star</option>
                <option value="Five Star">Five Star</option>
            </select>
        <!-- <label htmlFor="nameLabel" for="Your Full Name">Your Name</label>
        <div class="border rounded-xl w-full mt-1">
          <input
            class="outline-none w-full h-full rounded-xl py-4 px-2"
            placeholder="Enter your name"
            id="nameLabel"
            type="text"
          />
        </div> -->
    </div>
</div>
</div>
<button class="bg-black base:px-3 text-white py-3 text-center w-min whitespace-nowrap px-5 rounded-md" >Post Review</button>
            </div>
          </div>
          <ListingsContactFormComponent />
        </div>
      </div>
    </div>
   <section
    class="py-20 flex items-center justify-center relative before:absolute listings-retail"
    :style="{
      background: `url(${retailerimage})`,
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }"
  >
    <div class="relative z-10">
      <HomeRetialerComponent />
    </div>
  </section>
  <section class="hidden">
    <ListingsFooter />
  </section>
  </section>
</template>


<style scoped >

.listings-retail::before {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
  background: linear-gradient(
    89.93deg,
    #000000a1 0.33%,
    #00000082 45.5%,
    #0000 99.93%
  );
}


</style>