export default {
  setDrawer(state) {
    state.drawer = ! state.drawer;
  },
  setFilter (state, input) {
    state.search = input;
  },  
  setShoppingCards (state, items=[]) {
    state.shoppingCards = items
  },
  setSelectedItem (state, item) {
    state.selectedItem = item;
  },
  setSortedColumns (state, columns) {
    state.sortedColumns = columns;
  }
}