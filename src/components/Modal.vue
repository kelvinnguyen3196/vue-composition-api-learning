<template>
    <teleport to=".modals-container">
        <div class="modal">
            <h1>{{ title }}</h1>
            <h1>{{ props.title }}</h1>
            <slot />
            <button>Hide modal</button>
        </div>
    </teleport>
</template>

<script setup>
// props
const props = defineProps({
    title: {
        type: String,
        default: 'No title specified'
    }
});

console.log(props);
</script>

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