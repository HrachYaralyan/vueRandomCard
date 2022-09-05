<template>
  <div class="buttonWrapper">
    <button class="button" >
    <slot></slot>
    </button>
  </div>
</template>

<script>

export default {
  name: 'button',

};
</script>

<style scoped>
.button {
  width: 90px;
  height: 40px;
  margin: 20px;
  color: white;
  background: blue;
  transition: 1s;
  cursor: pointer;
}
.button:hover {
  color: blue;
  background: white;
  border: 1px solid blue;
}
</style>
