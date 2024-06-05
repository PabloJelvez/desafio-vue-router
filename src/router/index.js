import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/peoductos',
    name: 'productos',
    component: () => import('../views/ProductosView.vue'),
    props: (route) => {
      return {
        productos: [
          {
            nombre: "Bebidas",
            precio: 1500,
            descripcion: "Deliciosas y refrescantes bebidas",
            cantidad: 20,
            imagen: require("../assets/img/bebidas.jpg"),
          },
          {
            nombre: "Colaciones",
            precio: 3500,
            descripcion: "Exquisitas colaciones para compartir",
            cantidad: 10,
            imagen: require("../assets/img/colaciones.jpg"),
          },
          {
            nombre: 'Desayunos',
            precio: 6000,
            descripcion: 'Desayunos nutritivos y deliciosos',
            cantidad: 15,
            imagen: require("../assets/img/desayunos.jpg"),
          },
          {
            nombre: 'Dulces',
            precio: 1500,
            descripcion: 'Gran variedad de dulces y postres',
            cantidad: 25,
            imagen: require("../assets/img/dulces.jpg"),
          },
          {
            nombre: 'empanadas',
            precio: 4000,
            descripcion: 'Las mejores empanadas de la zona',
            cantidad: 35,
            imagen: require("../assets/img/empanadas.jpg"),
          },
          {
            nombre: 'Verduras',
            precio: 3000,
            descripcion: 'Frescas y nutritivas verduras del huerto',
            cantidad: 20,
            imagen: require("../assets/img/verduras.jpg"),
          },
          
        ],
      };
    },
  },

  {
    path: '/contacto',
    name: 'contacto',
    
    component: () => import('../views/ContactoView.vue')
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/NotFoundView.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
