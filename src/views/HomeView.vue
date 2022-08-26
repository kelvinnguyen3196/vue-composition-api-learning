<script setup>
// imports
import { ref, onMounted } from 'vue';
import { useCounterStore } from '@/stores/counter';
import { vAutofocus } from '@/directives/vAutofocus.js';

// app title
const appTitle = `My Ok Counter App`;
const appTitleRef = ref(null);
onMounted(() => {
    console.log(`Do stuff related to app title`);
});

// counter
const counter = useCounterStore();

</script>

<template>
    <div class="home">
        <h1>Home</h1>

        <h2 ref="appTitleRef">{{ appTitle }}</h2>
        <h3>{{ counter.title }}</h3>

        <div>
            <button @click="counter.decreaseCounter(10)" class="btn">-10</button>
            <button @click="counter.decreaseCounter(1)" class="btn">-</button>
            <span class="counter">{{ counter.count }}</span>
            <button @click="counter.increaseCounter(1)" class="btn">+</button>
            <button @click="counter.increaseCounter(10)" class="btn">+10</button>
        </div>

        <p>This counter is {{ counter.oddOrEven }}</p>

        <div class="edit">
            <h4>Edit counter title:</h4>
            <input 
                type="text" 
                v-model="counter.title"
                v-autofocus
            >
        </div>
    </div>
</template>

<style>
.home {
    text-align: center;
}

.btn,
.counter {
    font-size: 40px;
    margin: 10px;
}

.edit {
    margin-top: 60px;
}

h1 {
    text-align: left;
}
</style>