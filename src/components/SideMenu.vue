<template>
  <Layout>
    <Sider hide-trigger :style="{background: '#fff',height:'100vh'}">

      <Menu  theme="light" :active-name="activeName"    width="auto" :open-names="defaultOpenNames">
        <Submenu :key="menu.name" v-for="menu in leftSubmenus" :name="menu.name" >
          <template slot="title">
            <Icon :type="menu.icon"></Icon>
            {{menu.name}}
          </template>
          <MenuItem :key="item.routPath" v-for="item in menu.menuItems" :name="item.routPath" :to="item.routPath" > {{item.text}} </MenuItem>
        </Submenu>
      </Menu>
    </Sider>
      <router-view></router-view>
  </Layout>

</template>

<script>
export default {
  // 封装左侧菜单
  name: "SideMenu",
  props: ['leftSubmenus','activeName','defaultOpenNames'],
  data() {
    return {
    }
  },
  methods:{
  }
}
</script>

<style scoped>

</style>