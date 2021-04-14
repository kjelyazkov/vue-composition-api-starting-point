<template>
	<Navigation/>
	<div class="pt-14">
		<transition name="fade">
				<router-view/>
		</transition>
	</div>
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
