<template>
    <section id="conhecimentos" class="bg-cyan-50 h-screen w-screen flex justify-center items-center flex-col px-[10%]">
        <header>
            <h1 class="uppercase text-cyan-700 font-bold text-3xl border-b py-2 border-cyan-100 text-center">
                {{acquirements.title}}
            </h1>
            <p class="text-center font-thin border-b py-2 border-cyan-100">{{acquirements.description}}</p>
        </header>
        <section class="flex flex-wrap gap-2 justify-center items-center">
            <div class="flex w-full overflow-x-auto gap-1 md:justify-center justify-start overflow-y-hidden">
                <div
            @click="article = card"
            class="btn md:w-[100px] md:h-[100px] w-[50px] h-[50px] rounded my-4 cursor-pointer  hover:bg-cyan-200/[0.60] flex flex-col justify-center gap-2 items-center bg-cyan-100/[0.5] backdrop-blur-lg	"
             v-for="card in acquirements.cards" 
             :key="card.id">
                <component :is="currentIconComponent(card.icon)" :props="{width:'70%',height:'100%'}" ></component>
                <div class="w-11/12 mb-2 h-3 bg-cyan-200 rounded-l-full">
                    <div class="rounded-r-full h-full rounded-l-full bg-rose-300" :style="`width:${card.level}%`">

                    </div>
                </div>
            </div>
            </div>
            <article>
                <header class="flex gap-2">
                    <component :is="currentIconComponent(article.icon)" :props="{width:'25px',height:'25px'}" ></component>
                    <h1 class="uppercase font-bold text-xl text-cyan-500 border-b  pb-2">
                        {{article.title}}
                    </h1>
                </header>
                <p class=" h-1 bg-cyan-100" :style="`width:${article.level}%`"></p>
                <p class="font-thin py-2">
                    {{article.description}}
                </p>
                <button class="block float-right uppercase hover:underline text-cyan-500">
                    <i class="far fa-grin-hearts animate-bounce mr-2"></i>
                    <span>Veja alguns Projetos</span>
                    <i class="far fa-arrow-right ml-2"></i>
                </button>
            </article>
        </section>
    </section>
</template>

<script setup>
import { useSite } from "@/store";
import { ref , defineAsyncComponent } from "vue";
const store = useSite();
const acquirements = ref(store.acquirements)
const article = ref(acquirements.value.cards[0])

const currentIconComponent = (icon) => {
    const component = icon.charAt(0).toUpperCase()+icon.substring(1)
    return defineAsyncComponent(() =>
  import('@/components/globais/'+component+'Component.vue')
)
}
</script>

<style lang="scss" scoped>

</style>