<script setup>
import { ref, watch } from 'vue'

const inputClass = ref('')
const inputColor = ref('')
const classe = ref('')
const color = ref('')
const titre = ref(true)

watch(inputClass, (nouvelleValeur) => {
    if (nouvelleValeur === 'hello') {
        classe.value = 'maClasseHello'
    } else if (nouvelleValeur === 'world') {
        classe.value = 'maClasseWorld'
    } else {
        classe.value = ''
    }
})

watch(inputColor, (nouvelleValeur) => {
  color.value = nouvelleValeur
})

function toggleTitre() {
  titre.value = !titre.value
}

</script>

<template>
    <div>
        <h1>TP:Dynamic Styling Mode : Composition</h1>
        <input v-model="inputClass"/>
        <h2 v-show="titre" :class="classe">Hello World (Classe dynamique)</h2>
        <input v-model="inputColor"/>
        <h2 :style="{ 'background-color': color }">Hello World (Couleur dynamique)</h2>
        <button @click="toggleTitre">Afficher le 1er titre</button>
    </div>
</template>

<style scoped>

h1 {
    margin: 60px 0;
}

h2 {
    margin: 20px 0;
}

input {
    background-color: rgb(61, 61, 61);
}

.maClasseHello {
    background-color: green;
    transform: scale(1.1);
}

.maClasseWorld {
    background-color: blue;
    transform: scale(1.1);
}

</style>
