import { createStore } from 'vuex'

export default createStore({
	state: {
		is_mobile_navigation_open: false,
		todos: []
	},

	mutations: {
		TOGGLE_MENU(state) {
			state.is_mobile_navigation_open = !state.is_mobile_navigation_open
		},

		CLOSE_MENU(state) {
			state.is_mobile_navigation_open = false
		},

		ADD_TODO(state, todo) {
			state.todos.push(todo)
		}
	},

	actions: {

	},

	getters: {

	},

	modules: {

	}
})
