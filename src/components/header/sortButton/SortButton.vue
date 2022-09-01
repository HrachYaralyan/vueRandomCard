<template>
  <div class="buttonWrapper">
    <button class="sortButton" @click="stateController.sortCard">
      Sort Card
    </button>
  </div>
</template>

<script>
import { useCardStore } from '../../../stores/counter';

export default {
  name: 'sortButton',
  setup() {
    const stateController = useCardStore();
    return { stateController };
  },
};
</script>

<style scoped>
.sortButton {
  width: 90px;
  height: 40px;
  margin: 20px;
  color: white;
  background: blue;
  transition: 1s;
  cursor: pointer;
}
.sortButton:hover {
  color: blue;
  background: white;
  border: 1px solid blue;
}
</style>
