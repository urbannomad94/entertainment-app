'use client'

import { createContext, useState } from 'react'

export const MultiContext = createContext<any>(null)

function SearchProvider({ children }: { children: any }) {
  const [search, setSearch] = useState('')
  const [searchType, setSearchType] = useState<'movie' | 'show' | 'all'>('all')
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [movieBookmarks, setMovieBookmarks] = useState<string[]>([] as string[])
  const [showBookmarks, setShowBookmarks] = useState<string[]>([] as string[])

  return (
    <MultiContext.Provider
      value={{
        search,
        setSearch,
        searchType,
        setSearchType,
        searchResults,
        setSearchResults,
      }}
    >
      {children}
    </MultiContext.Provider>
  )
}

export default SearchProvider
