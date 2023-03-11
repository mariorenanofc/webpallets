<template>
  <div>
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between"
    >
      <router-link class="navbar-brand mr-auto" to="/">Pallets Inc.</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse"
        :class="{ show: navbarOpen }"
        id="navbarNav"
      >
        <ul class="navbar-nav " style="margin-left: auto">
          <!-- Adicionando estilo personalizado aqui -->
          <li class="nav-item active">
            <router-link class="nav-link ml-auto" to="/" @click="closeNavbar"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link ml-auto" to="/form" @click="closeNavbar"
              >Formulário</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link ml-auto" to="/data" @click="closeNavbar"
              >Dados</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link ml-auto" to="/about" @click="closeNavbar"
              >Sobre nós</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
    <div class="home jumbotron text-center">
      <!-- Conteúdo da página Home -->
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      navbarOpen: false,
    };
  },
  methods: {
    toggleNavbar() {
      this.navbarOpen = !this.navbarOpen;
    },
    closeNavbar() {
      this.navbarOpen = false;
    },
  },
};
</script>


<style lang="scss">

.navbar-brand {
  padding-left: 1rem;
}


@media (max-width: 850px) {
  .navbar-expand-lg .navbar-nav {
    margin: 0 auto;
    width: 60%;
  }
}
@media (max-width: 550px) {
  .navbar-expand-lg .navbar-nav {
    margin: 0;
    width: 100%;
  }
}
</style>
