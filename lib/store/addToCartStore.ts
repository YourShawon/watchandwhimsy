import { action, persist, Action } from 'easy-peasy'

// Define the type for a cart item
interface CartItem {
  productId: string
  quantity: number
}

// Define the type for the model
interface AddToCartModel {
  items: CartItem[]
  addItem: Action<AddToCartModel, CartItem>
  removeItem: Action<AddToCartModel, string>
  incrementQuantity: Action<AddToCartModel, string>
  decrementQuantity: Action<AddToCartModel, string>
}

const addToCartModel = persist<AddToCartModel>(
  {
    items: [],

    addItem: action((state, payload) => {
      if (state.items.some(i => i.productId === payload.productId)) return
      state.items.push(payload)
    }),

    removeItem: action((state, productId) => {
      const index = state.items.findIndex(item => item.productId === productId)
      if (index !== -1) state.items.splice(index, 1)
    }),

    incrementQuantity: action((state, productId) => {
      state.items.forEach(item => {
        if (item.productId === productId) {
          item.quantity += 1
        }
      })
    }),

    decrementQuantity: action((state, productId) => {
      state.items.forEach(item => {
        if (item.productId === productId) {
          if (item.quantity > 1) {
            item.quantity -= 1
          } else {
            console.log('Quantity cannot be less than 1')
          }
        }
      })
    })
  },
  {
    storage: 'localStorage' // You can use 'sessionStorage' if needed
  }
)

export default addToCartModel
