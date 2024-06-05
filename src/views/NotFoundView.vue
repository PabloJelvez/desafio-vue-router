<template>
    <header class="py-5 my-5 notFound">
        <h1 class="text-center text-danger">Página no encontrada.</h1>
        <p class="text-center"><strong>404 Not Found</strong></p>
        <div class="text-center">
            <router-link to="/" class="btn btn-primary">Regresar al inicio</router-link>
        </div>
        
    </header>
</template>
<script>
export default {
    name: "NotFoundView"
    
}
</script>
<style scoped>
.notFound{
    height: 400px;
}
</style>