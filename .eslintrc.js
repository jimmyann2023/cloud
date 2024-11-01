module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true,
    browser: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  plugins: ['eslint-plugin-simple-import-sort'],
  rules: {
    'prettier/prettier': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': 'off',

    // 导入文件自动排序
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          [`^vue$`, `^vue-router$`, `^ant-design-vue$`, `^echarts$`], // 你可以根据需要添加更多的内置模块
          [`.*\\.vue$`], // .vue 文件
          [`.*/assets/.*`, `^@/assets$`],
          [`.*/router/.*`, `^@/router$`],
          [`.*/store/.*`, `^@/store$`],
          [`.*/utils/.*`, `^@/utils$`],
          [`^`],
          [`^type `]
        ]
      }
    ],
    'simple-import-sort/exports': 'error'
  }
}
