<script setup lang="ts" >
import { ref } from 'vue';
import EyeDuoIcon from '../../../../components/icons/duo/EyeDuoIcon.vue';
import Logo from '../../../../components/ReComponents/Logo.vue';


var showPassword = ref(false);


const setShowPassword = () => {
  showPassword.value = !showPassword.value;
}

</script>

<template>
  <div 
    class="w-screen flex flex-col items-center justify-center h-screen bg-lightPrimary"
  >
  <Logo class="fill-black"/>
    <div
      class="flex-col rounded-md mt-3 gap-5 flex items-center justify-center bg-white w-in shadow-lg p-7"
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
          <input
            class="outline-none w-full h-full rounded-xl py-2 px-2"
            placeholder="Enter your Email"
            id="nameLabel"
            type="text"
          />
        </div>
        </div>  
        <div class="p min-w-[200px] w-full flex-1">
        <label htmlFor="nameLabel" for="Your Password">Your Pasword</label>
        <div class="border rounded-xl w-full flex items-center justify-center mt-1 relative">
          <input
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
        <p class="text-sm font-medium text-lightText">
          Remember Me
        </p>
      </div>
      <div class="flex items-center w-full justify-center" >
        <button class="w-full bg-adminPrimary flex-1 text-white py-2" >LOGIN</button>
      </div>
    </div>
    <div class="mt-5 flex items-center justify-center" >
        <p class="text-medium text-lightText font-medium mobile:text-sm" >Don`t have an account? <span class="text-primary " ><router-link to="/auth/register" >Sign Up</router-link></span></p>
    </div>
  </div>
</template>
