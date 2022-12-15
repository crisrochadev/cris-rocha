<template>
  <div
    v-if="show"
    id="toast-danger"
    :class="`backdrop-blur-md shadow-md flex absolute bottom-2 left-[50%] translate-x-[-50%] items-center p-4 mb-4 w-full max-w-xs ${styleAction} rounded-lg shadow `"
    role="alert"
  >
    <div
      :class="`inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-gray-800 ${styleIcon} rounded-lg `"
    >
      <i :class="icon"></i>
      <span class="sr-only">{{ text }} icon</span>
    </div>
    <div class="ml-3 text-sm font-normal">{{ text }}</div>
    <button
      type="button"
      :class="`ml-auto -mx-1.5 -my-1.5  text-gray-400  rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5  inline-flex h-8 w-8  bg-transparent hover:bg-gray-300`"
      data-dismiss-target="#toast-danger"
      aria-label="Close"
      @click="$emit('update:show', false)"
    >
      <span class="sr-only">Close</span>
      <i class="fas fa-times text-lg"></i>
    </button>
  </div>
</template>

<script>
export default {
  props: ["type", "text", "show"],
  emits: ["update:show"],
  computed: {
    styleAction() {
      switch (this.type) {
        case "error":
          return "bg-red-100/[0.30] text-red-800";
        case "success":
          return "bg-teal-100/[0.30] text-teal-800";
        case "info":
          return "bg-red-100/[0.30] text-cyan-800";
        case "alert":
          return "bg-teal-100/[0.30] text-yellow-800";
        default:
          return "bg-pink-100/[0.30] text-pink-800";
      }
    },
    icon() {
      switch (this.type) {
        case "success":
          return "far fa-check";
        case "error":
          return "far fa-exclamation-triangle";
        case "info":
          return "far fa-info-circle";
        case "alert":
          return "far fa-exclamation-circle";
        default:
          return "far fa-star";
      }
    },
    styleIcon() {
      switch (this.type) {
        case "success":
          return "bg-teal-700";
        case "error":
          return "bg-red-700";
        case "info":
          return "bg-cyan-700";
        case "alert":
          return "bg-yellow-700";
        default:
          return "bg-pink-700";
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
