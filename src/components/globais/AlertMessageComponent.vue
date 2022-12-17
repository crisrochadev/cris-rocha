<template>
  <p :class="['w-auto inline-block py-1 px-2 rounded font-thin text-xs backdrop-blur-md ',...styleClass]" style="box-shadow:inset 0 0 4px rgba(0,0,0,.25)">
    <i :class="icon"></i>
    <span class="ml-2" v-html="message"></span>
  </p>
</template>

<script setup>
import { ref,defineProps } from 'vue';

const props = defineProps(["message", "type"]);
const message = ref(props.message);
const type = ref(props.type);
const styleClass = ref(getClassToStyle());
const icon = ref(getIcon())
function getClassToStyle() {
  switch (type.value) {
    case "success":
      return ["bg-green-100/[0.25]", "text-green-800"];
    case "danger":
      return ["bg-red-100/[0.25]", "text-red-800"];
    case "info":
      return ["bg-blue-100/[0.25]", "text-blue-800"];
    case "alert":
      return ["bg-yellow-100/[0.25]", "text-yellow-800"];
    default:
      return ["bg-pink-100/[0.25]", "text-pink-800"];
  }
}
function getIcon() {
  switch (type.value) {
    case "success":
      return 'far fa-check';
    case "danger":
      return 'far fa-exclamation-triangle';
    case "info":
      return 'far fa-info-circle';
    case "alert":
      return 'far fa-exclamation-circle';
    default:
      return 'far fa-start';
  }
}
</script>

<style lang="scss" scoped>
</style>