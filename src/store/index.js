import { createStore } from 'vuex'

export default createStore({
    //source of the state that drives the application
    state: {
        user:null,
        authenticated: false,
    },
    //modifies the data in the state
    getters:{

    },

    // functions 
    mutations: {
    },

    // asynic functions that call mutations
    actions: {
    },

    //Child stores
    modules: {}
})
