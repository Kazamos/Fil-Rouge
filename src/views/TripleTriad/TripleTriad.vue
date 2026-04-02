<template>
  <div class="game-container">
    <div class="hand-container">
      <h3>Vos cartes</h3>
      <div
        v-for="card in hand"
        :key="card.id"
        class="base-card tt-card"
        draggable="true"
        @dragstart="onDragStart(card)"
      >
        <div class="tt-value top">{{ card.top }}</div>
        <div class="tt-value right">{{ card.right }}</div>
        <div class="tt-value bottom">{{ card.bottom }}</div>
        <div class="tt-value left">{{ card.left }}</div>
        <div class="name">{{ card.name }}</div>
      </div>
    </div>

    <div class="game-board grid-3x3">
      <div
        v-for="(cell, index) in board"
        :key="index"
        class="game-cell"
        @dragover.prevent
        @drop="onDrop(index)"
      >
        <div v-if="cell" class="base-card tt-card placed">
          <div class="tt-value top">{{ cell.top }}</div>
          <div class="tt-value right">{{ cell.right }}</div>
          <div class="tt-value bottom">{{ cell.bottom }}</div>
          <div class="tt-value left">{{ cell.left }}</div>
          <div class="name">{{ cell.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import '@/assets/esthetic.css' // Import du style global

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