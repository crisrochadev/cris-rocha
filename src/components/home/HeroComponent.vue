<template>
  <ParallaxComponent image="banner_dark.png">
    <header
      class="before:backdrop-blur-md before:content-[''] before:absolute before:top-[50%] before:left-[50%] before:w-[320px] before:h-[320px]  before:bg-teal-50/[0.20] before:shadow-md before:translate-x-[-50%] before:translate-y-[-50%]  before:rounded-tr-sm after:backdrop-blur-md after:content-[''] after:absolute after:top-[50%] after:left-[50%] after:w-[300px] after:h-[300px] after:bg-rose-300/[0.20] after:translate-x-[-50%] after:translate-y-[-50%] after:shadow-md after:rounded-sm after:rotate-45 w-full h-screen relative z-10 justify-center "
    >
      <div
        class="z-50 flex flex-col items-center justify-center relative h-full w-full"
      >
        <div
          class="w-28 h-28 relative bg-gradient-to-b from-cyan-500 to-cyan-700 rounded-full overflow-hidden image_hero"
        >
          <img
            src="@/assets/images/eusinha.png"
            :alt="site.title"
            :title="site.title"
            class="w-full h-full object-cover"
          />
        </div>
        <h1 class="title uppercase font-black text-6xl text-cyan-700">
          {{ site.title }}
        </h1>
        <p class="text-xl md:w-2/4 w-11/12 text-gray-800 text-center">
          {{ site.description }}
        </p>
        <div class="mt-4 flex gap-2">
          <button
            class="btn backdrop-blur-sm bg-gradient-to-l drop-shadow-md hover:bg-gradient-to-r from-cyan-600 to-cyan-700 text-white rounded py-1 px-2 mx-1 uppercase text-sm"
          >
            {{ data.buttons[0].label }}
          </button>
          <button
            class="hover:decoration-solid hover:underline py-1 fpx-2 mx-1 uppercase text-cyan-700 font-black flex items-center justify-center gap-2"
          >
            <span class="animate-bounce" v-html="whatsapp"></span>
            {{ data.buttons[1].label }}
          </button>
        </div>
      </div>
    </header>
  </ParallaxComponent>
</template>

<script setup>
import { useSite } from "@/store";
import svgIcons from "@/utils/svg-icons.js";
import { ref } from "vue";
import ParallaxComponent from "./ParallaxComponent.vue";
const whatsapp = ref(
  svgIcons.whatsapp({
    width: "15px",
    height: "15px",
    fill: "#0E7490",
  })
);

const store = useSite();
const data = ref(store.hero);
const site = ref(store.site);
console.log(data.value);
</script>
<style>
.btn:link,
.btn:visited {
  text-transform: uppercase;
  text-decoration: none;
  padding: 15px 40px;
  display: inline-block;
  border-radius: 100px;
  transition: all 0.2s;
  position: absolute;
}

.btn:active {
  transform: translateY(-1px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.btn-white {
  background-color: #fff;
  color: #777;
}

.btn::after {
  content: "";
  display: inline-block;
  height: 100%;
  width: 100%;
  border-radius: 100px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  transition: all 0.4s;
}

.btn-white::after {
  background-color: #fff;
}

.btn:hover::after {
  transform: scaleX(1.4) scaleY(1.6);
  opacity: 0;
}

.btn-animated {
  animation: moveInBottom 5s ease-out;
  animation-fill-mode: backwards;
}

@keyframes moveInBottom {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }

  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>
