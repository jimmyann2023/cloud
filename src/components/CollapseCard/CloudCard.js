import style from './CloudCard.module.css'

export default {
  name: 'CloudCard',
  data() {
    return {
      visible: true
    }
  },
  methods: {
    onClick() {
      this.visible = !this.visible
    }
  },
  render() {
    return (
      <div class={style.collapseCard}>
        <header class={style.header} onClick={this.onClick}>
          {this.$slots.header}
        </header>
        <article class={style.content} v-show={this.visible}>
          {this.$slots.default}
        </article>
      </div>
    )
  }
}
