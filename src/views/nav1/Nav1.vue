<template>

  <SideMenu :leftSubmenus="leftSubmenus" :activeName="defaultActiveMenuName" :defaultOpenNames="defaultOpenNames">

  </SideMenu>

</template>

<script>
import SideMenu from '@/components/SideMenu';
export default {
  name: "Nav1",
  components:{
    SideMenu
  },
  data() {
    return {
      defaultActiveMenuName:"/test1/nav-1-1",
      defaultOpenNames:["用户管理"],
      leftSubmenus: [    // 左侧联动导航一
        {
          name: '用户管理',
          icon:'ios-navigate',
          menuItems:[
            {routPath:"/test1/nav-1-1",text:"注册"},
            {routPath:"/test1/nav-1-2",text:"信息"},
            {routPath:"/test1/nav-1-3",text:"进度"},
          ]
        },
        {
        name: '权限管理',
        icon:'ios-paper',
        menuItems:[
          {routPath:"/test1/nav-2-1",text:"redis权限"},
          {routPath:"/test1/nav-2-2",text:"大数据权限"}
          ]
        }
      ],
      logo: require('assets/img.png')
    }
  }
}
</script>

<style scoped>

</style>