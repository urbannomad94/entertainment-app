'use client'

import { MultiContext } from '@/context/MultiProvider'
import styles from './SearchBar.module.css'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useContext, useEffect, useState } from 'react'

export default function SearchBar() {
  const { setSearch } = useContext(MultiContext)

  const [placeholder, setPlaceholder] = useState('')
  const [activeSearch, setActiveSearch] = useState('')

  const tab = usePathname().substring(1)

  useEffect(() => {
    if (tab === 'browse') {
      setPlaceholder('Search for movies or TV series')
    } else if (tab === 'movies') {
      setPlaceholder('Search for movies')
    } else if (tab === 'tv-series') {
      setPlaceholder('Search for TV series')
    } else if (tab === 'bookmarks') {
      setPlaceholder('Search for bookmarked shows')
    } else {
      setPlaceholder('Search for movies or TV series')
    }
  }, [tab])

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      setSearch(activeSearch)
    }
  }

  const handleChange = (e: any) => setActiveSearch(e.target.value)

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src='/icon-search.svg' alt='search' fill></Image>
      </div>
      <input
        value={activeSearch}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        type='text'
        placeholder={placeholder}
        className={styles.search}
      />
    </div>
  )
}
