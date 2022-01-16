<template >
  <div style="height: 100vh">
  <Tabs type="card" :draggable="true" @on-drag-drop="handleDragDrop">
    <TabPane v-for="(tab, index) in tabList" :key="index" :label="tab.label" :name="tab.name">{{ tab.label }}</TabPane>
  </Tabs>
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