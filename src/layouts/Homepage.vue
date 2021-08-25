<template>
    <el-scrollbar max-height="100vh">
        <el-container>
            <!-- HEADER -->
            <el-header class="absolute inset-x-0 top-0 bg-blue-500">
                <p>header</p>
            </el-header>

            <!-- MAIN -->
            <el-main id="main">
                <router-view></router-view>
            </el-main>
            
            <!-- FOOTER  -->
            <el-footer>
                Footer
            </el-footer>
        
        </el-container>
    </el-scrollbar>
</template>

<script>

export default {
}
</script>

<style scoped>
#main{
    margin-top: 60px;
}
</style>