<template>
    <button :class="`block float-right uppercase hover:underline ${color} mt-4`">
        <i :class="`${icon} animate-bounce mr-2`"></i>
        <span>{{text}}</span>
        <i class="far fa-arrow-right ml-2"></i>
      </button>
</template>

<script>
    export default {
        props:['icon','text','link', 'color']
    }
</script>

<style lang="scss" scoped>

</style>