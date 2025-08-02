<script setup>
import { ref } from 'vue';

const email = ref('wwcrynylmzi@gmail.com');
const password = ref('************');
const isPasswordVisible = ref(false);

const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value;
};
</script>

<template>
  <div class="min-h-screen grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
    <div class="flex flex-col justify-center align-middle items-center px-20 sm:px-6 lg:px-20 py-6">
      <div class="flex flex-col justify-center align-middle items-center">
        <div class="mb-16 w-40">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon Logo" class="h-9">
        </div>

        <p class="text-sm font-medium text-base-content/30 text-left w-full">WELCOME BACK 👋</p>
        <h1 class="text-3xl font-bold text-base-content/70 text-left w-full">Continue to your Account.</h1>

        <button class="mt-8 w-full flex justify-center items-center gap-3 py-3 px-4 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google Logo" class="h-6 w-6">
          <span class="font-semibold text-gray-700">Log in with Google</span>
        </button>

        <div class="my-6 flex items-center gap-4 w-full py-3 opacity-20">
          <hr class="flex-grow border-t border-base-content/20 w-full">
          <span class="text-xs font-medium text-nowrap">Or use Email</span>
          <hr class="flex-grow border-t border-base-content/20 w-full">
        </div>


        <form @submit.prevent class="w-full">
          <div class="space-y-5 w-full">
            <div>
              <label for="email" class="block text-xs font-semibold text-gray-500 mb-1">EMAIL</label>
              <input v-model="email" type="email" id="email" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400">
            </div>

            <div>
              <label for="password" class="block text-xs font-semibold text-gray-500 mb-1">PASSWORD</label>
              <div class="relative">
                <input v-model="password" :type="isPasswordVisible ? 'text' : 'password'" id="password" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400">
                <button @click="togglePasswordVisibility" type="button" class="absolute inset-y-0 right-0 px-4 flex items-center text-gray-500">
                  <IconEye v-if="!isPasswordVisible" class="h-5 w-5 stroke-base-content cursor-pointer" />
                  <IconEyeClosed v-else class="h-5 w-5 fill-base-content cursor-pointer" />
                </button>
              </div>
              <a href="#" class="block text-right text-xs font-medium text-orange-600 hover:underline mt-2">Forget password</a>
            </div>
          </div>

          <button type="submit" class="mt-8 w-full bg-orange-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20 cursor-pointer">
            <span>CONTINUE</span>
            <IconLeft class="h-6 w-6 rotate-180 stroke-1 stroke-orange-100 z-10" />
          </button>
        </form>

        <p class="mt-8 text-center text-sm text-gray-600">
          Don't have an account?
          <a href="#" class="font-bold text-orange-600 hover:underline">Sign up</a>
        </p>

      </div>
    </div>

    <div class="hidden md:flex flex-col justify-center items-center bg-white p-10">
      <div class="w-full max-w-md">
        <div class="flex justify-center gap-4 mb-8">
          <a href="#"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" class="h-12 w-24"></a>
          <a href="#"><img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" class="h-12 w-28"></a>
        </div>

        <div class="relative mx-auto border-gray-800 bg-gray-800 border-[10px] rounded-[2.5rem] h-[580px] w-[280px] shadow-2xl">
          <div class="h-[28px] w-[140px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
          <div class="h-[46px] w-[3px] bg-gray-800 absolute -start-[13px] top-[64px] rounded-s-lg"></div>
          <div class="h-[46px] w-[3px] bg-gray-800 absolute -start-[13px] top-[124px] rounded-s-lg"></div>
          <div class="h-[56px] w-[3px] bg-gray-800 absolute -end-[13px] top-[100px] rounded-e-lg"></div>
          <div class="rounded-[2rem] overflow-hidden w-full h-full bg-white">
            <img src="https://images.squarespace-cdn.com/content/v1/5cb5f0d0fb22a5201070a666/1568227191524-X4XDY7OPR37TP3TOU9PM/DaVinci-Landing-D.jpg?format=1500w" class="w-full h-full object-cover" alt="Amazon App Screenshot">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>