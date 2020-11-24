import shoppingCards from '../../data/static/cards' // import static data

const fetch = (mockData, time = 0) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData)
    }, time)
  })
}

export default {
  fetchCards () {
    console.log(shoppingCards)
    return fetch(shoppingCards, 1000) // wait 1s before returning items
  }
}