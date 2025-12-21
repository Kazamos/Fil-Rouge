<template>
  <div class="tm-container">
    <!-- Hand -->
    <div class="hand">
      <h3>Your Cards ({{ hand.length }})</h3>

      <div
        v-for="card in hand"
        :key="card.id"
        class="card"
        draggable="true"
        @dragstart="onDragStart(card)"
      >
        <div class="name">{{ card.name }}</div>

        <div class="stats">
          <div class="atk">ATK {{ card.atk }}</div>
          <div class="def">DEF {{ card.def }}</div>
          <div class="type">{{ card.type }}</div>
        </div>
      </div>
    </div>

    <!-- Board -->
    <div class="board">
      <div
        v-for="(cell, index) in board"
        :key="index"
        class="cell"
        :class="{ disabled: !cell.playable }"
        @dragover.prevent
        @drop="onDrop(index)"
      >
        <div v-if="cell.card" class="card placed">
          <div class="name">{{ cell.card.name }}</div>

          <div class="stats">
            <div class="atk">ATK {{ cell.card.atk }}</div>
            <div class="def">DEF {{ cell.card.def }}</div>
            <div class="type">{{ cell.card.type }}</div>
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
  { id: 5, name: 'Ironite', atk: 1, def: 4, type: 'P' },
  { id: 6, name: 'Flan', atk: 2, def: 4, type: 'M' },
  { id: 7, name: 'Sahagin', atk: 3, def: 3, type: 'P' },
  { id: 8, name: 'Zaghnol', atk: 5, def: 2, type: 'X' }
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

<style scoped>

.tm-container {
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
  width: 160px;
  height: 160px;
  border: 4px solid #222;
  background: #f5f5f5;
  position: relative;
  cursor: grab;
}

.card.placed {
  cursor: default;
}

.name {
  text-align: center;
  font-weight: bold;
  margin-top: 6px;
}

.stats {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-weight: bold;
}

.atk {
  color: #c0392b;
}

.def {
  color: #2980b9;
}

.type {
  background: #333;
  color: white;
  padding: 2px 10px;
  border-radius: 6px;
}

.board {
  display: grid;
  grid-template-columns: repeat(4, 160px);
  grid-template-rows: repeat(4, 160px);
  gap: 16px;
}

.cell {
  border: 4px solid #444;
  background: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cell.disabled {
  background: transparent;
  border: none;
  pointer-events: none;
}
</style>