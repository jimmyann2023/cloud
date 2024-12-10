<script>
import { mapActions } from 'vuex'

export default {
  name: 'Workplace',
  methods: {
    ...mapActions(['Logout']),
    handlerLogout() {
      this.Logout()
    }
  }
}
</script>

<template>
  <div>
    <h1>Workplace</h1>
    <AButton @click="handlerLogout">退出</AButton>
  </div>
</template>

<style scoped lang="scss"></style>
