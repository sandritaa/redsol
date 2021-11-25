
 <template>
    <h1>BENE TEST</h1>
  <br /><br />

                 <router-view>
                        <router-link :to="{ name: 'BeneficiaryContent' }">
                        <el-button class="h-5" type="text">Rdddegistrate</el-button>
                        </router-link>
                </router-view>
 </template>
 
 <script>
 export default {
 
 }
 </script>
 
 <style>
 
 </style>