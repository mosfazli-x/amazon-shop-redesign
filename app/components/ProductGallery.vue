<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
});

const activeIndex = ref(0);

const next = () => {
  activeIndex.value = (activeIndex.value + 1) % props.images.length;
};

const prev = () => {
  activeIndex.value = (activeIndex.value - 1 + props.images.length) % props.images.length;
};

const goTo = (index) => {
  activeIndex.value = index;
};

const activeImage = computed(() => props.images[activeIndex.value]);
</script>

<template>
  <div class="relative w-full max-w-2xl mx-auto rounded-lg overflow-hidden shadow-xl border border-base-content/20">
    <div class="w-full aspect-video flex items-center justify-center">
      <img :src="activeImage" alt="Carousel image" class="max-h-full max-w-full object-contain">
    </div>

    <div class="absolute inset-0 flex items-center justify-between p-4">
      <button @click="prev" class="bg-white/50 hover:bg-base-300 cursor-pointer backdrop-blur-sm p-2 rounded-full text-gray-800 transition-colors" aria-label="Previous slide">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button @click="next" class="bg-white/50 hover:bg-base-300 cursor-pointer backdrop-blur-sm p-2 rounded-full text-gray-800 transition-colors" aria-label="Next slide">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>

    <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 p-2 rounded-sm bg-black/20 backdrop-blur-sm">
      <button v-for="(image, index) in images" :key="index" @click="goTo(index)" class="w-16 h-16 cursor-pointer hover:bg-base-200 rounded-md overflow-hidden transition-colors duration-200" :class="activeIndex === index ? 'bg-white scale-110' : 'border-transparent opacity-70'" aria-label="Go to slide {{ index }}">
        <img :src="image" alt="Thumbnail {{ index }}" class="w-full h-full object-cover">
      </button>
    </div>
  </div>
</template>