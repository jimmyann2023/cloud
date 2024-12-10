<template>
  <div class="wrap">
    <div class="node-wrap"></div>
    <div
      class="container"
      @wheel="handleWheel"
      @mousedown="handleMouseDown"
      @mouseup="handleMouseUp"
      @mousemove="handleMouseMove"
      @keydown="handleKeyDown"
      @keyup="handleKeyUp"
      tabindex="0"
    >
      <div
        class="content"
        :style="{
          transform: `scale(${scale}) translate(${translateX}px, ${translateY}px)`,
          transition: isMoving ? 'none' : 'transform 0.2s ease'
        }"
      >
        <!-- 这里放你的内容 -->
        <p>内容</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scale: 1, // 初始缩放比例
      translateX: 0, // 初始平移X位置
      translateY: 0, // 初始平移Y位置
      isDragging: false, // 是否正在拖动
      isMoving: false, // 是否正在平移
      lastX: 0, // 上一次的鼠标X位置
      lastY: 0, // 上一次的鼠标Y位置
      spacePressed: false // 空格键是否按下
    }
  },
  methods: {
    // 鼠标滚轮缩放
    handleWheel(event) {
      const delta = event.deltaY
      if (delta > 0) {
        this.scale = Math.max(0.5, this.scale - 0.1) // 缩小
      } else {
        this.scale = Math.min(3, this.scale + 0.1) // 放大
      }
      event.preventDefault()
    },

    // 按住空格键开始平移
    handleKeyDown(event) {
      if (event.code === 'Space') {
        this.spacePressed = true
        this.isMoving = true
      }
    },

    // 释放空格键停止平移
    handleKeyUp(event) {
      if (event.code === 'Space') {
        this.spacePressed = false
        this.isMoving = false
      }
    },

    // 鼠标按下开始拖动
    handleMouseDown(event) {
      if (this.spacePressed) {
        this.isDragging = true
        this.lastX = event.clientX
        this.lastY = event.clientY
      }
    },

    // 鼠标移动
    handleMouseMove(event) {
      if (this.isDragging) {
        const dx = event.clientX - this.lastX
        const dy = event.clientY - this.lastY
        this.translateX += dx
        this.translateY += dy
        this.lastX = event.clientX
        this.lastY = event.clientY
      }
    },

    // 鼠标松开停止拖动
    handleMouseUp() {
      this.isDragging = false
    }
  }
}
</script>

<style scoped>
.wrap {
  display: flex;
}
.node-wrap {
  width: 200px;
}
.container {
  flex: 1;
  position: relative;
  width: 100%;
  height: 500px; /* 容器高度 */
  overflow: hidden;
  cursor: grab;
  background: #42b983;
}

.content {
  position: absolute;
  top: 0;
  left: 0;
  user-select: none;
}
</style>
