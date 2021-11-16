<template>
  <!-- <h1>Sandra is really stubborn</h1> -->
  <br /><br />
  <el-steps :active="selected-1" finish-status="success">
    <el-step title="Informacion"></el-step>
    <el-step title="Datos"></el-step>
    <el-step title="Servicios"></el-step>
  </el-steps>

  <div v-if="selected == 1"><reg1 /></div>
  <div v-if="selected == 2"><reg2 /></div>
  <div v-if="selected == 3"><reg3 /></div>

  <el-form-item>
    <el-button
      style="margin-top: 12px; margin-left:70px;"
      type="primary"
      @click="previous"
      >Previous</el-button
    >

    <el-button
      style="margin-top: 12px; margin-left:70px;"
      type="primary"
      @click="next"
      >Next</el-button
    >
  </el-form-item>
</template>

<script>
import reg1 from "../widgets/register/registerOrgContent1.vue";
import reg2 from "../widgets/register/registerOrgContent2.vue";
import reg3 from "../widgets/register/registerOrgContent3.vue";

export default {
  components: { reg1, reg2, reg3 },
  data() {
    return {
      selected: 1,
    };
  },
   methods: {
    next() {
        if (this.selected < 3){
            this.selected = this.selected + 1
        }
    },
    previous() {
        if (this.selected > 1){
            this.selected = this.selected - 1
        }
    },
  },
};

</script>

<style></style>
