<template>
  <section class="mt-8 lg:mt-12">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div class="text-center lg:text-left">
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
          SHOP LATEST <br> TECHNOLOGICAL PRODUCTS
        </h1>
        <p class="mt-4 text-gray-600 max-w-lg mx-auto lg:mx-0">
          We have the latest products for you. Discover our new collection and elevate your lifestyle with cutting-edge technology.
        </p>
        <button @click="router.push('/products')" class="mt-6 bg-orange-500 text-white font-bold py-3 px-8 rounded-full hover:bg-orange-600 transition-colors cursor-pointer">
          Shop now
        </button>
      </div>
      <div class="relative">
        <img src="https://cdsassets.apple.com/live/7WUAS350/images/iphone/iphone-16e/iphone-16e-colors.png" alt="Latest iPhone model" class="w-3/4 mx-auto lg:w-full">
        <span class="absolute top-4 right-4 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">NEW</span>
      </div>
    </div>
  </section>
</template>

<script setup>
const router = useRouter()
</script>