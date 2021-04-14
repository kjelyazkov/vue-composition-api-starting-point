<template>
	<Navigation/>
	<router-view/>
</template>
<script>
import Navigation from '@/components/Navigation'

export default {
	components: {
		Navigation
	},

	setup() {
	},
}
</script>

<style>
#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>
