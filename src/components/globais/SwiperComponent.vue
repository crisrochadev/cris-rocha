<template>
  <swiper
    :modules="modules"
    :slides-per-view="8"
    :space-between="2"
    navigation
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    class="w-[90%]"
    style="height:100px !important"
  >
    <swiper-slide v-for="card in data.cards" :key="card.id" class="border relative" style="height:100px !important">
      <component
        :is="currentIconComponent(card.icon)"
        :props="{ width: '50px', height: '50px' }"
      ></component>
      <div class="w-11/12 mb-2 h-3 bg-cyan-200 rounded-l-full">
        <div
          class="rounded-r-full h-full rounded-l-full bg-rose-300"
          :style="`width:${card.level}%`"
        ></div>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script setup>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
import { ref, defineProps, defineAsyncComponent } from "vue";
const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log("slide change");
};
const props = defineProps(["data"]);
const data = ref(props.data);
const modules = ref([Navigation, Pagination, Scrollbar, A11y]);
const currentIconComponent = (icon) => {
  const component = icon.charAt(0).toUpperCase() + icon.substring(1);
  return defineAsyncComponent(() =>
    import("@/components/globais/" + component + "Component.vue")
  );
};
</script>