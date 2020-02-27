<template>
  <div class="container">
    <AppHeader />
    <nuxt />
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader';
export default {
  components: {
    AppHeader
  }
};
</script>

<style>
body,
html {
  background: rgb(224, 248, 239);
  overflow: hidden;
}

.container {
  width: 90%;
  margin: 2rem auto;
  padding: 1rem 2rem;
  background: #fff;
}

.page-container {
  padding: 0.5rem 0.75rem;
}
</style>
