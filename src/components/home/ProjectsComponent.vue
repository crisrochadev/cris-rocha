<template>
    <div id="projetos" class="bg-teal-50 md:h-screen h-auto pb-12 md:pb-0 md:pt-0 w-screen flex-wrap pt-14 justify-center items-center flex px-[10%]">
        <header class="md:w-2/4 w-full">
            <h1 class="uppercase text-teal-700 font-bold text-3xl border-b py-2 border-teal-100 text-center">
                {{data.title}}
            </h1>
            <p class="text-center font-thin border-b py-2 border-cyan-100">{{data.description}}</p>
        </header>
        <section class="flex flex-wrap justify-center items-center gap-4 md:w-2/4 w-full md:mt-0 mt-12" >
            <button v-if="!next" @click="previousProject" class="ml-4"><i class="far fa-chevron-left text-2xl text-teal-800 hover:text-rose-800 ease-linear transition-colors"></i></button>
            <article  class="relative w-[300px] h-[300px] p-2 rounded bg-teal-100/[0.5] backdrop-blur-lg cursor-pointer  hover:bg-teal-200/[0.5] flex justify-center items-center">
                <div class="flex absolute z-20 top-[-5px] h-4 w-full left-0 gap-1 ml-2">
                    <component v-for="icon in project.tags" :is="getElementIcon(icon)" :props="{width:'20px',heigh:'20px'}" :key="icon" class="shadow-sm bg-teal-100 p-0 h-3" />
                </div>
                <div class="w-[98%] h-[98%] relative">
                    <img :src="getImgUrl(project.thumb)" :alt="project.title" :title="project.title" class="w-full h-full object-cover"/>
                </div>
            </article>
            <button v-if="next" @click="nextProject" class="ml-4"><i class="far fa-chevron-right text-2xl text-teal-800 hover:text-rose-800 ease-linear transition-colors"></i></button>
        </section>
    </div>
</template>

<script setup>
import { useSite } from '@/store';
import { ref, defineAsyncComponent } from 'vue';


const store = useSite();
const data = ref(store.projects);
// const projects = ref(data.value.projects);
const project = ref(data.value.projects[0]);
const indexProject = ref(0)
function getElementIcon(icon) {
    const component = icon.charAt(0).toUpperCase() + icon.substring(1)
    return defineAsyncComponent(() =>
        import('@/components/globais/' + component + 'Component.vue')
    )
}
const next = ref(true)
function nextProject(){
    console.log(indexProject.value)
    
    if(data.value.projects[data.value.projects.length - 1] == project.value) {
        next.value = false
        indexProject.value = data.value.projects.length - 1
    }
    if(next.value) project.value = data.value.projects[indexProject.value++]
    
    // indexProject.value = data.value.projects.indexOf(proj => proj == project.value);
}
function previousProject(){
    
    if(data.value.projects[0] == project.value) {
        indexProject.value = 0
        next.value = true
    }
    if(!next.value) project.value = data.value.projects[indexProject.value--]
    console.log(indexProject.value)
    
    // indexProject.value = data.value.projects.indexOf(proj => proj == project.value);
}

function  getImgUrl(thumb) {
    var images = require.context('@/assets/images/', false, /\.png$/)
    return images('./' + thumb)
  }
</script>

<style lang="scss" scoped>

</style>