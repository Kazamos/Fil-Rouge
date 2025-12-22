<template>
  <div class="shop">
    <h1>Boutique</h1>

    <div class="points">
      Points disponibles : <strong>{{ points }}</strong>
    </div>

    <div class="cards">
      <div
        v-for="card in cards"
        :key="card.id"
        class="card"
        :class="{
          disabled: !canBuy(card),
          sold: card.bought
        }"
      >
        <div class="card-content">
          <h3>{{ card.name }}</h3>
          <p>{{ card.price }} points</p>
        </div>

        <button
          @click="buy(card)"
          :disabled="!canBuy(card)"
        >
          Acheter
        </button>

        <div v-if="card.bought" class="sold-out">
          SOLD OUT
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const points = ref(4000)

const cards = ref([
  { id: 1, name: 'Ifrit', price: 100, bought: false },
  { id: 2, name: 'Shiva', price: 150, bought: false },
  { id: 3, name: 'Ramuh', price: 200, bought: false },
  { id: 4, name: 'Leviathan', price: 250, bought: false },
  { id: 5, name: 'Titan', price: 300, bought: false },

  { id: 6, name: 'Diablos', price: 350, bought: false },
  { id: 7, name: 'Alexander', price: 400, bought: false },
  { id: 8, name: 'Phoenix', price: 450, bought: false },
  { id: 9, name: 'Cerberus', price: 500, bought: false },
  { id: 10, name: 'Carbuncle', price: 550, bought: false },

  { id: 11, name: 'Odin', price: 600, bought: false },
  { id: 12, name: 'Bahamut', price: 650, bought: false },
  { id: 13, name: 'Pandemona', price: 700, bought: false },
  { id: 14, name: 'Cactuar', price: 750, bought: false },
  { id: 15, name: 'Tonberry', price: 800, bought: false },

  { id: 16, name: 'Doomtrain', price: 820, bought: false },
  { id: 17, name: 'Eden', price: 850, bought: false },
  { id: 18, name: 'Ultima', price: 880, bought: false },
  { id: 19, name: 'Gilgamesh', price: 900, bought: false },
  { id: 20, name: 'Anima', price: 920, bought: false },

  { id: 21, name: 'Omega', price: 940, bought: false },
  { id: 22, name: 'Shinryu', price: 960, bought: false },
  { id: 23, name: 'Ultima Weapon', price: 990, bought: false },
  { id: 24, name: 'Zodiark', price: 1000, bought: false }
])

const canBuy = (card) => {
  return !card.bought && points.value >= card.price
}

const buy = (card) => {
  if (!canBuy(card)) return

  points.value -= card.price
  card.bought = true
}
</script>

<style scoped>
.shop {
  padding: 40px;
}

.points {
  font-size: 24px;
  margin-bottom: 30px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.card {
  position: relative;
  border: 3px solid #444;
  padding: 20px;
  background: #000000;
  transition: 0.2s;
}

.card.disabled {
  opacity: 0.4;
  pointer-events: none;
}

.card.sold {
  background: #e0e0e0;
}

.card-content h3 {
  font-size: 20px;
  margin-bottom: 10px;
}

button {
  margin-top: 10px;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
}

button:disabled {
  cursor: not-allowed;
}

.sold-out {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  font-size: 28px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>