<template>
  <div class="buttonWrapper">
    <button class="addButton" @click="stateController.addCard">Add Card</button>
  </div>
</template>

<script>
import { useCardStore } from '../../../stores/counter';

export default {
  name: 'addButton',
  setup() {
    const stateController = useCardStore();
    // const { count } = stateController;
    return { stateController };
  },
};
</script>

<style scoped>
.addButton {
  width: 90px;
  height: 40px;
  margin: 20px;
  color: white;
  background: blue;
  transition: 1s;
  cursor: pointer;
}
.addButton:hover {
  color: blue;
  background: white;
  border: 1px solid blue;
}
</style>
