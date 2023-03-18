<template>
  <div class="row align-items-md-center">
    <div class="col-md-6 container-text">
      <h2 class="mt-md-0">Nossa História</h2>
      <p class="mb-4 mb-md-0">A Pallets Inc. foi fundada em 1995 com o objetivo de fornecer soluções de logística e armazenamento para empresas de todo o mundo. Desde então, nos tornamos líderes de mercado no setor e continuamos a crescer e evoluir todos os dias.</p>
    </div>
    <div class="col-md-6 mt-4 mt-md-0">
      <div class="history-image"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HistorySection',
  mounted() {
    const images = [
      'https://image.lexica.art/full_jpg/f2500284-36d4-4be8-860d-37ffb06bf4e6',
      'https://image.lexica.art/full_jpg/69e5b2dd-e80a-4015-b93e-251d6e007e75',
      'https://image.lexica.art/full_jpg/0ab6f86b-3cda-4579-8cff-e5c365f8ce44'
    ];

    let currentImageIndex = 0;
    const historyImage = document.querySelector('.history-image');

    setInterval(() => {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      historyImage.style.backgroundImage = `url(${images[currentImageIndex]})`;
    }, 3000);
  }
};
</script>

<style lang="scss">
.container-text {
  margin-left: 2rem; 
  padding-left: 1rem;
}

.history-image {
  height: 300px;
  width: 90%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: all 0.3s ease-out;
}

@media (min-width: 768px) {
  .container-text {
    margin-left: 0;
  }

  .history-image {
    height: 450px;
  }

  .history-image:hover {
    transform: scale(1.05);
  }
}
</style>
