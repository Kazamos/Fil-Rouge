<script setup>
import { ref, computed } from 'vue'
import { useRouter, RouterLink } from 'vue-router'

const router = useRouter()
const openDropdown = ref(null) // Stocke le nom du menu ouvert

// Récupérer toutes les routes
const routes = computed(() => router.getRoutes())

// Regrouper automatiquement par dossier
const groupedRoutes = computed(() => {
const groups = {
    TripleTriad: [],
    TetraMaster: [],
}

routes.value.forEach((r) => {
    if (r.path.startsWith('/tripleTriad/')) groups.TripleTriad.push(r)
    else if (r.path.startsWith('/tetraMaster/')) groups.TetraMaster.push(r)
})

// Tri alphabétique
Object.keys(groups).forEach((key) => {
    groups[key].sort((a, b) => a.name.localeCompare(b.name))
})

return groups
})

// Liens statiques
const staticLinks = [
{ name: 'Login', path: '/login' },
{ name: 'Profile', path: '/profile' },
{ name: 'Contact', path: '/contact' },
]

// Fonction de toggle (ouvre/ferme le menu)
const toggleDropdown = (menuName) => {
openDropdown.value = openDropdown.value === menuName ? null : menuName
}
</script>

<template>
<header class="fixed top-0 left-0 w-full bg-[#2e2e2e] mb-5 p-5 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

<!-- Logo / Titre -->
        <h1 class="text-xl font-bold">
            <RouterLink to="/" class="hover:text-blue-600 transition">MonApp</RouterLink>
        </h1>

<!-- Navigation -->
        <nav class="hidden md:flex space-x-6 relative">
            <RouterLink to="/About" >À propos</RouterLink>
            <RouterLink to="/jouer" >Jouer</RouterLink>
        
<!-- Menus dynamiques -->
            <div v-for="(group, name) in groupedRoutes" :key="name" class="relative">
                <button class="btn-Header" @click="toggleDropdown(name)">
                    {{ name }}
                    <span class="ml-1 text-sm">▼</span>
                </button>

                <transition name="fade">
                    <div v-if="openDropdown === name" class="absolute left-0 mt-2 bg-[#2e2e2e] border rounded shadow-lg w-48 z-10">
                        <RouterLink v-for="r in group" :key="r.path" :to="r.path" class="block px-4 py-2 hover:bg-blue-100 transition" @click="openDropdown = null">
                            {{ r.name }}
                        </RouterLink>
                    </div>
                </transition>
            </div>

<!-- Liens statiques -->
            
            <RouterLink v-for="link in staticLinks" :key="link.path" :to="link.path" class="hover:text-blue-600 transition">
                {{ link.name }}
            </RouterLink>
        </nav>
    </div>
</header>
</template>

<style scoped>
header {
    backdrop-filter: blur(8px);
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 0.15s ease;
}

.fade-enter-from, .fade-leave-to {
    opacity: 0;
}
</style>