const render = () => {
  return (
    <div
      // 传递一个 HTML Attribute，属性名称是 id 属性值是 'foo'
      id="foo"
      // 传递 DOM Property 需要使用前缀 `domProps` 来表示，这里表示传递给 innerHTML 这个 DOM 属性的值为 ‘bar’
      domPropsInnerHTML="bar"
      // 绑定原生事件需要以 `on` 或者 `nativeOn` 为前缀，相当于 @click.native
      onClick={this.clickHandler}
      nativeOnClick={this.nativeClickHandler}
      // 绑定自定义事件需要用 `props` + 事件名 的方式
      propsOnCustomEvent={this.customEventHandler}
      // class（类名）、style（样式）、key、slot 和 ref 这些特殊属性写法
      class={{ foo: true, bar: false }}
      style={{ color: 'red', fontSize: '14px' }}
      slot="slot"
      key="key"
      ref="ref"
      // 如果是循环生成的 ref（相当于 v-for），那么需要添加 refInFor 这个标识
      // 用来告诉 Vue 将 ref 生成一个数组，否则只能获取到最后一个
      refInFor
    ></div>
  )
}
