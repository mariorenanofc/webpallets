<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link class="navbar-brand" to="/">Pallets Inc.</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/form">Formulário</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/data">Dados</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">Sobre nós</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="home jumbotron text-center">
      <!-- Conteúdo da página Home -->
    </div>
  </div>
</template>

<style lang="scss">

</style>
