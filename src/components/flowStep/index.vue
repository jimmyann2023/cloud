<template>
  <div class="flowChartContainer">
    <div><a-button>确认</a-button></div>
    <div>{{ flowData }}</div>
    <hr />
    {{ stepModal }}
    <SimpleFlowChart
      ref="SimpleFlowChart"
      v-model="flowData"
      :initFit="true"
      :enableDrag="true"
      :showScrollBar="true"
      :readonly="false"
      :beforeDeleteNode="beforeDeleteNode"
      :nodeTypeList="nodeTypeList"
      :vertical="false"
      @node-content-click="onNodeContentClick"
    />
    <a-modal :visible.sync="stepModal.visible" @ok="handleOk" @cancel="handleCancel">
      <div>
        <a-tree
          :checkable="true"
          :tree-data="treeData"
          :checkedKeys="stepModal.checkedKeys"
          :checkStrictly="false"
          @check="handleChecked"
        />
      </div>
    </a-modal>
  </div>
</template>
<script>
// import example from './default'
import treeData from '@/components/flowStep/treeData'
export default {
  name: 'FlowStep',
  components: {},
  data() {
    const nodeTypeList = [
      {
        name: '普通节点',
        list: [
          {
            type: 'normal',
            name: '普通节点'
          }
        ]
      },
      {
        name: '分支节点',
        list: [
          {
            type: 'condition',
            name: '条件分支'
          }
        ]
      }
    ]
    return {
      treeData,
      flowData: [],
      showNodeEdit: false,
      editNodeData: null,
      isEditingTitle: false,
      nodeTypeList,
      stepModal: {
        visible: false,
        checkedKeys: []
      }
    }
  },
  mounted() {
    window.addEventListener('resize', this.onResize)
  },

  methods: {
    beforeDeleteNode(...args) {
      console.log(args)
      const self = this
      return new Promise((resolve) => {
        self.$confirm({
          content: `确定删除该节点？`,
          icon: () => <a-icon type="question-circle" theme="filled" />,
          okText: '确定',
          onOk() {
            resolve()
          },
          cancelText: '取消',
          onCancel() {}
        })
      })
    },

    onNodeContentClick(node) {
      console.log(node)
      // 先清空之前存的数据
      this.stepModal.node = {}
      this.stepModal.title = ''
      this.stepModal.checkedKeys = []
      // 这里主要把 流程节点的数据 与 tree树的数据进行关联 ==> handleChecked
      this.stepModal.node = node
      this.stepModal.visible = true
    },

    handleChecked(checkedKeys, { checked, node }) {
      console.log('check-node-data', node)
      console.log(checkedKeys, [node.dataRef.key])
      this.stepModal.checkedKeys = checked ? [node.dataRef.key] : []
      this.stepModal.title = checked ? node.title : ''
    },
    // treeNode树 模态框确认
    handleOk() {
      // 找到树的数据 把刚选中的数据给禁用掉
      const targetIndex = this.treeData.find((item) => item.key === this.stepModal.checkedKeys[0])
      targetIndex.disableCheckbox = true
      console.log('find', targetIndex)
      setTimeout(() => {
        this.stepModal.node.key = this.stepModal.checkedKeys[0]
        this.stepModal.node.content = this.stepModal.title
      }, 500)
      this.stepModal.visible = false
    },
    handleCancel() {
      this.stepModal.visible = false
    }
  }
}
</script>
