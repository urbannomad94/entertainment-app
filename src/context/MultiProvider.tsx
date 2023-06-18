'use client'

import { createContext, useState } from 'react'

export const MultiContext = createContext<any>(null)

function SearchProvider({ children }: { children: any }) {
  const [search, setSearch] = useState('')

  return (
    <MultiContext.Provider value={{ search, setSearch }}>
      {children}
    </MultiContext.Provider>
  )
}

export default SearchProvider
