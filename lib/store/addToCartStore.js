import { action, persist } from 'easy-peasy'

const addToCartModel = persist(
  {
    items: [],

    addItem: action(({ items }, payload) => {
      if (items.map(i => i.productId).includes(payload.productId)) return
      items.push(payload)
    }),

    removeItem: action(({ items }, payload) => {
      const index = items.findIndex(item => item.productId === payload)
      if (index !== -1) items.splice(index, 1)
    }),

    incrementQuantity: action(({ items }, payload) => {
      items.forEach(item => {
        if (item.productId === payload) {
          item.quantity += 1
        }
      })
    }),

    decrementQuantity: action(({ items }, payload) => {
      items.forEach(item => {
        if (item.productId === payload) {
          if (item.quantity > 1) {
            item.quantity -= 1
          } else {
            console.log('Quantity cannot be less than 1')
          }
        }
      })
    })
  }

  // {
  //   storage: 'localStorage', // You can use 'sessionStorage' if needed
  // }
)

export default addToCartModel
