'use client'

import { usePathname } from 'next/navigation'
import styles from './SearchBar.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function SearchBar() {
  const [placeholder, setPlaceholder] = useState('')

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
    }
  }, [tab])

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src='/icon-search.svg' alt='search' fill></Image>
      </div>
      <input type='text' placeholder={placeholder} className={styles.search} />
    </div>
  )
}
