<script setup>
// imports
import { ref } from "vue";
import { useCounterStore } from "../stores/counter";
import { vAutofocus } from "../directives/vAutofocus";

// posts
const posts = ref([
	{
		id: "id1",
		title: "Post 1",
	},
	{
		id: "id2",
		title: "Post 2",
	},
	{
		id: "id3",
		title: "Post 3",
	},
]);

// counter button
const counter = useCounterStore();
</script>

<template>
	<div class="posts">
		<h1>Posts</h1>
		<ul>
			<li :key="post.id" v-for="post in posts">
				<RouterLink :to="`/postDetail/${post.id}`">{{ post.title }}</RouterLink>
			</li>
		</ul>

		<textarea v-autofocus></textarea>

		<div>
			<button 
				@click="counter.increaseCounter(1)" 
				class="counter-button"
				:class="{ 'yellow' : counter.oddOrEven === 'odd', 'orange' : counter.oddOrEven === 'even' }"
			>
				{{ counter.count }}
			</button>
		</div>
	</div>
</template>

<style scoped>
ul {
	margin-bottom: 20px;
}

.counter-button {
	font-size: 60px;
	width: 100%;
}

.counter-button.yellow {
	background: yellow;
}

.counter-button.orange {
	background: orange;
}
</style>