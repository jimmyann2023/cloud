const ButtonCounter = {
  name: 'buttonCounter',
  props: ['count'],
  methods: {
    // 如果使用es6的箭头函数 下面会拿不到this的指向vue
    onClick: function () {
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
      count: 0
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
        <ButtonCounter style={{ marginTop: '20px' }} count={count} onChangeNum={this.changeNum} />
      </div>
    )
  }
}
