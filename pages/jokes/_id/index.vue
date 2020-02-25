<template>
  <div class="page-container">
    <nuxt-link to="/jokes">Back To Jokes</nuxt-link>
    <div>{{ joke }}</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      joke: {}
    };
  },
  async created() {
    const config = {
      headers: {
        Accept: 'application/json'
      }
    };

    try {
      const res = await axios.get(
        `https://icanhazdadjoke.com/j/${this.$route.params.id}`,
        config
      );

      this.joke = res.data.joke;
    } catch (error) {
      // console.log(error);
    }
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
