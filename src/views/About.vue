<template>
	<div>
		About
	</div>
</template>

<script>
export default {
	name: 'Home',
	setup() {
		//
	},
	mounted() {
		this.$store.commit('CLOSE_MENU')
	}
}
</script>
