<script setup>
import { ref } from 'vue';
import AppHeader from '../components/AppHeader.vue';
import ProductCard from '../components/ProductCard.vue';
import Pagination from '../components/Pagination.vue';
import AppFooter from '../components/AppFooter.vue';


const router = useRouter()
// Mock Data for products - در یک پروژه واقعی این داده‌ها از API دریافت می‌شود
const products = ref([
  { id: 1, brand: 'Nike', name: 'Court Vision Lo Nn', price: 999, rating: 4.5, reviewCount: 124, image: 'https://www.nsport.ba/UserFiles/products/big/08/14/muske-patike-nike-court-vision-lo-nn-DH2987-113.png', colors: ['#fff', '#000', '#e2e8f0'], isBestseller: false },
  { id: 2, brand: 'Adidas', name: 'Runfalcon 2.0', price: 799, rating: 4.8, reviewCount: 254, image: 'https://d2cva83hdk3bwc.cloudfront.net/adidas-runfalcon-20-j-dark-blue-1.jpg', colors: ['#000', '#fff'], isBestseller: false },
  { id: 3, brand: 'Adidas', name: 'Runfalcon 3.0', price: 549, rating: 4.2, reviewCount: 88, image: 'https://assets.gy.digital/1-CtQLiYCnB8RrtuPSnjAEtR6f4=/fit-in/1800x1800/filters:fill(white):format(webp)/s3.gy.digital%2Ffamousports%2Fuploads%2Fasset%2Fdata%2F319165%2FHP5840_1.png', colors: ['#000', '#eab308', '#ef4444'], isBestseller: false },
  { id: 4, brand: 'Puma', name: 'Up', price: 1299, rating: 5, reviewCount: 311, image: 'https://images.novelship.com/product/puma_up__white_vine__372605-35_0_93765.png', colors: ['#fff', '#3b82f6'], isBestseller: true },
  { id: 5, brand: 'Skechers', name: 'Air', price: 449, rating: 4.0, reviewCount: 56, image: 'https://droppe-supplier-masterdata-static-files.s3.amazonaws.com/images/bas/1000013001_F.png', colors: ['#e0f2fe', '#fff', '#000'], isBestseller: false },
  { id: 7, brand: 'Nike', name: 'Air Max Sc', price: 1299, rating: 4.9, reviewCount: 450, image: 'https://sidewalks.net/uploads/images/74528b48978105f6666347981f8179a1.webp', colors: ['#fff', '#000', '#6b7280'], isBestseller: false },
  { id: 8, brand: 'Nike', name: 'Downshifter 12 Road Running', price: 499, rating: 4.3, reviewCount: 99, image: 'https://cdn.media.amplience.net/i/teamtownsports/9032061_WhiteMidNavyPink_0?$large$', colors: ['#000', '#fff'], isBestseller: false },
  { id: 9, brand: 'Adidas', name: 'Vs Pace 2.0', price: 899, rating: 4.7, reviewCount: 210, image: 'https://www.colgansports.ie/wp-content/uploads/2024/05/IE3471_1_FOOTWEAR_Photography_Side-Lateral-Center-View_transparent.png', colors: ['#fff', '#000'], isBestseller: false },
  { id: 10, brand: 'Puma', name: 'Teveris Nitro Noughties', price: 999, rating: 4.4, reviewCount: 75, image: 'https://images.novelship.com/product/puma_teveris_nitro__light_sand__388774-02_0_81072.png', colors: ['#e5e7eb', '#f1f5f9'], isBestseller: false },
  { id: 11, brand: 'Puma', name: 'Skye', price: 699, rating: 4.1, reviewCount: 63, image: 'https://images.novelship.com/product/puma_skye_lite_s_suede__black_white__381522-01_0_48644.png', colors: ['#fff', '#fecaca'], isBestseller: false },
  { id: 12, brand: 'Adidas', name: 'Runfalcon 2.0 K', price: 549, rating: 4.8, reviewCount: 340, image: 'https://cdn.sneakerbaron.nl/uploads/2021/09/09112043/adidas-Run-Falcon-2.0-Core-Black-G58096-700x700.png', colors: ['#000', '#fff'], isBestseller: false },
]);
</script>

<template>
  <div>
    <AppHeader />
    <main class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="pt-8">
        <div class="flex items-center text-sm text-gray-500">
          <span>Payplke Products</span>
          <ChevronRightIcon class="h-4 w-4 mx-1" />
          <span class="font-semibold text-gray-700">Sneakers</span>
        </div>
        <div class="flex justify-between items-baseline mt-4">
          <h1 class="text-3xl font-bold text-gray-900">Sneakers</h1>
          <span class="text-sm text-gray-600">157 results</span>
        </div>
      </div>

      <div class="mt-6 flex flex-wrap gap-3">
        <button class="px-5 py-2 text-sm font-medium bg-orange-500 text-white border border-orange-500 rounded-full shadow-sm cursor-pointer">Express Shipping</button>
        <button class="px-5 py-2 text-sm font-medium bg-white text-gray-700 border border-gray-300 rounded-full hover:bg-gray-100 cursor-pointer">Coupon Products</button>
        <button class="px-5 py-2 text-sm font-medium bg-white text-gray-700 border border-gray-300 rounded-full hover:bg-gray-100 cursor-pointer">Free Cargo</button>
        <button class="px-5 py-2 text-sm font-medium bg-white text-gray-700 border border-gray-300 rounded-full hover:bg-gray-100 cursor-pointer">All Filters</button>
      </div>

      <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <ProductCard @click="router.push('/product-detail')" v-for="product in products" :key="product.id" :product="product" />
      </div>

      <Pagination />

    </main>
    <AppFooter />
  </div>
</template>