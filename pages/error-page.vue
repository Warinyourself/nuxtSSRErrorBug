<template>
	<h1> error page </h1>
</template>

<script lang="ts" setup>
await useAsyncData(async () => {
  await showError('SOME ERROR')
})
</script>
