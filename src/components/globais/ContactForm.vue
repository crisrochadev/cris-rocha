<template>
  <div>
    <div :class="group">
      <div class="w-full md:w-2/4 flex flex-col font-medium text-teal-700 uppercase">
        <input
          placeholder="Primeiro Nome"
          class="placeholder:text-teal-600/[0.50] placeholder:uppercase bg-teal-50/[0.20] backdrop-blur-md rounded w-full h-12 px-2 focus:outline-none"
          type="text"
          id="first_name"
        />
      </div>
      <div class="w-full md:w-2/4 flex flex-col font-medium text-teal-700 uppercase">
        <input
          placeholder="Sobrenome"
          class="placeholder:text-teal-600/[0.50] placeholder:uppercase bg-teal-50/[0.20] backdrop-blur-md rounded w-full h-12 px-2 focus:outline-none"
          type="text"
          id="last_name"
        />
      </div>
    </div>
    <div :class="group">
      <div class="w-full md:w-2/4 flex flex-col font-medium text-teal-700 uppercase">
        <input
          placeholder="Telefone"
          class="placeholder:text-teal-600/[0.50] placeholder:uppercase bg-teal-50/[0.20] backdrop-blur-md rounded w-full h-12 px-2 focus:outline-none"
          type="text"
          id="phone"
        />
      </div>
      <div class="w-full md:w-2/4 flex flex-col font-medium text-teal-700 uppercase">
        <input
          placeholder="Email"
          class="placeholder:text-teal-600/[0.50] placeholder:uppercase bg-teal-50/[0.20] backdrop-blur-md rounded w-full h-12 px-2 focus:outline-none"
          type="text"
          id="mail"
        />
      </div>
    </div>
    <div :class="group">
      <div
        class="w-full md:w-2/4 flex flex-col font-medium text-teal-700 uppercase group relative z-50"
        @mouseenter="openSelectTech = true"
        @mouseleave="openSelectTech = false"
      >
        <input
          type="text"
          :placeholder="tech.label"
          class="placeholder:text-teal-600/[0.50] placeholder:uppercase bg-teal-50/[0.20] backdrop-blur-md rounded w-full h-12 px-2 focus:outline-none"
        />
        <ul
          v-if="openSelectTech"
          class="absolute top-12 bg-teal-100/[0.20] shadow-md rounded w-full"
          style="z-index: 99999"
        >
          <li
            v-for="item in techs"
            :key="item.id"
            @click="
              () => {
                tech = item;
                openSelectTech = !openSelectTech;
              }
            "
            class="bg-teal-50 w-11/12 my-1 mx-auto rounded p-2 cursor-pointer hover:bg-teal-100 transition-colors ease-linear"
          >
            {{ item.label }}
          </li>
        </ul>
      </div>
      <div
        class="w-full md:w-2/4 flex flex-col font-medium text-teal-700 uppercase group relative z-50"
        @mouseenter="openSelectType = true"
        @mouseleave="openSelectType = false"
      >
        <input
          type="text"
          :placeholder="projectType.label"
          class="placeholder:text-teal-600/[0.50] placeholder:uppercase bg-teal-50/[0.20] backdrop-blur-md rounded w-full h-12 px-2 focus:outline-none"
        />
        <ul
          v-if="openSelectType"
          class="absolute top-12 bg-teal-100/[0.20] shadow-md rounded w-full"
          style="z-index: 99999"
        >
          <li
            v-for="item in projectsType"
            :key="item.id"
            @click="
              () => {
                projectType = item;
                openSelectType = !openSelectType;
              }
            "
            class="bg-teal-50 w-11/12 my-1 mx-auto rounded p-2 cursor-pointer hover:bg-teal-100 transition-colors ease-linear"
          >
            {{ item.label }}
          </li>
        </ul>
      </div>
    </div>
    <div>
      <textarea
        placeholder="Digite sua mensagem"
        class="placeholder:text-teal-600/[0.50] placeholder:uppercase bg-teal-50/[0.20] backdrop-blur-md rounded w-full h-24 resize-none px-2 focus:outline-none"
        name="message"
        id="message"
        cols="30"
        rows="10"
      ></textarea>
    </div>
    <div class="flex items-center">
      <p class="uppercase font-medium text-teal-500 pl-1"
        >O projeto já possui o layout de design?</p
      >
     
      <p @click="layout = true" for="yes" class="text-teal-600 cursor-pointer flex gap-2 justify-center items-center mx-2">
        <i class="far fa-square cursor" v-if="!layout"></i>
      <i class="far fa-check-square cursor " v-if="layout"></i>
      Sim
      </p>

      <p @click="layout = false" for="no" class="text-teal-600 cursor-pointer flex gap-2 justify-center items-center mx-2">
        <i class="far fa-square cursor" v-if="layout"></i>
        <i class="far fa-check-square cursor" v-if="!layout"></i>
        Não
      </p>
    </div>
    <button class="float-right  bg-gradient-to-l drop-shadow-md hover:bg-gradient-to-r from-teal-600 to-teal-700 text-white  btn rounded px-4 py-2">Enviar</button>
  </div>
</template>
<script setup>
import { ref } from "vue";
const techs = ref([
  { id: 1, label: "Vue" },
  { id: 2, label: "React" },
  { id: 3, label: "PHP" },
  { id: 4, label: "HTML/CSS/JS" },
  { id: 5, label: "Outra" },
]);
const tech = ref({ id: 10, label: "Escolher uma tecnologia" });
const openSelectTech = ref(false);

const projectsType = ref([
  { id: 1, label: "E-Commerce" },
  { id: 2, label: "Institucional" },
  { id: 3, label: "Landing Page" },
  { id: 4, label: "Manuntenção de código" },
  { id: 5, label: "Outro" },
]);
const projectType = ref({ id: 10, label: "Tipo de Projeto" });
const openSelectType = ref(false);
const layout = ref(false)
const group = ref("flex w-full justify-between items-center gap-2 py-2  flex-wrap md:flex-nowrap");
</script>
