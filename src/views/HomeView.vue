<template>
  <div class="home">
    <useTodoList />
  </div>
</template>

<script>
// @ is an alias to /src

import useTodoList from '@/components/Todo/useTodo'
export default {
  name: 'HomeView',
  components: {
    useTodoList
  }
}
</script>
