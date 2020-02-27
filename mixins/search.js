import axios from 'axios';

export default {
  data() {
    return {
      nextPage: 0,
      currentPage: 0,
      totalJokes: 0,
      totalPages: 0
    };
  },
  methods: {
    async search(options) {
      options = !options ? {} : options;

      const config = {
        headers: {
          Accept: 'application/json'
        }
      };
      let oneJoke = false;
      let pageGiven = false;
      let url = 'https://icanhazdadjoke.com/';

      if (Object.prototype.hasOwnProperty.call(options, 'id')) {
        url += `j/${options.id}`;
        oneJoke = true;
      } else {
        url += 'search?';
        if (Object.prototype.hasOwnProperty.call(options, 'term')) {
          url += `term=${options.term}&`;
        }

        if (Object.prototype.hasOwnProperty.call(options, 'page')) {
          url += `page=${options.page}&`;
          pageGiven = true;
        }
      }

      if (oneJoke || !pageGiven) {
        this.nextPage = this.currentPage = this.totalJokes = this.totalPages = 0;
      }

      try {
        const res = await axios.get(url, config);
        if (oneJoke) {
          return res.data.joke;
        } else {
          this.nextPage = res.data.next_page;
          this.totalJokes = res.data.total_jokes;
          this.totalPages = res.data.total_pages;
          this.currentPage = res.data.current_page;
          return res.data.results;
        }
      } catch (error) {
        // console.log(error);
      }
    },
    getNextPage() {
      if (this.currentPage < this.totalPages) {
        return this.nextPage;
      } else if (
        this.totalJokes > 0 &&
        this.totalJokes % 20 &&
        this.nextPage === this.totalPages
      ) {
        return this.nextPage++;
      } else {
        return false;
      }
    }
  }
};
