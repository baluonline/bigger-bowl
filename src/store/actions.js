// import client from 'api-client'
import client from "../services/mock"

export default {
  fetchItems ({commit}) {
    return client
      .fetchCards()
      .then(items => commit('setShoppingCards', items))
  },
  hideNavigation({commit}) {
    commit('setDrawer');
  },
  updateFilter( {commit}, input) {
    commit('setFilter', input);
  },
  updateSortedColumns ({commit}, options) {
    commit('setSortedColumns', options.sortBy);
  },
  updateSelectedItem({commit}, item) {
    commit('setSelectedItem', item);
  } 
}

