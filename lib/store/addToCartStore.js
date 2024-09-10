import { action, persist } from 'easy-peasy'

const addToCartModel = persist({
  items: [],

  addItem: action(({ items }, payload) => {
    if (items.map(i => i.productId).includes(payload.productId)) return;
    items.push(payload);
  }),

  removeItem: action(({ items }, payload) => {
    // items.filter((item) => item !== payload);
    const index = items.findIndex(item => item.productId === payload);
    // console.log(index)

    if (index !== -1) items.splice(index, 1);
  }),
})

export default addToCartModel
