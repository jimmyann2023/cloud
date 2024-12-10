<template>
  <a-layout-header style="background: #fff; padding: 0">
    <AButton @click="handlerLogout">退出</AButton>
  </a-layout-header>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: 'LayoutHeader',
  methods: {
    ...mapActions(['Logout']),
    handlerLogout() {
      this.Logout()
    }
  }
}
</script>
