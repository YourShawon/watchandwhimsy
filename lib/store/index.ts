import { createStore } from 'easy-peasy'
import favoriteModel from './favoriteStore'
import addToCartModel from './addToCartStore'

// Define the type for the store model
interface StoreModel {
  addToCarts: typeof addToCartModel
  favorites: typeof favoriteModel
}

const store = createStore<StoreModel>({
  addToCarts: addToCartModel,
  favorites: favoriteModel
})

export default store
