<template>
	<div>
		<!-- Navigation -->
		<div class="bg-gray-200 w-full fixed top-0 left-0 z-40">
			<div class="mx-auto w-full max-w-screen-xl px-4 py-4 flex justify-between">
				<div class="font-bold text-indigo-500">
					LOGO
				</div>	
				<div class="sm:flex gap-4 text-gray-600 hidden">
					<router-link to="/">Home</router-link>
					<router-link to="/about">About</router-link>
				</div>	
			</div>
		</div>


		<div class="w-6 h-6 fixed top-0 right-0 my-4 mx-4 sm:hidden z-40 text-lg grid place-content-center" @click="is_open = !is_open">
			<transition name="menu" mode="out-in">
				<div v-if="is_open">
						<i class="fas fa-times"></i>
				</div>
				<div v-else>
					<i class="fas fa-bars"></i>
				</div>
			</transition>
		</div>

		<!-- Mobile Navigation -->
		<div class="fixed inset-0 bg-gray-200 z-30 transform transition-transform duration-300 ease-in-out" :class="is_open ? 'translate-x-0' : '-translate-x-full'">
			<div class="mt-24 flex flex-col">
				<div class="hover:bg-gray-300 py-4 px-2 text-gray-600">Item</div>
				<div class="hover:bg-gray-300 py-4 px-2 text-gray-600">Item</div>
				<div class="hover:bg-gray-300 py-4 px-2 text-gray-600">Item</div>
				<div class="hover:bg-gray-300 py-4 px-2 text-gray-600">Item</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			is_open: false
		}
	},
	mounted(){
		window.addEventListener("resize", () => {
			if(document.documentElement.clientWidth > 638) {
				this.is_open = false
			}
		});
	}

}
</script>

<style>
.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
}
</style>