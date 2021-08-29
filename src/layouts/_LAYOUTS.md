# Layouts
Layouts are used to define what shape the page is made of. For example if the page has a header bar, footer, side menus, and one or more main sections. Here you can style your header bar or footer or side menus. Thogh, you should not define the content of the main page, that one should be defined in the views folder. Indeed you should put a router-view element:
```
<router-view/>
```
inside the main element of this page.
Use the following elements from ElementUI to define the shape of your page

### Container
```
<el-container> [content...] </el-container>
```
This container is used to wrap the whole page defined in the path by vue router. Usually when you create a new route,the outer layer is a vue file located in the Layouts folder, which (probably but not necessary) has a children that contain the content of a page. Alwyas use the container to wrap the whole page, but feel free to use nested countaners too! they work well when you want elements to overlay. Experiment with it! :)
Example:
```
<el-container> 
    <el-header> ... </el-header>
    <el-container>
        <el-aside>
            ...
        </el-aside>
        
        more elements here...

        <el-footer>
            Footer :) ...
        </el-footer>
    </el-container>

</el-container>

```
IMPORTANT:
    When creating a new file in this folder I higly suggest you to give an id of page (```id="page'```) to the outer ```el-container element``` element and in the ```<style>``` section of your vue file give the following CSS code:
```
#page{
    hight: 100vh;
}
```
    The reason is simple. The outer layout is of fixed hight so we can make scrollable the main elements or the side menu too. Doing soo will make footer and header being static in position. 
### Header
```
<el-header> [content...] </el-header>
```
This is going to be the header. The subject element should be styled in the layout file. so define here what shape, color, buttons, imgs your header has! :)


### Footer
```
<el-footer> [content...] </el-footer>
```
The footer is pretty much the same as the header. Feel free to style it in this folder since most of the time header and footer are static objects. (Don't forget to use Tailwind CSS too)

### Side Menus
Side menus can be on the left or on the right. You can make the disapear or appear. And you can also import the content from the component folder or created inside this folder along with the the page layout file.
```
<el-aside>[...menu content]</el-aside>
```
Feel free to style the menu however you want! :) Just make it beautiful.

### Main content of a page
The main content is going to be the content of your page. Pages are usually stored in the view folder, therefore you have to use the router to inject the page from the view folder into the layout.
90% of the the layouts will use exactly this code for the main element of the page:
```
<el-main>
    <el-scroll>
        <router-view></router-view>
    </el-scroll>
</el-main>
```
So, feel free to copy and paste. ;)


