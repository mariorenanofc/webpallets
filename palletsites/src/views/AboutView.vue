<template>
  <div class="container mt-5 mx-auto w-100">
    <div class="row mt-5">
      <div class="col-md-12">
        <div class="position-relative d-flex align-items-stretch">
          <img src="https://image.lexica.art/full_jpg/9557d02f-9daa-412d-a1b3-a3a222dccee8" class="image-container d-block w-100" alt="Sobre Nós">
          <div class="overlay"></div>
          <h1 class="position-absolute top-50 start-50 translate-middle text-white zoom">Descubra mais sobre Pallets Inc</h1>
          <a href="#values-section" class="btn btn-lg btn-primary position-absolute bottom-0 start-50 translate-middle-x mt-5">Saiba Mais</a>
        </div>
      </div>
    </div>
    <div class="row mt-5">
      <HistorySection />
      <TeamSection />
    </div>
    <div class="row mt-5" id="values-section">
      <VisionSection />
      <ValuesSection />
    </div>
  </div>
</template>


<script>
import HistorySection from "@/components/HistorySection.vue";
import TeamSection from "@/components/TeamSection.vue";
import VisionSection from "@/components/VisionSection.vue";
import ValuesSection from "@/components/ValuesSection.vue";

export default {
  name: 'AboutView',
  components: {
    HistorySection,
    TeamSection,
    VisionSection,
    ValuesSection
  }
};
</script>

<style lang="scss">
@import 'bootstrap/scss/bootstrap';

.container {
  
  display: contents;
  
  

  .image-container {
    height: 100vh;
    width: 100vw;

    position: relative;
    object-fit: cover;
    filter: brightness(80%);
    transition: filter 0.3s ease-out;
  }

  .image-container:hover {
    filter: brightness(100%);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .position-relative {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 100vh;
    position: relative;
    overflow: hidden;

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.4);
      z-index: 0;
    }

    h1 {
      color: white;
      font-size: 4rem;
      text-shadow: 2px 2px black;
      z-index: 1;
      opacity: 0;
      transition: all 0.3s ease-out;
    }

    h1.zoom {
      transform: scale(0.7);
    }

    .btn {
      opacity: 0;
      transition: all 0.3s ease-out;
      z-index: 1;
      margin-bottom: 20px;
    }

    .btn:hover {
      transform: translateY(-5px);
    }

    &:hover h1 {
      opacity: 1;
      transform: translateY(-20px);
    }

    &:hover .btn {
      opacity: 1;
    }
  }
}

@media (max-width: 768px) {
  .position-relative {
    padding-left: 0;
  }
}

</style>
