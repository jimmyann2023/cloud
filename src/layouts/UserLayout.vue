<script>
export default {
  name: 'UserLayout',
  data() {
    return {
      isMobile: false
    }
  },
  mounted() {
    document.body.classList.add('userLayout')
  },
  beforeDestroy() {
    document.body.classList.remove('userLayout')
  }
}
</script>

<template>
  <div id="userLayout" :class="['user-layout-wrapper', isMobile && 'mobile']">
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style scoped lang="scss">
#userLayout.use-layout-wrapper {
  height: 100%;
  .container {
    width: 100%;
    min-height: 100%;
    background-size: 100%;
    position: relative;
  }
}
</style>
