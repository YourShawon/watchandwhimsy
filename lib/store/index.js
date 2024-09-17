import { createStore } from 'easy-peasy'
import favoriteModel from './favoriteStore'
import addToCartModel from './addToCartStore'

const store = createStore({
  addToCarts: addToCartModel,
  favorites: favoriteModel
})

export default store
