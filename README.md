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

Will add the documentation of what command and which files had to be modified to adapt vue apollo 4 with vue 3.
In the mean time hold on! :D

## npm install tailwindCSS
TailwindCSS was installed with the following command
```
npm install tailwindCSS
```

For some of you there migth be compatibilty problems. If that is the case then I'll post in the near future how to overcome all of them and succcessfully installing TailwindCSS :P

# Conclusion
This read me is not complete yet.
There are missing part but I plan to collect all the information and post them here on this readme.