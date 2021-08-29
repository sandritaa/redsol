<template>
    <h2>This a view file. Also known as full page (not a full component)</h2>

    <div class="text-center flow-root">
        <el-card v-if="loading">
            <h3>Loading data ...</h3>
        </el-card>

        <div v-else-if="user" class="container">
            <el-card>
                <p>
                    {{ user.username }} --> {{ user.email }} --> {{ user.id }}
                </p>
            </el-card>
        </div>

        <el-card v-else-if="error">
            <h3>{{ error.message }}</h3>
        </el-card>
    </div>
</template>

<script>
/**
 *  importing GQL queries/ mutations from graphQL folder
 */
import { getUser } from "../graphQL/user.js";

export default {
    setup() {
        /**
         *  get user from the database
         */
        const { user, loading, error } = getUser();

        return {
            user,
            loading,
            error,
        };
    },
};
</script>

<style></style>
