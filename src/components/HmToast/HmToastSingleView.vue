<script setup lang="ts" >
import { onBeforeUnmount, PropType } from 'vue';
import { IToast } from './HmToastInterface';
import { useToastStore } from './HmToastStore';

const { removeToast } = useToastStore();
const props = defineProps({
    toast: {
        type: Object as PropType<IToast>
    }
});

const timeout = setTimeout(() => {
	removeToast(props.toast.title);
	console.log(props.toast.duration);
	console.log(props.toast.title);
}, props.toast.duration);

const toastContainerClass = [
	{ "bg-emerald-100 ring-emerald-400 text-emerald-700": props.toast.type === "success" },
	{ "bg-rose-100 ring-rose-400 text-rose-700": props.toast.type === "error" },
	{ "bg-blue-100 ring-blue-400 text-blue-700": props.toast.type === "info" },
	{ "bg-amber-50 ring-amber-400 text-amber-800": props.toast.type === "warning" },
];

const closeButtonClass = [
	{ "bg-emerald-50 text-emerald-600 border-emerald-400": props.toast.type === "success" },
	{ "bg-rose-50 text-rose-700 border-rose-400": props.toast.type === "error" },
	{ "bg-blue-50  text-blue-700 border-blue-400": props.toast.type === "info" },
	{ "bg-amber-100 text-amber-700 border-amber-400": props.toast.type === "warning" },
];

onBeforeUnmount(() => {
	clearTimeout(timeout);
});

// const toastStore = useToastStore();


</script>

<template>
	<div
		class="mb-2 flex w-full items-center mt-5 justify-between gap-x-3 rounded-[15px] py-5 pl-5 pr-2 ring-[1px] md:gap-x-6 md:pr-4"
		:class="toastContainerClass"
	>
		<div class="flex flex-col">
			<p class="font-bold first-letter:capitalize">{{ toast.title }}</p>
			<p v-if="toast.description" class="text-sm">{{ toast.description }}</p>
		</div>

		<!--  Close -->
		<button
			v-if="toast.showClose"
			class="rounded-[9px] border p-1"
			:class="closeButtonClass"
			@click="removeToast(toast.description)"
		>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20">
				<rect width="256" height="256" fill="none" />
				<line
					x1="200"
					y1="56"
					x2="56"
					y2="200"
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="24"
				/>
				<line
					x1="200"
					y1="200"
					x2="56"
					y2="56"
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="24"
				/>
			</svg>
		</button>
	</div>
</template>