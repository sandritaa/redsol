<template>
    <el-container>
        <el-header height="200px">
            <el-row justify="end">
                <el-button type="text">en </el-button>
                <el-button type="text">es</el-button>
            </el-row>

            <el-row justify="space-around" class="justify-center">
                <el-image
                    style="height: 150px"
                    :src="src"
                    fit="scale-down"
                ></el-image>

                <router-view>
                    <el-button class="h-5" type="text">Inicio</el-button>
                </router-view>

                <router-view>
                    <el-button class="h-5" type="text">Contribuye</el-button>
                </router-view>

                <router-view>
                    <el-button class="h-5" type="text">Registrate</el-button>
                </router-view>

                <router-view>
                    <el-button class="h-5" type="text">Login</el-button>
                </router-view>
            </el-row>
        </el-header>

        <el-main>
            <el-card>
                <router-view></router-view>
            </el-card>
        </el-main>

        <el-footer id="footer">
            <el-card class="bg-blue-500">
                <el-row :gutter="10" align="middle" justify="space-around">
                    <el-col :span="6">
                        <el-image
                            style="height: 150px"
                            :src="src"
                            fit="scale-down"
                        >
                        </el-image>
                        <!-- add ig, fb, twetter -->
                    </el-col>

                    <el-col :span="6">
                        <!-- contactos -->
                        <h5>Contáctanos</h5>

                        <h5 class="my-3">555555555</h5>
                        <h5>contact@gmail.com</h5>
                    </el-col>

                    <el-col :span="6">
                        <h5 class="mb-3">Registrate</h5>
                        <el-input
                            placeholder="ejemplo@correo.com"
                            v-model="input"
                        >
                        </el-input>

                        <el-button class="mt-3">
                            Siguiente
                        </el-button>
                    </el-col>
                </el-row>
            </el-card>

            <el-row align="middle" justify="space-around">
                <p>
                    copyright
                </p>
            </el-row>
        </el-footer>
    </el-container>
</template>

<script>
import { ref } from "vue-demi";
export default {
    setup() {
        const src = require("../assets/logo.svg");

        return {
            src,
            input: ref(""),
        };
    },
};
</script>

<style>
#footer {
    padding: 1rem;
}
</style>
