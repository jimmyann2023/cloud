import CloudCard from './CloudCard'

export default {
  name: 'useCloudCard',
  components: { CloudCard },
  data() {
    return {
      str: '每天每天加班加点早畜晚归\n为了明天后天畜类拔萃\n只能说 okay\n不能说很累\n没时间恋爱没有机会畜双入对\n那些学弟学妹后畜可畏\n没有时间 畜畜可怜\n再坚持几年\n总会有一天赚大钱'
    }
  },
  render() {
    return (
      <CloudCard>
        <div slot="header" style="color: tomato;font-weight: 900;line-height: 40px;">
          社畜烧酒
        </div>
        <div style="white-space: pre;text-align: center;color: #333;font-size: 14px;">
          {this.str}
        </div>
      </CloudCard>
    )
  }
}
