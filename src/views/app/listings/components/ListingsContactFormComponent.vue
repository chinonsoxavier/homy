<script setup lang="ts">
import { image1 } from "../../../../assets/exports";
import ImageComponent from "../../../../components/ReComponents/ImageComponent.vue";
</script>

<template>
  <div
    class="flex-1 flex min-w-[300px] flex-col items-center justify-center px-6 py-4 bg-white shadow-xl relative tablet:max-w-full max-w-[320px]"
  >
    <ImageComponent
      alt="agent contact form"
      :src="image1"
      rounded
      class="max-w-32"
    />
    <p class="text-center text-darkText my-1 text-lg font-medium">
      Chinonso Xavier
    </p>
    <p class="text-center text-lightText pb-6">Property Agent & Broker</p>

    <div
      class="flex flex-col gap-4 items-center w-full justify-center py-5 border-t"
    >
      <p class="text-left font-medium text-darkText text-lg w-full">
        Contact Agent
      </p>
      <div class="p bg-red] w-full flex-1">
        <label htmlFor="nameLabel" for="Your Full Name">Your Full Name</label>
        <div class="border rounded-md w-full mt-1">
          <input
            class="outline-none w-full h-full rounded-md py-1 px-2"
            placeholder="Enter your name"
            id="nameLabel"
            type="text"
          />
        </div>
      </div>
      <div class="p bg-red] w-full flex-1">
        <label htmlFor="nameLabel" for="Your Email Name">Your Email</label>
        <div class="border rounded-md w-full mt-1">
          <input
            class="outline-none w-full h-full rounded-md py-1 px-2"
            placeholder="Enter your name"
            id="nameLabel"
            type="text"
          />
        </div>
      </div>
      <div class="p bg-red] w-full flex-1">
        <label htmlFor="nameLabel" for="Your Phone Name"
          >Your Phone Number</label
        >
        <div class="border rounded-md w-full mt-1">
          <input
            class="outline-none w-full h-full rounded-md py-1 px-2"
            placeholder="Enter your name"
            id="nameLabel"
            type="text"
          />
        </div>
      </div>
      <div class="p bg-red] w-full flex-1">
        <label htmlFor="nameLabel" for="Your Message"
          >Your Message</label
        >
        <div class="border rounded-md w-full mt-1">
          <textarea rows="3" name="" placeholder="Enter your message" class="rounded-md resize-y w-full p-3 outline-none" id=""></textarea>
        </div>
      </div>
       <button
        class="py-2 px-5 flex items-center w-full my-4 gap-3 rounded-md border bg-adminPrimary text-white fill-white justify-center"
      >
        CONTACT AGENT
      </button>
    </div>
  </div>
</template>
