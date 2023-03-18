<template>
  <div class="row mt-5 team-section align-items-center">
    <div class="col-md-6 order-md-2">
      <h2 class="text-center text-md-left">Nossa Equipe</h2>
      <p class="text-center text-md-left">Temos uma equipe diversificada de profissionais altamente qualificados em todos os departamentos da empresa, desde logística até desenvolvimento de software. Nosso objetivo é sempre oferecer aos nossos clientes a melhor experiência possível.</p>
    </div>
    <div class="col-md-6 order-md-1">
      <img src="https://image.lexica.art/full_jpg/0255289e-f2d3-4962-9cb6-ff0008d0d054" alt="Equipe da Pallets Inc." class="img-fluid">
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'TeamSection',
};
</script>

<style lang="scss">
.team-section {
  background-color: #8d5ffa;
  color: #000;
  padding: 3rem 1rem;
  align-content: center;

  img {
    margin-bottom: 1rem;
  }
}

@media (min-width: 768px) {
  .team-section {
    padding: 5rem 1rem;
  }
}
</style>
