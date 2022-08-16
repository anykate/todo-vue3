<template>
	<h1 class="text-3xl my-4 ml-2">Todos</h1>
	<div class="flex flex-col justify-between space-y-4 mb-4 md:flex-row md:mx-3 md:space-y-0 md:space-x-4 md:mb-0">
		<div class="flex flex-col flex-auto justify-between space-y-4">
			<div v-for="(todo, index) in todos" :key="index">
				<Card :bgColor="todo.isComplete ? 'bg-green-100' : 'bg-white'">
					<template #card-title>
						<div class="flex items-center justify-between">
							<div class="flex flex-col justify-center">
								<!-- <h2 class="text-2xl font-medium text-gray-800"
									:style="todo.isComplete && { textDecoration: 'line-through' }">
									{{ todo.title }}
								</h2> -->
								<!-- <h2 class="text-2xl font-medium text-gray-800"
									:class="{ 'line-through': todo.isComplete }">
									{{ todo.title }}
								</h2> -->
								<h2 class="text-2xl font-medium text-gray-800"
									:class="todo.isComplete && 'line-through'">
									{{ todo.title }}
								</h2>
								<p class="text-gray-300 mt-2">{{ todo.createdAt.toLocaleString() }}</p>
							</div>
							<div class="flex items-center space-x-8">
								<button class="space-x-2 text-red-600 text-2xl" title="Delete ToDo"
									@click="delToDo(index)">&times;</button>
								<button v-if="!todo.isComplete" class="space-x-2 text-green-600 text-2xl"
									title="Mark as completed" @click="changeCompletedStatus(index)">&check;</button>
								<button v-else class="space-x-2 text-orange-600 text-2xl" title="Mark as not completed"
									@click="changeCompletedStatus(index)">&#8630;</button>
							</div>
						</div>
					</template>
				</Card>
			</div>
			<div v-if="todos.length === 0" class="space-y-4">
				<Card>
					<template #card-text>
						<p class="text-gray-800">You do not have any task !!</p>
					</template>
				</Card>
			</div>
		</div>
		<div>
			<Card>
				<template #card-title>
					<h2 class="text-2xl font-bold text-gray-800">Add a Todo</h2>
				</template>
				<template #card-input>
					<input type="text" v-model="todoTitle" @keydown.enter="addTodo"
						class="my-3 w-full p-4 pr-12 border border-solid border-gray-200 rounded-lg shadow-sm"
						placeholder="Todo Title ?" />
				</template>
			</Card>
		</div>
	</div>
</template>

<script setup>
import Card from '@/components/Card.vue';
import { ref } from 'vue';

const todoTitle = ref('')
const todos = ref([])

const addTodo = () => {
	todos.value.unshift({ title: todoTitle.value, createdAt: new Date(), isComplete: false })
	todoTitle.value = ''
}

const changeCompletedStatus = (i) => {
	todos.value[i].isComplete = !todos.value[i].isComplete
}

const delToDo = (i) => {
	if (!confirm("Are you sure?")) {
		return
	}
	// todos.value.splice(i, 1)
	todos.value = todos.value.filter((todo, index) => i !== index)
}
</script>

<style scoped>
</style>