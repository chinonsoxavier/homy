<script setup lang="ts" >
import { ref } from 'vue';


const currentPage = ref(0);

const Pages = [1,"...",3,"...",5]

</script>

<template>
  <div class="flex items-center justify-between rounded-sm border bg-white">
    					<div
							ref="prevpag"
							
							class="flex items-center gap-1 px-5 duration-700"
							:class="[
								currentPage > 1
									? ' opacity-1 cursor-pointer fill-seaprimary p-2 text-seaprimary  hover:bg-seaprimary hover:text-white'
									: 'cursor-not-allowed  opacity-75 hover:bg-white hover:fill-none hover:text-seaprimary',
							]"
						>
							<svg
								class="h-5 w-5 fill-current"
								xmlns="http://www.w3.org/2000/svg"
								fill="seaprimary"
								viewBox="0 0 256 256"
							>
								<path
									d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"
								></path>
							</svg>
							<span class="text-inherit">Previous</span>
						</div>
						<div ref="pagcontrol" class="pagcontainer flex items-center justify-center">
							<div
								v-for="(pageLenght, index) in Pages"
								:key="index"
								
								class="cursor-pointer border border-seabackgroud-200 px-4 py-2 duration-700"
							>
								{{pageLenght}}
							</div>
						</div>
						<div
							ref="nextpag"
						
							class="flex items-center gap-1 px-5 duration-700"
							
						>
							<span class="text-inherit">Next</span>
							<svg
								class="h-5 w-5 fill-current"
								xmlns="http://www.w3.org/2000/svg"
								fill="seaprimary"
								viewBox="0 0 256 256"
							>
								<path
									d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"
								></path>
							</svg>
						</div>
					</div>
</template>