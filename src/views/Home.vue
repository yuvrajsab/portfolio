<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-3 col-md-4 py-3">
        <div class="container">
          <Face />
        </div>
        <SocialLinks />
      </div>
      <div v-show="!isMobile" class="border-right pl-4"></div>
      <div class="col-lg-6 col-md-7 py-3">
        <About />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Face from '@/components/Face.vue';
import SocialLinks from '@/components/SocialLinks.vue';
import About from '@/components/About.vue';

export default {
  name: 'home',
  components: {
    Face,
    About,
    SocialLinks,
  },
  data() {
    return {
      isMobile: window.innerWidth < 768 ? true : false,
    }
  }
}
</script>
