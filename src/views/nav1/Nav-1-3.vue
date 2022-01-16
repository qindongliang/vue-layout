<template>
  <Layout :style="{padding: '0 24px 24px'}">
    <!--    <Breadcrumb :style="{margin: '24px 0'}">-->
    <!--      <BreadcrumbItem>Home</BreadcrumbItem>-->
    <!--      <BreadcrumbItem>Components</BreadcrumbItem>-->
    <!--      <BreadcrumbItem>Layout</BreadcrumbItem>-->
    <!--    </Breadcrumb>-->
    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
      <template>
        <Steps :current="1" status="error">
          <Step title="已完成" content="这里是该步骤的描述信息"></Step>
          <Step title="进行中" content="这里是该步骤的描述信息"></Step>
          <Step title="待进行" content="这里是该步骤的描述信息"></Step>
          <Step title="待进行" content="这里是该步骤的描述信息"></Step>
        </Steps>
      </template>


    </Content>
  </Layout>
</template>

<script>
export default {
  name: "Nav-1-3",
  data () {
    return {
      value2: 0
    }
  }
}
</script>

<style scoped>

</style>