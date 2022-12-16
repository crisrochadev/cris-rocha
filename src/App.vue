<template>
  <div class="w-screen h-screen bg-red-50">
    <h1 class="absolute left-2/4 top-1 z-50 translate-x-[-50%] uppercase text-cyan-600 font-bold flex gap-2 text-lg items-center justify-center">
        <!-- <span
            class="
                w-4
                h-4
                rounded-xs
                bg-teal-100/[0.50]
                backdrop-blur-md
                shadow-md
                block
                relative

                before:w-4
                before:h-4
                before:rounded-xs
                before:rotate-45
                before:absolute
                before:top-0
                before:left-0
                before:bg-rose-100/[0.50]
                before:backdrop-blur-md
                before:shadow-md
                before:block

                after:rounded-full
                after:bg-gradient-to-b
                after:from-cyan-500
                after:to-cyan-600
                after:w-2
                after:h-2
                after:absolute
                after:z-50
                after:text-[12px]
                after:top-2/4
                after:left-2/4
                after:translate-y-[-50%]
                after:translate-x-[-50%]
            "
        ></span> -->
        <img src="@/assets/images/logo-512.png" class="h-6 w-6" :alt="store.site.title" :title="store.site.title">
        {{store.site.title}}
    </h1>
    <DefaultLayout/>
  </div>
</template>

<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { onMounted } from 'vue';
import { useSite } from './store';
const store = useSite();
onMounted(async () => {
  await store.getData();
})

</script>

<style lang="scss" scoped>

</style>