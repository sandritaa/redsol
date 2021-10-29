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
        <el-form-item label="Nombre"
        :rules="[
        { required: true, message: 'name is required'},
        ]">
        <el-input v-model="form.name" placeholder="ej: Justice International"></el-input>
    </el-form-item>
     <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="Correo Electronico"
         :rules="[
        { required: true, message: 'name is required'},
        ]">
        <el-input v-model="form.name" placeholder="ej: ejemplo@correo.com"></el-input>
    </el-form-item>
     <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="Contraseña"
         :rules="[
        { required: true, message: 'name is required'},
        ]">
        <el-input v-model="form.name" placeholder="Contraseña"></el-input>
    </el-form-item>
     <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="Confirmar Contraseña"
         :rules="[
        { required: true, message: 'name is required'},
        ]">
        <el-input v-model="form.name" placeholder="Confirmar Contraseña"></el-input>
    </el-form-item>
    <el-form-item label="Quienes Somos"
     :rules="[
        { required: true, message: 'name is required'},
        ]">
    <el-input type="textarea" v-model="form.desc" placeholder="Explicacion: Lorem ipsum dolor sit amet consectetur adipisicing elit sit amet consectetur adipisicing elit."></el-input>
  </el-form-item>
   <el-form-item label="Descripcion General"
        :rules="[
        { required: true, message: 'name is required'},
        ]">
    <el-input type="textarea" v-model="form.desc" placeholder="Explicacion: Lorem ipsum dolor sit amet consectetur adipisicing elit sit amet consectetur adipisicing elit."></el-input>
  </el-form-item>
   <el-form-item label="Que necesitamos"
        :rules="[
        { required: true, message: 'name is required'},
        ]">
    <el-input type="textarea" v-model="form.desc" placeholder="Explicacion: Lorem ipsum dolor sit amet consectetur adipisicing elit sit amet consectetur adipisicing elit."></el-input>
  </el-form-item>
  
  <el-form-item>
    <router-link :to="{ name: prev }">
      <el-button style="margin-top: 12px; margin-left:70px;" type="primary" @click="previous">Previous step </el-button>
    </router-link>
    <router-link :to="{ name: next }">
      <el-button style="margin-top: 12px; margin-left:70px;" type="primary" @click="next" >Next step </el-button>
    </router-link>

  </el-form-item>

</el-form>
</el-form>
</el-form>
</el-form>
</template>
<script>
  export default {
    data() {
      return {
         active: 0,
         prev: "HomeContent",
         next: "RegOrgContent2",
         form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
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
