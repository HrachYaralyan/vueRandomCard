<template>
  <div class="content">
    <CardBox
      v-for="card in stateController.card"
      :cardNumber="card.number"
      :cardID="card.id"
    />
  </div>
</template>

<script>
import { useCardStore } from '../../stores/store';
import CardBox from '../card/CardBox.vue';

export default {
  name: 'Content',
  setup() {
    const stateController = useCardStore();
    return { stateController };
  },
  components: { CardBox },
  mounted() {
    this.stateController.getData();
  },
};
</script>

<style scoped>
.content {
  width: 100%;
  min-height: 80%;
  border: 1px solid rgb(0, 0, 0);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>
