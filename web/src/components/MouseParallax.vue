<template>
  <div ref="parallax" class="mouse-parallax">
    <slot name="main"></slot>
  </div>
</template>

<script>
export default {
  name: 'MouseParallax',
  data() {
    return {
      parallaxInstance: null,
    };
  },
  methods: {
    setupMouseParallax() {
      const parallaxWrap = this.$refs.parallax;
      if (parallaxWrap) {
        this.parallaxInstance = new window.MouseParallax(parallaxWrap);
        this.parallaxInstance.init();
      }
    },
  },
  mounted() {
    this.setupMouseParallax();
  },
  beforeDestroy() {
    this.parallaxInstance.destroy();
  },
};
</script>

<style lang="less">
.mouse-parallax {
  user-select: none;
  [data-prax] {
  }
}
</style>
