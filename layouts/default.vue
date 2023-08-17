<template>
  <main class="wrapper">
    <div class="menu">
      <NuxtLink to="/">Main</NuxtLink>
      <NuxtLink to="/second-page">SP</NuxtLink>
      <NuxtLink to="/error-page">Error page</NuxtLink>
     
      <NuxtLink to="/lazy-error-page">Lazy error page</NuxtLink>
      <NuxtLink to="/404">404</NuxtLink>
    </div>

    <div class="page">
      <slot />
    </div>
  </main>
</template>
  
<style lang="stylus">
@import '../assets/styles/index.styl';

.menu
  display flex
  align-items center
  justify-content center
  font-size 2rem
  gap 12px
  z-index 10
  margin-top 24px

  text-decoration none
  font-family sans-serif
  mix-blend-mode invert
  a 
    padding 8px 16px
    background white
    color black
    display block
    border-radius 8px
    border 1px solid black
    &.router-link-exact-active
      filter invert(1)
</style>
