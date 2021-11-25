<template>
  <!-- <h1>Sandra is really stubborn</h1> -->
  <br /><br />
  <el-form ref="form" :model="form" label-width="-80px">
    <el-steps :active="selectedBar - 1" finish-status="success">
      <el-step title="Informacion"></el-step>
      <el-step title="Datos"></el-step>
      <el-step title="Servicios"></el-step>
      <!-- <el-step title="pending"></el-step> -->
    </el-steps>

    <div v-if="selectedWidget == 1"><reg1 /></div>
    <div v-if="selectedWidget == 2"><reg2 /></div>
    <div v-if="selectedWidget >= 3"><reg3 /></div>
    <!-- <div v-if="selectedWidget >= 3"><reg3 /></div> -->
  </el-form>

  <el-form-item>
    <el-button
      style="margin-top: 12px; margin-left:70px;"
      type="primary"
      @click="previous"
      >Previous</el-button
    >

    <el-button
      v-popover:pop
      style="margin-top: 12px; margin-left:70px;"
      type="primary"
      @click="next"
      >Next</el-button
    >
  </el-form-item>
</template>

<script>
import reg1 from "../widgets/register/Organization.vue/organizationRegistration.vue/registerOrgContent1.vue";
import reg2 from "../widgets/register/Organization.vue/organizationRegistration.vue/registerOrgContent2.vue";
import reg3 from "../widgets/register/Organization.vue/organizationRegistration.vue/registerOrgContent3.vue";

export default {
  components: { reg1, reg2, reg3 },
  data() {
    return {
      selectedBar: 1,
      selectedWidget: 1,
      pop: "",
    };
  },
  methods: {
    next() {
      if (this.selectedBar < 3 && this.selectedWidget < 3) {
        this.selectedBar = this.selectedBar + 1;
        this.selectedWidget = this.selectedWidget + 1;
      } else if (this.selectedBar < 4) {
        this.$confirm("Ready to submit. Continue?", {
          confirmButtonText: "Yes",
          cancelButtonText: "No",
        })
          .then(() => {
            this.$message({
              type: "success",
              message: "Registered",
            });
          })
          .catch(() => {
            this.$message({
              type: "cancel",
              message: "Canceled",
            });
          });
      }
 
    },
    previous() {
      if (this.selectedWidget > 1) {
        this.selectedWidget = this.selectedWidget - 1;
      }
    },

    // selectedBar() {
    //   if (selectedBar == 3) {
    //     this.selectedBar = this.selectedBar + 3;
    //     this.$confirm("Ready to submit. Continue?", {
    //       confirmButtonText: "Yes",
    //       cancelButtonText: "No",
    //     })
    //       .then(() => {
    //         this.$message({
    //           type: "success",
    //           message: "Registered",
    //         });
    //       })
    //       .catch(() => {
    //         this.$message({
    //           type: "cancel",
    //           message: "Canceled",
    //         });
    //       });
    //   }
    // },
  },
};
</script>

<style>
.el-steps {
  margin-left: 0px;
}
</style>
