<template>
  <br /><br />

  <br /><br /><br />

  <el-form ref="form" :model="form" label-width="220px">
    <h2>Solicitud Enviada</h2>
    <h2>Su solicitud de crear una cuenta de organizacion ha sido enviada.
        Los administradores de RedSolidaria revisaran su solicitud y se le enviara un correo con el resultado lo mas pronto posible</h2>
    <h2>Muchas Gracias!</h2>
    <br><br>
    <button @click="next">Volver</button>

  </el-form>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
