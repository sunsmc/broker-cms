<template>
  <div class="tree">
    <div class="tree-content">
      <tree-item :tree-data="treeData" :tree-first="true" />
    </div>
  </div>
</template>

<script>

import TreeItem from './TreeItem'
import { treeInvoke } from "../api/index";

export default {
  name: 'Tree',
  components: {
    TreeItem
  },
  data() {
    return {
      phone: localStorage.getItem("username"),
      treeData: []
    }
  },
  created() {
    treeInvoke(this.phone).then((res) => {
      if (res.code == 200) {
        this.treeData = res.data;
      }
    });
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.tree{
    background: #fff;
    min-height: calc(100vh - 110px);
    position: relative;
    &-content{
      background: #fff;
      position: absolute;
      top: 0;
      left: 0;
    }
}
</style>