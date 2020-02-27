<template>
  <form class="field has-addons" @submit.prevent="onSubmit">
    <div class="control is-expanded">
      <!-- eslint-disable -->
      <input v-model="text" class="input" type="text" placeholder="Search Jokes..." />
      <!-- eslint-enable -->
    </div>
    <div class="control">
      <input class="button is-primary" type="submit" value="Search Jokes" />
    </div>
  </form>
</template>

<script>
export default {
  name: 'SearchJokes',
  data() {
    return {
      text: ''
    };
  },
  methods: {
    onSubmit() {
      this.$emit('search-text', this.text);
    }
  }
};
</script>

<style></style>
