<script setup>
import { ref, watch } from 'vue'

//Watcher

const nombre = ref(0)

function incrementer() {
    nombre.value++
}

watch(nombre, (nouvelleValeur, ancienneValeur) => {
    if (nouvelleValeur === 7) {
        nombre.value = 0
    }
})

//Dynamic

const isActive1 = ref(false)
const isActive2 = ref(false)

function toggleCard1() {
    isActive1.value = !isActive1.value
}
function toggleCard2() {
    isActive2.value = !isActive2.value
}

const isColored1 = ref(false)
const isColored2 = ref(false)

function toggleColor1() {
    isColored1.value = !isColored1.value
}
function toggleColor2() {
    isColored2.value = !isColored2.value
}

</script>

<template>
    <div>
        <h1>Exercice Watcher</h1>
        <p>Valeur actuelle :<span>{{ nombre }}</span></p>
        <button @click="incrementer">Incrémenter</button>
    </div>

    <div>
        <h1>Dynamic Styling</h1>
        <h2>CSS</h2>
        <div class="grid grid-cols-2 gap-6 mb-12">
            <div class="card" :class="{ fancy: isActive1 }" @click="toggleCard1">
                <p>Carte 1</p>
            </div>
            <div class="card" :class="{ noble: isActive2 }" @click="toggleCard2">
                <p>Carte 2</p>
            </div>
        </div>
        <h2>Dynamique</h2>
        <div class="grid grid-cols-2 gap-6 mb-12">
            <div class="card" :style="{ background: isColored1? 'cyan' : 'white'}" @click="toggleColor1">
                <p>Carte 3</p>
            </div>
            <div class="card" :style="{ background: isColored2? 'orange' : 'white'}" @click="toggleColor2">
                <p>Carte 4</p>
            </div>
        </div>
    </div>
</template>

<style scoped>

div {
    margin: 30px 0;
    padding: 10px 0;
}

.card {
    background-color: white;
    color: black;
    padding: 10px;
}

.fancy {
    background-color: red;
    color: white;
    transform: scale(1.05);
}

.noble {
    background-color: blue;
    color: white;
    transform: scale(1.05);
}

</style>
