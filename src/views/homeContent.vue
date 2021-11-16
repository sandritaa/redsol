<template>
    <!-- <el-container id="page"> -->
    <el-carousel :interval="3000" type="card" height="500px">
        <el-carousel-item v-for="i in [0, 1, 2]" :key="i">
            <!-- <img :src="item" alt="Not retrived img" /> -->
            <img :src="items[i]" />
        </el-carousel-item>
    </el-carousel>

    <div class="flex flex-row justify-around m-28">
        <p class="px-28 text-xl">
            RedSol es una asociación dirigida por jóvenes voluntarios con
            liderazgo que busca impactar vidas transmitiendo y promoviendo los
            valores a través de diferentes programas continuos y eventos
            masivos.
            <br /> <br />
            <span style="color: rgb(134, 151, 247)"> Visión: </span> RedSol
             Es la ética de la organizacion para que todos los usuarios tengan conocimiento de ello y puedan vivir con dignidad. <br /> <br />

            
            <span style="color: rgb(134, 151, 247)"> Misión: </span>
            Contribuyendo a la nutrición, salud y bienestar de todas las personas orientadolos a donde acudir ante alguna necesidad con productos de máxima calidad.
            Dándoles a todos los necesitados la formacion integral para que tengan información adecuada de los distintos servicios, como son la responsabilidad, salud, desarrollo de las personas sin ningún tipo de discriminación y el derecho a la igualdad afectiva entre todos para una mejor calidad de vida.

             <br /> <br />
            <span style="color: rgb(134, 151, 247)"> Valores: </span>Honradez,
            Solidaridad, Esperanza, Liderazgo, Gratitud
        </p>
        <el-image style="max-width: 400px" :src="items[4]" fit="scale-down">
        </el-image>
    </div>

    <div class="">
        <!--  ADD TAILWIND HERE -->
        <div class="one-image">
            <br />
            <span style="color: rgb(134, 151, 247)"
                >+140 Centros de acogida</span
            >
        </div>

        <div class="two-image">
            <br />
            <span style="color: rgb(134, 151, 247)">+2450 Voluntarios</span>
        </div>

        <div class="three-image">
            <br />
            <span style="color: rgb(134, 151, 247)">
                +7093 Menores atendidos</span
            >
        </div>

        <div class="four-image">
            <br />
            <span style="color: rgb(134, 151, 247)">+200 Empresas</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                require("../assets/HomePage/1.jpg"),
                require("../assets/HomePage/2.jpg"),
                require("../assets/HomePage/3.jpg"),
                require("../assets/HomePage/4.jpg"),
                require("../assets/HomePage/5.jpg"),
            ],
        };
    },
};
</script>

<style>
/* Use Tailwind CSS */

.one-image {
    width: 200px;
    height: 187px;
    background-color: rgb(255, 255, 255);
    /* background-image: url("sc1.jpg"); */
    background-repeat: no-repeat;
    background-position: center top;
    border: 5px solid rgb(238, 198, 113);
    padding: 50px;
    margin-left: 150px;
    margin-top: 170px;
    margin-bottom: 30px;
}

.two-image {
    width: 200px;
    height: 187px;
    border: 5px solid rgb(238, 198, 113);
    background-color: rgb(255, 255, 255);
    /* background-image: url("sc2.jpg"); */
    background-repeat: no-repeat;
    background-position: center top;
    padding: 50px;
    margin-left: 450px;
    margin-top: -212px;
    margin-bottom: 30px;
}

.three-image {
    width: 200px;
    height: 187px;
    background-color: rgb(255, 255, 255);
    /* background-image: url("sc3.jpg"); */
    background-repeat: no-repeat;
    background-position: center top;
    border: 5px solid rgb(238, 198, 113);
    padding: 50px;
    margin-left: 740px;
    margin-top: -212px;
    margin-bottom: 30px;
}

.four-image {
    width: 200px;
    height: 187px;
    background-color: rgb(255, 255, 255);
    /* background-image: url("sc4.jpg"); */
    background-repeat: no-repeat;
    background-position: center top;
    border: 5px solid rgb(238, 198, 113);
    padding: 50px;
    margin-left: 1025px;
    margin-top: -212px;
    margin-bottom: 30px;
}

/* .el-carousel-img{
    background-image: bg-gradient-to-b from-blue-300 w-full h-full
} */

</style>
