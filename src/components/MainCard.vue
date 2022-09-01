<template>
  <div class="main">
    <div class="wrapper">
      <Header />
      <Content />
      <Footer />
    </div>
    <div>
      <SideBar />
    </div>
  </div>
</template>

<script>
import Header from './header/Header.vue';
import Content from './content/Content.vue';
import Footer from './footer/Footer.vue';
import SideBar from './sideBar/SideBar.vue';

export default {
  name: 'Main',
  components: {
    Header,
    Content,
    Footer,
    SideBar,
  },
};
</script>

<style scoped>
.main {
  display: flex;
  width: 100%;
  height: 100vh;
  border: 1px solid rgb(0, 0, 0);
}
.wrapper {
  min-width: 80%;
}
</style>
