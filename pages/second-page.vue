<template>
	<h1> Second page </h1>
</template>

<script lang="ts" setup>
import { wait } from '~/helpers'

await useAsyncData(async () => {
  await wait()
})
</script>