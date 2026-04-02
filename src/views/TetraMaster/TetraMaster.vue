<template>
  <div class="game-container">
    <div class="hand-container">
      <h3>Your Cards ({{ hand.length }})</h3>
      <div
        v-for="card in hand"
        :key="card.id"
        class="base-card tm-card"
        draggable="true"
        @dragstart="onDragStart(card)"
      >
        <div v-for="dir in card.arrows" :key="dir" class="arrow" :class="dir"></div>
        <div class="name">{{ card.name }}</div>
        <div class="tm-stats">
          <div class="tm-atk">ATK {{ card.atk }}</div>
          <div class="tm-def">DEF {{ card.def }}</div>
          <div class="tm-type">{{ card.type }}</div>
        </div>
      </div>
    </div>

    <div class="game-board grid-4x4">
      <div
        v-for="(cell, index) in board"
        :key="index"
        class="game-cell"
        :class="{ disabled: !cell.playable }"
        @dragover.prevent
        @drop="onDrop(index)"
      >
        <div v-if="cell.card" class="base-card tm-card placed">
          <div v-for="dir in cell.card.arrows" :key="dir" class="arrow" :class="dir"></div>
          <div class="name">{{ cell.card.name }}</div>
          <div class="tm-stats">
            <div class="tm-atk">ATK {{ cell.card.atk }}</div>
            <div class="tm-def">DEF {{ cell.card.def }}</div>
            <div class="tm-type">{{ cell.card.type }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import '@/assets/esthetic.css' // Import du style global

const draggedCard = ref(null)

const randomArrows = () => {
  const directions = ['n','ne','e','se','s','sw','w','nw']
  const count = Math.floor(Math.random() * 3) + 1
  return directions.sort(() => 0.5 - Math.random()).slice(0, count)
}

const hand = ref([
  { id: 1, name: 'Goblin', atk: 2, def: 1, type: 'P', arrows: randomArrows() },
  { id: 2, name: 'Fang', atk: 3, def: 2, type: 'P', arrows: randomArrows() },
  { id: 3, name: 'Skeleton', atk: 2, def: 3, type: 'M', arrows: randomArrows() },
  { id: 4, name: 'Bomb', atk: 4, def: 1, type: 'X', arrows: randomArrows() },
  { id: 5, name: 'Ironite', atk: 1, def: 4, type: 'P', arrows: randomArrows() },
  { id: 6, name: 'Flan', atk: 2, def: 4, type: 'M', arrows: randomArrows() },
  { id: 7, name: 'Sahagin', atk: 3, def: 3, type: 'P', arrows: randomArrows() },
  { id: 8, name: 'Zaghnol', atk: 5, def: 2, type: 'X', arrows: randomArrows() }
])

const board = ref(
  Array.from({ length: 16 }, () => ({
    playable: true,
    card: null
  }))
)

const onDragStart = (card) => {
  draggedCard.value = card
}

const onDrop = (index) => {
  const cell = board.value[index]
  if (!cell.playable) return
  if (cell.card) return
  if (!draggedCard.value) return

  cell.card = draggedCard.value
  hand.value = hand.value.filter(c => c.id !== draggedCard.value.id)
  draggedCard.value = null
}
</script>