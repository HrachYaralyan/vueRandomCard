<template>
  <div class="content">
    <CardBox v-for="card in stateController.card" :card="card" />
  </div>
</template>

<script>
import { useCardStore } from '../../stores/counter';
import CardBox from '../card/CardBox.vue';

export default {
  name: 'Content',
  setup() {
    const stateController = useCardStore();
    return { stateController };
  },
  components: { CardBox },
  methods: {
    getLocalData() {
      if (localStorage.getItem('LocalData')) {
        this.stateController.getData(
          JSON.parse(localStorage.getItem('LocalData'))
        );
      } else {
        localStorage.setItem(
          'LocalData',
          JSON.stringify(this.stateController.card)
        );
      }
    },
  },
  mounted() {
    this.getLocalData();
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
