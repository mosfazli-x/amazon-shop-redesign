<script setup>
useSeoMeta({
    title: 'Amazon - Redesign',
    ogTitle: 'Landing page',
    description: 'This is my amazing site, let me tell you all about it.',
    ogDescription: 'This is my amazing site, let me tell you all about it.',
})
</script>

<template>
  <div class="bg-gray-50 min-h-screen font-sans">
    <AppHeader />
    <main class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <HeroSection />
      <ExploreSection />
      <CategorySection />
      <LastViewedSection />
      <NewsletterSection />
    </main>
    <AppFooter />
  </div>
</template>

<style>
/* You can add global styles here if needed */
body {
  background-color: #f9fafb; /* bg-gray-50 */
}
</style>