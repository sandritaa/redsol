<template>
    <el-container id="page">
        <!-- HEADER -->
        <el-header>
            <p>header</p>
            <router-link :to="{ name: 'profile' }">
                <el-button>Profile test</el-button>
            </router-link>
        </el-header>
        <!-- MAIN -->
        <el-main>
            <el-scrollbar>
                <router-view></router-view>
            </el-scrollbar>
        </el-main>
        <!-- FOOTER  -->
        <el-footer>
            Footer
        </el-footer>
    </el-container>
</template>

<script>
export default {
    setup() {},
};
</script>

<style>
#page {
    height: 100vh;
}
</style>
