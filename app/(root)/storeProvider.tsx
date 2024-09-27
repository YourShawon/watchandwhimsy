'use client'

import { ReactNode } from 'react'

import { StoreProvider } from 'easy-peasy'
import store from '@/lib/store'

function Provider({ children }: Readonly<{ children: React.ReactNode }>) {
  return <StoreProvider store={store}>{children}</StoreProvider>
}

export default Provider
