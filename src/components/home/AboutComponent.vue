<template>
    <div id="sobre" class="bg-teal-50 relative flex flex-col md:flex-row px-[10%]  ">
        <header class="md:w-2/4 w-full flex flex-col justify-center items-start md:mt-0 mt-8 relative z-20">
            <h1 class="w-11/12 py-2 mb-4 text-3xl uppercase text-teal-600 font-bold border-b border-teal-400">
                {{ data.title }}</h1>
            <p class="font-thin w-11/12">{{ data.description }}</p>
            <div class="w-11/12 flex justify-end items-center gap-2 border-t border-teal-400 py-2 mt-4">
                <a href="{{Linkedin.path}}">
                    <i
                        :class="`fab fa-${Linkedin.icon} text-xl text-teal-600 hover:text-cyan-600 transition-color ease-linear`" />
                    <span>
                        {{ Linkedin.class }}
                    </span>
                </a>
                <a href="{{GitHub.path}}">
                    <i
                        :class="`fab fa-${GitHub.icon} text-xl text-teal-600 hover:text-cyan-600 transition-color ease-linear`" />
                    <span>
                        {{ GitHub.class }}
                    </span>
                </a>
            </div>
        </header>
        <div class="
        relative
        md:w-2/4
        w-full
        md:h-full
        h-2/4
        before:backdrop-blur-md
        before:content-['']
        before:absolute
        before:top-[50%]
        before:left-[50%]
        before:w-full
        before:h-full
        before:z-10
        before:bg-rose-100/[0.25]
        before:translate-x-[-50%]
        before:translate-y-[-50%]
        before:shadow-sm
        before:rounded-tr-sm
        ">
            <img src="@/assets/images/eusinha.png" class="relative z-20" />
        </div>
    </div>
</template>

<script setup>
import { useSite } from '@/store';
import { ref } from 'vue';
const store = useSite();
const data = ref(store.about)
const Linkedin = ref(store.socialMedia.find(media => media.name == "Linkedin"));
const GitHub = ref(store.socialMedia.find(media => media.name == "GitHub"));

</script>

<style scoped>

</style>