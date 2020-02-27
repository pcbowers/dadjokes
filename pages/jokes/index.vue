<template>
  <div class="page-container">
    <SearchJokes @search-text="searchText" />
    <div>
      <b>{{ jokes.length }} of {{ totalJokes }}</b> Jokes
    </div>
    <!-- eslint-disable -->
    <div class="joke-container" @scroll="onScroll">
      <Joke v-for="joke in jokes" :id="joke.id" :key="joke.id" :joke="joke.joke" />
      <img
        v-if="seeMore"
        src="../../static/load.gif"
        id="loading"
        alt="Loading"
        width="300"
        height="300"
      />
    </div>
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
      this.seeMore = true;
      this.term = text;
      this.jokes = await this.search({ term: this.term });
      this.hideSeeMore();
    },
    async addPage() {
      const next = await this.search({ term: this.term, page: this.nextPage });
      this.jokes.push(...next);
      this.hideSeeMore();
    },
    onScroll({ target: { scrollTop, clientHeight, scrollHeight } }) {
      if (scrollTop + clientHeight >= scrollHeight) {
        if (this.seeMore) this.addPage();
      }
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

<style scoped>
.page-container {
  height: 72vh;
}

.joke-container {
  overflow-y: scroll;
  height: 56vh;
}

#loading {
  width: 20px;
  display: block;
  margin: auto;
}
</style>
