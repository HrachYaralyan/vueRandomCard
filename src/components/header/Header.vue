<template>
  <div class="header">
    <Button @click='addCard'> Add Card</Button> 
    <Button @click='sortCards'> Sort Post</Button> 
  </div>
</template>

<script>
import Button from './buttons/Button.vue';
import { useCardStore } from '../../stores/counter';

export default {
  name: 'Header',
  setup() {
    const stateController = useCardStore();
    return { stateController };
  },
  components: { Button },
  methods: {
    addCard() {
      this.stateController.addCard()
    },
    sortCards() {
      this.stateController.sortCard()
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  width: 100%;
  height: 100px;
  border: 1px solid rgb(0, 0, 0);
}
</style>
