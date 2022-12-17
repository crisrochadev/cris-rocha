<template>
    <button :class="`block float-right uppercase hover:underline ${color} mt-4`">
        <a v-if="url !== undefined" :href="url" target="_blank">
            <i :class="`${icon} animate-bounce mr-2`"></i>
        <span>{{text}}</span>
        <i class="far fa-arrow-right ml-2"></i>
        </a>
        <p v-else>
          <i :class="`${icon} animate-bounce mr-2`"></i>
          <span>{{text}}</span>
          <i class="far fa-arrow-right ml-2"></i>
        </p>
      </button>
</template>

<script>
    export default {
        props:['icon','text','link', 'color','url']
    }
</script>

<style lang="scss" scoped>

</style>