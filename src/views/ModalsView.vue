<template>
    <div id="modal">
        <h1>Modals</h1>
        <button @click="showModal = true">Show modal</button>
        <Modal v-if="showModal">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, yeet.</p>
        </Modal>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Modal from '@/components/Modal.vue';
// modal
const showModal = ref(false);
</script>