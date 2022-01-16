<template>
  <Layout :style="{padding: '0 24px 24px'}">
    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
      <p>With desc</p>
      <Button @click="info(false)">Info</Button>
      <Button @click="success(false)">Success</Button>
      <Button @click="warning(false)">Warning</Button>
      <Button @click="error(false)">Error</Button>
      <p>Only title</p>
      <Button @click="info(true)">Info</Button>
      <Button @click="success(true)">Success</Button>
      <Button @click="warning(true)">Warning</Button>
      <Button @click="error(true)">Error</Button>
    </Content>
  </Layout>
</template>

<script>
export default {
  name: "Test-8-1",
  methods: {
    info (nodesc) {
      this.$Notice.info({
        title: 'Notification title',
        desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
      });
    },
    success (nodesc) {
      this.$Notice.success({
        title: 'Notification title',
        desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
      });
    },
    warning (nodesc) {
      this.$Notice.warning({
        title: 'Notification title',
        desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
      });
    },
    error (nodesc) {
      this.$Notice.error({
        title: 'Notification title',
        desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
      });
    }
  }
}
</script>

<style scoped>

</style>