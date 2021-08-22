<template>

    <el-container id="page">
        <el-aside width="200px" v-if="sideMenu">

            <el-card class="h-full">
                <h3 class="text-black">Menu</h3>
                <h3 v-for="test in [0,1,2,3,4,5,6,7,8,9]" :key="test" class="my-5">test {{test}}</h3>
            </el-card>
            
        </el-aside>

        <el-container>
            <el-header class="bg-blue-500">
                <el-button type="primary" @click="hideMenu()">
                    |||
                </el-button>
                profile header
            </el-header>
            <el-main>
                <el-scroll>
                    <router-view></router-view>
                </el-scroll>
            </el-main>

            <el-footer class="bg-blue-500">
                footerrrr
            </el-footer>
            
        </el-container>
    </el-container>
</template>

<script>

import{ref} from 'vue'

export default {
    setup(){
        const sideMenu = ref(true)

        const hideMenu = ()=>{
            sideMenu.value = !sideMenu.value
        }


        return {
            sideMenu,
            hideMenu,
        }
    }


    

}
</script>

<style soped>
    #page{
        height: 100vh;
    }
</style>