# Table of content
## 1. Redsol Web App
### 1.1 Project 
### 1.2 Compiles and hot-reloads for development 
### 1.3 Compiles and minifies for production
## 2. Configuaration
### 2.1 vue create redsol
### 2.2 vue add element-plus
### 2.3 yarn install vue-apollo. But not vue add apollo!
### 3. Conclusion

# Redsol Web App
Developed by Taras Zherebetskyy and Sandra Novi

Welcome to redsol web app

After cloning the repository follow the project setup bellow


### Project setup
```
yarn install
```
or
```
npm install
```

Since the original setup was created with yarn, I highly raccomend to use yarn, but your choise! :|
After the project setup follow the compilation bellow here :)

### Compiles and hot-reloads for development
```
yarn serve
```
or 
```
npm run serve
```
The code above will run the application locally and remotelly on your network so you can access it with your phone too if you want. (Which I suggest :D)
### Compiles and minifies for production
```
yarn build
```
Don't worry about this command. I'll manage the building produciton :(

# Configuration
This is an important section. D:
The original setup was created with different tools.Following the listed steps:
## vue create redsol
The fist command to be run was:
```
vue create redsol
```
This step was the creation for redsol with the vue CLI 4.0.0
The Vue CLI asked for some setup option. Following in order the option choosen:
```
Manually select fetures

Fetures selected:
    Added:
        + vuex
        + router
    Removed:
        - Eslint

Do you want to use web history for vue router? Y
```
## vue add element-plus
After the regular project set up ElementUI framework was added to the application with the following command
```
vue add element-plus
```
ElementUI add components to your application (such as buttons, cards, and a lot more)

## yarn install vue-apollo. But not vue add apollo!
!!!ATTENTION!!!
Vue CLI 4.0.0 does not support Vue Apollo for vue 3. Therefore Apollo had to be manually added with yarn (or npm in your case)
```
yarn add graphql graphql-tag @apollo/client
```
and add the following code into ./src/index.js
```
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'http://localhost:3020/graphql',
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})
```
Then it's time to add apollo composable
```
yarn add @vue/apollo-composable
```
and change the createapp function in index.js
```
//from this
createapp().use(router).use(vuex).mount('#app')
//to this
const app = createApp({
  setup () {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App),
})

app..use(router).use(vuex).mount('#app')
```


## npm install tailwindCSS
TailwindCSS was installed with the following command
```
npm install tailwindcss@npm:@tailwindcss/postcss7-compat @tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
```
and the next to create a tailwind configuration file:
```
npx tailwindcss init -p
```
Next, a index.css file was created in plugins folder and imported to index.js.
```
/* ./plugins/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```
# Conclusion
This read me is not complete yet.
There are missing part but I plan to collect all the information and post them here on this readme.
