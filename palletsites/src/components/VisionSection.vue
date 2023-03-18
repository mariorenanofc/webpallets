<template>
  <div class="container">
    <div id="valueCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#valueCarousel" data-bs-slide-to="0" class="active"
          aria-current="true" aria-label="Valor 1"></button>
        <button type="button" data-bs-target="#valueCarousel" data-bs-slide-to="1" aria-label="Valor 2"></button>
        <button type="button" data-bs-target="#valueCarousel" data-bs-slide-to="2" aria-label="Valor 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="row align-items-center">
            <div class="col-md-6">
              <h2>Comprometimento</h2>
              <p>Nós nos comprometemos em fornecer produtos e serviços de qualidade excepcional, além de um atendimento ao cliente inigualável.</p>
            </div>
            <div class="col-md-6">
              <img src="https://image.lexica.art/full_jpg/dab48e7a-3a14-4c4b-861e-5415cff564ab" alt="Comprometimento" class="d-block w-100">
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row align-items-center">
            <div class="col-md-6">
              <h2>Inovação</h2>
              <p>Estamos sempre buscando maneiras inovadoras de atender às necessidades de nossos clientes e de melhorar nossos processos internos.</p>
            </div>
            <div class="col-md-6">
              <img src="https://image.lexica.art/full_jpg/bf18ac1c-5e78-43d2-af35-170a404b3417" alt="Inovação" class="d-block w-100">
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row align-items-center">
            <div class="col-md-6">
              <h2>Responsabilidade Social</h2>
              <p>Estamos comprometidos em causar um impacto positivo em nossas comunidades e no meio ambiente, através de práticas comerciais responsáveis e sustentáveis.</p>
            </div>
            <div class="col-md-6">
              <img src="https://image.lexica.art/full_jpg/7e5bf7c4-d124-45e9-8b2c-fb8d8fe223b5" alt="Responsabilidade Social" class="d-block w-100">
            </div>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#valueCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Anterior</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#valueCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Próximo</span>
</button>
</div>

  </div>
</template>
<script>
export default {
  name: 'ValuesSection',
  data() {
    return {
      currentSlide: 0,
      intervalId: null,
      slides: [
        {
          title: 'Comprometimento',
          description: 'Nós nos comprometemos em fornecer produtos e serviços de qualidade excepcional, além de um atendimento ao cliente inigualável.',
          image: 'https://image.lexica.art/full_jpg/dab48e7a-3a14-4c4b-861e-5415cff564ab',
        },
        {
          title: 'Inovação',
          description: 'Estamos sempre buscando maneiras inovadoras de atender às necessidades de nossos clientes e de melhorar nossos processos internos.',
          image: 'https://image.lexica.art/full_jpg/bf18ac1c-5e78-43d2-af35-170a404b3417',
        },
        {
          title: 'Responsabilidade Social',
          description: 'Estamos comprometidos em causar um impacto positivo em nossas comunidades e no meio ambiente, através de práticas comerciais responsáveis e sustentáveis.',
          image: 'https://image.lexica.art/full_jpg/7e5bf7c4-d124-45e9-8b2c-fb8d8fe223b5',
        },
      ],
    }
  },
  mounted() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000);
  },
  methods: {
    setActiveSlide(index) {
      this.currentSlide = index;
    },
    nextSlide() {
      if (this.currentSlide === this.slides.length - 1) {
        this.currentSlide = 0;
      } else {
        this.currentSlide++;
      }
    },
    prevSlide() {
      if (this.currentSlide === 0) {
        this.currentSlide = this.slides.length - 1;
      } else {
        this.currentSlide--;
      }
    },
  },
};
</script>


<style scoped>

    .carousel-inner{
      margin-left: 10px;
      margin-right: 10px;
      background-color: #2f1767;
      padding-left: 5px;
      color: #bdbdbd;
  }
  .carousel-item h2 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }

  .carousel-item p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  .carousel-item img {
    height: 100%;
    object-fit: cover;
  }

  .carousel-indicators button {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: none;
    background-color: #bdbdbd;
    margin-right: 10px;
  }

  .carousel-indicators button.active {
    background-color: #000000;
  }

  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    background-image: none;
  }

  .carousel-control-prev {
    width: 7%;
  }

  .carousel-control-next {
    width: 7%;
  }

  @media (max-width: 768px) {
    .carousel-item {
      height: 400px;
    }
  }

  @media (max-width: 576px) {
    .carousel-item {
      height: 300px;
    }
  }
</style>