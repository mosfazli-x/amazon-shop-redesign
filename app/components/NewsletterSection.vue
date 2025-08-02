<template>
  <section class="mt-16 bg-white rounded-xl shadow-sm p-8 sm:p-10">
    <div class="flex flex-col lg:flex-row justify-between items-center gap-6">
      <div>
        <h2 class="text-2xl font-bold text-gray-900">Subscribe to the News</h2>
        <p class="mt-1 text-gray-600">Don't miss our latest news and materials!</p>
      </div>
      <form class="w-full lg:w-1/2">
        <div class="flex items-center">
          <input type="email" placeholder="Enter your email" class="w-full px-4 py-3 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-orange-400">
          <button type="submit" class="bg-orange-500 text-white font-bold py-3 px-8 rounded-r-full hover:bg-orange-600 transition-colors">
            Subscribe
          </button>
        </div>
      </form>
    </div>
  </section>
</template>