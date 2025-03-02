<script setup lang="ts" >
import { onMounted } from 'vue';
import HmToastView from './components/HmToast/HmToastView.vue';
import { useUserStore } from './utilities/store';
// import HmToastView from './components/HmToast/HmToastView.vue';
// const userStore = useUserStore();
// import HmToastView from './components/HmToast/HmToastView.vue';
// import { useToastStore } from './components/HmToast/HmToastStore';
const userStore = useUserStore();
onMounted(async () => {
  const accessToken = localStorage.getItem("access");
  await userStore.initializeUser(accessToken);
  if (localStorage.getItem("color-theme") === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark")
  }
});

// const showModal = ref(false);
// const store = useToastStore();

// const hhf = () => {
//   store.success("cdcvdvd");
//   alert(store.toastList);
//   console.log(store.toastList);
// }



</script>

<template id=app >
  <HmToastView />
<div class="column">
		<RouterView />
	</div>
</template>