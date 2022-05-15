<template >
  <div style="height: 100vh;display: flex; justify-content: center;align-items: center;">
    <div>
    <el-tabs type="border-card">
      <el-tab-pane>
        <span slot="label"><i class="el-icon-date"></i> 我的行程</span>
        我的行程
      </el-tab-pane>
      <el-tab-pane label="消息中心">消息中心</el-tab-pane>
      <el-tab-pane label="角色管理">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs>
    </div>
  </div>
</template>


<script>
export default {
  name: "Test6",
  data () {
    return {
      tabList: [
        {
          label: '标签一',
          name: 'name1'
        },
        {
          label: '标签二',
          name: 'name2'
        },
        {
          label: '标签三',
          name: 'name3'
        },
        {
          label: '标签四',
          name: 'name4'
        },
        {
          label: '标签五',
          name: 'name5'
        }
      ]
    }
  },
  methods: {
    handleDragDrop (name, newName, a, b) {
      // names 为调整后的 name 集合
      this.tabList.splice(b,1,...this.tabList.splice(a, 1 , this.tabList[b]));
    }
  }
}
</script>

<style scoped>

</style>