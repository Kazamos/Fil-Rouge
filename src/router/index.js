import { createRouter, createWebHistory } from 'vue-router'

// -----------------------------
// 🔹 2. Routes manuelles
// -----------------------------
const manualRoutes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home/Home.vue'),
  },
  {
    path: '/jouer',
    name: 'jouer',
    component: () => import('../views/Jouer/Jouer.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About/About.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact/Contact.vue'),
  },
  {
    path: '/boutique',
    name: 'boutique',
    component: () => import('../views/Boutique/Boutique.vue'),
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/Profile/Profile.vue'),
  },
  {
    path: '/tetramaster',
    name: 'tetramaster',
    component: () => import('../views/TetraMaster/TetraMaster.vue'),
  },  
  {
    path: '/tripletriad',
    name: 'tripletriad',
    component: () => import('../views/TripleTriad/TripleTriad.vue'),
  },
]

// -----------------------------
// 🔹 3. Fusion des routes
// -----------------------------
const routes = [
  ...manualRoutes
]

// -----------------------------
// 🔹 4. Création du routeur
// -----------------------------
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router