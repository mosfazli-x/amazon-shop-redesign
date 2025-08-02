<script setup>
import { ref } from 'vue';

const lastViewedItems = ref([
    { id: 1, name: 'Nike Court Vision', image: 'https://static.nike.com/a/images/t_default/4dbcd905-c984-471f-bd63-13aa59556bfe/W+NIKE+JOURNEY+RUN.png', price: '199' },
    { id: 2, name: 'Adidas Superstar 3.0 K', image: 'https://static.nike.com/a/images/t_default/e1e4ff2e-7111-419d-8165-7874d8e4846b/M+ZOOM+CHALLENGE+PB.png', price: '249' },
    { id: 3, name: 'Nike Air Max 3.0', image: 'https://static.nike.com/a/images/t_default/20547d52-3e1b-4c3d-b917-f0d7e0eb8bdf/custom-nike-air-force-1-low-by-you-shoes.png', price: '129' },
    { id: 4, name: 'Adidas Originals', image: 'https://static.nike.com/a/images/t_default/fccd237c-9033-4066-900b-643a0e3f830d/NIKE+QUEST+6.png', price: '159' },
    { id: 5, name: 'Puma Rebound', image: 'https://static.nike.com/a/images/t_default/163f6b69-125b-4ed1-96fd-e2bd769d18d1/NIKE+FREE+2025.png', price: '799' }
]);
</script>

<template>
    <section class="mt-16">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Last Viewed</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div v-for="item in lastViewedItems" :key="item.id" class="bg-white p-4 rounded-xl group cursor-pointer hover:shadow-lg transition-shadow border border-base-content/10">
                <div class="bg-gray-100 rounded-lg overflow-hidden">
                    <img :src="item.image" :alt="item.name" class="w-full h-40 object-contain transform group-hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 class="mt-4 font-semibold text-sm text-gray-800">{{ item.name }}</h3>
                <p class="mt-1 font-bold text-gray-900">${{ item.price }}</p>
            </div>
        </div>
    </section>
</template>