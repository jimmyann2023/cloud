<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider> </a-layout-sider>
    <a-layout>
      <LayoutHeader />
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import LayoutHeader from './basic/header.vue'

export default {
  name: 'BasicLayout',
  components: { LayoutHeader }
}
</script>
<style lang="scss" scoped>
.ant-layout.ant-layout-has-sider {
  height: 100vh;
}
</style>
