<script setup lang="ts">
import VueApexCharts from "vue3-apexcharts";
import ArrowDuoIcon from "../../../components/icons/duo/ArrowDuoIcon.vue";
import CityDuoIcon from "../../../components/icons/duo/CityDuoIcon.vue";
import TipJarDuoIcon from "../../../components/icons/duo/TipJarDuoIcon.vue";
import User3DuoIcon from "../../../components/icons/duo/User3DuoIcon.vue";
import Users4DuoIcon from "../../../components/icons/duo/Users4DuoIcon.vue";
import CaretIcon from "../../../components/icons/regular/CaretIcon.vue";
import AgentDashboardLineChart from "../../../components/layout/AgentDashboardLineChart.vue";
import IconComponent from "../../../components/ReComponents/IconComponent.vue";
import ImageComponent from "../../../components/ReComponents/ImageComponent.vue";
import { image1, slider1 } from "../../../assets/exports";
import { ref } from "vue";
import EyeDuoIcon from "../../../components/icons/duo/EyeDuoIcon.vue";
import PencilSimpleLineDuoIcon from "../../../components/icons/duo/PencilSimpleLineDuoIcon.vue";
import TrashDuoIcon from "../../../components/icons/duo/TrashDuoIcon.vue";
// import VueApexCharts from 'vue-apexcharts';

const dropDown = ref(false);
const dropDownSelection = ref("Month");

const setDropDown = () => {
  dropDown.value = !dropDown.value;
};

var options = {
  series: [
    {
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    },
    {
      name: "Laptops",
      data: [11, 21, 55, 57, 40, 69, 19, 21, 48],
    },
  ],
  chart: {
    type: "line",
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 3,
    curve: "smooth",
  },
  title: {
    text: "Sales Analytics",
    align: "left",
  },
  grid: {
    row: {
      colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
      opacity: 0.5,
    },
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  },
};

const options2 = {
  series: [44, 55, 13, 33],
          chart: {
          width: 380,
          type: 'donut',
        },
        dataLabels: {
          enabled: false
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              show: false
            }
          }
        }],
        legend: {
          position: 'right',
          offsetY: 0,
          height: 230,
        }
        };
</script>

