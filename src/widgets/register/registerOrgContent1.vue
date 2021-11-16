<template>
  <br /><br /><br />
  This is 1
  <el-form ref="form" :model="form" label-width="120px">
    <el-form-item
      label="Nombre"
      :rules="[{ required: true, message: 'name is required' }]"
    >
      <el-input
        v-model="form.name"
        placeholder="ej: Justice International"
      ></el-input>
    </el-form-item>
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item
        label="Correo Electronico"
        :rules="[{ required: true, message: 'name is required' }]"
      >
        <el-input
          v-model="form.name"
          placeholder="ej: ejemplo@correo.com"
        ></el-input>
      </el-form-item>

      <el-form-item label="Activity time" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker
              type="date"
              placeholder="Pick a date"
              v-model="ruleForm.date1"
              style="width: 100%;"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-form-item prop="date2">
            <el-time-picker
              placeholder="Pick a time"
              v-model="ruleForm.date2"
              style="width: 100%;"
            ></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item
          label="Confirmar Contraseña"
          :rules="[{ required: true, message: 'name is required' }]"
        >
          <el-input
            v-model="form.name"
            placeholder="Confirmar Contraseña"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="Quienes Somos"
          :rules="[{ required: true, message: 'name is required' }]"
        >
          <el-input
            type="textarea"
            v-model="form.desc"
            placeholder="Explicacion: Lorem ipsum dolor sit amet consectetur adipisicing elit sit amet consectetur adipisicing elit."
          ></el-input>
        </el-form-item>
        <el-form-item
          label="Descripcion General"
          :rules="[{ required: true, message: 'name is required' }]"
        >
          <el-input
            type="textarea"
            v-model="form.desc"
            placeholder="Explicacion: Lorem ipsum dolor sit amet consectetur adipisicing elit sit amet consectetur adipisicing elit."
          ></el-input>
        </el-form-item>
        <el-form-item
          label="Que necesitamos"
          :rules="[{ required: true, message: 'name is required' }]"
        >
          <el-input
            type="textarea"
            v-model="form.desc"
            placeholder="Explicacion: Lorem ipsum dolor sit amet consectetur adipisicing elit sit amet consectetur adipisicing elit."
          ></el-input>
        </el-form-item>
      </el-form>
    </el-form>
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
        date1: [
          {
            type: "date",
            required: true,
            message: "Please pick a date",
            trigger: "change",
          },
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "Please pick a time",
            trigger: "change",
          },
        ],
      },
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
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
