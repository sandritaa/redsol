import { createApp, provide, h } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import installElementPlus from "./plugins/element";
import "./plugins/index.css";

/**
 *  ADDING VUE APOLLO CLIENT
 */
import {
    ApolloClient,
    createHttpLink,
    InMemoryCache,
} from "@apollo/client/core";
import { DefaultApolloClient } from "@vue/apollo-composable";

// HTTP connection to the API
const httpLink = createHttpLink({
    // You should use an absolute URL here
    // uri: "http://redsol.eastus.cloudapp.azure.com/backend",
    uri: "https://fakeql.com/graphql/d319ffd384ebbd79653c8fb22c726c19",
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
});

const app = createApp({
    setup() {
        provide(DefaultApolloClient, apolloClient);
    },

    render: () => h(App),
});

installElementPlus(app);
app.use(store).use(router);

app.mount("#app");
