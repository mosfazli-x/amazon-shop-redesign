<script setup>
const router = useRouter()
const selectedCity = ref("Mashhad")

function changeCity(city) {
  selectedCity.value = city
}
</script>

<template>
  <header class="bg-white py-4 border-b border-gray-200">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
      <div class="flex items-center space-x-8">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon Logo" class="h-8 w-auto">
        <nav class="hidden md:flex space-x-6">
          <a href="/" class="text-sm font-medium text-gray-700 hover:text-orange-500">Home</a>
          <a href="/products" class="text-sm font-medium text-gray-700 hover:text-orange-500">Products</a>
          <a href="#" class="text-sm font-medium text-gray-700 hover:text-orange-500">Categories</a>
          <a href="#" class="text-sm font-medium text-gray-700 hover:text-orange-500">About Us</a>
        </nav>
      </div>

      <div class="flex items-center space-x-4">
        <div class="dropdown dropdown-hover w-28">
          <div tabindex="0" role="button" class="btn bg-base-200 border-none flex pl-2 px-4 justify-start">
            <icon-location class="w-5 h-5 stroke-base-content opacity-50"></icon-location>
            <div class="flex flex-col gap-0">
              <p class="text-xs truncate text-nowrap text-base-content/50">Deliver to</p>
              <p class="text-sm text-base-content/80">{{ selectedCity }}</p>
            </div>
          </div>
          <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li @click="changeCity('Tehran')"><a>Tehran</a></li>
            <li @click="changeCity('Mashhad')"><a>Mashhad</a></li>
            <li @click="changeCity('Isfahan')"><a>Isfahan</a></li>
            <li @click="changeCity('Tabriz')"><a>Tabriz</a></li>
          </ul>
        </div>

        <label class="input bg-base-200 rounded-sm border-none stroke-base-content">
          <IconMagnify class="h-4 w-4 opacity-50"></IconMagnify>
          <input type="search" class="w-70" placeholder="Search for products, brands and more" />
        </label>
        <div class="flex items-center space-x-3">
          <button class="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <IconHeart class="h-6 w-6 fill-gray-600" />
          </button>
          <div class="relative">
            <button class="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
              <IconCart @click="router.push('/shopping-cart')" class="h-6 w-6 stroke-gray-600" />
            </button>
            <span class="absolute -top-1 -right-1 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">2</span>
          </div>
          <button class="btn btn-ghost flex gap-2 h-full py-2 px-3" @click="router.push('/login')">
            <div class="flex flex-col gap-0">
              <h5 class="text-sm text-base-content/50">Hasti Mehrabi</h5>
              <h6 class="text-xs text-base-content/30">09380354358</h6>
            </div>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>