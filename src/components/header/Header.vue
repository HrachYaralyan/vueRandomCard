<template>
  <div class="header">
    <AddButton />
    <SortButton />
  </div>
</template>

<script>
import AddButton from './addButton/AddButton.vue';
import SortButton from './sortButton/SortButton.vue';
export default {
  name: 'Header',
  components: { AddButton, SortButton },
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
