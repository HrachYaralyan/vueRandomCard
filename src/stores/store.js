import { defineStore } from 'pinia';
import axios from 'axios';

export const useCardStore = defineStore({
  id: 'counter',
  state: () => ({
    card: [],
  }),
  actions: {
    getData() {
      axios.get('http://localhost:9000/').then((res) => {
        this.card = res.data;
      });
    },
    addCard() {
      let cardId = Date.now();
      const newNumber = Math.floor(Math.random() * 1000);
      axios
        .post('http://localhost:9000/create', { newNumber, cardId })
        .then((res) => {
          this.card = res.data;
        })
        .catch((error) => console.log(error));
    },
    sortCard() {
      this.card.sort((a, b) => {
        return a.number - b.number;
      });
    },
    removeCard(cardID) {
      axios
        .post('http://localhost:9000/remove', { cardID })
        .then((res) => {
          this.card = res.data;
        })
        .catch((error) => console.log(error));
    },
  },
});
