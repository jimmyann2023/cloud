<template>
  <div class="super-flow-demo">
    <div class="wrap">
      <div class="node-container">
        <a-button
          :disabled="item.value.meta.disabled"
          class="node-item"
          v-for="(item, index) in nodeItemList"
          :key="index"
          @mousedown="(evt) => nodeItemMouseDown(evt, item.value)"
        >
          {{ item.label }}
        </a-button>
      </div>
      <div ref="flowContainer" class="flow-container">
        <super-flow
          ref="superFlow"
          :node-list="nodeList"
          :link-list="linkList"
          :graph-menu="graphMenu"
          :node-menu="nodeMenu"
          :link-menu="linkMenu"
          :link-base-style="linkBaseStyle"
          :link-style="linkStyle"
          :link-desc="linkDesc"
        >
          <!--  右键点击事件 插槽-->
          <template v-slot:node="{ meta }">
            <div @mouseup="nodeMouseUp" @click="nodeClick" class="flow-node ellipsis">
              {{ meta.name }}
            </div>
          </template>
        </super-flow>
      </div>
    </div>
  </div>
</template>
<script>
import leftData from '@/components/LineFlow/leftData'
// https://zhuanlan.zhihu.com/p/164579605
const drawerType = {
  node: 0,
  link: 1
}
export default {
  name: 'LineFlow',
  data() {
    return {
      drawerType,
      origin: [2000, 2000],
      nodeList: [],
      linkList: [],
      drawerConf: {
        title: '',
        visible: false,
        type: null,
        info: null,
        open: (type, info) => {
          const conf = this.drawerConf
          conf.visible = true
          conf.type = type
          conf.info = info
          if (conf.type === drawerType.node) {
            conf.title = '节点'
            if (this.$refs.nodeSetting) this.$refs.nodeSetting.resetFields()
            this.$set(this.nodeSetting, 'name', info.meta.name)
            this.$set(this.nodeSetting, 'desc', info.meta.desc)
          } else {
            conf.title = '连线'
            if (this.$refs.linkSetting) this.$refs.linkSetting.resetFields()
            this.$set(this.linkSetting, 'desc', info.meta ? info.meta.desc : '')
          }
        },
        cancel: () => {
          this.drawerConf.visible = false
          if (this.drawerConf.type === drawerType.node) {
            this.$refs.nodeSetting.clearValidate()
          } else {
            this.$refs.linkSetting.clearValidate()
          }
        }
      },
      linkSetting: {
        desc: ''
      },
      nodeSetting: {
        name: '',
        desc: ''
      },
      dragConf: {
        isDown: false,
        isMove: false,
        offsetTop: 0,
        offsetLeft: 0,
        clientX: 0,
        clientY: 0,
        ele: null,
        info: null
      },
      nodeItemList: leftData,
      // nodeItemList: [
      //   {
      //     label: '节点1',
      //     value: {
      //       width: 120,
      //       height: 40,
      //       meta: {
      //         label: '1',
      //         name: '设计',
      //         disabled: true
      //       }
      //     }
      //   },
      //   {
      //     label: '节点2',
      //     value: {
      //       width: 120,
      //       height: 40,
      //       meta: {
      //         label: '2',
      //         name: '2',
      //         disabled: false
      //       }
      //     }
      //   },
      //   {
      //     label: '节点3',
      //     value: {
      //       width: 120,
      //       height: 40,
      //       meta: {
      //         label: '3',
      //         name: '加工',
      //         disabled: false
      //       }
      //     }
      //   },
      //   {
      //     label: '节点4',
      //     value: {
      //       width: 120,
      //       height: 40,
      //       meta: {
      //         label: '4',
      //         name: '组装',
      //         disabled: false
      //       }
      //     }
      //   }
      // ],
      graphMenu: [
        [
          {
            // 选项 label
            label: '节点1',
            // 选项是否禁用
            disable(graph) {
              return !!graph.nodeList.find((node) => node.meta.label === '1')
            },
            // 选项选中后回调函数
            selected(graph, coordinate) {
              graph.addNode({
                width: 120,
                height: 40,
                coordinate,
                meta: {
                  label: '1',
                  name: '1'
                }
              })
            }
          },
          {
            label: '节点2',
            selected(graph, coordinate) {
              graph.addNode({
                width: 120,
                height: 40,
                coordinate,
                meta: {
                  label: '2',
                  name: '2'
                }
              })
            }
          },
          {
            label: '节点3',
            selected(graph, coordinate) {
              graph.addNode({
                width: 120,
                height: 40,
                coordinate,
                meta: {
                  label: '3',
                  name: '3'
                }
              })
            }
          }
        ],
        [
          {
            label: '节点4',
            selected(graph, coordinate) {
              graph.addNode({
                width: 120,
                height: 40,
                coordinate,
                meta: {
                  label: '4',
                  name: '4'
                }
              })
            }
          }
        ],
        [
          {
            label: '打印数据',
            selected: (graph) => {
              console.log(JSON.stringify(graph.toJSON(), null, 2))
            }
          },
          {
            label: '全选',
            selected: (graph) => {
              graph.selectAll()
            }
          }
        ]
      ],
      nodeMenu: [
        [
          {
            label: '删除',
            selected: (node) => {
              node.remove()
            }
          },
          {
            label: '编辑',
            selected: (node) => {
              this.drawerConf.open(drawerType.node, node)
            }
          }
        ]
      ],
      linkMenu: [
        [
          {
            label: '删除',
            selected: (link) => {
              link.remove()
            }
          },
          {
            label: '编辑',
            selected: (link) => {
              this.drawerConf.open(drawerType.link, link)
            }
          }
        ]
      ],
      linkBaseStyle: {
        color: '#666666', // line 颜色
        hover: '#FF0000', // line hover 的颜色
        textColor: '#666666', // line 描述文字颜色
        textHover: '#FF0000', // line 描述文字 hover 颜色
        font: '14px Arial', // line 描述文字 字体设置 参考 canvas font
        dotted: false, // 是否是虚线
        lineDash: [4, 4], // 虚线时生效
        background: 'rgba(255,255,255,0.6)' // 描述文字背景色
      },
      fontList: ['14px Arial', 'italic small-caps bold 12px arial']
    }
  },
  created() {
    // 查看需要开启下面
    // const nodeList = [
    //   {
    //     id: 'nodeoGLbAwCZYPO1pic3',
    //     width: 120,
    //     height: 40,
    //     coordinate: [456, 186],
    //     meta: {
    //       label: '2',
    //       name: '2'
    //     }
    //   },
    //   {
    //     id: 'nodeYr6zXjjqmaeCNrVs',
    //     width: 120,
    //     height: 40,
    //     coordinate: [224, 186],
    //     meta: {
    //       label: '1',
    //       name: '1'
    //     }
    //   }
    // ]
    // const linkList = [
    //   {
    //     id: 'linkDiaHo147YHpJHwjL',
    //     startId: 'nodeYr6zXjjqmaeCNrVs',
    //     endId: 'nodeoGLbAwCZYPO1pic3',
    //     startAt: [120, 20],
    //     endAt: [0, 20],
    //     meta: null
    //   }
    // ]
    // setTimeout(() => {
    //   this.nodeList = nodeList
    //   this.linkList = linkList
    // }, 100)
  },
  mounted() {
    document.addEventListener('mousemove', this.docMousemove)
    document.addEventListener('mouseup', this.docMouseup)
    this.$once('hook:beforeDestroy', () => {
      document.removeEventListener('mousemove', this.docMousemove)
      document.removeEventListener('mouseup', this.docMouseup)
    })
    window.addEventListener('resize', this.onResize)
  },
  methods: {
    flowNodeClick(meta) {
      console.log(this.$refs.superFlow.graph)
    },
    linkStyle(link) {
      if (link.meta && link.meta.desc === '1') {
        return {
          color: 'red',
          hover: '#FF00FF',
          dotted: true
        }
      } else {
        return {}
      }
    },
    linkDesc(link) {
      return link.meta ? link.meta.desc : ''
    },
    settingSubmit() {
      const conf = this.drawerConf
      if (this.drawerConf.type === drawerType.node) {
        if (!conf.info.meta) conf.info.meta = {}
        Object.keys(this.nodeSetting).forEach((key) => {
          this.$set(conf.info.meta, key, this.nodeSetting[key])
        })
        this.$refs.nodeSetting.resetFields()
      } else {
        if (!conf.info.meta) conf.info.meta = {}
        Object.keys(this.linkSetting).forEach((key) => {
          this.$set(conf.info.meta, key, this.linkSetting[key])
        })
        this.$refs.linkSetting.resetFields()
      }
      conf.visible = false
    },
    nodeMouseUp(evt) {
      evt.preventDefault()
    },
    nodeClick() {
      console.log(arguments)
    },
    docMousemove({ clientX, clientY }) {
      const conf = this.dragConf
      if (conf.isMove) {
        conf.ele.style.top = clientY - conf.offsetTop + 'px'
        conf.ele.style.left = clientX - conf.offsetLeft + 'px'
      } else if (conf.isDown) {
        // 鼠标移动量大于 5 时 移动状态生效
        conf.isMove = Math.abs(clientX - conf.clientX) > 5 || Math.abs(clientY - conf.clientY) > 5
      }
    },
    docMouseup({ clientX, clientY }) {
      console.log('docMouseup', this)
      const conf = this.dragConf
      conf.isDown = false

      if (conf.isMove) {
        const { top, right, bottom, left } = this.$refs.flowContainer.getBoundingClientRect()

        // 判断鼠标是否进入 flow container
        if (clientX > left && clientX < right && clientY > top && clientY < bottom) {
          // 获取拖动元素左上角相对 super flow 区域原点坐标
          const coordinate = this.$refs.superFlow.getMouseCoordinate(
            clientX - conf.offsetLeft,
            clientY - conf.offsetTop
          )

          console.log(conf.info)

          for (let i = 0; i < this.nodeItemList.length; i++) {
            const target = this.nodeItemList[i].value

            if (target.meta.name === conf.info.meta.name) {
              this.$set(target.meta, 'disabled', true)
            }
          }

          console.log(this.$refs.superFlow)

          // 添加节点
          this.$refs.superFlow.addNode({
            coordinate,
            ...conf.info
          })
          // TODO 要禁用左测已选的节点
        }

        conf.isMove = false
      }

      if (conf.ele) {
        conf.ele.remove()
        conf.ele = null
      }
    },
    nodeItemMouseDown(evt, info) {
      console.log('nodeItemMouseDown')
      const { clientX, clientY, currentTarget } = evt

      const { top, left } = evt.currentTarget.getBoundingClientRect()

      const conf = this.dragConf
      const ele = currentTarget.cloneNode(true)

      Object.assign(this.dragConf, {
        offsetLeft: clientX - left,
        offsetTop: clientY - top,
        clientX: clientX,
        clientY: clientY,
        info: info,
        ele,
        isDown: true
      })

      ele.style.position = 'fixed'
      ele.style.margin = '0'
      ele.style.top = clientY - conf.offsetTop + 'px'
      ele.style.left = clientX - conf.offsetLeft + 'px'
      console.log('this.$el', this.el)

      this.$el.appendChild(this.dragConf.ele)
    }
  }
}
</script>
<style scoped>
.ellipsis {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-wrap: break-word;
}
.super-flow-demo {
  margin-top: 20px;
  width: 100%;
  height: 500px;
  background: #f5f5f5;
  overflow: hidden;
  box-sizing: border-box;
}
.wrap {
  display: flex;
}
.node-container {
  width: 200px;
  background: #fff;
  height: 500px;
}
.flow-container {
  //width: calc(100% - 200px);
  flex: 1;
}
.super-flow__node .flow-node {
  text-align: center;
  /* height: 32px; */
  line-height: 35px;
}
.node-item {
  font-size: 14px;
  display: inline-block;
  height: 30px;
  width: 120px;
  margin-top: 20px;
  background-color: #ffffff;
  line-height: 30px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  user-select: none;
  text-align: center;
  z-index: 6;
}
.node-item:hover {
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.4);
}

/deep/ .super-flow {
  overflow: auto !important;
}
</style>
