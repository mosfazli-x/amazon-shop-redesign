<script setup>
import { ref } from 'vue';

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});

const selectedSize = ref(40);
const productColor = ref('White')
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold text-gray-900">{{ product.name }}</h1>
    <a href="#" class="text-sm text-gray-500 hover:underline">{{ product.seller }}</a>

    <div class="mt-4 flex items-center">
      <div class="flex items-center">
        <IconStar v-for="i in 5" :key="i" class="h-5 w-5 stroke-base-content" :class="[i <= Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-300']" />
      </div>
      <span class="text-sm text-gray-600 ml-2">{{ product.reviewCount }} reviews</span>
    </div>

    <p class="mt-4 text-4xl font-extrabold text-gray-900">${{ product.price }}</p>

    <div class="mt-6">
      <h3 class="text-sm font-medium text-gray-900">Colors Available: White</h3>
      <div class="flex items-center space-x-3 mt-2">
        <button v-for="color in product.colors" :key="color.name" @click="productColor = color.name" class="w-8 h-8 cursor-pointer rounded-full border-2 border-gray-300 focus:outline-none ring-2 ring-offset-1" :style="{ backgroundColor: color.hex }" :class="[productColor === color.name ? 'ring-orange-500' : 'ring-transparent']">
        </button>
      </div>
    </div>

    <div class="mt-6">
      <h3 class="text-sm font-medium text-black">Size</h3>
      <div class="grid grid-cols-6 gap-2 mt-2">
        <button v-for="size in product.sizes" :key="size" @click="selectedSize = size" class="p-2 border rounded-lg text-sm cursor-pointer" :class="selectedSize === size ? 'bg-base-300 border-gray-900' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'">
          {{ size }}
        </button>
      </div>
    </div>

    <div class="mt-8">
      <button class="w-full cursor-pointer bg-orange-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors">
        <ShoppingCartIcon class="h-6 w-6" />
        Add to cart
      </button>
    </div>

    <div class="mt-6 grid grid-cols-3 gap-4 text-center text-sm text-gray-600">
      <div class="bg-gray-100 p-3 rounded-lg flex flex-col items-center justify-center border border-base-content/20 hover:border-base-content/50 cursor-pointer">
        <IconTruck class="h-6 w-6 mb-1 stroke-gray-500" />
        <span>Standard Shipping</span>
      </div>
      <div class="bg-gray-100 p-3 rounded-lg flex flex-col items-center justify-center border border-base-content/20 hover:border-base-content/50 cursor-pointer">
        <IconSpeedometer class="h-6 w-6 mb-1 stroke-gray-500" />
        <span>Express Shipping</span>
      </div>
      <div class="bg-gray-100 p-3 rounded-lg flex flex-col items-center justify-center border border-base-content/20 hover:border-base-content/50 cursor-pointer">
        <IconHandMoney class="h-6 w-6 mb-1 stroke-gray-500" />
        <span>Return Policy</span>
      </div>
    </div>
  </div>
</template>