<script setup>
// imports
import { inject } from 'vue';

// props
const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
    title: {
        type: String,
        default: 'No title specified'
    }
});

// emits
const emit = defineEmits(['update:modelValue']);

// handle button click
// const handleButtonClick = () => {
//     emit('update:modelValue', false);
// }

// user data
const userData = inject('userData');
</script>

<template>
    <teleport to=".modals-container">
        <div v-if="modelValue" class="modal">
            <h1>{{ title }}</h1>
            <h1>{{ props.title }}</h1>
            <h2>{{ userData.name }}</h2>
            <slot />
            <button @click="$emit('update:modelValue', false)">Hide modal</button>
        </div>
    </teleport>
</template>

<style scoped>
.modal {
    background-color: darkolivegreen;
    padding: 10px;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}
</style>