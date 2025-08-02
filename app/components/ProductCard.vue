<script setup>

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div class="bg-white border border-base-content/10 p-4 rounded-2xl hover:border-gray-200 hover:shadow-lg transition-all duration-300 group cursor-pointer">
    <div class="bg-gray-100 rounded-xl overflow-hidden relative">
      <img :src="product.image" :alt="product.name" class="w-full h-48 object-contain p-4 transform transition-transform duration-300 group-hover:scale-105" />
      <span v-if="product.isBestseller" class="absolute top-2 right-2 bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded">BESTSELLER</span>
    </div>
    <div class="mt-4">
      <div class="flex items-center space-x-1.5">
        <span v-for="color in product.colors" :key="color" class="block w-4 h-4 rounded-full border border-gray-300" :style="{ backgroundColor: color }"></span>
      </div>
      <h3 class="mt-3 text-sm font-bold text-gray-900 truncate" :title="product.name">
        <span class="font-normal text-gray-600">{{ product.brand }}</span> {{ product.name }}
      </h3>
      <div class="flex items-center mt-1">
        <div class="flex items-center">
            <icon-star v-for="i in 5" :key="i" class="h-4 w-4" :class="[i <= Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-300']" />
        </div>
        <span class="text-xs text-gray-500 ml-2">({{ product.reviewCount }})</span>
      </div>
      <p class="mt-2 text-lg font-extrabold text-gray-900">${{ product.price }}</p>
    </div>
  </div>
</template>