<script setup lang="ts" >
import { ref } from 'vue';
import EyeDuoIcon from '../../../../components/icons/duo/EyeDuoIcon.vue';
import axios from 'axios';
import { baseUrl } from '../../../../utilities/network/baseUrl';
import Logo from '../../../../components/ReComponents/Logo.vue';

var showPassword = ref(false);
const formData = ref({
  username: '',
  password: '',
  email: 'email'
});



const register = async () => {
try {
  const data = new FormData();
  data.append('userName', formData.value.username);
  data.append('email', formData.value.email);
  data.append('password', formData.value.password);

  const res = await axios.post(`${baseUrl}register`, data);

  console.log(res.data);
} catch (error) {
  console.log(error)
}
  console.log();
}


const setShowPassword = () => {
  showPassword.value = !showPassword.value;
}

</script>

<template>
  <form @submit.prevent="register" >
  <div 
    class="w-screen mobile:px-5 flex flex-col items-center justify-center h-screen bg-lightPrimary"
  >
  <Logo class="fill-black"/>
    <div
      class="flex-col rounded-lg mt-3 gap-5 flex items-center justify-center bg-white max-w-[90%] shadow-lg p-7"
    >
      <div class="flex items-center justify-start w-full" >
        <p
          class="font-Heeb text-large text-adminPrimary font-semibold whitespace-nowrap"
        >
          Create Account
        </p>
      </div>
       <div class="p min-w-[200px] w-full flex-1">
        <label htmlFor="nameLabel" for="Your Full Name">Your Name</label>
        <div class="border rounded-xl w-full mt-1">
          <input v-model="formData.username"
            class="outline-none w-full h-full rounded-xl py-2 px-2"
            placeholder="Enter your Email"
            id="nameLabel"
            type="text"
          />
        </div>
        </div>  <div class="p min-w-[200px] w-full flex-1">
        <label htmlFor="nameLabel" for="Your Email">Your Email</label>
        <div class="border rounded-xl w-full mt-1">
          <input v-model="formData.email"
            class="outline-none w-full h-full rounded-xl py-2 px-2"
            placeholder="Enter your Email"
            id="nameLabel"
            type="email"
          />
        </div>
        </div>  <div class="p min-w-[200px] w-full flex-1">
        <label htmlFor="nameLabel" for="Your Password">Your Pasword</label>
        <div class="border rounded-xl w-full flex items-center justify-center mt-1 relative">
          <input v-model="formData.password"
            class="outline-none w-full h-full rounded-xl py-2 px-2"
            placeholder="Enter your Password"
            id="nameLabel"
            :type="showPassword ? 'text' : 'password'"
          />
          <div class="absolute right-3" v-on:click="setShowPassword()" >
                  <EyeDuoIcon class="w-4 h-4"  />
          </div>
        </div>
        </div> 
      <div class="gap-2 flex items-center justify-start w-full">
        <input type="checkbox" />
        <p class="text-sm font-medium mobile:text-[10px] whitespace-nowrap text-lightText">
          I agree with <span class="text-primary">privacy policy & terms</span>
        </p>
      </div>
      <div class="flex items-center w-full justify-center" >
        <button class="w-full bg-adminPrimary flex-1 text-white py-2" v-on:click="register()" >REGISTER</button>
      </div>
    </div>
    <div class="mt-5 flex items-center justify-center" >
        <p class="text-medium text-lightText font-medium mobile:text-sm " >Already have an account? <span class="text-primary " ><router-link to="/auth/login" >Login</router-link></span></p>
    </div>
  </div>
    </form>

</template>
