<template>
  <div class="page-container">
    <SearchJokes @search-text="searchText" />
    <div>{{ totalJokes }} Total Jokes</div>
    <!-- eslint-disable -->
    <Joke v-for="joke in jokes" :id="joke.id" :key="joke.id" :joke="joke.joke" />
    <button v-if="seeMore" class="button is-block is-primary" @click="addPage">See More...</button>
    <!-- eslint-enable -->
  </div>
</template>

<script>
import Joke from '../../components/Joke';
import SearchJokes from '../../components/SearchJokes';
import search from '../../mixins/search';

export default {
  components: {
    Joke,
    SearchJokes
  },
  mixins: [search],
  data() {
    return {
      jokes: [],
      term: '',
      seeMore: true
    };
  },
  async created() {
    this.jokes = await this.search();
    this.hideSeeMore();
  },
  methods: {
    async searchText(text) {
      this.term = text;
      this.jokes = await this.search({ term: this.term });
      this.hideSeeMore();
    },
    async addPage() {
      const next = await this.search({ term: this.term, page: this.nextPage });
      this.jokes.push(...next);
      this.hideSeeMore();
    },
    hideSeeMore() {
      this.seeMore =
        this.jokes.length !== this.totalJokes && this.getNextPage();
    }
  },
  head() {
    return {
      title: 'Dad Jokes',
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
