<script setup>
</script>

<template>
  <nav class="flex items-center justify-center my-12">
    <button class="p-2 rounded-md hover:bg-gray-100 cursor-pointer">
      <IconLeft class="h-6 w-6 stroke-gray-600" />
    </button>
    <div class="flex items-center space-x-2 mx-4">
      <button class="w-10 h-10 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 cursor-pointer">1</button>
      <button class="w-10 h-10 text-sm font-medium text-white bg-orange-500 border border-orange-500 rounded-md shadow-sm cursor-pointer">2</button>
      <button class="w-10 h-10 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 cursor-pointer">3</button>
      <span class="text-gray-500">...</span>
    </div>
    <button class="p-2 rounded-md hover:bg-gray-100 cursor-pointer">
      <IconLeft class="h-6 w-6 rotate-180 stroke-gray-600" />
    </button>
  </nav>
</template>