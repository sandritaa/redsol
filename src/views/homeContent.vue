<template>
<!-- <el-container id="page"> -->
        <el-carousel :interval="3000" type="card" height="500px">
          <el-carousel-item v-for="item in 3" :key="item">
            <h3 class="medium">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>

        <div class= "about">
           
       <p>RedSol es una asociación dirigida por jóvenes voluntarios con liderazgo que busca impactar vidas transmitiendo y promoviendo los valores a través de diferentes programas continuos y eventos masivos.  
        <br><br>   
       <span style="color: rgb(134, 151, 247)"> Visión: </span> RedSol busca ser el referente internacional de voluntariado para jóvenes; ser un eje de apoyo integral para instituciones que educan y cuidan a la niñez.
             <br><br> 
        <span style="color: rgb(134, 151, 247)">  Misión: </span>Impactar la vida de niños y jóvenes para contribuir a formar un mundo más esperanzador, alegre y solidario.
              <br><br> 
       <span style="color: rgb(134, 151, 247)">   Valores: </span>Alegría, Solidaridad, Esperanza, Liderazgo, Gratitud</p> 
       </div>

        <div class="demo-image">
            <div class="block" v-for="fit in fits" :key="fit"> 
                 <!-- <el-image
                  style="width: 600px; height: 500px" 
                    :src="url"
                    :fit="fit">
                </el-image> -->
            </div>
        </div> 



        <div class="one-image">
            <br>
         <span style="color: rgb(134, 151, 247)">+140 Centros de acogida</span>
        
        </div> 

        <div class="two-image">
            <br>
        <span style="color: rgb(134, 151, 247)">+2450 Voluntarios</span>
         
        </div> 

        <div class="three-image">
            <br>
        <span style="color: rgb(134, 151, 247)"> +7093 Menores atendidos</span>
        
        </div> 

         <div class="four-image">
             <br>
         <span style="color: rgb(134, 151, 247)">+200 Empresas</span>
    
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
        url: "/5.jpg"
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
    /* background-image: url("2.jpg"); */
    background-size:cover;
    overflow: hidden;
  } 

  .el-carousel__item:nth-child(2n) {
    background-image: url("1.jpg");
    background-size:cover;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-image: url("3.jpg");
    background-size:cover;
  }

  .el-carousel__item:nth-child(3n) {
    background-image: url("2.jpg");
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
       position: sticky; 
       width: 600px; 
       height: 500px;
      /* background-color:cornflowerblue; */
       background-image: url("5.jpg");
       background-size:cover;
       margin-left: 700px;
       margin-top: -608px; 
       margin-bottom: 30px; 
  }
/* 
.demo-image{  */
    
      /* margin-left: 1000px;  */
      /* position: sticky; */
      /* left: -50px; */
      /* background-image: url("5.jpg");
      background-size:cover; */
      /* margin-top: -620px;
      margin-left: 640px;
  } */


  .one-image{
  width: 200px;
  height: 187px;
  background-color:rgb(255, 255, 255);
  background-image: url("sc1.jpg");
   background-repeat: no-repeat;
  background-position: center  top;
  border: 5px solid rgb(238, 198, 113);
  padding: 50px;
  margin-left: 150px;
  margin-top: 170px;  
  margin-bottom: 30px; 
}

 .two-image{
  width: 200px;
  height: 187px;
  border: 5px solid rgb(238, 198, 113);
  background-color:rgb(255, 255, 255);
  background-image: url("sc2.jpg");
   background-repeat: no-repeat;
     background-position:center top ;
  padding: 50px;
  margin-left: 450px;
  margin-top: -212px; 
  margin-bottom: 30px; 
}

 .three-image{
  width: 200px;
  height: 187px;
  background-color:rgb(255, 255, 255);
  background-image: url("sc3.jpg");
   background-repeat: no-repeat;
     background-position: center  top;
  border: 5px solid rgb(238, 198, 113);
  padding: 50px;
  margin-left: 740px;
  margin-top: -212px;  
  margin-bottom: 30px;
}

 .four-image{
  width: 200px;
  height: 187px;
  background-color:rgb(255, 255, 255);
  background-image: url("sc4.jpg");
  background-repeat: no-repeat;
  background-position: center  top;
  border: 5px solid rgb(238, 198, 113);
  padding: 50px;
  margin-left: 1025px;
  margin-top: -212px;  
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