<template>
  <v-app-bar  app clipped-left >
    <template v-slot:img="{ props }">
      <v-img v-bind="props" gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"></v-img>
    </template>

    <v-app-bar-nav-icon @click.stop="hideNavigation"></v-app-bar-nav-icon>
 <div>
        <v-img :src="logoImg" class="logo-img col-5"></v-img>
      </div>
    <v-toolbar-title class="col-5 mt-10">
     
      <p class="col-5">Bigger Bowl</p>
    </v-toolbar-title>

    <div class="flex-grow-1"></div>
  </v-app-bar>
</template>
<script>
export default {
  name: "application-bar",
  data() {
    return {
      logoImg: require("../assets/img/dog.jpg"),
      img: require("../assets/cards/living.jpeg")
    };
  },
  methods: {
    hideNavigation() {
      this.$store.dispatch("hideNavigation");
    }
  }
};
</script>
<style scoped>
.logo-img {
  margin-top: 1em;
  height: 2em;
  width: 2em;
}
</style>