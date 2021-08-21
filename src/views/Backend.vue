<template>
    <h2>Test for api</h2>

    <el-card class="text-center">
        <el-card-section v-if="loading">
            <h3>Loading data ...</h3>
        </el-card-section>
        <el-card-section v-else-if="result && result.users">
            <div v-for="user in result.users" :key="user.id">
                <p>{{user.firstname}} --> {{user.age}} --> {{user.id}}</p>
            </div>
        </el-card-section>

        <el-card-section v-else-if="error">
            <h3>{{error.message}}</h3>
        </el-card-section>
    </el-card>
</template>

<script>

import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'

export default {
    setup(){
        const { result, loading, error } = useQuery(gql`
            query getUsers{
                users{
                    id
                    firstname
                    age
                }
            }
        `)

        console.log(error)

        return{
            result, loading, error,
        }
    }
}
</script>

<style>

</style>