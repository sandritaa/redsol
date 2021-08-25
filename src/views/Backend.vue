<template>
    <h2>This a view file. Also known as full page (not a full component)</h2>

    <div class="text-center flow-root"> 
        <el-card v-if="loading">
            <h3>Loading data ...</h3>
        </el-card>

        <div v-else-if="result && result.users" class="container">
            <el-card v-for="user in result.users" :key="user.id" class="my-2" shadow="hover">
                <p>{{user.firstname}} --> {{user.age}} --> {{user.id}}</p>
            </el-card>
        </div>

        <el-card v-else-if="error">
            <h3>{{error.message}}</h3>
        </el-card>
    </div>
</template>

<script>

import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'

export default {
    setup(){
        const { result, loading, error } = useQuery(gql`
            query getUsers{
                users (sort: "age", dir: "desc"){
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