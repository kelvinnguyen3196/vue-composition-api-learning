
<!-- script setup pattern -->
<script setup>
import { ref, computed, onMounted, reactive, watch, nextTick } from 'vue';
import { vAutofocus } from '@/directives/vAutofocus.js';

// app title
const appTitle = `My Ok Counter App`;
const appTitleRef = ref(null);
onMounted(() => {
    console.log(`Do stuff related to app title`);
    console.log(appTitleRef);
});

// counter data
const counterData = reactive({
    count: 0,
    title: `My Counter`
});
watch(() => counterData.count, (newValue, oldValue) => {
    console.log(oldValue);
    console.log(newValue);
});
watch(() => counterData.title, (newValue, oldValue) => {
    console.log(`"${oldValue}" has been changed to "${newValue}"`);
});
const increaseCounter = (amount, event) => {
    counterData.count += amount;
    nextTick(() => {
        console.log('do something after counter has been increased in the DOM');
    });
}
const decreaseCounter = (amount) => {
    counterData.count -= amount;
}
onMounted(() => {
    console.log(`Do stuff related to counter`);
});
const oddOrEven = computed(() => {
    if (counterData.count % 2 === 0) return 'even';
    return 'odd';
});

</script>

<!-- setup function pattern -->
<!-- <script>
import { ref } from 'vue';
export default {
    setup() {
        const counter = ref(0);
        const increaseCounter = () => {
            counter.value += 1;
        }
        const decreaseCounter = () => {
            counter.value -= 1;
        }

        return {
            counter,
            increaseCounter,
            decreaseCounter
        }
    }
}
</script> -->

<!-- options API -->
<!-- <script>
export default {
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        increaseCounter() {
            this.counter += 1;
        },
        decreaseCounter() {
            this.counter -= 1;
        }
    },

}
</script> -->
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