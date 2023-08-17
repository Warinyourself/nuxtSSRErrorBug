<template>
  <NuxtLayout>
    <h1> error view: {{error.message}} </h1>
  </NuxtLayout>
</template>

<script lang="ts" setup>
defineProps({
  error: {
    type: Object,
    required: true
  },
})
</script>
