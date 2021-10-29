<template>
<br><br>


<el-steps :active="active" finish-status="success">
  <el-step title="Informacion"></el-step>
  <el-step title="Datos"></el-step>
  <el-step title="Servicios"></el-step>
  <el-step title="QR Code"></el-step>
</el-steps>

<br><br><br>

<el-form ref="form" :model="form"  label-width="120px">
        <el-form-item label="Correo de Contacto" :rules="[
        { required: true, message: 'Correo de Contacto is required'},
        ]">
        <el-input v-model="form.name" placeholder="ej: ejemplo@correo.com "></el-input>
    </el-form-item>
     <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="Numero Telefonico"
         :rules="[
        { required: true, message: 'Numero Telefonico is required'},
        ]">
        <el-input v-model="form.name" placeholder="ej: 321232123121"></el-input>
    </el-form-item>

     <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="Direccion de la Cede " :rules="[
        { required: true, message: 'direccion is required'},
        ]">
        <el-input v-model="form.name" placeholder=""></el-input>
    </el-form-item>

   </el-form>

     <el-form-item label="Activity time" required>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-form-item prop="openTime">
        <el-time-picker placeholder="Apertura" v-model="ruleForm.openTime" style="width: 100%;"></el-time-picker>
      </el-form-item>
       </el-col>

           <el-col :span="11">
      <el-form-item prop="closingTime">
        <el-time-picker placeholder="Cierre" v-model="ruleForm.closingTime" style="width: 100%;"></el-time-picker>
      </el-form-item>
       </el-col>
       </el-form-item>


     <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="Pagina Web" :rules="[
        { required: true, message: 'name is required'},
        ]">
        <el-input v-model="form.name" placeholder="www.ejemplo.com"></el-input>
    </el-form-item>
     
   
  
  <el-form-item>
    <router-link :to="{ name: prev }">
      <el-button style="margin-top: 12px; margin-left:70px;" type="primary" @click="previous" >Previous step </el-button>
    </router-link>
    <router-link :to="{ name: next }">
      <el-button style="margin-top: 12px; margin-left:70px;" type="primary" @click="next">Next step </el-button>
   </router-link>

  </el-form-item>
</el-form>
</el-form>
</el-form>

</template>
<script>
// import registerOrgContent1Vue from './registerOrgContent1.vue';
  export default {
    data() {
      return {
         active: 0,
         prev: "RegOrgContent1",
         next: "RegOrgContent3",
         ruleForm:{
          date1: '',
          date2: '', 
         },

         rules:{
              openTime: [
            { type: 'date', required: true, message: 'Por favor selecione la hora de apertura', trigger: 'change' }
          ],
          closingTime: [
            { type: 'date', required: true, message: 'Por favor selecione la hora de cierre', trigger: 'change' }
          ],
         },
         form: {
          name: '',
          region: '',
          openTime: '',
          closingTime: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
       
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      next() {
        if (this.active++ > 3) this.active = 0;
      },
      previous() {
        if(this.active-- < 0) this.active=0
      }
    }
  }
</script>  

<style>
.el-form{
    width: 680px;
    margin:auto;
  }
  .el-steps{
    width: 780px;
    margin:auto;
    margin-left: 350px;
  }
</style>
