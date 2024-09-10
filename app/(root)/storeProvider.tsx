'use client'

import { StoreProvider } from 'easy-peasy'
import store from '@/lib/store/index'

function Provider({ children }) {
  return <StoreProvider store={store}>{children}</StoreProvider>
}

export default Provider
