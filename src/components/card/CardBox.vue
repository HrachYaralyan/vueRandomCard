<template>
  <div class="cardBox">
    <h1>CardBox</h1>
    <h1>
      {{ cardNumber }}
    </h1>
    <button @click="stateController.removeCard(cardNumber)">X</button>
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
    cardNumber: {
      type:Number
    },
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
