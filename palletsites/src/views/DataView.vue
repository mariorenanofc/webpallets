<template>
    <div class="container mt-5">
      <h1>Dados do Usuário</h1>
      <div class="row mt-5">
        <div class="col-md-6">
          <p><strong>Nome:</strong> {{ user.name }}</p>
          <p><strong>E-mail:</strong> {{ user.email }}</p>
        </div>
        <div class="col-md-6">
          <p><strong>Telefone:</strong> {{ user.phone }}</p>
          <p><strong>Endereço:</strong> {{ user.address }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: {
          name: 'John Doe',
          email: 'johndoe@example.com',
          phone: '(99) 9999-9999',
          address: '123 Main St, Anytown USA'
        }
      }
    }
  }
  </script>
  