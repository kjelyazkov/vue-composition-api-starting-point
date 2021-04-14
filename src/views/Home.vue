<template>
	<div>
		<form @submit.prevent="add()" class="bg-gray-300 p-2">
			<input type="text" v-model="new_todo" class="w-full py-2 px-2 rounded-md text-gray-600 placeholder-gray-200 focus:ring-2 outline-none ring-0 ring-indigo-500" placeholder="example: Go to shopping">
		</form>

		<div>
			{{ todos }}
		</div>
	</div>
</template>

<script>
import { ref, computed } from 'vue'
import store from '../store'
export default {
	name: 'Home',
	setup() {
		const new_todo = ref('')

		const todos = computed(() => store.state.todos)

		function add() {
			store.commit('ADD_TODO', new_todo.value)
			new_todo.value = ''
		}

		return {
			new_todo, todos, add
		}
	},

}
</script>
