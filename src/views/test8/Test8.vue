<template>

  <Content :leftSubmenus="leftSubmenus" :activeName="defaultActiveMenuName" :defaultOpenNames="defaultOpenNames">
  </Content>

</template>

<script>
import Content from "@/components/Content";

export default {
  name: "Test8",
  components:{
    Content
  },
  data() {
    return {
      defaultActiveMenuName:"/test8/test-8-2",
      defaultOpenNames:["集群管理"],
      leftSubmenus: [    // 左侧联动导航一
        {
          name: '集群管理',
          icon:'ios-navigate',
          menuItems:[
            {routPath:"/test8/test-8-1",text:"企业微信"},
            {routPath:"/test8/test-8-2",text:"钉钉"}
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