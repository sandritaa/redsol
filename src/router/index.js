import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        /**     NAMES AND PATHS
         *  - Always name your paths!
         */
        path: "/",
        name: "Home",
        /**     COMPONENTS VS COMPONENT
         *  - use COMPONENTS whene one of the page elements has to be injected automatically
         *      (redirected || not redirected to another path, but redirected on the same path --> default),
         *      or when you have multiple components
         *
         *  - use COMPONENT when you are sure there is not going to be more than one loaded component,
         *      and there is no redirection to that component
         *
         *  N.B.: if you are not sure which one to use, then always go for 'component' and NOT 'components'
         *      in order to use components you really need to know what you are using it for.
         *
         *  The case about is probably going to be the only case we need to use,
         *     so don't let yourself confuse you by it. Use: 'component: ()=>import([path...]) '
         */
        components: {
            // default: ()=>import(/* webpackChunkName: "home" */ '../layouts/Home.vue')
            default: () =>
                import(
                    /* webpackChunkName: "home" */ "../layouts/HomePage.vue"

                ),
        },
        /**     CHILDREN PATHS
         *  - Empty paths will be automaticall loaded
         *  - Remember that children is a array of objects
         */
        children: [
            /**
             *  Atomatically inject the childcomponent if does not have a path
             */
            {
                path: "",
                name: "HomeContent",
                component: () =>
                    import(
                        /* webpackChunkName: "Backend" */ "../views/homeContent.vue"

                    ),
                    // redirect: "/home",
            },
        ],
    },

    {
        path: "/",
        name: "Register",
        components: {
            default: () =>
                import(
                     "../layouts/Register.vue"

                ),
        },
        children: [
            {
                path: "",
                name: "RegisterContent",
                component: () =>
                    import(
                        "../views/registerContent.vue"

                    ),
            },
        ],
    },

    /**
     *  Profile layout used for both organization and usuario
     */
    // {
    //     path: "/profile",
    //     name: "profile",
    //     component: () =>
            // import(/* webpackChunkName: "profile" */ "../layouts/Profile.vue"),
        // redirect: "/profile",
        // children: [
        //     {
        //         path: "",
        //         name: "contentTest",
        //         component: () =>
        //             import(
            //             /* webpackChunkName: "content" */ "../views/profileContent.vue"
            //         ),
            // },
        // ],
    // },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
