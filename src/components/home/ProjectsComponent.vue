<template>
    <div id="projetos" class="bg-teal-50 md:h-screen h-auto pb-12 md:pb-0 md:pt-0 w-screen flex-wrap pt-14 justify-center items-center flex px-[10%]">
        <header class="w-full">
            <h1 class="uppercase text-teal-700 font-bold text-3xl border-b py-2 border-teal-100 text-center">
                {{data.title}}
            </h1>
            <p class="text-center font-thin border-b py-2 border-cyan-100">{{data.description}}</p>
        </header>
        <alert-message-component type="info" message="Clique na imagem para ver o projeto!"/>
        <section class="flex flex-wrap justify-center items-center gap-4 w-full md:mt-0 mt-12" >
            <article v-for="project in data.projects" :key="project.id" class="border-2 border-teal-100 hover:opacity-100 btn opacity-80shadow-md rounded cursor-pointer" @click="getPageProject(project.link)">
                <header class="bg-teal-100 px-1 ">
                    <h1 class="text-xs uppercase font-medium text-teal-700">{{project.title}}</h1>
                </header>
                <div class="md:w-44 md:h-44 h-auto w-11/12 mx-auto relative ">
                    <img :src="getImgUrl(project.thumb)" :title="project.title"  :alt="project.title" class="w-full h-full object-cover"/>
                </div>

            </article>
        </section>
    </div>
</template>

<script setup>
import { useSite } from '@/store';
//eslint-disable-next-line
import { ref, defineAsyncComponent } from 'vue';
import AlertMessageComponent from '@/components/globais/AlertMessageComponent.vue';


const store = useSite();
const data = ref(store.projects);
// function getElementIcon(icon) {
//     const component = icon.charAt(0).toUpperCase() + icon.substring(1)
//     return defineAsyncComponent(() =>
//         import('@/components/globais/' + component + 'Component.vue')
//     )
// }


function  getImgUrl(thumb) {
    var images = require.context('@/assets/images/', false, /\.png$/)
    return images('./' + thumb)
  }
function getPageProject(link){
    console.log(link)
}
</script>

<style lang="scss" scoped>

</style>