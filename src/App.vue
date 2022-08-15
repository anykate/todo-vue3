<script setup>
</script>

<template>
	<div>
		<router-link :to="{ name: 'HomeView' }">Home</router-link> |
		<router-link :to="{ name: 'AboutView' }">About</router-link>
	</div>
	<router-view />
</template>

<style>
</style>
