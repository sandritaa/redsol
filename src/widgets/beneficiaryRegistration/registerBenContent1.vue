<template>
  <br /><br /><br />

  <el-form ref="form" :model="form" label-width="220px">
    <el-form-item
      label="Nombre"
      :rules="[{ required: true, message: 'nombre es requerido' }]"
    >
      <el-input v-model="form.name" placeholder="ej: Jose"></el-input>
    </el-form-item>

    <el-form-item
      label="Apellido"
      :rules="[{ required: true, message: 'apellido es requerido' }]"
    >
      <el-input v-model="form.lastName" placeholder="ej: Osorio"></el-input>
    </el-form-item>

    <el-form-item
      label="Correo Electronico"
      :rules="[{ required: true, message: 'correo electronico es requerido' }]"
    >
      <el-input
        v-model="form.correo"
        placeholder="ej: ejemplo@correo.com"
      ></el-input>
    </el-form-item>

    <el-form-item label="Contraseña" :rules="[{ required: true, message: 'contraseña es requerida' }]">
      <el-input v-model="form.password" placeholder="Contraseña"></el-input>
    </el-form-item>


    <el-form-item
      label="Confirmar Contraseña"
      :rules="[{ required: true, message: 'confirmacion de contraseña es requerida' }]"
    >
      <el-input
        v-model="form.passwordCon"
        placeholder="Confirmar Contraseña"
      ></el-input>
    </el-form-item>

    <br>

    <h2> Ya tines una cuenta? </h2>
    <button @click="next">Inicia Sesion</button>


  </el-form>
  
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        lastName: "",
        correo:"",
        password:"",
        passwordCon:"",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
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
