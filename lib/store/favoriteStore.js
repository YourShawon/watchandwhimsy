import { action, persist } from 'easy-peasy'

const favoriteModel = persist(
  {
    items: [],

    addItem: action(({ items }, payload) => {
      if (items.map(i => i.productId).includes(payload.productId)) return
      items.push(payload)
    }),

    removeItem: action(({ items }, payload) => {
      const index = items.findIndex(item => item.productId === payload)
      if (index !== -1) items.splice(index, 1)
    })
  }

  // {
  //   storage: 'localStorage', // You can use 'sessionStorage' if needed
  // }
)

export default favoriteModel
