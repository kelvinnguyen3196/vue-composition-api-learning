<script setup>
// imports
import { ref, onMounted } from 'vue';
import { useCounter } from '@/use/useCounter.js';
import { vAutofocus } from '@/directives/vAutofocus.js';

// app title
const appTitle = `My Ok Counter App`;
const appTitleRef = ref(null);
onMounted(() => {
    console.log(`Do stuff related to app title`);
});

// counter
const { counterData, oddOrEven, increaseCounter, decreaseCounter } = useCounter();

</script>

<template>
    <div class="home">
        <h1>Home</h1>

        <h2 ref="appTitleRef">{{ appTitle }}</h2>
        <h3>{{ counterData.title }}: </h3>

        <div>
            <button @click="decreaseCounter(10)" class="btn">-10</button>
            <button @click="decreaseCounter(1)" class="btn">-</button>
            <span class="counter">{{ counterData.count }}</span>
            <button @click="increaseCounter(1)" class="btn">+</button>
            <button @click="increaseCounter(10, $event)" class="btn">+10</button>
        </div>

        <p>This counter is {{ oddOrEven }}</p>

        <div class="edit">
            <h4>Edit counter title:</h4>
            <input v-model="counterData.title" type="text" v-autofocus>
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