<template>
  <br /><br /><br />
<!-- <button type="button" @click='passEvent'> Update me</button> -->
  <el-form label-width="220px">
    <el-form-item
      label="Nombre"
      :rules="[{ required: true, message: 'nombre es requerido' }]"
    >
      <el-input
        @input='passEvent'
        v-model="orgForm1.name"
        placeholder="ej: Justice International"
      ></el-input>
    </el-form-item>

     <el-form-item
      label="Correo Electronico"
      :rules="[{ required: true, message: 'correo electronico es requerido' }]"
    >
      <el-input
        @input='passEvent'
        v-model="orgForm1.email"
        placeholder="ej: ejemplo@correo.com"
      ></el-input>
    </el-form-item>

      <el-form-item
      label="Contraseña"
      :rules="[{ required: true, message: 'contraseña requerida' }]"
    >
      <el-input 
        @input='passEvent'
        v-model="orgForm1.password" 
      placeholder="Contraseña"></el-input>
    </el-form-item>

    <el-form-item
      label="Confirmar Contraseña"
      :rules="[
        { required: true, message: 'confirmacion de contraseña requerida' },
      ]"
    >
      <el-input
          @input='passEvent'
        v-model="orgForm1.cpassword"
        placeholder="Confirmar Contraseña"
      ></el-input>
    </el-form-item>

    <el-form-item
      label="Quienes Somos"
      :rules="[{ required: true, message: 'descripcion requerida' }]"
    >
      <el-input
         @input='passEvent'
        v-model="orgForm1.desc1"
        type="textarea"
        placeholder="Explicacion: Lorem ipsum dolor sit amet consectetur adipisicing elit sit amet consectetur adipisicing elit."
      ></el-input>
    </el-form-item>

    <el-form-item
      label="Descripcion General"
      :rules="[{ required: true, message: 'descripcion requerida' }]"
    >
      <el-input
        
         @input='passEvent'
        v-model="orgForm1.desc2"
        type="textarea"
        placeholder="Explicacion: Lorem ipsum dolor sit amet consectetur adipisicing elit sit amet consectetur adipisicing elit."
      ></el-input>
    </el-form-item>

    <el-form-item
      label="Que necesitamos"
      :rules="[{ required: true, message: 'descripcion requerida' }]"
    >
      <el-input
        
        @input='passEvent'
        v-model="orgForm1.desc3"
        type="textarea"
        placeholder="Explicacion: Lorem ipsum dolor sit amet consectetur adipisicing elit sit amet consectetur adipisicing elit."
      ></el-input>
    </el-form-item> 

  </el-form>

{{ orgForm1 }}

</template>
<script>
export default {
  data() {
    return {
      orgForm1: {
        name:"",
        email: "",
        password: "",
        cpassword: "",
        desc1: "",
        desc2: "",
        desc3: "",
      }
      // form: {
      //   name: "",
      //   email: "",
      //   password: "",
      //   cpassword: "",
      //   desc1: "",
      //   desc2: "",
      //   desc3: "",
      // },
    };
  },
  methods:{
    passEvent() {
      this.$emit('changeName',this.orgForm1)
    }
  }
};
</script>

<style>
.el-form {
  width: 680px;
  margin: auto;
}
.el-steps {
  width: 780px;
  margin: auto;
  margin-left: 350px;
}
</style>
