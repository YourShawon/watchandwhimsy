import { action, persist, Action } from 'easy-peasy'

// Define the type for a favorite item
interface FavoriteItem {
  productId: string
}

// Define the type for the model
interface FavoriteModel {
  items: FavoriteItem[]
  addItem: Action<FavoriteModel, FavoriteItem>
  removeItem: Action<FavoriteModel, string>
}

const favoriteModel = persist<FavoriteModel>(
  {
    items: [],

    addItem: action((state, payload) => {
      if (state.items.some(item => item.productId === payload.productId)) return
      state.items.push(payload)
    }),

    removeItem: action((state, productId) => {
      const index = state.items.findIndex(item => item.productId === productId)
      if (index !== -1) state.items.splice(index, 1)
    })
  },
  {
    storage: 'localStorage' // You can use 'sessionStorage' if needed
  }
)

export default favoriteModel
