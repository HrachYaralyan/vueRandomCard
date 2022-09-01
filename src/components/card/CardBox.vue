<template>
  <div class="cardBox">
    <h1>CardBox</h1>
    <h1>
      {{ card }}
    </h1>
    <button @click="stateController.removeCard(card)">X</button>
  </div>
</template>

<script>
import { useCardStore } from '../../stores/counter';

export default {
  setup() {
    const stateController = useCardStore();
    return { stateController };
  },
  props: {
    card: {},
  },
};
</script>

<style scoped>
.cardBox {
  width: 200px;
  height: 200px;
  border: 1px solid rgb(0, 0, 0);
}
</style>
