<template>
	<div class="mx-auto my-auto flex h-screen w-full max-w-[50rem] flex-col items-center justify-center">
		<header class="z-50 mb-auto flex w-full justify-center py-4">
			<!-- <img src="@/assets/logo.svg" class="h-9 w-9" alt="Seamailer's Logo" /> -->
			<nav class="px-4 sm:px-2 lg:px-4" aria-label="Global">
				<a class="flex-none text-xl font-semibold dark:text-white sm:text-3xl" href="#" aria-label="Brand"
					>Chihomes</a
				>
			</nav>
		</header>

		<div class="py-10 px-4 text-center sm:px-6 lg:px-8">
			<h1 class="block text-7xl font-bold text-gray-800 dark:text-white sm:text-9xl">404</h1>
			<h1 class="block text-2xl font-bold text-white"></h1>
			<p class="mt-3 text-gray-600 dark:text-gray-400">Oops, something went wrong.</p>
			<p class="text-gray-600 dark:text-gray-400">Sorry, we couldn't find the page you where looking for.</p>
			<div class="mt-5 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3">
				<button><router-link :to="'/'" class="font-bold">Back to home</router-link></button>
			</div>
		</div>

		<footer class="mt-auto py-5 text-center">
			<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<p class="text-sm text-gray-500">© All Rights Reserved. Chihomes</p>
			</div>
		</footer>
	</div>
</template>

<script setup lang="ts">
</script>

<style scoped></style>
