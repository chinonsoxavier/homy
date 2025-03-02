<template>
  <div class="w-full mx-auto">
    <p class="text-lg text-darkText my-4 font-medium" >Add Property Photo</p>
    <div
      @dragover.prevent="dragover = true"
      @dragleave.prevent="dragover = false"
      @drop.prevent="onDrop"
      :class="[
        'relative w-full border-2 border-dashed rounded-lg p-3 py-20 transition-all duration-200 ease-in-out',
        dragover ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-gray-50'
      ]"
    >
      <input
        type="file"
        ref="fileInput"
        @change="onFileChange"
        accept="image/*"
        multiple
        class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      />
      <div v-if="previews.length === 0" class="text-center">
        <UploadCloudIcon class="mx-auto h-12 w-12 text-gray-400" />
        <p class="mt-2 text-sm text-gray-600">
          Drag and drop your images here, or click to select files
        </p>
        <!-- <p class="mt-1 text-xs text-gray-500">PNG, JPG, GIF (multiple files allowed)</p> -->
      </div>
      
      <div v-else class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
        <div v-for="(preview, index) in previews" :key="index" class="relative group">
          <img :src="preview" alt="Preview" class="w-full h-24 object-cover rounded-md shadow-sm" />
          <button
            @click.stop="removeFile(index)"
            class="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out"
          >
            <XIcon class="h-3 w-3" />
          </button>
        </div>
        <div
          @click="triggerFileInput"
          class="w-full h-24 border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors duration-200 ease-in-out"
        >
          <PlusIcon class="h-8 w-8 text-gray-400" />
        </div>
      </div>
    </div>

    <transition name="fade">
      <p v-if="error" class="mt-4 text-sm text-red-500">{{ error }}</p>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { UploadCloudIcon, XIcon, PlusIcon } from 'lucide-vue-next'

const dragover = ref(false)
const previews = ref([])
const error = ref(null)
const fileInput = ref(null)

const MAX_WIDTH = 400
const MAX_HEIGHT = 400

const onDrop = (e) => {
  dragover.value = false
  const files = e.dataTransfer.files
  handleFiles(files)
}

const onFileChange = (e) => {
  const files = e.target.files
  handleFiles(files)
}

const handleFiles = (files) => {
  error.value = null
  Array.from(files).forEach(file => {
    if (file.type.startsWith('image/')) {
      resizeImage(file)
        .then(resizedImage => {
          previews.value.push(resizedImage)
        })
        .catch(err => {
          console.error('Error resizing image:', err)
          error.value = 'Error processing image. Please try again.'
        })
    } else {
      error.value = 'Please select only image files.'
    }
  })
}

const resizeImage = (file) => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => {
      const canvas = document.createElement('canvas')
      let width = img.width
      let height = img.height

      if (width > height) {
        if (width > MAX_WIDTH) {
          height *= MAX_WIDTH / width
          width = MAX_WIDTH
        }
      } else {
        if (height > MAX_HEIGHT) {
          width *= MAX_HEIGHT / height
          height = MAX_HEIGHT
        }
      }

      canvas.width = width
      canvas.height = height

      const ctx = canvas.getContext('2d')
      ctx.drawImage(img, 0, 0, width, height)

      canvas.toBlob(blob => {
        resolve(URL.createObjectURL(blob))
      }, file.type)
    }
    img.onerror = reject
    img.src = URL.createObjectURL(file)
  })
}

const removeFile = (index) => {
  previews.value.splice(index, 1)
}

const triggerFileInput = () => {
  fileInput.value.click()
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>