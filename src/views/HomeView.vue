<template>
  <div class="home my-5 p-5 text-center" >
    <header>
      <h1>Pagina de inicio</h1>
    </header>
    <main class="container" >

      <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/img/colaciones.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h3>Colaciones</h3>
        <p><strong>Disfruta las mejores colaciones</strong></p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="../assets/img/desayunos.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h3>Desayunos</h3>
        <p><strong>Ricos y nutritivos desayunos</strong></p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="../assets/img/dulces.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h3>Dulces y postres</h3>
        <p><strong>Los más exquisitos postres</strong></p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

    </main>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: "HomeView",
  components: {
    
  }
}
</script>

<style scoped>
.home{
  min-height: 80vh;
}
.carousel img{
  width: 70%;
  aspect-ratio: 3/2;
}

</style>
