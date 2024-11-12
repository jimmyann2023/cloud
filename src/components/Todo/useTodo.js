import TodoList from './todoList'

export default {
  name: 'useTodoList',
  components: { TodoList },
  data() {
    return {
      list: [
        {
          key: 1,
          username: '火龙果',
          content: '写一篇文章'
        },
        {
          key: 2,
          username: '香蕉',
          content: '阅读Vue源码'
        },
        {
          key: 3,
          username: '苹果',
          content: '学习TypeScript'
        },
        {
          key: 4,
          username: '山竹',
          content: '写一个组件库'
        }
      ]
    }
  },
  methods: {
    del(record) {
      let index = this.list.findIndex((item) => item.key === record.key)
      this.list.splice(index, 1)
    }
  },
  render() {
    const scopedSlots = {
      default: (record) => (
        <a-button class="del-button" onClick={() => this.del(record)}>
          删除
        </a-button>
      )
    }
    return <TodoList list={this.list} scopedSlots={scopedSlots}></TodoList>
  }
}
