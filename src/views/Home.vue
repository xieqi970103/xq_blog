<!--
 * @Description:
 * @Author: xxqq
 * @Date: 2021-10-17 23:24:22
 * @LastEditTime: 2021-10-18 23:01:05
 * @LastEditors: xxqq
-->
<template>
  <a-layout id="components-layout-demo-top" class="layout">
    <a-layout-header>
      <Header/>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>
      <div :style="{ background: '#fff', padding: '24px', minHeight: '80vh' }">
        Content
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>
<script>
import Header from '@/views/layout/header.vue'
export default {
  name: 'Home',
  components: {
    Header
  }
}
</script>
<style lang="less" scoped>
.layout {
  height: 100vh;
}
#components-layout-demo-top .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
</style>
