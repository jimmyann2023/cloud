module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {
      // 修复 element-plus 和 ant-design-vue 的样式和tailwindcss冲突问题
      'postcss-antd-fixes': { prefixes: ['ant', 'el'] },
      'postcss-import': {},
      'postcss-preset-env': {},
      tailwindcss: {},
      'tailwindcss/nesting': {}
    }
  }
}
