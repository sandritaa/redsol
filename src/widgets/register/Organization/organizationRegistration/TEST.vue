<template>
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">

  <el-form-item label="Activity name" prop="name">
    <el-input v-model="ruleForm.name"
    placeholder="Explicacion: Lorem ipsum dolor sit amet consectetur adipisicing elit sit amet consectetur adipisicing elit."
></el-input>
  <!-- </el-form-item>

  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">Create</el-button>
    <el-button @click="resetForm('ruleForm')">Reset</el-button> -->
  </el-form-item>
</el-form>
</template>

<script>
export default {
    data() {
      return {
        ruleForm: {
          name: '',
          // region: '',
          // date1: '',
          // date2: '',
          // delivery: false,
          // type: [],
          // resource: '',
          // desc: ''
        },
        rules: {
          name: [
            { required: true, message: 'Please input Activity name', trigger: 'blur' },
            { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
          ],
          // region: [
          //   { required: true, message: 'Please select Activity zone', trigger: 'change' }
          // ],
          // date1: [
          //   { type: 'date', required: true, message: 'Please pick a date', trigger: 'change' }
          // ],
          // date2: [
          //   { type: 'date', required: true, message: 'Please pick a time', trigger: 'change' }
          // ],
          // type: [
          //   { type: 'array', required: true, message: 'Please select at least one activity type', trigger: 'change' }
          // ],
          // resource: [
          //   { required: true, message: 'Please select activity resource', trigger: 'change' }
          // ],
          // desc: [
          //   { required: true, message: 'Please input activity form', trigger: 'blur' }
          // ]
        }
      };
    },
    // methods: {
    //   submitForm(formName) {
    //     this.$refs[formName].validate((valid) => {
    //       if (valid) {
    //         alert('submit!');
    //       } else {
    //         console.log('error submit!!');
    //         return false;
    //       }
    //     });
    //   },
    //   resetForm(formName) {
    //     this.$refs[formName].resetFields();
    //   }
    // }
  }

</script>

<style>

</style>