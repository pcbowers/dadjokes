<template>
  <div class="page-container">
    <nuxt-link to="/jokes">Back To Jokes</nuxt-link>
    <div>{{ joke }}</div>
  </div>
</template>

<script>
import search from '../../../mixins/search';

export default {
  mixins: [search],
  data() {
    return {
      joke: 'Loading...'
    };
  },
  async created() {
    this.joke = await this.search({ id: this.$route.params.id });
  },
  head() {
    return {
      title: 'Dad Joke',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Best place for bad dad jokes'
        }
      ]
    };
  }
};
</script>

<style></style>