<template>
  <div class="px-5 bg-[#f9f9fc] h-[85%] overflow-y-scroll pt-5">
    <div class="flex items-center justify-between w-full">
      <p class="text-[28px] font-mediu pop-medium text-darkText">Dashboard</p>
      <div class="flex items-center justify-end text-[15px] tablet:hidden text-lightText">
        <span>Agent</span>
        <CaretIcon class="w-3 h-3 -rotate-90" />
        <span>Dashboard</span>
      </div>
    </div>
    <div class="flex flex-wrap w-full gap-3 mt-5">
      <div
        class="bg-white flerap flex justify-between items-stretch rounded-sm shadow basis-1/3 flex-1 cursor-pointer duration-500 hover:scale-[99%] hover:shadow-md p-8"
      >
        <div class="flex flex-col gap-2 items-start justify-center flex-1">
          <IconComponent
            class="bg-[rgba(232,42,104,0.09)] rounded-sm w-14 h-14 fill-adminPrimary"
          >
            <CityDuoIcon class="w-10 h-10" />
          </IconComponent>
          <p class="text-lightText text-sm">No. of properties</p>
          <div class="flex items-center justify-center gap-3">
            <div>
              <p class="text-xl font-semibold text-darkText">2,854</p>
            </div>
            <div
              class="flex items-center px-2 rounded-sm text-[rgba(92,193,132)] bg-[#def3e6] fill-[rgba(92,193,132)] justify-center bg-"
            >
              <ArrowDuoIcon class="w-3 h-3" />
              <p class="text-sm pop-medium">7.34%</p>
            </div>
          </div>
        </div>
        <div class="flex-1 bg-[rd] -full flex items-center justify-end">
          <AgentDashboardLineChart />
        </div>
      </div>
      <div
        class="bg-white  flex justify-between items-stretch rounded-sm shadow basis-1/3 flex-1 cursor-pointer duration-500 hover:scale-[99%] hover:shadow-md p-8"
      >
        <div class="flex flex-col gap-2 items-start justify-center flex-1">
          <IconComponent
            class="bg-[rgba(232,42,104,0.09)] rounded-sm w-14 h-14 fill-adminPrimary"
          >
            <User3DuoIcon class="w-10 h-10" />
          </IconComponent>
          <p class="text-lightText text-sm">Followers</p>
          <div class="flex items-center justify-center gap-3">
            <div>
              <p class="text-xl font-semibold text-darkText">2</p>
            </div>
            <div
              class="flex items-center px-2 rounded-sm text-[rgba(92233,103,103)] fill-text-[rgba(92233,103,103)] bg-[#fbe1e1] justify-center bg-"
            >
              <ArrowDuoIcon class="w-3 h-3 rotate-180" />
              <p class="text-sm pop-medium">7.34%</p>
            </div>
          </div>
        </div>
        <div class="flex-1 flex items-center justify-end">
          <AgentDashboardLineChart />
        </div>
      </div>
      <div
        class="bg-white  flex justify-between items-stretch rounded-sm shadow basis-1/3 flex-1 cursor-pointer duration-500 hover:scale-[99%] hover:shadow-md p-8"
      >
        <div class="flex flex-col gap-2 items-start justify-center flex-1">
          <IconComponent
            class="bg-[rgba(232,42,104,0.09)] rounded-sm w-14 h-14 fill-adminPrimary"
          >
            <Users4DuoIcon class="w-10 h-10" />
          </IconComponent>
          <p class="text-lightText text-sm">Followers</p>
          <div class="flex items-center justify-center gap-3">
            <div>
              <p class="text-xl font-semibold text-darkText">2,854</p>
            </div>
            <div
              class="flex items-center px-2 rounded-sm text-[rgba(92,193,132)] bg-[#def3e6] fill-[rgba(92,193,132)] justify-center bg-"
            >
              <ArrowDuoIcon class="w-3 h-3" />
              <p class="text-sm pop-medium">7.34%</p>
            </div>
          </div>
        </div>
        <div class="flex-1 flex items-center justify-end">
          <AgentDashboardLineChart />
        </div>
      </div>
      <div
        class="bg-white  flex justify-between items-stretch rounded-sm shadow basis-1/3 flex-1 cursor-pointer duration-500 hover:scale-[99%] hover:shadow-md p-8"
      >
        <div class="flex flex-col gap-2 items-start justify-center flex-1">
          <IconComponent
            class="bg-[rgba(232,42,104,0.09)] rounded-sm w-14 h-14 fill-adminPrimary"
          >
            <TipJarDuoIcon class="w-10 h-10" />
          </IconComponent>
          <p class="text-lightText text-sm">Revenue</p>
          <div class="flex items-center justify-center gap-3">
            <div>
              <p class="text-xl font-semibold text-darkText">2,854</p>
            </div>
            <div
              class="flex items-center px-2 rounded-sm text-[rgba(92,193,132)] bg-[#def3e6] fill-[rgba(92,193,132)] justify-center bg-"
            >
              <ArrowDuoIcon class="w-3 h-3" />
              <p class="text-sm pop-medium">7.34%</p>
            </div>
          </div>
        </div>
        <div class="flex-1 flex items-center justify-end">
          <AgentDashboardLineChart />
        </div>
      </div>
    </div>
    <div class="flex-1 hidden base:block base:flex-col h-full">
        <VueApexCharts
        class="w-full"
          width="100%"
          height="100%"
          type="line"
          :options="options"
          :series="options.series"
        >Could not display chart</VueApexCharts>
        
      </div>
    <div
      class="py-4 overflow-hidden h-full flex-wrap base:flex-col gap-3 flex items-start bg-[#f9f9fc] justify-center"
    >
      <div class="flex-1 base:hidden base:flex-col h-full">
        <VueApexCharts
        class="w-full"
          width="100%"
          height="100%"
          type="line"
          :options="options"
          :series="options.series"
        >Could not display chart</VueApexCharts>
        
      </div>
      <div class="flex-1 flex-col max-w-[340px] py-4 rounded p-3 shadow">
        <p class="text-lg text-lightText font-medium">Weekly Sales</p>
        <div class="py-5">
          <div class="relative flex items-center justify-center">
            <ImageComponent
              alt="image slider"
              :src="slider1"
              class="rounded-lg"
            />
            <IconComponent class="absolute left-0 z-20">
              <CaretIcon
                class="w-6 h-6 fill-[#a8b2b5] duration-200 hover:fill-white rotate-90"
              />
            </IconComponent>
            <IconComponent class="absolute right-0 z-20">
              <CaretIcon
                class="w-6 h-6 fill-[#a8b2b5] duration-200 hover:fill-white -rotate-90"
              />
            </IconComponent>
          </div>
          <div class="flex items-center justify-center" >

            <VueApexCharts
            width="90%"
            type="donut"
            :options="options2"
            :series="options2.series"
            ></VueApexCharts>
          </div>
          <!-- <AgentDashboardLineChart /> -->
          <hr class="my-4" />
          <div class="flex items-start justify-between">
            <div class="flex flex-col">
              <p class="t text-darkText text-lg">Total Property Sales :</p>
              <p class="te text-lightText text-base">5,768</p>
            </div>
            <button
              class="bg-dark mb-20 bg-adminPrimary text-white rounded px-4 py-2"
            >
              See More
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="shadow-md hdden mt-8 bg-white overflow-x-scroll p-3 rounded-md">
      <div class="flex items-center justify-between">
        <p class="t text-darkText text-lg">Latest Transaction</p>
        <div class="relative">
          <div
            @click="setDropDown()"
            :class="[dropDown ? 'bg-[#f9f9fc]' : 'bg-transparent']"
            class="py-1 px-2 border gap-1 rounded duration-300 flex items-center justify-center cursor-pointer"
          >
            <p class="text-sm text-lightText">This {{ dropDownSelection }}</p>
            <CaretIcon class="w-3 h-3" />
          </div>
          <div
            :class="[dropDown ? 'opacity-1' : 'opacity-0']"
            class="rounded border absolute right-0 w-[160px] bg-white"
          >
            <p
              @click="(dropDownSelection = 'Week'), setDropDown()"
              class="text-sm text-lightText py-2 cursor-pointer hover:bg-[#f9f9fc] duration-300 px-3"
            >
              This Week
            </p>
            <p
              @click="(dropDownSelection = 'Month'), setDropDown()"
              class="text-sm text-lightText py-2 cursor-pointer hover:bg-[#f9f9fc] duration-300 px-3"
            >
              This Month
            </p>
            <p
              @click="(dropDownSelection = 'Year'), setDropDown()"
              class="text-sm text-lightText py-2 cursor-pointer hover:bg-[#f9f9fc] duration-300 px-3"
            >
              This Year
            </p>
          </div>
        </div>
      </div>
      <hr class="my-5" />
      <table class="overflow-x-scroll bg-[red w-full">
        <thead>
          <tr>
            <th class="text-left">
              <input type="checkbox" />
            </th>
            <th class="text-sm text-darkText text-left font-medium">
              Purchase ID
            </th>
            <th class="text-sm text-darkText text-left font-medium">
              Buyer Name
            </th>
            <th class="text-sm text-darkText text-left font-medium">
              Purchase Date
            </th>
            <th class="text-sm text-darkText text-left font-medium">
              Total Amount
            </th>
            <th class="text-sm text-darkText text-left font-medium">
              Payment Method
            </th>
            <th class="text-sm text-darkText text-left font-medium">
              Payment Status
            </th>
            <th class="text-sm text-darkText text-left font-medium">Action</th>
          </tr>
        </thead>
        <tbody class="my-4 overflow-x-scroll">
          <tr class="py-4">
            <td class="w-10">
              <input type="checkbox" name="" id="" />
            </td>
            <td class="text-sm py-5 text-lightText font-semibold">#201</td>
            <td class="text-sm py-5 text-lef w-44 text-lightText font-normal">
              <div class="flex items-center gap-2">
                <ImageComponent
                  alt="buyer image"
                  :src="image1"
                  rounded
                  class="max-w-8 min-w-8"
                />
                <p class="h whitespace-nowrap">Chinonso O. Xavier</p>
              </div>
            </td>
            <!-- <td class="text-xs py-5 text-lightText font-normal">#201</td> -->
            <td class="text-sm py-5 text-lightText font-normal">
              Oct 10, 2024
            </td>
            <td class="text-sm py-5 text-lightText font-normal">$45,842</td>
            <td class="text-sm py-5 text-lightText font-normal">Mastercard</td>
            <td class="text-sm py-5 text-lightText font-normal">
              <div
                class="bg-[#def3e6] w-min px-2 text-[rgba(92,193,132)] py-1 text-center text-xs font-medium"
              >
                Completed
              </div>
            </td>
            <td class="text-sm py-5 text-lightText font-normal w-32">
              <div class="flex gap-2 items-center justify-center">
                <IconComponent
                  class="rounded-sm bg-[#eef2f7] fill-[#323a46] hover:bg-[rgba(210,214,220)] duration-300 w-10 h-8"
                >
                  <EyeDuoIcon class="w-5 h-5" />
                </IconComponent>
                <IconComponent
                  class="rounded-sm bg-[rgba(96,74,227,.1)] fill-[#604ae3] hover:bg-[#604ae3] hover:fill-white duration-300 w-10 h-8"
                >
                  <PencilSimpleLineDuoIcon class="w-5 h-5" />
                </IconComponent>
                <IconComponent
                  class="rounded-sm bg-[rgba(233,103,103,.3)] fill-[#e96767] hover:fill-white hover:bg-[#e96767] duration-300 w-10 h-8"
                >
                  <TrashDuoIcon class="w-5 h-5" />
                </IconComponent>
              </div>
            </td>
          </tr>
          <tr class="py-4 bg-[#f9f9fc]">
            <td class="w-10">
              <input type="checkbox" name="" id="" />
            </td>
            <td class="text-sm py-5 text-lightText font-semibold">#201</td>
            <td class="text-sm py-5 text-lef w-44 text-lightText font-normal">
              <div class="flex items-center gap-2">
                <ImageComponent
                  alt="buyer image"
                  :src="image1"
                  rounded
                  class="max-w-8 min-w-8"
                />
                <p class="h whitespace-nowrap">Chinonso O. Xavier</p>
              </div>
            </td>
            <!-- <td class="text-xs py-5 text-lightText font-normal">#201</td> -->
            <td class="text-sm py-5 text-lightText font-normal">
              Oct 10, 2024
            </td>
            <td class="text-sm py-5 text-lightText font-normal">$45,842</td>
            <td class="text-sm py-5 text-lightText font-normal">Mastercard</td>
            <td class="text-sm py-5 text-lightText font-normal">
              <div
                class="bg-[#def3e6] w-min px-2 text-[rgba(92,193,132)] py-1 text-center text-xs font-medium"
              >
                Completed
              </div>
            </td>
            <td class="text-sm py-5 text-lightText font-normal w-32">
              <div class="flex gap-2 items-center justify-center">
                <IconComponent
                  class="rounded-sm bg-[#eef2f7] fill-[#323a46] hover:bg-[rgba(210,214,220)] duration-300 w-10 h-8"
                >
                  <EyeDuoIcon class="w-5 h-5" />
                </IconComponent>
                <IconComponent
                  class="rounded-sm bg-[rgba(96,74,227,.1)] fill-[#604ae3] hover:bg-[#604ae3] hover:fill-white duration-300 w-10 h-8"
                >
                  <PencilSimpleLineDuoIcon class="w-5 h-5" />
                </IconComponent>
                <IconComponent
                  class="rounded-sm bg-[rgba(233,103,103,.3)] fill-[#e96767] hover:fill-white hover:bg-[#e96767] duration-300 w-10 h-8"
                >
                  <TrashDuoIcon class="w-5 h-5" />
                </IconComponent>
              </div>
            </td>
          </tr>
          <tr class="py-4">
            <td class="w-10">
              <input type="checkbox" name="" id="" />
            </td>
            <td class="text-sm py-5 text-lightText font-semibold">#201</td>
            <td class="text-sm py-5 text-lef w-44 text-lightText font-normal">
              <div class="flex items-center gap-2">
                <ImageComponent
                  alt="buyer image"
                  :src="image1"
                  rounded
                  class="max-w-8 min-w-8"
                />
                <p class="h whitespace-nowrap">Chinonso O. Xavier</p>
              </div>
            </td>
            <!-- <td class="text-xs py-5 text-lightText font-normal">#201</td> -->
            <td class="text-sm py-5 text-lightText font-normal">
              Oct 10, 2024
            </td>
            <td class="text-sm py-5 text-lightText font-normal">$45,842</td>
            <td class="text-sm py-5 text-lightText font-normal">Mastercard</td>
            <td class="text-sm py-5 text-lightText font-normal">
              <div
                class="bg-[#def3e6] w-min px-2 text-[rgba(92,193,132)] py-1 text-center text-xs font-medium"
              >
                Completed
              </div>
            </td>
            <td class="text-sm py-5 text-lightText font-normal w-32">
              <div class="flex gap-2 items-center justify-center">
                <IconComponent
                  class="rounded-sm bg-[#eef2f7] fill-[#323a46] hover:bg-[rgba(210,214,220)] duration-300 w-10 h-8"
                >
                  <EyeDuoIcon class="w-5 h-5" />
                </IconComponent>
                <IconComponent
                  class="rounded-sm bg-[rgba(96,74,227,.1)] fill-[#604ae3] hover:bg-[#604ae3] hover:fill-white duration-300 w-10 h-8"
                >
                  <PencilSimpleLineDuoIcon class="w-5 h-5" />
                </IconComponent>
                <IconComponent
                  class="rounded-sm bg-[rgba(233,103,103,.3)] fill-[#e96767] hover:fill-white hover:bg-[#e96767] duration-300 w-10 h-8"
                >
                  <TrashDuoIcon class="w-5 h-5" />
                </IconComponent>
              </div>
            </td>
          </tr>
          <tr class="py-4 bg-[#f9f9fc]">
            <td class="w-10">
              <input type="checkbox" name="" id="" />
            </td>
            <td class="text-sm py-5 text-lightText font-semibold">#201</td>
            <td class="text-sm py-5 text-lef w-44 text-lightText font-normal">
              <div class="flex items-center gap-2">
                <ImageComponent
                  alt="buyer image"
                  :src="image1"
                  rounded
                  class="max-w-8 min-w-8"
                />
                <p class="h whitespace-nowrap">Chinonso O. Xavier</p>
              </div>
            </td>
            <!-- <td class="text-xs py-5 text-lightText font-normal">#201</td> -->
            <td class="text-sm py-5 text-lightText font-normal">
              Oct 10, 2024
            </td>
            <td class="text-sm py-5 text-lightText font-normal">$45,842</td>
            <td class="text-sm py-5 text-lightText font-normal">Mastercard</td>
            <td class="text-sm py-5 text-lightText font-normal">
              <div
                class="bg-[#fbe1e1] w-min px-2 text-[rgba(230,103,102)] py-1 text-center text-xs font-medium"
              >
                Canceled
              </div>
            </td>
            <td class="text-sm py-5 text-lightText font-normal w-32">
              <div class="flex gap-2 items-center justify-center">
                <IconComponent
                  class="rounded-sm bg-[#eef2f7] fill-[#323a46] hover:bg-[rgba(210,214,220)] duration-300 w-10 h-8"
                >
                  <EyeDuoIcon class="w-5 h-5" />
                </IconComponent>
                <IconComponent
                  class="rounded-sm bg-[rgba(96,74,227,.1)] fill-[#604ae3] hover:bg-[#604ae3] hover:fill-white duration-300 w-10 h-8"
                >
                  <PencilSimpleLineDuoIcon class="w-5 h-5" />
                </IconComponent>
                <IconComponent
                  class="rounded-sm bg-[rgba(233,103,103,.3)] fill-[#e96767] hover:fill-white hover:bg-[#e96767] duration-300 w-10 h-8"
                >
                  <TrashDuoIcon class="w-5 h-5" />
                </IconComponent>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="rounded-md bg-white shadow-md p-5 my-5">
      <div class="flex gap-5 items-stretch justify-between flex-wrap">
        <div class="flex flex-col flex-1 max-w-80 items-start min-w-[260px]">
          <div class="flex flex-col mb-5">
            <p class="text-xl font-semibold text-lightText">Reviews</p>
            <p class="text-sm text-lightText">Overview of Review</p>
          </div>
          <div class="flex flex-col my-7">
            <p class="text-2xl font-semibold text-darkText">25426</p>
            <p class="text-sm text-lightText">
              This month we got 346 New Reviews
            </p>
          </div>
          <div class="flex items-center justify-start gap-3">
            <ImageComponent
              alt="image"
              :src="image1"
              rounded
              class="max-w-12"
            />
            <ImageComponent
              alt="image"
              :src="image1"
              rounded
              class="max-w-12"
            />
            <ImageComponent
              alt="image"
              :src="image1"
              rounded
              class="max-w-12"
            />
            <ImageComponent
              alt="image"
              :src="image1"
              rounded
              class="max-w-12"
            />
          </div>
          <div class="py-2 rounded my-5 bg-adminPrimary text-white px-4">
            <button>Checkout All Reviews</button>
          </div>
        </div>
        <div class="flex-1 flex flex-col justify-between items-start">
          <div class="w-full">
            <div class="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-12 h-12 fill-lightText"
                viewBox="0 0 24 24"
              >
                <path
                  fill="current"
                  fill-rule="evenodd"
                  d="M12 2.75a9.25 9.25 0 1 0 0 18.5a9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12m7.147 3.553a.75.75 0 0 1 1.05-.155c.728.54 1.607.852 2.553.852s1.825-.313 2.553-.852a.75.75 0 1 1 .894 1.204A5.77 5.77 0 0 1 12 17.75a5.77 5.77 0 0 1-3.447-1.148a.75.75 0 0 1-.156-1.049"
                  clip-rule="evenodd"
                ></path>
                <path
                  fill="current"
                  d="M16 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5s1 .672 1 1.5m-6 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S8.448 9 9 9s1 .672 1 1.5"
                ></path>
              </svg>
              <div>
                <p class="text-lg mobile:text-base font-semibold text-darkText">
                  Positive Reviews
                </p>
                <p class="text-sm text-lightText font-normal">25547 Reviews</p>
              </div>
            </div>
            <div class="flex-1 h-[4px] my-4 rounded-full bg-[#7c8fac]">
              <div class="w-[20%] h-full rounded-r-full bg-[#2962ff]"></div>
            </div>
          </div>
          <div class="w-full">
            <div class="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-12 h-12 fill-lightText"
                viewBox="0 0 24 24"
              >
                <path
                  fill="current"
                  fill-rule="evenodd"
                  d="M12 2.75a9.25 9.25 0 1 0 0 18.5a9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12m7.303 4.398A5.77 5.77 0 0 1 12 15.25c1.285 0 2.474.427 3.447 1.148a.75.75 0 1 1-.894 1.204A4.27 4.27 0 0 0 12 16.75a4.27 4.27 0 0 0-2.553.852a.75.75 0 1 1-.894-1.204"
                  clip-rule="evenodd"
                ></path>
                <path
                  fill="current"
                  d="M16 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5s1 .672 1 1.5m-6 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S8.448 9 9 9s1 .672 1 1.5"
                ></path>
              </svg>
              <div>
                <p class="text-lg mobile:text-base font-semibold text-darkText">
                  Negative Reviews
                </p>
                <p class="text-sm text-lightText font-normal">5547 Reviews</p>
              </div>
            </div>
            <div class="flex-1 h-[5px] my-4 rounded-full bg-[#7c8fac]">
              <div class="w-[10%] h-full rounded-r-full bg-adminPrimary"></div>
            </div>
          </div>
          <div class="w-full">
            <div class="flex gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 fill-lightText" viewBox="0 0 24 24"><path fill="current" fill-rule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5a9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12m7 4a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></path><path fill="current" d="M16 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5s1 .672 1 1.5m-6 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S8.448 9 9 9s1 .672 1 1.5"></path></svg>
              <div>
                <p class="text-lg mobile:text-base font-semibold text-darkText">
                  Nuetral Reviews
                </p>
                <p class="text-sm text-lightText font-normal">25547 Reviews</p>
              </div>
            </div>
            <div class="flex-1 h-[5px] my-4 rounded-full bg-[#7c8fac]">
              <div class="w-[60%] h-full rounded-r-full bg-[rgba(54,153,255)]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
th,
td {
  @apply px-2 whitespace-nowrap;
}
</style>
