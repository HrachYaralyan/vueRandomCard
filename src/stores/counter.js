import { defineStore } from 'pinia'

export const useCardStore = defineStore({
  id: 'counter',
  state: () => ({
    card: []
  }),
  actions: {
    addCard() {
      let randNumber = Math.floor(Math.random()*1000)
      this.card.push(randNumber)
      localStorage.setItem("LocalData", JSON.stringify(this.card));
    },
    sortCard() {
      this.card.sort((a, b) => { return a - b })
      localStorage.setItem("LocalData", JSON.stringify(this.card));
    },
    removeCard(number) {
      this.card =  this.card.filter((allArrNum) => allArrNum !== number)
      localStorage.setItem("LocalData", JSON.stringify(this.card));
    },
    getData(data) {
      this.card = data
    },
  },
});
