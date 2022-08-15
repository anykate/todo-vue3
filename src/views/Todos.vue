<template>
	<h1 class="text-3xl my-4 ml-2">Todos</h1>
	<div class="flex flex-col justify-between space-y-4 md:flex-row md:mx-3 md:space-y-0 md:space-x-4">
		<div class="flex flex-col flex-auto justify-between space-y-4">
			<Card>
				<template #card-title>
					<div class="flex items-center justify-between">
						<div class="flex flex-col justify-center">
							<h2 class="text-2xl font-bold text-gray-800">First Todo</h2>
							<p class="text-gray-300 mt-2">Timestamp</p>
						</div>
						<div class="flex items-center space-x-6">
							<a href="">
								<i class="fa-solid fa-xmark text-red-600"></i>
							</a>
							<a href="">
								<i class="fa-solid fa-check text-green-600"></i>
							</a>
							<a href="">
								<i class="fa-solid fa-rotate-left text-amber-600"></i>
							</a>
						</div>
					</div>
				</template>
			</Card>
			<Card>
				<template #card-text>
					<p class="text-gray-800">You do not have any task !!</p>
				</template>
			</Card>
			<Card>
				<template #card-text>
					<p class="text-gray-800">You do not have any task !!</p>
				</template>
			</Card>
		</div>
		<Card>
			<template #card-title>
				<h2 class="text-2xl font-bold text-gray-800">Add a Todo</h2>
			</template>
			<template #card-input>
				<input type="text"
					class="my-3 w-full p-4 pr-12 border border-solid border-gray-200 rounded-lg shadow-sm"
					placeholder="Todo Name ?" />
			</template>
		</Card>
	</div>
</template>

<script setup>
import Card from '@/components/Card.vue';
</script>

<style scoped>
</style>