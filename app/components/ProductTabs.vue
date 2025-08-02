<script setup>
import { ref } from 'vue';
const props = defineProps({ product: Object });
const activeTab = ref('description');
</script>

<template>
  <div class="mt-16">
    <div class="border-b border-gray-200">
      <nav class="-mb-px flex space-x-8" aria-label="Tabs">
        <button @click="activeTab = 'description'" :class="[activeTab === 'description' ? 'border-orange-500 text-orange-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300']" class="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm cursor-pointer">Description</button>
        <button @click="activeTab = 'comments'" :class="[activeTab === 'comments' ? 'border-orange-500 text-orange-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300']" class="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm cursor-pointer">User comments</button>
        <button @click="activeTab = 'qa'" :class="[activeTab === 'qa' ? 'border-orange-500 text-orange-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300']" class="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm cursor-pointer">Questions & Answer</button>
      </nav>
    </div>

    <div class="mt-8" v-if="activeTab === 'description'">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <p class="text-gray-600 leading-relaxed">{{ product.description }}</p>
          <div class="mt-6 space-y-4">
            <div v-for="(value, key) in product.details" :key="key" class="flex">
              <span class="font-semibold text-gray-900 w-24">{{ key }}</span>
              <span class="text-gray-600">{{ value }}</span>
            </div>
          </div>
        </div>
        <div class="bg-gray-100 rounded-2xl flex items-center justify-center p-8">
            <img src="https://www.skateboarding.com/.image/t_share/MTk2NDExMTcyNjU4MzU3Mzk4/rowan20-hero-shoes.png" alt="Side view of the shoe" class="max-w-xs object-contain">
        </div>
      </div>
    </div>
     <div class="mt-8" v-if="activeTab === 'comments'">
        <p class="text-gray-600">User comments will be displayed here.</p>
    </div>
     <div class="mt-8" v-if="activeTab === 'qa'">
        <p class="text-gray-600">Questions and answers will be displayed here.</p>
    </div>
  </div>
</template>