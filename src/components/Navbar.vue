<template>
    <header>
        <nav class="bg-purple-600 text-white">
            <div class="container mx-auto">
                <div class="flex items-center space-x-3">
                    <router-link
                        :to="{ name: 'HomeView' }"
                        class="hover:bg-purple-500 p-3"
                        >Home</router-link
                    >
                    <router-link
                        :to="{ name: 'TodosView' }"
                        class="hover:bg-purple-500 p-3"
                        >Todos</router-link
                    >
                </div>
            </div>
        </nav>
    </header>
</template>
