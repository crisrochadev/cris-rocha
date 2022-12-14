<template>
  <div
    id="projetos"
    class="bg-teal-50  h-auto border md:pt-0 w-screen flex-wrap pb-8 pt-18 justify-center items-center flex px-[10%] bg-teal-900/[0.25] "
  >
  <HeaderComponent :data="data" color="text-teal-700"/>
    <alert-message-component
      type="info"
      message="Clique na imagem para ver o projeto!"
    />
    <section
      class="flex flex-wrap justify-center items-center gap-4 w-full md:mt-0 mt-12 mb-4"
    >
      <article
        v-for="project in data.projects"
        :key="project.id"
        class="border-teal-100 hover:opacity-100 btn opacity-80 rounded cursor-pointer backdrop-blur-sm w-52 h-52 shadow-lg"
        @click="getPageProject(project.link)"
      >
        <header class="bg-teal-100/[0.40] px-1 absolute w-11/12 rounded backdrop-blur-sm shadow-md z-20 -bottom-2 left-2 ">
          <h1 class="text-xs uppercase font-medium text-teal-700">
            {{ project.title }}
          </h1>
        </header>
        <div class="md:w-44 md:h-44 h-auto w-11/12 mx-auto relative">
          <img
            :src="getImgUrl(project.thumb)"
            :title="project.title"
            :alt="project.title"
            class="w-full h-full object-cover"
          />
        </div>
      </article>
    </section>
    <ButtonComponent
      text="Veja todos os projetos"
      icon="far fa-eye"
      color="text-teal-500"
    />
  </div>
</template>

<script setup>
import { useSite } from "@/store";
import ButtonComponent from "@/components/globais/ButtonComponent.vue";
//eslint-disable-next-line
import { ref, defineAsyncComponent } from "vue";
import AlertMessageComponent from "@/components/globais/AlertMessageComponent.vue";
import HeaderComponent from "../globais/HeaderComponent.vue";

const store = useSite();
const data = ref(store.projects);
// function getElementIcon(icon) {
//     const component = icon.charAt(0).toUpperCase() + icon.substring(1)
//     return defineAsyncComponent(() =>
//         import('@/components/globais/' + component + 'Component.vue')
//     )
// }

function getImgUrl(thumb) {
  var images = require.context("@/assets/images/", false, /\.png$/);
  return images("./" + thumb);
}
function getPageProject(link) {
  console.log(link);
}
</script>

<style lang="scss" scoped></style>
