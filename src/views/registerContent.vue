<template>

  <br /><br />

  <!-- organization form layout -->
  <div v-if="isOrg == true">
    ORG FORM
    <el-form ref="form" :model="form" label-width="-80px">
      <el-steps :active="selectedBar - 1" finish-status="success">
        <el-step title="Informacion"></el-step>
        <el-step title="Datos"></el-step>
        <el-step title="Servicios"></el-step>
      </el-steps>
      <div v-if="selectedWidget == 1"><regOrg1 /></div>
      <div v-if="selectedWidget == 2"><regOrg2 /></div>
      <div v-if="selectedWidget >= 3"><regOrg3 /></div>
    </el-form>
  </div>

  <!-- beneficiary form layout -->
  <div v-else-if="isBen == true">
    BEN FORM
    <el-form ref="form" :model="form" label-width="-80px">
      <el-steps :active="selectedBar - 1" finish-status="success">
        <el-step title="Informacion"></el-step>
        <el-step title="Confirmacion"></el-step>
      </el-steps>
      <div v-if="selectedWidget == 1"><regBen1 /></div>
      <div v-if="selectedWidget == 2"><regBen2 /></div>
    </el-form>
  </div>

  <!-- initial layout -->
  <div v-else>
    <div @click="toggleShowOrgForm" style="cursor: pointer;">
      <div class="orgBox">
        <el-row>
          <!-- <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0"> -->
          <el-card :body-style="{ padding: '0px' }">
            <img src="../assets/Registration/green.png" class="image" />
            <div style="padding: 14px;">
              <span>Registrate como organization</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <!-- <button @click="toggleShowOrgForm"></button> -->
                <!-- <el-button type="text" class="button">Operating</el-button>
           -->
              </div>
            </div>
          </el-card>
        </el-row>
      </div>
    </div>

    <!-- </el-col> -->

    <div @click="toggleShowBenForm" style="cursor: pointer;">
      <div class="benBox">
        <el-row>
          <!-- <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0"> -->
          <el-card :body-style="{ padding: '0px' }">
            <img src="../assets/Registration/blue.png" class="image" />
            <div style="padding: 14px;">
              <span>Registrate como usuario </span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <!-- <button @click="toggleShowOrgForm"></button> -->
                <!-- <el-button type="text" class="button">Operating</el-button>
           -->
              </div>
            </div>
          </el-card>
        </el-row>
      </div>
    </div>
  </div>

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
import regOrg1 from "../widgets/register/Organization.vue/organizationRegistration.vue/registerOrgContent1.vue";
import regOrg2 from "../widgets/register/Organization.vue/organizationRegistration.vue/registerOrgContent2.vue";
import regOrg3 from "../widgets/register/Organization.vue/organizationRegistration.vue/registerOrgContent3.vue";
import regBen1 from "../widgets/beneficiaryRegistration/registerBenContent1.vue";
import regBen2 from "../widgets/beneficiaryRegistration/registerBenContent2.vue";

export default {
  components: { regOrg1, regOrg2, regOrg3, regBen1, regBen2},
  data() {
    return {
      selectedBar: 1,
      selectedWidget: 1,
      isOrg: false,
      isBen: false,
    };
    // ruleForm:{
      
    // }
  },

  methods: {
    next() {
      if (this.selectedBar < 2 && this.selectedWidget < 2) {
        this.selectedBar = this.selectedBar + 1;
        this.selectedWidget = this.selectedWidget + 1;
      } else if (this.selectedBar < 3) {
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
              message: "Registration Canceled",
            });
          });
      }
    },
    previous() {
      if (this.selectedWidget > 1 && this.selectedBar >1) {
        this.selectedWidget = this.selectedWidget - 1;
        this.selectedBar = this.selectedBar - 1;
      } 
    },
    toggleShowOrgForm() {
      this.isOrg = !this.isOrg;
    },
    toggleShowBenForm() {
      this.isBen = !this.isBen;
    },
  },
};
</script>

<style>
.el-steps {
  margin-left: 0px;
}

.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.pointer {
  cursor: pointer;
}
</style>
