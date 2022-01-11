# Views
In this folder the main pages of a layout are stored. Usually these are called and injected by the router and they are all saved in children arrey of the vue router.
If you want to create a main page to display in a layout, then do it here.
After you created your page go to the router/index.js and add the following code with the correct filenames and paths inside the ```const router=[ ...paths]``` array:
```
{
    path:'/yourPagePath',
    name:'yourPageName',
    component: ()=>import('../layouts/yourVueLayout.vue'),
    children:[
        {
            //default injected component
            path:'',
            name:'defaulView',
            component:()=>import('../views/yourPageView.vue')
        },
        {
            //non default injected component
            path:'secondaryPath', //this path will be added to the parent path so --> redsol.app/yourPagePath/secondaryPath
            name:'defaulView',
            component:()=>import('../views/yourPageView.vue')
        },
    ]
},
```