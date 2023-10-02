<template>
    <div class="mx-4 md:mx-0 grow">
        <div
            class="p-8 rounded shadow-md"
            :class="bgColor"
        >
            <slot name="card-title"> </slot>
            <slot name="card-text"> </slot>
            <slot name="card-input"> </slot>
        </div>
    </div>
</template>

<script setup>
defineProps({
    bgColor: {
        type: String,
        default: 'bg-white',
    },
})
</script>
