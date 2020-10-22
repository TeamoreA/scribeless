<template>
  <div id="app">
    <Nav />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import Nav from "@/components/Nav";

export default {
  name: "App",
  components: {
    Nav,
  },
};
</script>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 80vh;
}
</style>
