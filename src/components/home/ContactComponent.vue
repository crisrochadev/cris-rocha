<template>
  <ParallaxComponent image="banner_dark.png">
    <div id="contato" class="w-full px-[10%]">
      <HeaderComponent :data="contact" color="text-teal-700">
        <template #after-title>
          <div class="mx-auto flex justify-center items-center">
            <button
              class="btn w-8 h-8 flex justify-center items-center backdrop-blur-sm shadow-md text-rose-700 rounded mx-1 uppercase text-sm"
            >
              <i :class="contact.buttons[0].icon"></i>
            </button>
            <button
              class="btn z-0 relative w-8 h-8 flex justify-center items-center backdrop-blur-sm shadow-md text-white rounded mx-1 uppercase text-sm"
            >
              <p style="padding: 3px 1px">
                <component
                  :is="currentIconComponent(contact.buttons[1].icon)"
                  :props="{ width: '15px', height: '15px', fill: '#408984' }"
                />
              </p>
            </button>
          </div>
        </template>
      </HeaderComponent>
    </div>

    <div
      class="p-4 backdrop-blur-md shadow-md rounded w-11/12 mx-auto bg-teal-50/[0.20]"
    >
      <ContactForm />
    </div>
    <div></div>
  </ParallaxComponent>
</template>

<script setup>
import { useSite } from "@/store";
import { ref, defineAsyncComponent } from "vue";
import HeaderComponent from "../globais/HeaderComponent.vue";
import ParallaxComponent from "./ParallaxComponent.vue";
import ContactForm from "@/components/globais/ContactForm.vue";
const store = useSite();
const contact = ref(store.contact);

const currentIconComponent = (icon) => {
  const component = icon.charAt(0).toUpperCase() + icon.substring(1);
  return defineAsyncComponent(() =>
    import("@/components/globais/" + component + "Component.vue")
  );
};
</script>

<style lang="scss" scoped></style>
