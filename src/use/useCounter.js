// imports
import { computed, onMounted, reactive, watch, nextTick } from 'vue';

const counterData = reactive({
    count: 0,
    title: `My Counter`
});
const test = 'hello there!';

export function useCounter() {
    // counter data
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

    return {
        counterData,
        increaseCounter,
        decreaseCounter,
        oddOrEven
    }
}