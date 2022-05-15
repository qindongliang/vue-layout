<template>

  <Content :leftSubmenus="leftSubmenus" :activeName="defaultActiveMenuName" :defaultOpenNames="defaultOpenNames">

  </Content>

</template>

<script>
import Content from '@/components/Content';
export default {
  name: "Nav1",
  components:{
    Content
  },
  data() {
    return {
      defaultActiveMenuName:"/test1/nav-1-1",
      defaultOpenNames:["用户管理"],
      leftSubmenus: [    // 左侧联动导航一
        {
          name: '用户管理',
          icon:'el-icon-s-home',
          menuItems:[
            {routPath:"/test1/nav-1-1",text:"注册"},
            {routPath:"/test1/nav-1-2",text:"信息"},
            {routPath:"/test1/nav-1-3",text:"进度"},
          ]
        },
        {
        name: '权限管理',
        icon:'el-icon-s-data',
        menuItems:[
          {routPath:"/test1/nav-2-1",text:"redis权限"},
          {routPath:"/test1/nav-2-2",text:"大数据权限"}
          ]
        }
      ],
      logo: require('assets/img.png')
    }
  },
  methods:{

    test(){
      this.$router.getRoutes()
    },

  }
}
</script>

<style scoped>

</style>