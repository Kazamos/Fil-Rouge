import { createRouter, createWebHistory } from 'vue-router'

// -----------------------------
// 🔹 1. Routes automatiques
// -----------------------------
const tripleTriadModules = import.meta.glob('../views/TripleTriad/*.vue')
const tetraMasterModules = import.meta.glob('../views/TetraMaster/*.vue')

// Fonction utilitaire pour générer des routes
const makeRoutes = (modules, basePath) => {
  return Object.keys(modules).map((path) => {
    const name = path.split('/').pop().replace('.vue', '')
    return {
      path: `${basePath}/${name.toLowerCase()}`,
      name: name,
      component: modules[path],
    }
  })
}

// Génération automatique des groupes
const tripleTriadRoutes = makeRoutes(tripleTriadModules, '/TripleTriad')
const tetraMasterRoutes = makeRoutes(tetraMasterModules, '/TetraMaster')

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
    path: '/login',
    name: 'login',
    component: () => import('../views/Login/Login.vue'),
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/Profile/Profile.vue'),
  },
]

// -----------------------------
// 🔹 3. Fusion des routes
// -----------------------------
const routes = [
  ...manualRoutes,
  ...tripleTriadRoutes,
  ...tetraMasterRoutes,
]

// -----------------------------
// 🔹 4. Création du routeur
// -----------------------------
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router