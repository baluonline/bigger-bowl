<template>
  <v-container fluid>
    <v-row class="col-10 mx-10">
      <v-card id="shopping-cards">
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
          src="../assets/cards/HomeOffice.jpg"
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
    <!--    <v-row dense>
      <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
        <v-card>
          <v-img
            :src="card.src"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
          >
            <v-card-title v-text="card.title"></v-card-title>
          </v-img>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-bookmark</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>-->
  </v-container>
</template>
<script>
import { mapGetters } from "vuex";
import routes from "../data/constants/routes";
// import * as cardImages from "../assets/cards";

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
    ...mapGetters(["headers", "items", "search", "sortedBy"])
  },
  created() {
    // this.fetchItems();
  },
  methods: {
    /*   fetchItems() {
      // fetch data  from API
      this.$store.dispatch("fetchItems").then(response => {
        response ? (this.loading = false) : (this.loading = true);
      });
    }, */
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