<template>
  <div >
<!--    顶级一级导航-->
    <el-container >
        <el-header  >
        <el-menu  background-color="#000000" active-text-color="#E6A23C" text-color="#FFFFFF" default-active="dashboard"   mode="horizontal"  @select="handleSelect">
          <div class="layout-logo" >
            <!--            <img alt="Vue logo" :src="logo">-->
            <i class="el-icon-menu"> </i>
            BDA运维平台
          </div>
          <div>
            <template v-for="item in items">
              <el-menu-item  class="nav"  v-if="item.type==='menuItem'" :index="item.index"  :key="item.index" >
                <i :class="item.icon"></i>
                {{item.title}}
              </el-menu-item>

              <el-submenu class="nav" v-else-if="item.type === 'subMenu'" :index="item.index" :key="item.index" >
                <template slot="title"><i :class="item.icon"/>{{item.title}}</template>
                  <el-menu-item v-for="group in item.childMenus" :index="group.index"  :key="group.index"  >
                  {{group.desc}}
                  </el-menu-item>
              </el-submenu>

            </template>
          </div>
          <div id="right_user" style="text-align: right;margin-right: 5px; height: 30px; line-height: 50px; font-size: 15px">
            <el-dropdown @command="handleClick">
              <i class="el-icon-setting" style="margin-right: 15px;background-color: #dcdee2"></i>
              <el-dropdown-menu slot="dropdown" style="color: white">
                <el-dropdown-item command="logout" >退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <span style="color: white">王小虎</span>
          </div>
        </el-menu>
        </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>

      <el-footer>
        2011 - 2022
      </el-footer>
      </el-container>


  </div>



</template>

<script>

import PrivateRouter from "@/router/privateRouter";
import router from "@/router/mainRouter";
import {filterAsyncRoutes,hasPermission} from '@/utils/validate'
import store from "@/store";
import {Message} from "element-ui";

export default {
  name: 'Main',
  props: {
    msg: String
  },
  data() {
    return {
      items:[],
      items1: [    // 水平一级菜单栏的菜单
        { index: 'dashboard',type:'menuItem', title: '首页',icon:'el-icon-s-tools' },
        { index: 'test1', type:'menuItem', title: '业务设置',icon:'el-icon-s-flag' },
        { index: 'test2', type:'menuItem', title: '基础组件管理',icon:'el-icon-magic-stick' },
        { index: 'test3', type:'subMenu', title: '通用管理',icon:'el-icon-aim', childMenus:[
            {index: 'test4',desc:'主机日志'},
            {index: 'test5',desc:'Pod日志'},
            {index: 'test6',desc:'集群日志'},
            {index: 'test7',desc:'邮件告警'},
            {index: 'test8',desc:'短信告警'}
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
    handleClick(clickType){
      if(clickType==="logout"){
        this.$store.dispatch('user/logout').then(() => {
          console.log("执行退出..")
          this.$router.push({ path: '/login' })
        }).catch(() => {
          Message.error("退出报错")
        })
      }
    }

  },
  created() {
    // console.log("执行初始化了......")
    // console.log(JSON.stringify(this.$store.state.menu.routes,null,4))
    // 读取vuex store数据
    let routes=this.$store.state.menu.routes
    let top_menus_data=[]
    let role=this.$store.getters["user/getRole"]
    routes.forEach(item => {
      if(item.path === "/"){
        item.children.forEach(child=>{
           if(child.meta.roles && (child.meta.roles.includes(role) ) ){
             top_menus_data.push({
               "index":child.path.slice(1),
               "type":child.menuInfo.menuType,
               "title":child.menuInfo.menuTitle,
               "icon":child.menuInfo.menuIcon
             })
           }
        })
      }
    })

    // console.log("hh: "+JSON.stringify(top_menus_data,null,4))
  this.items=top_menus_data

    // let currentUserRoles = ['admin']
    // let filterRouters = filterAsyncRoutes(PrivateRouter, currentUserRoles)
    // filterRouters.forEach(item => {
    //   this.$router.addRoute(item)
    // })

  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.layout-logo{
  width: 200px;
  height: 30px;
  line-height: 50px;
  float: left;
  font-size: 20px;
  color: #dcdee2;
}

.nav  {
  float: left;
  margin-left: 10px;
}

</style>
