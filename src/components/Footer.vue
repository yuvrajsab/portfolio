<template>
    <footer class="text-center bg-white mt-2" :class="{'fixed-bottom': !isMobile}">
        <p>
            Made with <i class="icon ion-md-heart"></i> using <a href="https://vuejs.org/" class="text-reset" target="_blank">VueJs</a>.
        </p>
    </footer>
</template>

<script>
export default {
    data() {
        return {
			isMobile: window.innerWidth < 768 ? true : false,
        }
    }
}
</script>

<style lang="scss" scoped>
img {
    width: 1rem;
}
</style>