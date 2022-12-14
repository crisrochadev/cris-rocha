<template>
    <header class="mb-4">
      <h1
        :class="`
          uppercase
          ${color}
          font-bold
          text-3xl
          py-2
          text-center
        `"
      >
        {{ data.title }}
      </h1>
      <slot name="after-title"></slot>
      <p class="text-center font-thin py-2">
        {{ data.description }}
      </p>
    </header>
</template>
<script>
export default {
    props:['data','color']
}
</script>