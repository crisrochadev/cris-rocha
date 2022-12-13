<template>
  <div class="w-screen h-screen bg-red-50">
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