<template>
	<div id="app">
		<Navbar />
		<router-view />
		<Footer />
	</div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';

export default {
	components: {
		Footer,
		Navbar,
	},
	data() {
		return {
			isMobile: window.innerWidth < 768 ? true : false,
		}
	}
}
</script>

<style lang="scss">

</style>
