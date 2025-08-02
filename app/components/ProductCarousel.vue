<script setup>
import { ref } from 'vue';

const lastViewed = ref([
    { id: 1, name: 'Nike Court Vision Lo Nn', image: 'https://www.nsport.ba/UserFiles/products/big/08/14/muske-patike-nike-court-vision-lo-nn-DH2987-113.png', price: '999', rating: 4.8 },
    { id: 2, name: 'Adidas Runfalcon 3.0', image: 'https://assets.gy.digital/1-CtQLiYCnB8RrtuPSnjAEtR6f4=/fit-in/1800x1800/filters:fill(white):format(webp)/s3.gy.digital%2Ffamousports%2Fuploads%2Fasset%2Fdata%2F319165%2FHP5840_1.png', price: '549', rating: 4.2 },
    { id: 3, name: 'Nike Air Max Sc', image: 'https://sidewalks.net/uploads/images/74528b48978105f6666347981f8179a1.webp', price: '1299', rating: 4.9, isBestseller: true },
    { id: 4, name: 'Adidas Vs Pace 2.0', image: 'https://www.colgansports.ie/wp-content/uploads/2024/05/IE3471_1_FOOTWEAR_Photography_Side-Lateral-Center-View_transparent.png', price: '899', rating: 4.7 },
    { id: 5, name: 'Adidas Runfalcon 2.0', image: 'https://d2cva83hdk3bwc.cloudfront.net/adidas-runfalcon-20-j-dark-blue-1.jpg', price: '799', rating: 4.6 },
]);
</script>

<template>
  <div class="mt-16 mb-16">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold text-gray-900">Last Viewed</h2>
      <div class="flex space-x-2">
        <button class="p-2 rounded-full border border-gray-300 hover:bg-gray-100 cursor-pointer"><IconLeft class="h-5 w-5 stroke-base-content"/></button>
        <button class="p-2 rounded-full border border-gray-300 hover:bg-gray-100 cursor-pointer"><IconLeft class="h-5 w-5 stroke-base-content rotate-180"/></button>
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      <div v-for="item in lastViewed" :key="item.id" class="bg-white p-4 rounded-xl group cursor-pointer border border-gray-200 hover:shadow-lg transition-shadow">
        <div class="bg-gray-100 rounded-lg overflow-hidden relative">
          <img :src="item.image" :alt="item.name" class="w-full h-40 object-contain transform group-hover:scale-105 transition-transform duration-300" />
           <span v-if="item.isBestseller" class="absolute top-2 right-2 bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded">BESTSELLER</span>
        </div>
        <h3 class="mt-4 font-semibold text-sm text-gray-800">{{ item.name }}</h3>
        <div class="flex items-center mt-1">
             <IconStar class="h-4 w-4 stroke-yellow-400"/>
             <span class="text-xs text-gray-500 ml-1">{{ item.rating }}</span>
        </div>
        <p class="mt-1 font-bold text-gray-900">${{ item.price }}</p>
      </div>
    </div>
  </div>
</template>