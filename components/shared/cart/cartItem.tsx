import { Trash } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

function CartItem({ item, onQuantity }) {
  const [quantity, setQuantity] = useState(1)

  const increment = () => {
    setQuantity(prevQuantity => {
      const newQuantity = prevQuantity < 10 ? prevQuantity + 1 : 10
      onQuantity(item.id, newQuantity)
      return newQuantity
    })
  }

  const decrement = () => {
    setQuantity(prevQuantity => {
      const newQuantity = prevQuantity > 1 ? prevQuantity - 1 : 1
      onQuantity(item.id, newQuantity)
      return newQuantity
    })
  }

  return (
    <div>
      <div>
        <Image src={item.image} alt='Samsung Watch.' width={100} height={100} />
        <div>
          <h2>{item.title}</h2>
          <p>
            {item.description.length > 60
              ? item.description.slice(0, 60) + ' ....'
              : item.description}
          </p>
        </div>
      </div>
      <div>
        <div>
          <h2>Price</h2>
          <h2>{`$${item.price}`}</h2>
        </div>
        <div>
          <h2>Quantity</h2>
          <h2>{`${quantity}`}</h2>
          <button onClick={increment}>increment</button>
          <button onClick={decrement}>decrement</button>
        </div>
        <div>
          <h2>Subtotal</h2>
          <h2>{`$${item.price * quantity}`}</h2>
        </div>
        <div>
          <h2>Remove</h2>
          <h2>
            <Trash />
          </h2>
        </div>
      </div>
    </div>
  )
}

export default CartItem
