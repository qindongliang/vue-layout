<template>
    <div class="demo-split" style="height: 100vh">
      <el-radio-group v-model="direction">
        <el-radio label="ltr">从左往右开</el-radio>
        <el-radio label="rtl">从右往左开</el-radio>
        <el-radio label="ttb">从上往下开</el-radio>
        <el-radio label="btt">从下往上开</el-radio>
      </el-radio-group>

      <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
        点我打开
      </el-button>

      <el-drawer
          title="我是标题"
          :visible.sync="drawer"
          :direction="direction"
          :before-close="handleClose">
        <span>我来啦!</span>
      </el-drawer>

    </div>
</template>

<script>
export default {
  name: "Test7",
  data() {
    return {
      drawer: false,
      direction: 'rtl',
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
          .then( _ => {
            console.log("1111")
            done();
          })
          .catch(_ => {});
    }
  }
}
</script>

<style scoped>

.demo-split{
  height: 200px;
  border: 1px solid #dcdee2;
}
.demo-split-pane{
  padding: 10px;
  background-color: #dcdee2;
}
.demo-split-pane.no-padding{
  height: 200px;
  background-color: black;
  padding: 0;
}
</style>