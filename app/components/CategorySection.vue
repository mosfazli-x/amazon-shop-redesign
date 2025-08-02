<script setup>
import { ref } from 'vue';

const categories = ref([
  { name: 'Macbook', image: 'https://www.okamac.com/3396/macbook-pro-13-touch-bar-2018-intel-i5-23-ghz-8-go-ram.jpg' },
  { name: 'Playstation', image: 'https://images.sparhandy.de/assets/1a6298e3066e47236fdd911c98810adeeccaa9d692c71f14ca3f2abec3858c0b/PS5PRO_PR_01_RGB.png?tr=w-640,cm-pad_resize' },
  { name: 'Television', image: 'https://metz-ce.de/fileadmin/_processed_/a/f/csm_Topas_MetzVision_1000x1050_6dc28061a3.png' },
  { name: 'Camera', image: 'https://in.canon/media/image/2024/07/17/3d47abeaf9574a9ba9401c6ff2ca7bb1_EOS+R5+Mark+II+%26+RF24-105mm+f4L+IS+USM+Front+Slant.png' }
]);
</script>

<template>
  <section class="mt-16">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold text-gray-900">Shop by Categories</h2>
      <a href="#" class="text-sm font-medium text-orange-600 hover:underline">View All</a>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-6">
      <div v-for="category in categories" :key="category.name" class="bg-white rounded-xl p-6 text-center cursor-pointer hover:shadow-lg transition-shadow border border-base-content/10">
        <img :src="category.image" :alt="category.name" class="h-32 w-full object-contain mx-auto">
        <h3 class="mt-4 font-semibold text-gray-800">{{ category.name }}</h3>
      </div>
    </div>
  </section>
</template>