<template>
    <div id="modal">
        <h1>Modals</h1>
        <div>
            <label>
                Show dark modals?
                <input type="checkbox" v-model="showDarkModals">    
            </label>
        </div>
        <button @click="showModal = true">Show modal</button>
        <component 
            :is="showDarkModals ? ModalDark : Modal"
            v-model="showModal" 
            title="My modal title (prop)"
        >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, yeet.</p>
        </component>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Modal from '@/components/Modal.vue';
import ModalDark from '@/components/ModalDark.vue';
// modal
const showDarkModals = ref(false);
const showModal = ref(false);
</script>