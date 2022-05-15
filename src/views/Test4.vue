<template>

  <div id="box" style="height: 100vh">

    <template>
      <el-row>
        <el-col span="12" style="background-color: green">
          主机日志A-col-12
        </el-col>
        <el-col span="12" style="background-color: pink" >主机日志B-col-12</el-col>
      </el-row>
      <br>
      <el-row>
        <el-col span="8">col-8</el-col>
        <el-col span="8" style="background-color: gray">col-8</el-col>
        <el-col span="8">col-8</el-col>
      </el-row>
      <br>
      <el-row>
        <el-col span="6">col-6</el-col>
        <el-col span="6" style="background-color: darkseagreen">col-6</el-col>
        <el-col span="6">col-6</el-col>
        <el-col span="6" style="background-color: burlywood">col-6</el-col>
      </el-row>
    </template>

</div>

</template>

<script>
export default {
  name: "Test4"
}
</script>

<style scoped>

</style>