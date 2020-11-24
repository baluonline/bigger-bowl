<template>
  <v-container fluid>
    <v-row class="col-10 mx-10">
      <v-card id="shopping-cards" to="/home/living">
        <v-img src="../assets/cards/living.jpeg" contain height="15em" width="15em" id="living-img"></v-img>
        <v-card-title id="card-title">Living Room</v-card-title>
      </v-card>
      <v-card id="shopping-cards">
        <v-img
          src="../assets/cards/kitchen.jpeg"
          contain
          height="15em"
          width="15em"
          id="living-img"
        ></v-img>
        <v-card-title id="card-title">kitchen</v-card-title>
      </v-card>

      <v-card id="shopping-cards">
        <v-img
          src="../assets/cards/Sunroom.jpeg"
          contain
          height="15em"
          width="15em"
          id="living-img"
        ></v-img>
        <v-card-title id="card-title">Sun Room</v-card-title>
      </v-card>
      <v-card id="shopping-cards">
        <v-img
          src="../assets/cards/HomeOffice.jpeg"
          contain
          height="15em"
          width="15em"
          id="living-img"
        ></v-img>
        <v-card-title id="card-title">Home Office</v-card-title>
      </v-card>
      <v-card id="shopping-cards">
        <v-img src="../assets/cards/Bath.jpeg" contain height="15em" width="15em" id="living-img"></v-img>
        <v-card-title id="card-title">Bath</v-card-title>
      </v-card>
    </v-row>
JTHB 
    <v-row dense>
      <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
        <v-card>
          <v-img v-bind:src="imageSrc" class="white--text align-end" height="200px"></v-img>
          <v-card-title v-text="card.title"></v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapGetters } from "vuex";
import routes from "../data/constants/routes";

export default {
  data() {
    return {
      loading: true,
      cards: [
        {
          title: "Pre-fab homes",
          src: "../assets/cards/living.jpeg",
          flex: 12
        },
        {
          title: "Favorite road trips",
          src: "../assets/cards/living.jpeg",
          flex: 6
        },
        {
          title: "Best airlines",
          src: "../assets/cards/living.jpeg",
          flex: 6
        }
      ]
    };
  },

  computed: {
    ...mapGetters(["headers", "shoppingCards", "search", "sortedBy"]),
    imageSrc() {
      return "../assets/cards/living.jpeg";
    }
  },
  created() {
    this.fetchCards();
  },
  methods: {
    fetchCards() {
      // fetch data  from API
      this.$store.dispatch("fetchItems").then(response => {
        response ? (this.loading = false) : (this.loading = true);
      });
    },

    select(row) {
      // select row and redirect to certain page with row details
      this.$store.dispatch("updateSelectedItem", row);
      this.$router.push(`${routes.PET_URL}/${row.id}`);
    },
    updateSortedColumns(columns) {
      // update sorted
      this.$store.dispatch("updateSortedColumns", columns);
    },
    updateFilter(input) {
      // update search filter
      this.$store.dispatch("updateFilter", input);
    }
  }
};
</script>
<style lang="scss" scoped>
#shopping-cards {
  margin: 1em;
}
.custom-data-table {
  cursor: pointer;
}
#living-img {
  height: "100px";
  width: "150px";
}

#card-title {
  justify-content: center;
}
</style>