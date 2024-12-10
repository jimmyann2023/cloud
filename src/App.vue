<template>
  <a-config-provider>
    <div id="app">
      <!--      <a-layout id="components-layout-demo-custom-trigger">-->
      <!--        <a-layout-sider v-model="collapsed" :trigger="null" collapsible style="height: 100vh">-->
      <!--          <div class="logo" />-->
      <!--          <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">-->
      <!--            <a-menu-item key="1">-->
      <!--              <router-link to="/">Home</router-link>-->
      <!--            </a-menu-item>-->
      <!--            <a-menu-item key="2"> <router-link to="/table">Table</router-link>> </a-menu-item>-->
      <!--            <a-menu-item key="3">-->
      <!--              <router-link to="/flow">Flow</router-link>-->
      <!--            </a-menu-item>-->
      <!--            <a-menu-item key="4">-->
      <!--              <router-link to="/about">About</router-link>-->
      <!--            </a-menu-item>-->
      <!--          </a-menu>-->
      <!--        </a-layout-sider>-->
      <!--        <a-layout>-->
      <!--          <a-layout-header style="background: #fff; padding: 0"> </a-layout-header>-->
      <!--          <a-layout-content-->
      <!--            :style="{-->
      <!--              margin: '24px 16px',-->
      <!--              padding: '24px',-->
      <!--              background: '#fff',-->
      <!--              minHeight: '280px'-->
      <!--            }"-->
      <!--          >-->
      <!--            <router-view />-->
      <!--          </a-layout-content>-->
      <!--        </a-layout>-->
      <!--      </a-layout>-->

      <!--          <LineFlow />-->
      <!--          <FlowStep />-->

      <!--          <Hello />-->
      <!--          <div class="bg-blue-600">tailwindcss</div>-->
      <!--          <span class="font-semibold text-4xl text-purple-700">jsx组件：</span>-->
      <router-view />
      <!--          <container />-->
    </div>
  </a-config-provider>
</template>

<script>
// import Hello from '@/components/Hello'
// import FlowStep from '@/components/flowStep/index.vue'
// import LineFlow from '@/components/LineFlow/index.vue'
// import container from './components/container.vue'
export default {
  name: 'App',
  components: {
    // Hello,
    // FlowStep
    // LineFlow
    // container
  }
}
</script>
<style lang="scss"></style>
