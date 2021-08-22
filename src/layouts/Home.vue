<template>
    <el-container id="page">
        <!-- HEADER -->
        <el-header>
            <p>header</p>
            <router-link :to="{name:'profile'}"><el-button>Profile test</el-button></router-link>
        </el-header>
        <!-- MAIN -->
        <el-main>
            <el-scroll>
                <router-view></router-view>
            </el-scroll>
        </el-main>
        <!-- FOOTER  -->
        <el-footer>
            Footer
        </el-footer>
    </el-container>
</template>

<script>

export default {
}
</script>

<style>
#page{
    height: 100vh;
}
</style>