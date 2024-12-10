<template>
  <div>
    <AButton type="primary" @click="handleSubmit">登录</AButton>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  methods: {
    ...mapActions(['Login', 'Logout']),
    handleSubmit() {
      const { Login } = this
      Login().then((res) => {
        this.loginSuccess(res)
      })
    },
    loginSuccess(res) {
      console.log(res)
      this.$router.push({ path: '/' })
      // 延迟 1 秒显示欢迎信息
      setTimeout(() => {
        this.$notification.success({
          message: '欢迎',
          description: `欢迎回来`
        })
      }, 1000)
    }
  }
}
</script>
<style scoped lang="scss"></style>
