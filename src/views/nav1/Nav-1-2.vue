<template>

  <Layout :style="{padding: '0 24px 24px'}">
    <!--    <Breadcrumb :style="{margin: '24px 0'}">-->
    <!--      <BreadcrumbItem>Home</BreadcrumbItem>-->
    <!--      <BreadcrumbItem>Components</BreadcrumbItem>-->
    <!--      <BreadcrumbItem>Layout</BreadcrumbItem>-->
    <!--    </Breadcrumb>-->
    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">

      <template>
        <div>
          <Table highlight-row ref="currentRowTable" :columns="columns3" :data="data1"></Table>
          <Button @click="handleClearCurrentRow">Clear</Button>
        </div>
      </template>

    </Content>
  </Layout>
</template>

<script>
export default {
  name: "Nav-1-2",
  data () {
    return {
      columns3: [
        {
          type: 'index',
          width: 60,
          align: 'center'
        },
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        }
      ],
      data1: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ]
    }
  },
  methods: {
    handleClearCurrentRow () {
      this.$refs.currentRowTable.clearCurrentRow();
    }
  }

}
</script>

<style scoped>

</style>