import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import postCssPxToRem from 'postcss-pxtorem'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          // 自适应，px>rem转换
          rootValue: 75,
          propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
          selectorBlackList: ['norem'], // 过滤掉norem-开头的class，不进行rem转换，这个内容可以不写
        }),
      ],
    },
  },
})