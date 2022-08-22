<template>
    <div class="posts">
        <h1>Posts</h1>
        <ul>
            <li :key="post.id" v-for="post in posts">
                <RouterLink :to="`/postDetail/${post.id}`">{{ post.title }}</RouterLink>
            </li>
        </ul>

        <textarea v-autofocus></textarea>
    </div>
</template>

<script setup>
// imports
import { ref } from 'vue';
import { vAutofocus } from '../directives/vAutofocus';

// posts
const posts = ref([
    {
        id: 'id1',
        title: 'Post 1'
    },
    {
        id: 'id2',
        title: 'Post 2'
    },
    {
        id: 'id3',
        title: 'Post 3'
    },
]);
</script>

<style scoped>
ul {
    margin-bottom: 20px;
}
</style>