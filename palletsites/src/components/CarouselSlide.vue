<template>
  <div
    id="carouselExampleCaptions"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        v-for="(slide, index) in slides"
        :key="index"
        :data-bs-target="'#carouselExampleCaptions'"
        :data-bs-slide-to="index"
        :class="{ active: index === currentSlideIndex }"
        aria-current="true"
        :aria-label="'Slide ' + (index + 1)"
      ></button>
    </div>
    <div class="carousel-inner">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        :class="{ 'carousel-item': true, active: index === currentSlideIndex }"
      >
        <img :src="slide.image" class="d-block w-100" :alt="slide.altText" />
        <div class="carousel-caption d-none d-md-block">
          <h5>{{ slide.captionTitle }}</h5>
          <p>{{ slide.captionText }}</p>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      :data-bs-target="'#carouselExampleCaptions'"
      @click="previousSlide"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      :data-bs-target="'#carouselExampleCaptions'"
      @click="nextSlide"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "CarouselSlide",
  data() {
    return {
      currentSlideIndex: 0,
      slides: [],
    };
  },
  mounted() {
    this.addSlide({
      image: "https://15976.cdn.simplo7.net/static/15976/sku/industria-e-comercio-lote-porta-pallet-pallets-palete-paletes-280m-100-montantes-600-longarinas-usado--p-1650553258689.jpg",
      altText: "Slide 1",
      captionTitle: "Grande Sucesso",
      captionText:
        "Nosso objetivo ?? tornar a movimenta????o de carga em seu neg??cio o mais f??cil poss??vel. ",
    });
    this.addSlide({
      image: "https://www.grupotpc.com/wp-content/uploads/2021/08/post_thumbnail-8b038aeb1f4998ef7428312a1be7aa8d.jpeg",
      altText: "Slide 2",
      captionTitle: "Estamos Preparados",
      captionText:
        "N??s entendemos que a log??stica ?? essencial para o seu neg??cio e estamos aqui para ajud??-lo a encontrar os pallets certos para suas necessidades. Nossa equipe de especialistas em pallets est?? dispon??vel para responder a quaisquer perguntas que voc?? possa ter sobre nossos produtos.",
    });
    this.addSlide({
      image: "https://jornalatos.net/wp-content/uploads/2021/10/empresa-ELOPACK-fabricante-de-pallets-DESTAQUE-800x445.jpg",
      altText: "Slide 3",
      captionTitle: "Durabilidade e Sustentabilidade",
      captionText:
        "Os nossos pallets s??o fabricados com os mais altos padr??es de qualidade e s??o projetados para suportar cargas pesadas. Eles s??o dur??veis, resistentes e f??ceis de usar. Al??m disso, nossos pallets s??o feitos de materiais sustent??veis, o que significa que eles s??o ecologicamente corretos e n??o prejudicam o meio ambiente.",
    });
  },
  methods: {
    addSlide(slide) {
      this.slides.push(slide);
    },
    nextSlide() {
      this.currentSlideIndex =
        (this.currentSlideIndex + 1) % this.slides.length;
    },
    previousSlide() {
      this.currentSlideIndex =
        (this.currentSlideIndex + this.slides.length - 1) % this.slides.length;
    },
  },
};
</script>

<style scoped>

.carousel-inner img {
  filter: brightness(50%);
  height: 400px;   
  object-fit: cover;
}
</style>
