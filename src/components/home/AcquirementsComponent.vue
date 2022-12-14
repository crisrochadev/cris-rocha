<template>
  <ParallaxComponent
  image="banner_dark.png"
    id="conhecimentos"
    class="
      bg-cyan-50
      md:h-screen
      h-auto
      pb-4
      md:pb-0
      w-screen
      flex
      md:pt-0
      pt-14
      justify-center
      items-center
      flex-col
      px-[10%]
    "
  >
    <HeaderComponent :data="acquirements" color="text-cyan-700"/>
    <section class="flex flex-wrap gap-2 justify-center items-center bg-cyan-100/[0.25] backdrop-blur-sm rounded p-4 shadow-md ">
      <div class="flex items-center justify-center w-full gap-2 
            flex-wrap my-2">
        <article
          v-for="card in acquirements.cards"
          :key="card.id"
          class="
            article_acqui
            w-14
            h-14
            relative
            flex
            justify-center
            items-center
            rounded-full
            p-2
            btn
            hover:bg-cyan-100
            cursor-pointer
            backdrop-blur-md
          "
          
          @click="article = card"
        >
          <RadialProgress
            :diameter="60"
            :completed-steps="card.level"
            :total-steps="100"
            :completedSteps="card.level"
            :strokeWidth="3"
            innerStrokeColor="3px"
            strokeLinecap="rounded"
            startColor="#0E7490"
            stopColor="#ABE9E4"
          >
            <component
              :is="currentIconComponent(card.icon)"
              :props="{ width: '25px', height: '25px' }"
              class="relative z-20 cursor-pointer "
            />
          </RadialProgress>
        </article>
      </div>
      <alert-message-component type="info" message="Clique nos icones para ver os detalhes!"/>
      <article>
        <header>
            <h1 class="flex uppercase text-cyan-700 font-semibold border-b border-cyan-100 py-2">
                <component
              :is="currentIconComponent(article.icon)"
              :props="{ width: '25px', height: '25px' }"
              class="relative z-20 mr-2"
            />
                {{article.title}}
            </h1>
        </header>
        <p class="pt-2 font-thin pb-2 border-b border-cyan-100">
            {{article.description}}
        </p>
      </article>
      <ButtonComponent text="Acesse meu GitHub" color="text-cyan-500" icon="fab fa-github"/>
    </section>
  </ParallaxComponent>
</template>

<script setup>
import ButtonComponent from "@/components/globais/ButtonComponent.vue"
//eslint-disable-next-line
import { useSite } from "@/store";
//eslint-disable-next-line
import { ref, defineAsyncComponent } from "vue";
//eslint-disable-next-line
import AlertMessageComponent from "@/components/globais/AlertMessageComponent.vue";
import RadialProgress from "vue3-radial-progress";
import ParallaxComponent from "./ParallaxComponent.vue";
import HeaderComponent from "../globais/HeaderComponent.vue";
const store = useSite();
const acquirements = ref(store.acquirements);
const article = ref(acquirements.value.cards[0]);

//eslint-disable-next-line
const currentIconComponent = (icon) => {
  const component = icon.charAt(0).toUpperCase() + icon.substring(1);
  return defineAsyncComponent(() =>
    import("@/components/globais/" + component + "Component.vue")
  );
};
</script>

<style scoped>
</style>