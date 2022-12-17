<template>
    <div class="pt-8 px-[10%]">
        <header class="w-full py-4 text-center uppercase font-bold text-rose-700 border-b border-rose-300">
            <h1>{{project.title}}</h1>
        </header>
        <article class="py-4">
            <p class="text-center py-4 font-thin">Esta página ainda está sendo desenvolvida, mas você pode acessar o projeto clicando no botão abaixo.</p>
            <a class="my-4 mx-auto block w-44 text-center uppercase text-sm text-rose-600 bg-rose-100/[0.20] shadow-md rounded backdrop-blur-md py-2 px-4 hover:text-cyan-600 transition-colors ease-linear delay-400" :href="project.link" target="_blank">Acessar o projeto</a>
        </article>
    </div>
</template>

<script setup>
import { useSite } from '@/store';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const store = useSite();
const project = computed(() => store.project(route.params.project))

</script>

<style lang="scss" scoped>

</style>