<template>
  <br /><br />

  <br /><br /><br />

  <el-form ref="form" :model="form" label-width="220px">
    <el-form-item
      label="Correo de Contacto"
      :rules="[{ required: true, message: 'Correo de Contacto is required' }]"
    >
      <el-input
        v-model="form.name"
        placeholder="ej: ejemplo@correo.com "
      ></el-input>
    </el-form-item>
    <!-- <el-form-item
      label="Numero Telefonico"
      :rules="[
        {
          required: true,
          message: 'Numero Telefonico is required',
        },
      ]"
    >
      <el-input v-model="form.name" placeholder="ej: 321232123121"></el-input>
    </el-form-item>

    <el-form-item
      label="Direccion de la Cede "
      :rules="[{ required: true, message: 'direccion is required' }]"
    >
      <el-input v-model="form.name" placeholder=""></el-input>
    </el-form-item>

    <el-form-item label="Horario" required>
      <el-form-item>
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="Lunes" name="type"></el-checkbox>
          <el-checkbox label="Martes" name="type"></el-checkbox>
          <el-checkbox label="Miercoles" name="type"></el-checkbox>
          <el-checkbox label="Jueves" name="type"></el-checkbox>
          <el-checkbox label="Viernes" name="type"></el-checkbox>
          <el-checkbox label="Sabado" name="type"></el-checkbox>
          <el-checkbox label="Domingo" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-col class="line" :span="2"></el-col>
      <el-col :span="11">
        <el-form-item prop="openTime">
          <el-time-picker
            placeholder="Apertura"
            v-model="ruleForm.openTime"
            style="width: 100%;"
          ></el-time-picker>
        </el-form-item>
      </el-col>

      <el-col :span="11">
        <el-form-item prop="closingTime">
          <el-time-picker
            placeholder="Cierre"
            v-model="ruleForm.closingTime"
            style="width: 100%;"
          ></el-time-picker>
        </el-form-item>
      </el-col>
    </el-form-item>

    <el-form-item
      label="Pagina Web"
      :rules="[{ required: true, message: 'name is required' }]"
    >
      <el-input v-model="form.name" placeholder="www.ejemplo.com"></el-input>
    </el-form-item> -->
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        date1: "",
        date2: "",
      },
      rules: {
        openTime: [
          {
            type: "date",
            required: true,
            message: "Por favor selecione la hora de apertura",
            trigger: "change",
          },
        ],
        closingTime: [
          {
            type: "date",
            required: true,
            message: "Por favor selecione la hora de cierre",
            trigger: "change",
          },
        ],
      },
      form: {
        name: "",
        region: "",
        openTime: "",
        closingTime: "",
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
