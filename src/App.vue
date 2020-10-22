<template>
  <div id="app">
    <Nav/>
    <asteroids />
  </div>
</template>

<script>
import Asteroids from "@/views/Asteroids";
import Nav from "@/components/Nav";


export default {
  name: "App",
  components: {
    Asteroids,
    Nav
  },
};
</script>
