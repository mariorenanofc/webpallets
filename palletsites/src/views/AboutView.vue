<template>
  <div class="container mt-5">
    <div class="row mt-5">
      <div class="col-md-12">
        <div class="position-relative">
          <img src="https://image.lexica.art/full_jpg/9557d02f-9daa-412d-a1b3-a3a222dccee8" class="image-container d-block w-100" alt="Sobre Nós">
          <h1 class="position-absolute top-90 start-50 translate-middle-x">Sobre Pallets Inc</h1>
        </div>
      </div>
    </div>
    <div class="row mt-5">
      <HistorySection />
      <TeamSection />
    </div>
    <div class="row mt-5">
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

  .image-container {
  height: 480px;
  width: 100%;
  position: relative;
  object-fit: cover;
  filter: brightness(80%);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.position-relative {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 40px;
  h1 {
    color: white;
    font-size: 4rem;
    text-shadow: 2px 2px black;
    z-index: 1;
  }
}
</style>