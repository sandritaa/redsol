<template>
<el-popover
    title="Title"
    width="200"
    trigger="manual"
    content="this is content, this is content, this is content"
    v-model="visible">
  </el-popover>
  I am 4
</template>

<script>
export default {
    data() {
      return {
        visible: true
      };
    }
  };
</script>

<style></style>
