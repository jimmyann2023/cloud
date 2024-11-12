<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link> |
      <router-link to="/table">Table</router-link>
    </nav>

    <hr />

    <Hello />
    <div class="bg-blue-600">tailwindcss</div>
    <span class="font-semibold text-4xl text-purple-700">jsx组件：</span>
    <router-view />
  </div>
</template>

<script>
import Hello from '@/components/Hello'

export default {
  name: 'App',
  components: {
    Hello
  }
}
</script>
<style lang="scss"></style>
