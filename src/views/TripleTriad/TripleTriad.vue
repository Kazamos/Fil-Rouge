<template>
  <div class="container">
    <div class="hand">
      <h3>Vos cartes</h3>

      <div
        v-for="card in hand"
        :key="card.id"
        class="card"
        draggable="true"
        @dragstart="onDragStart(card)"
      >
        <div class="value top">{{ card.top }}</div>
        <div class="value right">{{ card.right }}</div>
        <div class="value bottom">{{ card.bottom }}</div>
        <div class="value left">{{ card.left }}</div>
        <div class="name">{{ card.name }}</div>
      </div>
    </div>

    <div class="board">
      <div
        v-for="(cell, index) in board"
        :key="index"
        class="cell"
        @dragover.prevent
        @drop="onDrop(index)"
      >
        <div v-if="cell" class="card placed">
          <div class="value top">{{ cell.top }}</div>
          <div class="value right">{{ cell.right }}</div>
          <div class="value bottom">{{ cell.bottom }}</div>
          <div class="value left">{{ cell.left }}</div>
          <div class="name">{{ cell.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const draggedCard = ref(null)

const hand = ref([
  { id: 1, name: 'Ifrit', top: 6, right: 2, bottom: 4, left: 5 },
  { id: 2, name: 'Shiva', top: 5, right: 6, bottom: 3, left: 4 },
  { id: 3, name: 'Ramuh', top: 4, right: 5, bottom: 6, left: 3 },
  { id: 4, name: 'Diablos', top: 7, right: 3, bottom: 2, left: 6 },
  { id: 5, name: 'Odin', top: 8, right: 5, bottom: 3, left: 4 }
])

const board = ref(Array(9).fill(null))

const onDragStart = (card) => {
  draggedCard.value = card
}

const onDrop = (index) => {
  if (board.value[index] !== null) return
  if (!draggedCard.value) return

  board.value[index] = draggedCard.value
  hand.value = hand.value.filter(c => c.id !== draggedCard.value.id)
  draggedCard.value = null
}
</script>

<style scoped>
.container {
  display: flex;
  gap: 80px;
  padding: 40px;
}

.hand {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.hand h3 {
  font-size: 28px;
}

.card {
  position: relative;
  width: 160px;
  height: 160px;
  border: 4px solid #222;
  background: #0180a7;
  cursor: grab;
}

.card.placed {
  cursor: default;
}

.name {
  position: absolute;
  bottom: 6px;
  width: 100%;
  text-align: center;
  font-weight: bold;
}

.value {
  position: absolute;
  font-size: 22px;
  font-weight: bold;
}

.top {
  top: 6px;
  left: 50%;
  transform: translateX(-50%);
}

.right {
  right: 6px;
  top: 50%;
  transform: translateY(-50%);
}

.bottom {
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
}

.left {
  left: 6px;
  top: 50%;
  transform: translateY(-50%);
}

.board {
  display: grid;
  grid-template-columns: repeat(3, 160px);
  grid-template-rows: repeat(3, 160px);
  gap: 16px;
}

.cell {
  border: 4px solid #444;
  background: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>