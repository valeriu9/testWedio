<template>
  <v-app>
    <v-btn class="fab_position" v-model="fab" color="grey" small="true" fab>
      <v-icon v-if="fab">mdi-close</v-icon>
      <v-icon v-else>mdi-close-circle</v-icon>
    </v-btn>
    <v-container class="allignment">
      <v-content>
        <Register />
      </v-content>
    </v-container>
  </v-app>
</template>

<script>
import Register from "./components/Register";

export default {
  name: "App",

  components: {
    Register
  }
};
</script>
<style>
.fab_position {
  position: absolute !important;
  top: 20px;
  right: 20px;
}
.allignment {
  padding: 3rem 1.5rem !important;
  align-items: center;
  display: flex;
  min-height: 100vh;
}
body {
  font-family: Open sans, sans-serif;
}
#app {
  background-image: url("./assets/bg_cover.jpg");
  background-position: center;
  background-size: cover;
}
</style>
