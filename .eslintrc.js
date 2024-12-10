module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
    browser: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['simple-import-sort'],
  rules: {
    'prettier/prettier': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // vue相关规则
    'vue/multi-word-component-names': 'off', // 组件名称是否驼峰格式命名
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/no-v-html': 'off',
    'vue/require-default-prop': 'off',
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 3
        },
        multiline: {
          max: 1
        }
      }
    ],

    // js相关规则
    'no-unused-vars': 'warn',
    'no-empty': 'off', // 块语句中的内容不能为空
    'no-undef': 'error',
    'no-var': 'error',
    'prefer-const': 'warn',
    'arrow-spacing': ['error', { before: true, after: true }],
    'comma-spacing': ['error', { before: false, after: true }],
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'space-before-function-paren': ['error', 'never'],
    'space-infix-ops': 'error',
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
