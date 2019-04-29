<template>
  <div class="main">
    <commonHeader />
    <nuxt />
    <commonFooter />
  </div>
</template>

<script>
import commonHeader from '~/components/header.vue'
import commonFooter from '~/components/footer.vue'

export default {
  components: {
    commonHeader,
    commonFooter
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: #666;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.main {
  width: 100%;
  max-width: 414px;
  margin-right: auto;
  margin-left: auto;
  background-color: #f7f7f7;
}
</style>
