<template>
  <div class="layout">

<!--    顶级一级导航-->
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1"  @on-select="handleSelect">
          <div class="layout-logo">
<!--            <img alt="Vue logo" :src="logo">-->
            运维后台管理系统
          </div>
          <div class="layout-nav">




            <template v-for="item in items">
<!--              <MenuItem  v-for="item in items" :key="item.index" :name="item.index">-->
<!--                <Icon :type="item.icon"></Icon>-->
<!--                {{item.title}}-->
<!--              </MenuItem>-->

              <MenuItem  v-if="item.type==='menuItem'" :key="item.index" :name="item.index">
                <Icon :type="item.icon"></Icon>
                {{item.title}}
              </MenuItem>

              <Submenu v-else-if="item.type === 'subMenu'" :key="item.index" :name="item.index">
                <template slot="title"><Icon :type="item.icon"/>{{item.title}}</template>
                <MenuGroup v-for="childMenu in item.childMenus" :key="childMenu.title" :title="childMenu.title">
                  <MenuItem v-for="group in childMenu.groups" :name="group.index" :key="group.index"  >
                  {{group.desc}}
                  </MenuItem>
                </MenuGroup>
              </Submenu>
            </template>





          </div>
        </Menu>
      </Header>
    </Layout>

<!--侧边二级导航-->
      <router-view></router-view>
  </div>



</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      items: [    // 水平一级菜单栏的菜单
        { index: 'dashboard',type:'menuItem', title: '首页',icon:'ios-navigate' },
        { index: 'test1', type:'menuItem', title: '业务设置',icon:'ios-keypad' },
        { index: 'test2', type:'menuItem', title: '基础组件管理',icon:'ios-analytics' },
        { index: 'test3', type:'subMenu', title: '通用管理',icon:'ios-stats', childMenus:[

            {
              title:'日志监控',
              groups:[
                {index: 'test4',desc:'主机日志'},
                {index: 'test5',desc:'Pod日志'},
                {index: 'test6',desc:'集群日志'}
              ]
            },
            {
              title:'告警设置',
              groups:[
                {index: 'test7',desc:'邮件告警'},
                {index: 'test8',desc:'短信告警'}
              ]
            },

          ] }
        // { index: 'test4', title: '一级菜单4',icon:'ios-paper' },
      ],
      logo: require('../assets/img.png')
    }
  },
  methods:{

    // 根据路径绑定到对应的一级菜单，防止页面刷新重新跳回第一个
    toIndex() {
      console.log(this.$route.path)
      return this.$route.path.split('/')[1];
    },
    handleSelect(name) {
      this.$router.push('/' + name);
    },

  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.layout{
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo{
  width: 200px;
  height: 30px;
  /*background: #5b6270;*/
  border-radius: 3px;
  float: left;
  font-size: 20px;
  position: relative;
  color: white;
}
.layout-nav{
  float: left;
  /*width: 420px;*/
  /*margin: 0 auto;*/
  margin-left: 40px;

}


</style>
