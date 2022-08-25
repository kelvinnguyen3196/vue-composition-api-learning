<script setup>
// imports
import { RouterLink, RouterView } from 'vue-router'
import { reactive, provide } from 'vue';
import { useOnline } from '@vueuse/core';

const userData = reactive({
	name: 'Vienna',
	username: 'viennabanez'
});
// provide userData variable to all children with name 'userData'
provide('userData', userData);

// online status
const online = useOnline();
</script>

<template>
	<div :class="{ 'offline' : !online }" class="user-data">
		{{ userData.name }} @{{ userData.username }} | Network Status: 
		<span>
			{{ online ? 'Online' : 'Offline' }}
		</span>
	</div>

	<nav>
		<RouterLink to="/">Home</RouterLink>
		<RouterLink to="/posts">Posts</RouterLink>
		<RouterLink to="/modals">Modals</RouterLink>
	</nav>

	<RouterView />

	<!-- <RouterView v-slot="{ Component }">
		<KeepAlive>
			<component :is="Component" />
		</KeepAlive>
	</RouterView> -->
</template>

<style scoped>
#app {
	max-width: 1280px;
	margin: 0 auto;
	padding: 2rem;

	font-weight: normal;
}

header {
	line-height: 1.5;
	max-height: 100vh;
}

.logo {
	display: block;
	margin: 0 auto 2rem;
}

a,
.green {
	text-decoration: none;
	color: hsla(160, 100%, 37%, 1);
	transition: 0.4s;
}

@media (hover: hover) {
	a:hover {
		background-color: hsla(160, 100%, 37%, 0.2);
	}
}

nav {
	width: 100%;
	font-size: 12px;
	text-align: center;
	margin-top: 2rem;
}

nav a.router-link-exact-active {
	color: var(--color-text);
}

nav a.router-link-exact-active:hover {
	background-color: transparent;
}

nav a {
	display: inline-block;
	padding: 0 1rem;
	border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
	border: 0;
}

.user-data {
	position: absolute;
	color: rgb(24, 22, 22);
	background: hsla(160, 100%, 37%, 1);
	top: 0;
	right: 0;
	font-size: 12px;
	padding: 5px;
}

.offline {
	background: rgb(189, 0, 0);
	color: white;
}
</style>
