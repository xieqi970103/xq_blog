/*
 * @Description:
 * @Author: xxqq
 * @Date: 2021-10-18 21:36:57
 * @LastEditTime: 2021-10-18 22:08:37
 * @LastEditors: xxqq
 */
const path = require('path')
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@i': path.resolve(__dirname, './src/assets')
      }
    }
  }
}
