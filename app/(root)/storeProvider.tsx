'use client'

import { ReactNode } from 'react'

import { StoreProvider } from 'easy-peasy'
import store from '@/lib/store/index'

function Provider({ children }: Readonly<{ children: React.ReactNode }>) {
  return <StoreProvider store={store}>{children}</StoreProvider>
}

export default Provider
