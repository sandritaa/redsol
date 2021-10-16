<template>
<!-- <el-container id="page"> -->
        <el-carousel :interval="3000" type="card" height="500px">
          <el-carousel-item v-for="item in 3" :key="item">
            <h3 class="medium">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quidem autem, minus laudantium molestiae non. Quae quasi eveniet labore, voluptates, quas harum minus hic, id assumenda blanditiis molestias nemo. Voluptatem perferendis provident nostrum ratione. Repellendus laboriosam incidunt dolor libero perferendis, tenetur dolorum praesentium possimus magni, reiciendis culpa in iure porro, explicabo quibusdam aperiam provident. Dolorum culpa quae dicta quia recusandae laudantium modi voluptas animi aperiam fugiat tempore unde sed tempora eaque et, iste maiores harum fugit cupiditate eligendi provident. Cumque ad praesentium possimus quae explicabo sunt non natus ratione quos, hic officia amet molestiae temporibus maxime sint unde numquam nostrum.
       rovident nostrum ratione. Lorem ipsum dolor sit. Lorem ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <div class="demo-image">
            <div class="block" v-for="fit in fits" :key="fit"> 
                 <el-image
                    style="width: 600px; height: 500px"
                    :src="url"
                    :fit="fit">
                </el-image>
            </div>
        </div> 



        <div class="one-image">
         This text is the content of the box. 
        </div> 

        <div class="two-image">
         This text is the content of the box. 
        </div> 

        <div class="three-image">
         This text is the content of the box. 
        </div> 
        <!-- <div class="one-image">
            <div class="block" v-for="fit in fits" :key="fit"> 
                 <el-image
                    style="width: 200px; height: 200px"
                    :src="url"
                    :fit="fit">
                </el-image>
            </div>
        </div> -->
<!-- 
       <div class="two-image">
            <div class="block" v-for="fit in fits" :key="fit"> 
                <el-image
                    style="width: 200px; height: 200px"
                    :src="url"
                    :fit="fit">
                </el-image>
            </div>
        </div>  -->

         <!-- <div class="three-image">
            <div class="block" v-for="fit in fits" :key="fit"> 
                <el-image
                    style="width: 200px; height: 200px"
                    :src="url"
                    :fit="fit">
                </el-image>
            </div>
        </div>  -->

    <!-- </el-container> -->
    

  <!-- <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque laboriosam ipsum illum cumque provident eaque cupiditate quos voluptas atque quia, sunt ratione asperiores deleniti ea ducimus libero, molestias aut sed.</h1> -->
</template>

<script>
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

<style>
    .el-carousel__item h3 {
    margin: 0;
    margin-top: 10px;
    background-image: url("1.jpg");
    background-size:cover;
    overflow: hidden;
  } 

  .el-carousel__item:nth-child(2n) {
    background-image: url("1.jpg");
    background-size:cover;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-image: url("1.jpg");
    background-size:cover;
  }

    p{
      width: 480px;
      height: 300px;
      margin-left: 60px; 
      margin-top:150px;
      margin-bottom:320px;
  }

.demo-image{ 
    
      /* margin-left: 1000px;  */
      position: sticky;
      /* left: -50px; */
      margin-top: -620px;
      margin-left: 640px;
  }


  .one-image{
  width: 200px;
  border: 5px solid green;
  padding: 50px;
  margin-left: 300px;
  margin-top: 170px;  
  margin-bottom: 30px; 
}

 .two-image{
  width: 200px;
  border: 5px solid green;
  padding: 50px;
  margin-left: 600px;
  margin-top: -236px; 
  margin-bottom: 30px; 
}

 .three-image{
  width: 200px;
  border: 5px solid green;
  padding: 50px;
  margin-left: 890px;
  margin-top: -236px;  
  margin-bottom: 30px;
}
  /* .one-image{
      position: sticky;
      margin-left: 300px;
      margin-top: 170px;  
      margin-bottom: 30px; 
    
   }

   .two-image{
      position: sticky; */
      /* background-color:cornflowerblue; */
      /* margin-left: 600px;
      margin-top: -208px; 
       margin-bottom: 30px; 
   }
   .three-image{
      position: sticky; */
      /* color: cornflowerblue; */
      /* margin-left: 890px;
      margin-top: -206px;  
     margin-bottom: 30px;
   }  */
</style>