const path = require('path')
const { defineConfig } = require('@vue/cli-service')
// TODO: 实现优化下面功能
// const TerserPlugin = require('terser-webpack-plugin')  // 用于在生成环境剔除debuger和console
// const CompressionPlugin = require("compression-webpack-plugin"); // gzip压缩,优化http请求,提高加载速度
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin // 代码分析工具

const resolve = (dir) => path.join(__dirname, dir)

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  outputDir: 'dist',
  assetsDir: 'static', // 相对于outputDir的静态资源(js、css、img、fonts)目录
  lintOnSave: false, // 设置是否在开发环境下每次保存代码时候都启用 eslint 验证
  productionSourceMap: false, // 是否为生成环境构建生成 source map
  css: {
    // 是否将组件中的css 提取至一个独立的 css 文件中, 生产环境下是true，开发环境是false
    extract: process.env.NODE_ENV === 'production',
    // 是否为 css 开启 source map ，设置为true 之后可能会影响构建的性能
    sourceMap: false,
    loaderOptions: {
      sass: {
        // 全局变量
        additionalData: `@import "@/styles/_variables.scss";`
      },
      less: {
        javascriptEnabled: true
      },
      postcss: {
        postcssOptions: {
          plugins: [require('tailwindcss'), require('autoprefixer')]
        }
      }
    }
  },
  devServer: {
    port: 3000,
    host: '0.0.0.0',
    compress: true, // 是否启动压缩 gzip
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8080',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      extensions: ['.vue', '.js', 'scss', 'css', '.jsx']
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias.set('@', resolve('src'))
  }
})
