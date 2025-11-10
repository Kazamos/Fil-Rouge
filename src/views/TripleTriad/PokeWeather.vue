<script setup>
import { ref, onMounted } from 'vue'

const pokemons = ref('')
const pokemons9G = ref('')
const weather = ref('')

const fetchPokemons = async () => {
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
        const data = await res.json()
        pokemons.value = data.results
    } catch (error) {
        console.error('Erreur Pokémon:', error)
    }
}

const fetchWeather = async () => {
    try {
        const res = await fetch('https://prevision-meteo.ch/services/json/toulouse')
        const data = await res.json()
        weather.value = data
    } catch (error) {
        console.error('Erreur météo:', error)
    }
}

const fetchPokemons9G = async () => {
    try {
        const res = await fetch('https://tyradex.vercel.app/api/v1/gen/9')
        const data = await res.json()
        pokemons9G.value = data.slice(0, 10)
    } catch (error) {
        console.error('Erreur Pokémon:', error)
    }
}

onMounted(() => {
    fetchPokemons()
    fetchWeather()
    fetchPokemons9G()
})

</script>

<template>
    <div class="p-6">
        <h1>Une simple requête HTTP GET</h1>
        <h2>Les pokémons</h2>
        <ul>
            <li v-for="pokemon in pokemons">{{ pokemon.name }}</li>
        </ul>
        <h2>Météo à Toulouse</h2>
        <div v-if="weather">
            <p>Température maximale : {{ weather.fcst_day_0.tmax }} °C</p>
            <p>Température minimale : {{ weather.fcst_day_0.tmin }} °C</p>
            <p>Température actuelle : {{ weather.current_condition.tmp }} °C</p>
            <p>Condition : {{ weather.current_condition.condition }}</p>
        </div>
        <h2>Les pokémons de la 9G</h2>
        <ul>
            <li v-for="pokemon in pokemons9G">{{ pokemon.name.fr }}</li>
        </ul>
    </div>
</template>

<style scoped>
h1{
    margin: 40px;
}
h2{
    margin: 20px;
    font-weight: bold;
}
</style>