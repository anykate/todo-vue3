<script setup>
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
</script>

<template>
	<div class="flex flex-col justify-center h-screen">
		<Navbar />
		<main class="container mx-auto grow">
			<router-view />
		</main>
		<Footer />
	</div>
</template>

<style>
html,
body {
	@apply bg-slate-200;
}
</style>
