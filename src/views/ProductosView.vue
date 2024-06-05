<template>
  <div class="productos container my-5 p-5">
    <header>
      <h1 class="text-center">Nuestros Productos</h1>
    </header>
    <main>

        <div class="row g-4">
                <div class="col-12 col-md-6 col-lg-3" v-for="(producto, index) in productos" :key="index">
                <Card :producto="producto"/>
            </div>
            </div>

      <div class="text-center m-5">
        <router-link class="btn btn-primary" to="/"
          >Volver al inicio</router-link
        >
      </div>
    </main>
    
  </div>
</template>

<script>
import Card from "../components/Card.vue";

export default {
  name: "ProductosView",
  components: {
    Card,
  },
  props: ["productos"],
  created(){
    this.productos
  }
};
</script>
