<template>
  <div class="tm-container">
    <!-- Player hand -->
    <div class="hand">
      <h3>Your Cards</h3>

      <div
        v-for="card in hand"
        :key="card.id"
        class="card"
        draggable="true"
        @dragstart="onDragStart(card)"
      >
        <div class="name">{{ card.name }}</div>

        <div class="stats">
          <span class="atk">ATK {{ card.atk }}</span>
          <span class="def">DEF {{ card.def }}</span>
          <span class="type">{{ card.type }}</span>
        </div>
      </div>
    </div>

    <!-- Board -->
    <div class="board">
      <div
        v-for="(cell, index) in board"
        :key="index"
        class="cell"
        @dragover.prevent
        @drop="onDrop(index)"
      >
        <div v-if="cell" class="card placed">
          <div class="name">{{ cell.name }}</div>

          <div class="stats">
            <span class="atk">ATK {{ cell.atk }}</span>
            <span class="def">DEF {{ cell.def }}</span>
            <span class="type">{{ cell.type }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const draggedCard = ref(null)

const hand = ref([
  { id: 1, name: 'Goblin', atk: 2, def: 1, type: 'P' },
  { id: 2, name: 'Fang', atk: 3, def: 2, type: 'P' },
  { id: 3, name: 'Skeleton', atk: 2, def: 3, type: 'M' },
  { id: 4, name: 'Bomb', atk: 4, def: 1, type: 'X' },
  { id: 5, name: 'Ironite', atk: 1, def: 4, type: 'P' }
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

.tm-container {
  display: flex;
  gap: 80px;
  padding: 40px;
}

/* HAND */
.hand {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.hand h3 {
  font-size: 28px;
}

/* CARD */
.card {
  width: 160px;
  height: 160px;
  border: 4px solid #222;
  background: #62c4fd;
  position: relative;
  cursor: grab;
}

.card.placed {
  cursor: default;
}

/* NAME */
.name {
  text-align: center;
  font-weight: bold;
  margin-top: 8px;
}

/* STATS */
.stats {
  position: absolute;
  bottom: 8px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  font-weight: bold;
}

.atk {
  color: #8f2a1f;
}

.def {
  color: #1b5881;
}

.type {
  background: #333;
  color: white;
  padding: 2px 2px;
  border-radius: 4px;
}

/* BOARD */
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