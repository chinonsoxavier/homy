<script setup lang="ts">
import ArrowUpRightDuoIcon from "../../../../components/icons/duo/ArrowUpRightDuoIcon.vue";
import BathTubDuoIcon from "../../../../components/icons/duo/BathTubDuoIcon.vue";
import BedDuoIcon from "../../../../components/icons/duo/BedDuoIcon.vue";
// import CurrencyCircleDuoIcon from "../../../../components/icons/duo/CurrencyCircleDuoIcon.vue";
import WareHouseDuoIcon from "../../../../components/icons/duo/WareHouseDuoIcon.vue";
import CaretIcon from "../../../../components/icons/regular/CaretIcon.vue";
import HmCheckboxLabel from "../../../../components/input/HmCheckboxLabel.vue";
import HmInputLabel from "../../../../components/input/HmInputLabel.vue";
import HmLabelTextArea from "../../../../components/input/HmLabelTextArea.vue";
// import HmLabelTextArea from "../../../../components/input/HmLabelTextArea.vue";
import HmNumberInputLabel from "../../../../components/input/HmNumberInputLabel.vue";
import HmSelectOption from "../../../../components/input/HmSelectOption.vue";
import DropFile from "./components/DropFile.vue";
</script>

<template>
   <div class="px-5 py-3 h-full overflow-scroll ">
    <div class="flex h-[10%] items-center justify-between w-full ">
      <p class="text-[28px] font-mediu pop-medium text-darkText">Add Property</p>
      <div class="flex items-center justify-end text-[15px] text-lightText">
        <span>Agent</span>
        <CaretIcon class="w-3 h-3 -rotate-90" />
        <span>Add Property</span>
      </div>
    </div>
    <div class="h-[90%] mt-5" >
    <div class="p-5 bg-white rounded-md shadow">
      <p class="text-lg text-darkText mb-5 font-medium">Overview</p>

      <div class="flex items-center mt-5 justify-between gap-5 flex-wrap">
        <HmInputLabel class="basis-1/2">Your Property title</HmInputLabel>
        <HmLabelTextArea
          class="flex-1 basis-[100%] resize-none"
          rows="5"
          placeholder="Write about property..."
        >
          Desciption*
        </HmLabelTextArea>
        <HmSelectOption class="basis-1/3 flex-1"> Category* </HmSelectOption>
        <HmSelectOption class="basis-1/3 flex-1"> Listed in* </HmSelectOption>
        <HmInputLabel class="basis-1/3 flex-1" placeholder="Your Price">
          Price*
        </HmInputLabel>
        <HmInputLabel class="basis-1/3 flex-1" placeholder="Your Tax Rate">
          Yearly Tax Rate*
        </HmInputLabel>
      </div>
    </div>
    <div class="p-5 my-10 bg-white rounded-md shadow">
      <DropFile />
    </div>
    <div class="flx bg-white rounded-md p-8 my-5 shadow">
      <p class="text-lg text-darkText mb-5 font-medium">Listing Details</p>
      <div>
        <div class="flex gap-4 my-8 items-center justify-center flex-wrap">
          <HmSelectOption class="basis-1/3 flex-1">Listing Status</HmSelectOption>
          <HmSelectOption class="basis-1/3 flex-1">Furnishing</HmSelectOption>
          <HmSelectOption class="basis-1/3 flex-1">Year Built</HmSelectOption>
          <HmSelectOption class="basis-1/3 flex-1">Renovation</HmSelectOption>
          <HmSelectOption class="basis-1/3 flex-1">Floor</HmSelectOption>
          <HmSelectOption class="basis-1/3 flex-1">Ceiling Height</HmSelectOption>
          <HmSelectOption class="basis-1/3 flex-1">Floor Type</HmSelectOption>
          <HmNumberInputLabel
            placeholder="0"
            icon
            label="Bedroom"
            class="basis-1/3 flex-1"
          >
            <BedDuoIcon class="w-6 h-6 fill-lightText" />
          </HmNumberInputLabel>
          <HmInputLabel class="basis-1/3 flex-1" placeholder="Ex: 1,230 sqft">
            Garage Size
          </HmInputLabel>
          <HmSelectOption class="b basis-1/3 flex-1"> Garage </HmSelectOption>

          <HmNumberInputLabel
            placeholder="0"
            icon
            label="Bathrooms"
            class="basis-1/3 flex-1"
          >
            <BathTubDuoIcon class="w-6 h-6 fill-lightText" />
          </HmNumberInputLabel>
          <HmNumberInputLabel
            placeholder="0"
            icon
            label="Square Foot"
            class="basis-1/3 flex-1"
          >
            <ArrowUpRightDuoIcon class="w-6 h-6 fill-lightText" />
          </HmNumberInputLabel>
          <HmNumberInputLabel
            placeholder="0"
            icon
            label="Floors"
            class="basis-1/3 flex-1"
          >
            <WareHouseDuoIcon class="w-6 h-6 fill-lightText" />
          </HmNumberInputLabel>
          <HmNumberInputLabel
            placeholder="0"
            icon
            label="Year built"
            class="basis-1/3 flex-1"
          >
            <WareHouseDuoIcon class="w-6 h-6 fill-lightText" />
          </HmNumberInputLabel>
          <HmNumberInputLabel
            placeholder="0"
            icon
            label="Kitchens"
            class="basis-1/3 flex-1"
          >
            <WareHouseDuoIcon class="w-6 h-6 fill-lightText" />
          </HmNumberInputLabel>
        </div>
      </div>
     
    </div>
    <div class="flx bg-white rounded-md p-8 my-5 shadow">
      <p class="text-lg text-darkText mb-5 font-medium">Select Amenities</p>
      <div class="flex items-start gap-5 justify-start flex-wrap">
        <HmCheckboxLabel class="max-w-[18%] text-sm" basis="basis-1/6">
          A/C & Heating
        </HmCheckboxLabel>
        <HmCheckboxLabel class="max-w-[18%] text-sm" basis="basis-1/6">
          Garages
        </HmCheckboxLabel>
        <HmCheckboxLabel class="max-w-[18%] text-sm" basis="basis-1/6">
          Swimming Pool
        </HmCheckboxLabel>
        <HmCheckboxLabel class="max-w-[18%] text-sm" basis="basis-1/6">
          Parking
        </HmCheckboxLabel>
        <HmCheckboxLabel class="max-w-[18%] text-sm" basis="basis-1/6">
          Lake View
        </HmCheckboxLabel>
        <HmCheckboxLabel class="max-w-[18%] text-sm" basis="basis-1/6">
          Garden
        </HmCheckboxLabel>
        <HmCheckboxLabel class="max-w-[18%] text-sm" basis="basis-1/6">
          Disabled Access
        </HmCheckboxLabel>
        <HmCheckboxLabel class="max-w-[18%] text-sm" basis="basis-1/6">
          Pet Friendly
        </HmCheckboxLabel>
        <HmCheckboxLabel class="max-w-[18%] text-sm" basis="basis-1/6">
          Ceiling Height
        </HmCheckboxLabel>
        <HmCheckboxLabel class="max-w-[18%] text-sm" basis="basis-1/6">
          Outdoor Shower
        </HmCheckboxLabel>
        <HmCheckboxLabel class="max-w-[18%] text-sm" basis="basis-1/6">
          Refrigerator
        </HmCheckboxLabel>
        <HmCheckboxLabel class="max-w-[18%] text-sm" basis="basis-1/6">
          FirePlace
        </HmCheckboxLabel>
        <HmCheckboxLabel class="max-w-[18%] text-sm" basis="basis-1/6">
          Wifi
        </HmCheckboxLabel>
        <HmCheckboxLabel class="max-w-[18%] text-sm" basis="basis-1/6">
          Tv Cable
        </HmCheckboxLabel>
        <HmCheckboxLabel class="max-w-[18%] text-sm" basis="basis-1/6">
          Barbeque
        </HmCheckboxLabel>
        <HmCheckboxLabel class="max-w-[18%] text-sm" basis="basis-1/6">
          Laundry
        </HmCheckboxLabel>
        <HmCheckboxLabel class="max-w-[18%] text-sm" basis="basis-1/6">
          Dryer
        </HmCheckboxLabel>
        <HmCheckboxLabel class="max-w-[18%] text-sm" basis="basis-1/6">
          Lawn
        </HmCheckboxLabel>
        <HmCheckboxLabel class="max-w-[18%] text-sm" basis="basis-1/6">
          Elevator
        </HmCheckboxLabel>
      </div>
    </div>

    <div class="bg-white rounded-md p-8 my-5 shadow">
      <p class="text-lg text-darkText mb-5 font-medium">Address & Location</p>
      <div class="flex flex-wrap gap-5" >
        <HmInputLabel class="basis-1/3 flex-1"> Address* </HmInputLabel>
        <div class="flex items-center justify-center gap-5 w-full my-3 flex-wrap">
          <HmSelectOption class="basis-1/3 flex-1" > Country* </HmSelectOption>
          <HmSelectOption class="basis-1/3 flex-1" > City* </HmSelectOption>
          <HmNumberInputLabel label="Zip Code*" :icon="false" class="basis-1/3 flex-1" placeholder="1708"/>
          <HmSelectOption class="basis-1/3 flex-1" > State* </HmSelectOption>
        </div>
        <HmInputLabel class="basis-1/3 flex-1"> Map Location* </HmInputLabel>
      </div>
    </div>
     <div class="items-center my-10 gap-5 flex justify-start">
        <button
          class="border rounded-md px-6 py-2 bg-adminPrimary text-white hover:bg-black duration-500"
        >
          Create Property
        </button>
        <button class="bg- duration-500 hover:text-adminPrimary text-black font-semibold px-2 py-2 rounded-md">
          Cancel
        </button>
      </div>
      </div>
  </div>
</template>
