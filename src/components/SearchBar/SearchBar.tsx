'use client'

import { MultiContext } from '@/context/MultiProvider'
import styles from './SearchBar.module.css'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { useContext, useEffect, useState } from 'react'
import {
  searchMovies,
  searchShows,
  searchMoviesAndShows,
} from '@/utils/fetchData'

export default function SearchBar() {
  const { search, setSearch, searchType, setSearchType, setSearchResults } =
    useContext(MultiContext)

  const [placeholder, setPlaceholder] = useState('')
  const [activeSearch, setActiveSearch] = useState('')

  const router = useRouter()

  const tab = usePathname().substring(1)

  useEffect(() => {
    setActiveSearch('')
    setSearchResults([])
  }, [tab])

  useEffect(() => {
    if (tab === 'browse') {
      setPlaceholder('Search for movies or TV series')
      setSearchType('all')
    } else if (tab === 'movies') {
      setPlaceholder('Search for movies')
      setSearchType('movies')
    } else if (tab === 'tv-series') {
      setPlaceholder('Search for TV series')
      setSearchType('tv-series')
    } else if (tab === 'bookmarks') {
      setPlaceholder('Search for bookmarked shows')
      setSearchType('all')
    } else {
      setPlaceholder('Search for movies or TV series')
      setSearchType('all')
    }
  }, [tab])

  // useEffect(() => {
  //   async function fetchData() {
  //     let results
  //     if (searchType === 'movies') {
  //       results = await searchMovies(search)
  //     } else if (searchType === 'tv-series') {
  //       results = await searchShows(search)
  //     } else {
  //       results = await searchMoviesAndShows(search)
  //     }
  //     console.log(results)
  //     setSearchResults(results)
  //   }

  //   fetchData()
  // }, [search])

  const handleChange = (e: any) => setActiveSearch(e.target.value)

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      setSearch(activeSearch)
      router.push(`/search/${searchType}`)
    }
  }

  const handleClick = () => {
    setSearch(activeSearch)
    router.push(`/search/${searchType}`)
  }

  return (
    <div className={styles.container}>
      <div
        className={`${styles.imgContainer} pointerHover`}
        onClick={handleClick}
      >
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
