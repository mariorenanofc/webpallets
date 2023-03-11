<template>
  <div class="container">
    <h1 class="mt-5 mb-4 text-center">Preencha seus dados</h1>
    <form @submit.prevent="submitForm" class="form">
      <div class="form-group">
        <label for="name">Nome completo</label>
        <input type="text" class="form-control" id="name" v-model="form.name" placeholder="Digite seu nome completo" required>
      </div>
      <div class="form-group">
        <label for="cpf">CPF</label>
        <input type="text" class="form-control" id="cpf" v-model="form.cpf" placeholder="Digite seu CPF" required>
      </div>
      <div class="form-group">
        <label for="phone">Telefone</label>
        <input type="text" class="form-control" id="phone" v-model="form.phone" placeholder="Digite seu telefone" required>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" id="email" v-model="form.email" placeholder="Digite seu email" required>
      </div>
      <div class="form-group">
        <label for="image">Imagem</label>
        <input type="file" class="form-control-file" id="image" @change="onImageChange">
      </div>
      <button type="submit" class="btn btn-primary">Enviar</button>
    </form>
    <div class="mt-4">
      <p>{{ message }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "FormView",
  data() {
    return {
      form: {
        name: "",
        cpf: "",
        phone: "",
        email: "",
        image: null,
      },
      message: "",
    };
  },
  methods: {
    onImageChange(event) {
      this.form.image = event.target.files[0];
    },
    async submitForm() {
      try {
        if (!this.form.image) {
          throw new Error("Por favor, selecione uma imagem.");
        }

        const formData = new FormData();
        formData.append("name", this.form.name);
        formData.append("cpf", this.form.cpf);
        formData.append("phone", this.form.phone);
        formData.append("email", this.form.email);
        formData.append("image", this.form.image);

        const response = await fetch("http://localhost:3000/posts", {
          method: "POST",
          body: formData,
        });

        const data = await response.json();
        this.message = data.message;
        this.form.name = "";
        this.form.cpf = "";
        this.form.phone = "";
        this.form.email = "";
        this.form.image = null;

        alert("Formulário enviado com sucesso!");
      } catch (error) {
        console.log(error);
        this.message =
          "Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.";
      }
    },
  },
};
</script>