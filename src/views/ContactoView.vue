<template>
  <header>
    <div class="contacto text-center mt-5 pt-5">
      <h1>Contacto</h1>
    </div>
  </header>
  <main class="container">
    <section>
      <h3>Déjanos tu comentario</h3>
      <form @submit.prevent="addComentario">
        <div class="">
          <label for="email" class="form-label">Correo</label>
          <input
            type="email"
            class="form-control"
            id="email"
            name="email"
            placeholder="tucorreo@ejemplo.com"
            v-model="nuevoComentario.email"
            required
          />
        </div>
        <div class="mb-3">
          <label for="comentarios" class="form-label">Comentarios</label>
          <textarea
            class="form-control"
            id="comentarios"
            name="comentarios"
            rows="3"
            v-model="nuevoComentario.comentario"
            required
          ></textarea>
        </div>
        <div>
          <button type="submit" class="btn btn-primary">
            Enviar comentario
          </button>
        </div>
      </form>
      <div v-if="mensajeEnviado" class="alert alert-success m-2">
        Tu comentario ha sido enviado. ¡Gracias por contactarnos!
      </div>
    </section>
    <div class="text-center m-5">
      <router-link class="btn btn-primary" to="/">Volver al inicio</router-link>
    </div>
  </main>
</template>

<script>
export default {
  name: "ContactoView",
  data() {
    return {
      comentarios: [],
      nuevoComentario: {
        email: "",
        comentario: "",
      },
      mensajeEnviado: false,
    };
  },
  methods: {
    addComentario: function () {
      this.comentarios.push(this.nuevoComentario);
      this.nuevoComentario = {
        email: "",
        comentarios: "",
      };
      this.mensajeEnviado = true;
    },
  },
};
</script>

<style scoped>
/* .contacto {
  height: 400px;
} */
</style>
