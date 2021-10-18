/*
 * @Description: babel.config.js
 * @Author: xxqq
 * @Date: 2021-10-17 23:24:22
 * @LastEditTime: 2021-10-18 22:31:55
 * @LastEditors: xxqq
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      'import',
      {
        libraryName: 'ant-design-vue',
        libraryDirectory: 'es',
        style: 'css'
      }
    ] // `style: true` 会加载 less 文件
  ]
}
