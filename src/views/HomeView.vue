<template>
  <section class="w-full  relative">
    <HeroComponent/>
    <AboutComponent />
    <AcquirementsComponent />
    <ProjectsComponent/>
    <ContactComponent />
  </section>
</template>

<script setup>
import HeroComponent from '@/components/home/HeroComponent.vue';
import AboutComponent from '@/components/home/AboutComponent.vue';
import AcquirementsComponent from '@/components/home/AcquirementsComponent.vue';
import ProjectsComponent from '@/components/home/ProjectsComponent.vue';
import ContactComponent from '@/components/home/ContactComponent.vue';

</script>
<style>
.separator::before{
    content:"";
    width:100%;
    height:30px;
    bottom:-15px;
    left:0;
    display: block;
    position: absolute;
}
</style>
