<template>
  <!-- <h1>Sandra is really stubborn</h1> -->
  
  <div v-if="selected==1"><reg1/></div>
  <div v-if="selected==2"><reg2/></div>
  <div v-if="selected==3"><reg2/></div>

</template>

<script>

import reg1 from "../widgets/register/registerOrgContent1.vue"
import reg2 from "../widgets/register/registerOrgContent2.vue"
import reg3 from "../widgets/register/registerOrgContent3.vue"


export default {
    components: { reg1, reg2, reg3 },
    data() {
        return{
             selected: 1
        }
    }

}
</script>

<style>

</style>