<script setup>
import { ref, computed } from 'vue'
import { useRouter, RouterLink } from 'vue-router'

const router = useRouter()
const openDropdown = ref(null) // Stocke le nom du menu ouvert

// Récupérer toutes les routes
const routes = computed(() => router.getRoutes())

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
            <RouterLink to="/tripletriad" >Triple Triad</RouterLink>
            <RouterLink to="/tetramaster" >Tetra Master</RouterLink>
            <RouterLink to="/Boutique" >Boutique</RouterLink>
            <RouterLink to="/Profile" >Profil</RouterLink>
            <RouterLink to="/Contact" >Contact</RouterLink>

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