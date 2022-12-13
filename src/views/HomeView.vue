<template>
  <section class="w-full  relative">
    <HeroComponent/>
    <AboutComponent class="relative separator after:blur after:bg-teal-50 after:z-50 before:blur before:bg-teal-50 before:z-50"/>
    <AcquirementsComponent class="relative separator after:blur after:bg-cyan-50 after:z-50 before:blur before:bg-cyan-50 before:z-50"/>
    <ProjectsComponent class="relative separator after:blur after:bg-teal-50 after:z-50 before:blur before:bg-teal-50 before:z-50"/>
    <ContactComponent class="relative separator after:blur after:bg-cyan-50 after:z-50 before:blur before:bg-cyan-50 before:z-50"/>
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
    top:-15px;
    left:0;
    display: block;
    position: absolute;
}
</style>
