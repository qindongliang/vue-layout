<template>

  <SideMenu :leftSubmenus="leftSubmenus" :activeName="defaultActiveMenuName" :defaultOpenNames="defaultOpenNames">

  </SideMenu>
</template>

<script>
import SideMenu from "@/components/SideMenu";

export default {
  name: "Nav2",
  components:{
    SideMenu
  },
  data() {
    return {
      defaultActiveMenuName:"/test2/nav-2-1",
      defaultOpenNames:["单机管理"],
      leftSubmenus: [    // 左侧联动导航一
        {
          name: '集群管理',
          icon:'ios-navigate',
          menuItems:[
            {routPath:"/test2/nav-1-1",text:"k8s"},
            {routPath:"/test2/nav-1-2",text:"emr"}
          ]
        },
        {
          name: '单机管理',
          icon:'ios-paper',
          menuItems:[
            {routPath:"/test2/nav-2-1",text:"LXC"},
            {routPath:"/test2/nav-2-2",text:"虚拟机"}
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