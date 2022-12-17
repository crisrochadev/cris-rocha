<template>
<section class="site w-screen h-screen overflow-hidden">
   <header class="h-0 w-0 text-0 invisible">
    <h1>Desenvolvedora front-end</h1>
   </header>
   <div class="w-full h-8 shadow-sm flex justify-between items-center px-2 backdrop-blur-sm  absolute z-30">
        <nav class="w-full h-full z-30 flex justify-between items-center px-2">
            <button @click="toggleMenu = !toggleMenu" class="block md:hidden"><i class="far fa-bars text-teal-600"></i></button>
            <ul :class="[
                `md:w-full
                md:h-full
                md:flex
                md:justify-start 
                md:items-center
                md:static
                md:visible
                md:backdrop-blur-none
                md:shadow-none
                md:bg-transparent
                bg-cyan-10/[0.20]
                backdrop-blur-md
                shadow-md
                w-screen
                absolute
                left-0
                transition-opacity
                ease-linear
                top-[2rem]`,
                toggleMenu ? 'visible opacity-100':'invisible opacity-0'
               ]">
                <li
                class="
                    w-full
                    relative
                    md:w-auto
                " v-for="item in menu" :key="item.id">
                    <a class="ease-linear inline-block transition-colors text-xs w-full py-2 h-full uppercase hover:bg-teal-500/[0.30] text-teal-700 px-2" :href="getCurrentPath(item.path)">{{item.name}}</a>
                </li>
            </ul>
            <ul class="w-full h-full flex justify-end items-center">
                <li v-for="item in socialMedia" :key="item.id">
                    <a target="_blank" class="ease-linear transition-colors w-full h-full capitalize hover:bg-cyan-500/[0.30] text-cyan-600 px-2" :href="item.path">
                        <i :class="item.icon"></i>
                    </a>
                </li>
            </ul>
        </nav>
   </div>
   <div class="w-full h-full overflow-y-auto overflow-x-hidden scroll-smooth scrollbar-thin z-10 relative  scrollbar-thumb-cyan-200 scrollbar-track-teal-100">
    <router-view></router-view>
   </div>
</section>
</template>
<script setup>
import { useSite } from '@/store';
//eslint-disable-next-line
import {  ref } from 'vue';
const store = useSite();
const menu = ref( store.menu);
const toggleMenu = ref(isMobile() ? false : true)
console.log(menu.value)
// //eslint-disable-next-line
const socialMedia= ref( store.socialMedia)
function isMobile() {
   if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
     return true
   } else {
     return false
   }
 }
// const percentScroll = ref(0)
// function addAnimationOnScroll(){
//     let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//     let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//     percentScroll.value = Math.round((winScroll / height) * 100);
                    
// }

// window.addEventListener("scroll",addAnimationOnScroll)

// function pushPageByPath(p){
//     console.log(p)
// }  

function getCurrentPath(uri){
    let http = "https"
    if(window.location.hostname.indexOf('localhost') !== -1) http = "http"
    return  http + "://" + window.location.host  + uri
}
</script>
<style scoped>
/* .site{
    background-image: url('@/assets/images/banner_light.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
}
.site::before{
    content:'';
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    z-index: 2;
    background-color: rgba(0,0,0,.50);
} */
</style>                                                                                                       