<template>
    <div id="modal">
        <h1>Modals</h1>
        <button @click="showModal = true">Show modal</button>

        <teleport to=".modals-container">
            <div v-if="showModal" class="modal">
                <h1>This is our modal</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, molestias!</p>
                <button @click="showModal = false">Hide modal</button>
            </div>
        </teleport>
    </div>
</template>

<script setup>
import { ref } from 'vue';
// modal
const showModal = ref(true);
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