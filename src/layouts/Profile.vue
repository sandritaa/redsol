<template>

    <el-container id="page">
        
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">RedSol</el-menu-item>
            <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">Contribuye</a></el-menu-item>
            <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">Registrate</a></el-menu-item>
            <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">Imprimir Tarjetas</a></el-menu-item>
            <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">Login</a></el-menu-item>
        </el-menu>

        <el-carousel :interval="4000" type="card" height="500px">
          <el-carousel-item v-for="item in 3" :key="item">
            <h3 class="medium">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quidem autem, minus laudantium molestiae non. Quae quasi eveniet labore, voluptates, quas harum minus hic, id assumenda blanditiis molestias nemo. Voluptatem perferendis provident nostrum ratione. Repellendus laboriosam incidunt dolor libero perferendis, tenetur dolorum praesentium possimus magni, reiciendis culpa in iure porro, explicabo quibusdam aperiam provident. Dolorum culpa quae dicta quia recusandae laudantium modi voluptas animi aperiam fugiat tempore unde sed tempora eaque et, iste maiores harum fugit cupiditate eligendi provident. Cumque ad praesentium possimus quae explicabo sunt non natus ratione quos, hic officia amet molestiae temporibus maxime sint unde numquam nostrum.
       rovident nostrum ratione. Repellendus laboriosam incidunt dolor libero perferendis, tenetur dolorum praesentium possimus magni, reiciendis culpa in iure porro, explicabo quibusdam aperiam provident. Dolorum culpa quae dicta quia recusandae laudantium modi voluptas animi aperiam fugiat tempore unde sed tempora eaque et, iste maiores harum fugit cupiditate eligendi provident. Cumque ad praesentium possimus quae explicabo sunt non natus ratione quos, hic officia amet molestiae temporibus maxime sint unde numquam nostrum.
        </p>
       
        <div class="demo-image">
            <div class="block" v-for="fit in fits" :key="fit">
                <!-- <span class="demonstration">{{ fit }}</span> -->
                <el-image
                    style="width: 600px; height: 600px"
                    :src="url"
                    :fit="fit">
                </el-image>
            </div>
        </div>

        <div class="one-image">
            <div class="block" v-for="fit in fits" :key="fit">
            <!-- <span class="demonstration">{{ fit }}</span> -->
                <el-image
                    style="width: 200px; height: 200px"
                    :src="url"
                    :fit="fit">
                </el-image>
            </div>
        </div>

        <div class="two-image">
            <div class="block" v-for="fit in fits" :key="fit">
            <!-- <span class="demonstration">{{ fit }}</span> -->
                <el-image
                    style="width: 200px; height: 200px"
                    :src="url"
                    :fit="fit">
                </el-image>
            </div>
        </div>

        <div class="three-image">
            <div class="block" v-for="fit in fits" :key="fit">
            <!-- <span class="demonstration">{{ fit }}</span> -->
                <el-image
                    style="width: 200px; height: 200px"
                    :src="url"
                    :fit="fit">
                </el-image>
            </div>
        </div>

        <el-footer class="bg-blue-500">
            RedSol        
        </el-footer>
            
    </el-container>
    
</template>

<script>

import{ref} from 'vue'

 export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        fits: ['contain'],
        url: 'https://htmlcolorcodes.com/colors/light-gray/'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }

</script>
 

<style soped>
    /* #page{
        height: 100vh;
    } */

   .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    margin-top: 10px;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  p{
      width: 640px;
      height: 300px;
      margin-left: 60px; 
      margin-top:150px;
      margin-bottom:320px;
  }

  .demo-image{
    
      /* margin-left: 1000px;  */
      position: relative;
      left: 800px;
      top: -700px;
  }

  .one-image{
      position: relative;
      left: 300px;
      top: -587px; 
  }

   .two-image{
      position: relative;
      left: 650px;
      top: -793px; 
  }
   .three-image{
      position: relative;
      left: 990px;
      top: -1000px; 
  }

  .el-footer{

    height: 230px;  
    margin-top: -900px;
  }
   </style>