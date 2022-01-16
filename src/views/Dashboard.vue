<template>

  <div id="box">

    <template>
      <List>
        <ListItem>
          <ListItemMeta avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar" title="This is title" description="This is description, this is description." />
        </ListItem>
        <ListItem>
          <ListItemMeta avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar" title="This is title" description="This is description, this is description." />
        </ListItem>
        <ListItem>
          <ListItemMeta avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar" title="This is title" description="This is description, this is description." />
          <template slot="action">
            <li>
              <a href="">Edit</a>
            </li>
            <li>
              <a href="">More</a>
            </li>
          </template>
        </ListItem>
        <ListItem>
          <ListItemMeta avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar" title="This is title" description="This is description, this is description." />
          <template slot="action">
            <li>
              <a href="">Edit</a>
            </li>
            <li>
              <a href="">More</a>
            </li>
          </template>
        </ListItem>
      </List>
    </template>




  </div>


</template>

<script>
export default {
  name: "Dashboard.vue",
  data () {
    return {
      value2: false,
      value7: false,
      value8: false
    }
  }
}
</script>

<style scoped>

#box {
  height: 90vh;
  width:100%;
  display:flex;
  align-items: center;
  justify-content: center;
}

</style>