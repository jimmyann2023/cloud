const ButtonCounter = {
  name: 'buttonCounter',
  props: ['count'],
  methods: {
    // 如果使用es6的箭头函数 下面会拿不到this的指向vue
    onClick() {
      this.$emit('changeNum', this.count + 1)
    }
  },
  render() {
    return <button onClick={this.onClick}>数量： {this.count}</button>
  }
}

export default {
  name: 'Hello',
  props: { msg: String },
  data() {
    return {
      count: 0,
      text: 'Hello !!!',
      msgClass: 'msg-class',
      isGreen: true
    }
  },
  methods: {
    changeNum(val) {
      this.count = val
    }
  },
  render() {
    const { count } = this
    return (
      <div class="hello">
        <p class={this.msg ? this.msgClass : 'text-purple-700'}>
          动态绑定class,传递过来的消息：{this.msg}
        </p>
        <p style={this.isGreen ? 'color: green' : ''}>动态绑定style,传递过来的消息：{this.msg}</p>
        <ButtonCounter style={{ marginTop: '20px' }} count={count} onChangeNum={this.changeNum} />
      </div>
    )
  }
}
