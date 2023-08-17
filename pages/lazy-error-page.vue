<template>
	<h1> lazy error page </h1>
</template>

<script lang="ts" setup>
await useAsyncData(async () => {
  await showError('SOME LAZY ERROR')
}, { lazy: true })
</script>
