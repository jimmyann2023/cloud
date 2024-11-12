import style from './Todo.module.css'

export default {
  name: 'TodoList',
  props: {
    list: Array
  },
  render() {
    console.log(this.list)
    const list = this.list.map((item) => (
      <li class={style.listItem} key={item.key}>
        <div class={style.itemInfo}>
          <span class={style.content}>{item.content}</span>
          <span class={style.username}>{item.username}</span>
        </div>
        {this.$scopedSlots.default && this.$scopedSlots.default(item)}
      </li>
    ))
    const empty = <div class={style.empty}>暂无内容</div>
    return (
      <div class={style.todoList}>
        <ul>{this.list.length ? list : empty}</ul>
      </div>
    )
  }
}
