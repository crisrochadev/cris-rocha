<template>
    <section
    :style="{backgroundImage: 'url('+require('@/assets/images/'+image)+')'}"
  class="flex relative items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img"
>
    <div class="relative z-20">
        <slot></slot>
    </div>
  </section>
</template>

<script setup>
import { ref,defineProps } from 'vue';
const props = defineProps(['image'])
const image = ref(props.image ? props.image : 'bg-banner.jpg')
console.log(image)
</script>

<style  scoped>
.custom-img {
  background-position: left top;
}
.custom-img::before{
    content: "";
    width:100%;
    height:100%;
    top:0;
    left:0;
    position: absolute;
    background-color: rgba(255,255,255,.70);
}
</style>