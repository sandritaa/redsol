import { createApp, provide, h } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'

/**
 *  ADDING VUE APOLLO CLIENT
 */
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'

// HTTP connection to the API
const httpLink = createHttpLink({
    // You should use an absolute URL here
    uri: 'https://fakeql.com/graphql/7ca2730185a9cb33697083da57f41467',
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
})


const app = createApp({
    setup () {
        provide(DefaultApolloClient, apolloClient)
    },

    render: () => h(App),
})

installElementPlus(app)
app.use(store).use(router)

app.mount('#app')