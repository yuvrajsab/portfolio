<template>
    <footer class="text-center bg-white mt-2" :class="{'fixed-bottom': !isMobile}">
        <p>Made with <i class="icon ion-md-heart text-danger"></i> and <a href="https://vuejs.org/" title="VueJs" target="_blank"><img src="../assets/logo.png" alt="VueJs"></a></p>
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