<template>
<br><br>

<!-- <el-card> -->
<el-steps :active="active" finish-status="success">
  <el-step title="Step 1"></el-step>
  <el-step title="Step 2"></el-step>
  <el-step title="Step 3"></el-step>
</el-steps>

<br><br><br>

<el-form ref="form" :model="form"  label-width="120px">
        <el-form-item label="Nombre">
        <el-input v-model="form.name" placeholder="ej: Justice International"></el-input>
    </el-form-item>
     <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="Correo Electronico">
        <el-input v-model="form.name" placeholder="ej: ejemplo@correo.com"></el-input>
    </el-form-item>
     <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="Contraseña">
        <el-input v-model="form.name" placeholder="Contraseña"></el-input>
    </el-form-item>
     <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="Confirmar Contraseña">
        <el-input v-model="form.name" placeholder="Confirmar Contraseña"></el-input>
    </el-form-item>
    <el-form-item label="Quienes Somos">
    <el-input type="textarea" v-model="form.desc" placeholder="Explicacion: Lorem ipsum dolor sit amet consectetur adipisicing elit sit amet consectetur adipisicing elit."></el-input>
  </el-form-item>
   <el-form-item label="Descripcion General">
    <el-input type="textarea" v-model="form.desc" placeholder="Explicacion: Lorem ipsum dolor sit amet consectetur adipisicing elit sit amet consectetur adipisicing elit."></el-input>
  </el-form-item>
   <el-form-item label="Que necesitamos">
    <el-input type="textarea" v-model="form.desc" placeholder="Explicacion: Lorem ipsum dolor sit amet consectetur adipisicing elit sit amet consectetur adipisicing elit."></el-input>
  </el-form-item>
   <!-- <el-form-item>
  <el-form-item label="Descripcion General">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>
  </el-form-item>
     <el-form-item>
  <el-form-item label="Que necesitamos">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>
  </el-form-item> -->

<!--  
  <el-form-item>
    <el-form-item label="Activity zone">
        <el-select v-model="form.region" placeholder="please select your zone">
        <el-option label="Zone one" value="shanghai"></el-option>
        <el-option label="Zone two" value="beijing"></el-option>
    </el-select>
    </el-form-item>
    </el-form-item>
        <el-form-item label="Activity time">
        <el-col :span="11">
            <el-date-picker type="date" placeholder="Pick a date" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
            <el-time-picker placeholder="Pick a time" v-model="form.date2" style="width: 100%;"></el-time-picker>
        </el-col>
    </el-form-item>
    <el-form-item label="Instant delivery">
        <el-switch v-model="form.delivery"></el-switch>
    </el-form-item>
    <el-form-item label="Activity type">
        <el-checkbox-group v-model="form.type">
        <el-checkbox label="Online activities" name="type"></el-checkbox>
        <el-checkbox label="Promotion activities" name="type"></el-checkbox>
        <el-checkbox label="Offline activities" name="type"></el-checkbox>
        <el-checkbox label="Simple brand exposure" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="Resources">
    <el-radio-group v-model="form.resource">
      <el-radio label="Sponsor"></el-radio>
      <el-radio label="Venue"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="Activity form">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item> -->
  <el-form-item>

    <el-button style="margin-top: 12px; margin-left:70px;" type="primary"  @click="previous">Previous step</el-button>
    <el-button style="margin-top: 12px; margin-left:70px;" type="primary"  @click="next">Next step</el-button>
    
    <!-- <el-button>Cancel</el-button> -->
    
  </el-form-item>

</el-form>
</el-form>
</el-form>
</el-form>
<!-- </el-card> -->
</template>
<script>
  export default {
    data() {
      return {
         active: 0,
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
        if (this.active++ > 2) this.active = 0;
      },
      previous() {
        if(this.active-- < 2) this.active=0
      }
    }
  }
</script>  


<style>
/* .el-form{
text-align: center;
display: inline-block;
} */
.el-form{
    width: 680px;
    margin:auto;
    /* position: center; */
    /* position: center; */
    /* display: inline-block;
    text-align: center; */
  }
  .el-steps{
    width: 780px;
    margin:auto;
    margin-left: 350px;
  }

  

 
</style>
