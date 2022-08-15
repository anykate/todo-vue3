<template>
	<footer>
		<div class="bg-purple-600 text-white">
			<div class="container mx-auto">
				<p class="text-center py-3"> &copy; {{ currentYear }} - Aniket Aryamane - All Rights Reserved!</p>
			</div>
		</div>
	</footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>