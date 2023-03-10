<template>
    <div class="home jumbotron text-center">
      <h1>Bem-vindo à Pallets Inc.</h1>
      <p class="lead">Nós fornecemos a melhor solução de paletes para o seu negócio.</p>
      <router-link to="/form" class="btn btn-primary btn-lg">Preencha nosso formulário</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomesView',
    data() {
      return {
        companyName: "Pallets Inc."
      }
    }
  }
  </script>
  


<style scoped>
.container {
  margin-top: 2rem;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
}

.btn-primary {
  font-size: 1.2rem;
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  background-color: #6c63ff;
  border: none;
}

img {
  max-width: 100%;
  height: auto;
}

</style>