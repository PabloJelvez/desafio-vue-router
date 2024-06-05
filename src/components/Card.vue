<template lang="">
  <!-- cartas -->
        <div class="card">
          <img :src="producto.imagen" class="card-img-top" :alt="producto.nombre" />
          <div class="card-body">
            <h5 class="card-title fw-bold">{{producto.nombre}}</h5>
            <p class="card-text">
            {{producto.descripcion}}
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Precio: {{producto.precio}}</li>
            <li class="list-group-item">Cantidad: {{producto.cantidad}}</li>
          </ul>
          <div class="card-body">
            <a href="#" class="card-link">Ver más</a>
            <a href="#" class="card-link">Comprar</a>
          </div>
        </div>
     
  
</template>
<script>
export default {
  name: "Card",
  props:{
    producto: Object
  }
  
}
</script>
<style lang="">
  
</style>