import { action, createStore } from 'easy-peasy'
import favoriteModel from './favoriteStore'
import addToCartModel from './addToCartStore'

const store = createStore({
  favorites: favoriteModel,
  addToCarts: addToCartModel,
})

export default store
