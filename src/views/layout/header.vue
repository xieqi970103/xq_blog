<!--
 * @Description: header
 * @Author: xxqq
 * @Date: 2021-10-18 22:45:41
 * @LastEditTime: 2021-10-18 23:05:34
 * @LastEditors: xxqq
-->
<template>
  <div>
    <a-menu v-model="current" mode="horizontal" class="header-wrapper" >
      <a-menu-item v-for="item in nav" :key="item.key">
        <a-icon :type="item.icon"></a-icon>
        {{ item.title }}
      </a-menu-item>
      <!-- <a-menu-item key="app" disabled> <a-icon type="appstore" />Navigation Two </a-menu-item>
      <a-sub-menu>
        <span slot="title" class="submenu-title-wrapper"
          ><a-icon type="setting" />Navigation Three - Submenu</span
        >
        <a-menu-item-group title="Item 1">
          <a-menu-item key="setting:1">
            Option 1
          </a-menu-item>
          <a-menu-item key="setting:2">
            Option 2
          </a-menu-item>
        </a-menu-item-group>
        <a-menu-item-group title="Item 2">
          <a-menu-item key="setting:3">
            Option 3
          </a-menu-item>
          <a-menu-item key="setting:4">
            Option 4
          </a-menu-item>
        </a-menu-item-group>
      </a-sub-menu>
      <a-menu-item key="alipay">
        <a href="https://antdv.com" target="_blank" rel="noopener noreferrer"
          >Navigation Four - Link</a
        >
      </a-menu-item> -->
    </a-menu>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      current: ['home'],
      nav: [
        {
          title: 'Home',
          icon: 'mail',
          key: 'home',
          path: '/home'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.header-wrapper {
  ::v-deep{
    .ant-menu {
      height: 64px;
    }
  }
  height: 64px;
}
</style>
