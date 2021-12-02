<template>

  <br /><br /><br /><br /><br />

  <br /><br />
  <!-- <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">Check all</el-checkbox>
  <div style="margin: 15px 0;"></div>
  <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
  </el-checkbox-group> -->

  <!-- <br /><br /><br /><br /><br /> -->
  <el-form ref="form" :model="form" label-width="220px">
  <h3> Seleccione una Categoria para su organizacion y registre sus servicios:</h3>
  <br>
  <div class="block">
    <span class="demonstration">Categoria de la Organizacion</span>
    <hr>
    <br><br>
    <el-cascader
      placeholder="Categorias"
      :options="options"
      :props="{ multiple: true }"
      filterable
    ></el-cascader>
  </div>
  <br><br>
  <h2>Servicios</h2>

  <hr>
  
  <h3>Puede seguir adelante con la creacion de la cuenta y modificar los servicios mas tarde</h3>
<br>
  <hr>
  <h2>Servicio 1</h2>
  <br>

   <el-cascader
      placeholder="Categorias"
      :options="options"
      :props="{ multiple: true }"
      filterable
    ></el-cascader>
    <br><br>
    <h2>Seleccionar solo la Categoria Crearia un Servicio Generico de la Categoria Seleccionada. Solo se puede tener 1 por categoria.</h2>
    <br><br>
    <el-form-item
      label="Nombre"
      :rules="[{ required: true, message: 'name is required' }]">
      <el-input
        v-model="form.name"
        placeholder="ej: Justice International">
      </el-input>
    </el-form-item>

     <el-form-item label="Horario" required>
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
                    label="Direccion de la Cede "
                    :rules="[
                        { required: true, message: 'direccion is required' },
                    ]"
                >
                    <el-input v-model="form.name" placeholder=""></el-input>
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


      
  </el-form>
</template>
<script>

export default {
    data() {
      return {
        options: [{
              value: 'pruebas covid-19',
              label: 'Pruebas Covid-19'
            }, {
              value: 'vacunacion',
              label: 'Vacunacion'
            }, {
              value: 'todo sobre covid-19',
              label: 'Todo sobre Covid-19'
            }, {
              value: 'covid-19 ayudas',
              label: 'Covid-19 Ayudas'
            },
            {
              value: 'comida',
              label: 'Comida'
            },
            {
              value: 'salud',
              label: 'Salud'
            },
            {
              value: 'educación',
              label: 'Educación'
            },
            {
              value: 'transporte',
              label: 'Transporte'
            },{
              value: 'albergue y vivienda',
              label: 'Albergue y vivienda'
            },{
              value: 'necesidades de la vida diaria',
              label: 'Necesidades de la vida diaria'
            },{
              value: 'información y consejos generales',
              label: 'Información y consejos generales'
            },{
              value: 'internet y comunicaciones',
              label: 'Internet y comunicaciones'
            },{
              value: 'empleo',
              label: 'Empleo'
            },{
              value: 'emprendimiento',
              label: 'Emprendimiento'
            },{
              value: 'servicios públicos',
              label: 'Servicios públicos'
            },{
              value: 'religíon',
              label: 'Religíon'
            },{
              value: 'inmigracíon',
              label: 'Inmigracíon'
            },{
              value: 'legal',
              label: 'Legal'
            },{
              value: 'deportes, hobbies, clubes de entertenimiento',
              label: 'Deportes, Hobbies, Clubes de entertenimiento'
            },{
              value: 'musica, arte, cultura',
              label: 'Música, Arte, Cultura'
            },],
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
                openTime: "",
                closingTime: "",
                desc: "",
            },
          }
    }
}
</script>

<style>
.el-form-item__label{
text-align: start;
}
</style>
