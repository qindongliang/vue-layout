<template>
<!--  <Layout>-->

<div>
      <el-aside style="float: left;height: 100vh;">
      <el-menu  theme="light"   text-color="#000000" active-text-color="#f8bd0b" :default-active="activeName" router   width="auto" :default-openeds="defaultOpenNames">
        <el-submenu :key="menu.name" :index="menu.name" v-for="menu in leftSubmenus" >
          <template slot="title"><i :class="menu.icon"></i>{{menu.name}}</template>
<!--          :route="{path:'/test1/nav-1-3'}" 注意：如果写了route，则route优先级最高，没有的route的话，需要在menu上激活router，才能使用:index  -->
          <el-menu-item :key="item.routPath" v-for="item in menu.menuItems"  :index="item.routPath" > {{item.text}} </el-menu-item>
        </el-submenu>
      </el-menu>
      </el-aside>
      <el-main style="height: 100vh;">
      <router-view></router-view>
      </el-main>
</div>
<!--  </Layout>-->
</template>

<script>
export default {
  // 封装左侧菜单
  name: "Content",
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