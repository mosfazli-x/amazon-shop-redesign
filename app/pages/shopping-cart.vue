<template>
  <div class="bg-gray-100 min-h-screen font-sans">
    <app-header></app-header>

    <main class="container mx-auto mt-10 p-4">
      <div class="mb-6 ">
        <a href="#" class="text-blue-600 stroke-blue-600 hover:underline flex gap-1 align-middle items-center"><icon-arrow-path class="w-4 h-4 stroke-inherit rotate-180"></icon-arrow-path> Return to Shopping</a>
      </div>

      <div class="flex flex-col lg:flex-row gap-8">
        <div class="flex-grow">
          <h1 class="text-3xl font-bold mb-6 text-gray-800">Shopping Cart</h1>
          <div class="space-y-4">

            <div v-for="item in cartItems" @click="router.push('/product-detail')" :key="item.id" class="bg-white rounded-lg shadow p-6 flex flex-col md:flex-row items-start md:items-center gap-6 border border-base-content/10 hover:bg-base-200 cursor-pointer">
              <img :src="item.image" :alt="item.name" class="w-24 h-24 object-contain rounded-md">

              <div class="flex-grow">
                <h2 class="text-xl font-semibold text-gray-900">{{ item.name }}</h2>
                <p class="text-gray-500">{{ item.brand }}</p>
                <div class="mt-2">
                  <span class="text-sm text-gray-500">{{ item.shippingType }}</span>
                </div>
              </div>

              <div class="flex items-center gap-4">
                <div class="flex items-center border border-gray-300 rounded-md">
                  <button @click="updateQuantity(item.id, item.quantity - 1)" class="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-l-md disabled:opacity-50" :disabled="item.quantity <= 1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                    </svg>
                  </button>
                  <span class="px-4 py-1 text-gray-800 font-medium">{{ item.quantity }}</span>
                  <button @click="updateQuantity(item.id, item.quantity + 1)" class="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-r-md">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>

              <div class="flex items-center gap-4 text-right">
                <div>
                  <p class="text-lg font-bold text-gray-900">${{ item.price.toFixed(2) }}</p>
                  <p v-if="item.originalPrice" class="text-sm text-gray-500 line-through">${{ item.originalPrice.toFixed(2) }}</p>
                </div>
                <button @click="removeItem(item.id)" class="text-gray-400 hover:text-red-500">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

          </div>
        </div>

        <div class="w-full lg:w-1/3">
          <div class="bg-white rounded-lg shadow p-6 sticky top-10">
            <h2 class="text-2xl font-bold mb-6 text-gray-800">Summary</h2>

            <div class="space-y-3 text-gray-700">
              <div class="flex justify-between">
                <span>Summary</span>
                <span>${{ summary.toFixed(2) }}</span>
              </div>
              <div class="flex justify-between text-green-600">
                <span>Savings</span>
                <span>-${{ savings.toFixed(2) }}</span>
              </div>
              <div class="flex justify-between">
                <span>Standard Shipping</span>
                <span>Free</span>
              </div>
              <div class="flex justify-between">
                <span>Taxes</span>
                <span class="text-gray-500">Calculated at checkout</span>
              </div>
            </div>

            <div class="border-t my-6"></div>

            <div class="flex justify-between text-xl font-bold text-gray-900">
              <span>Estimated Total</span>
              <span>${{ estimatedTotal.toFixed(2) }}</span>
            </div>

            <button class="w-full mt-6 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-full transition duration-300">
              Proceed to Checkout
            </button>

            <div class="mt-6 flex">
              <input type="text" placeholder="Discount Codes" class="flex-grow p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
              <button class="bg-gray-800 text-white font-bold px-6 rounded-r-md hover:bg-gray-700">Apply</button>
            </div>
          </div>
        </div>
      </div>
    </main>


    <app-footer></app-footer>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { routerKey } from 'vue-router';

const router = useRouter()

const cartItems = ref([
  {
    id: 1,
    name: 'Nike Court Vision Lo Nn',
    brand: 'Nike',
    price: 999.00,
    originalPrice: 1099.00,
    quantity: 1,
    image: 'https://www.nsport.ba/UserFiles/products/big/08/14/muske-patike-nike-court-vision-lo-nn-DH2987-113.png',
    shippingType: 'Standard Shipping'
  },
  {
    id: 2,
    name: 'Adidas Runfalcon 2.0',
    brand: 'Adidas',
    price: 799.00,
    originalPrice: 899.00,
    quantity: 1,
    image: 'https://assets.gy.digital/1-CtQLiYCnB8RrtuPSnjAEtR6f4=/fit-in/1800x1800/filters:fill(white):format(webp)/s3.gy.digital%2Ffamousports%2Fuploads%2Fasset%2Fdata%2F319165%2FHP5840_1.png',
    shippingType: 'Express Shipping'
  },
  {
    id: 3,
    name: 'Puma Up',
    brand: 'Puma',
    price: 1299.00,
    originalPrice: 1399.00,
    quantity: 1,
    image: 'https://d2cva83hdk3bwc.cloudfront.net/adidas-runfalcon-20-j-dark-blue-1.jpg',
    shippingType: 'Standard Shipping'
  },
]);

// --- Methods ---
const updateQuantity = (id, quantity) => {
  if (quantity < 1) return;
  const item = cartItems.value.find(item => item.id === id);
  if (item) {
    item.quantity = quantity;
  }
};

const removeItem = (id) => {
  cartItems.value = cartItems.value.filter(item => item.id !== id);
};

// --- Computed Properties for Summary ---
const summary = computed(() => {
  return cartItems.value.reduce((total, item) => total + item.originalPrice * item.quantity, 0);
});

const savings = computed(() => {
  const originalTotal = summary.value;
  const discountedTotal = cartItems.value.reduce((total, item) => total + item.price * item.quantity, 0);
  return originalTotal - discountedTotal;
});

const estimatedTotal = computed(() => {
  return cartItems.value.reduce((total, item) => total + item.price * item.quantity, 0);
});

</script>

<style>
/* You can add global styles here if needed, but Tailwind handles most of it. */
/* For example, importing a custom font */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

body {
  font-family: 'Inter', sans-serif;
}
</style>