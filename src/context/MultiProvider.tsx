'use client'

import { MovieProps, ShowProps } from '@/types/Types.types'
import { createContext, useState } from 'react'

export const MultiContext = createContext<any>(null)

function SearchProvider({ children }: { children: any }) {
  const [search, setSearch] = useState('')
  const [searchType, setSearchType] = useState<'movie' | 'show' | 'all'>('all')
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [movieBookmarks, setMovieBookmarks] = useState<MovieProps[]>(
    [] as MovieProps[]
  )
  const [showBookmarks, setShowBookmarks] = useState<ShowProps[]>(
    [] as ShowProps[]
  )

  return (
    <MultiContext.Provider
      value={{
        search,
        setSearch,
        searchType,
        setSearchType,
        searchResults,
        setSearchResults,
        movieBookmarks,
        setMovieBookmarks,
        showBookmarks,
        setShowBookmarks,
      }}
    >
      {children}
    </MultiContext.Provider>
  )
}

export default SearchProvider
