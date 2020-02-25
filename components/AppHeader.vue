<template>
  <div class="navbar-wrapper">
    <nav class="navbar is-transparent">
      <div class="navbar-brand">
        <div class="navbar-item title is-marginless">Dad Jokes</div>
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          :class="{ 'is-active': isOpen }"
          @click="isOpen = !isOpen"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <!-- eslint-disable -->
      <div :class="{ 'is-active': isOpen }" @click="isOpen = !isOpen" class="navbar-menu">
        <!-- eslint-enable- -->
        <div class="navbar-end">
          <nuxt-link class="navbar-item" to="/">Home</nuxt-link>
          <nuxt-link class="navbar-item" to="/jokes">Jokes</nuxt-link>
          <nuxt-link class="navbar-item" to="/about">About</nuxt-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      isOpen: false
    };
  }
};
</script>

<style>
.navbar-menu.is-active {
  position: absolute;
  width: 100%;
}

@media screen and (min-width: 1024px) {
  .navbar-menu.is-active {
    position: inherit;
    width: auto;
  }
}
</style>
