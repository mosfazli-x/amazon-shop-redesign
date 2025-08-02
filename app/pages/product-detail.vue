<script setup>
import { ref } from 'vue';
import AppHeader from '../components/AppHeader.vue';
import ProductGallery from '../components/ProductGallery.vue';
import ProductInfo from '../components/ProductInfo.vue';
import ProductTabs from '../components/ProductTabs.vue';
import ProductCarousel from '../components/ProductCarousel.vue';
import AppFooter from '../components/AppFooter.vue';

// Mock data for the main product - این داده‌ها معمولاً از یک API دریافت می‌شوند
const product = ref({
  id: 1,
  name: 'Nike Court Vision Lo Nn',
  seller: 'by street supermarket',
  rating: 4.8,
  reviewCount: 254,
  price: 999,
  images: [
    'https://static.nike.com/a/images/t_default/6ef8f54a-1dda-49b8-9097-34c9c3dc766e/NIKE+COURT+VISION+LO+NN.png', // Main image
    'https://sidewalks.net/uploads/images/5779dd8f1494aa899b9d9c8d57c33afa.webp',
    'https://product.hstatic.net/1000367250/product/court-vision-low-next-nature-womens-shoes-zkmmbg__9__07a7452a0f4a43a08b6b4c1729c47666_master.png',
    'https://sidewalks.net/uploads/images/c0b0251a406e7d875acc01b21a08fbd1.webp',
  ],
  colors: [
    { name: 'White', hex: '#FFFFFF', selected: true },
    { name: 'Black', hex: '#000000', selected: false },
    { name: 'Blue', hex: '#3b82f6', selected: false },
  ],
  sizes: [38, 39, 40, 41, 42, 43],
  description: 'Nike Court Vision Low, one of the latest technological members of the Court model, which was first introduced in 1982, has been adapted to the fast-paced pages of the past. It is designed for men\'s group, daily settings. The upper part of the shoe is made of genuine and synthetic leather. It maintains its originality with the original pivot circles placed on the sole as well as the classic, stylish logo of the Nike brand.',
  details: {
    Brand: 'Nike',
    Style: 'Old School',
    Material: 'Printed',
  }
});

</script>

<template>
  <div>
    <AppHeader />

    <main class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="py-6 flex items-center text-sm text-gray-500">
        <span>Payplke Products</span>
        <IconLeft class="h-4 w-4 stroke-base-content mx-1 rotate-180" />
        <span>Sneakers</span>
        <IconLeft class="h-4 w-4 stroke-base-content mx-1 rotate-180" />
        <span class="font-medium text-gray-800">{{ product.name }}</span>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <ProductGallery :images="product.images" />
        <ProductInfo :product="product" />
      </div>

      <ProductTabs :product="product" />

      <ProductCarousel />

    </main>

    <AppFooter />
  </div>
</template>