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
        <div
            v-for="dir in card.arrows"
            :key="dir"
            class="arrow"
            :class="dir"
        ></div>

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
            <div
                v-for="dir in card.arrows"
                :key="dir"
                class="arrow"
                :class="dir"
            ></div>

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

.triangle {
  position: absolute;
  top: 6px;
  left: 6px;
  width: 0;
  height: 0;
  border-top: 18px solid #f1c40f;   /* yellow */
  border-right: 18px solid transparent;
}

.arrow {
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-color: transparent;
}

/* DARK YELLOW */
.arrow {
  --arrow-color: #c9a400;
}

/* NORTH */
.arrow.n {
  top: 4px;
  left: 50%;
  transform: translateX(-50%);
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 14px solid var(--arrow-color);
}

/* SOUTH */
.arrow.s {
  bottom: 4px;
  left: 50%;
  transform: translateX(-50%);
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 14px solid var(--arrow-color);
}

/* EAST */
.arrow.e {
  right: 4px;
  top: 50%;
  transform: translateY(-50%);
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 14px solid var(--arrow-color);
}

/* WEST */
.arrow.w {
  left: 4px;
  top: 50%;
  transform: translateY(-50%);
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-right: 14px solid var(--arrow-color);
}

/* NORTHEAST */
.arrow.ne {
  top: 6px;
  right: 6px;
  transform: rotate(45deg);
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 16px solid var(--arrow-color);
}

/* NORTHWEST */
.arrow.nw {
  top: 6px;
  left: 6px;
  transform: rotate(-45deg);
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 16px solid var(--arrow-color);
}

/* SOUTHEAST */
.arrow.se {
  bottom: 6px;
  right: 6px;
  transform: rotate(-45deg);
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 16px solid var(--arrow-color);
}

/* SOUTHWEST */
.arrow.sw {
  bottom: 6px;
  left: 6px;
  transform: rotate(45deg);
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 16px solid var(--arrow-color);
}
</style>