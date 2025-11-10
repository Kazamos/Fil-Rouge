<template>
    <div class="container mx-auto p-6">
        <h1 class="text-4xl font-bold text-center mb-8 text-primary">Tous les Exercices</h1>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Carte pour TP Data Binding -->
            <div v-for="(oneRoute, index) in exercicesRoutes" :key="index"
                class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-300">
                <div class="card-body">
                    <h2 class="card-title text-2xl">{{ oneRoute.name }}</h2>
                    <p class="text-base-content/70">{{ oneRoute.meta.description }}</p>
                    <div class="card-actions justify-end mt-4">
                        <router-link :to="oneRoute.path" class="btn btn-secondary">
                            Voir l'exercice
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5 ml-1">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </router-link>
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>

<script setup lang="js">
import router from '../../router';
// Filtrer les routes qui commencent par '/exercice-'
const exercicesRoutes = router.options.routes.filter(route => route.path.startsWith('/exercice-'));
console.log(exercicesRoutes);


</script>

<style scoped>
/* Animations supplémentaires pour les cartes */
.card {
    transform: translateY(0);
    transition: transform 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
}
</style>
