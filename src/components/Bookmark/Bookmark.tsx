'use client'

import { MultiContext } from '@/context/MultiProvider'
import styles from './Bookmark.module.css'
import Image from 'next/image'
import { useState, useContext } from 'react'
import { getMovieDetails, getShowDetails } from '@/utils/fetchData'
import { MovieProps, ShowProps } from '@/types/Types.types'

export default function Bookmark({
  id,
  category,
}: {
  id: number
  category: 'movie' | 'tv'
}) {
  const { movieBookmarks, setMovieBookmarks, showBookmarks, setShowBookmarks } =
    useContext(MultiContext)

  const [isActive, setIsActive] = useState(false)

  // let active
  // if (movieBookmarks.includes(id) || showBookmarks.includes(id)) {
  //   active = true
  // } else {
  //   active = false
  // }

  async function clickHandler(e: any) {
    e.preventDefault()
    setIsActive((prev) => !prev)
    let details: {}
    if (!isActive) {
      if (category === 'movie') {
        details = await getMovieDetails(id)
        setMovieBookmarks((prev: MovieProps[]) => [...prev, details])
      } else {
        details = await getShowDetails(id)
        setShowBookmarks((prev: ShowProps[]) => [...prev, details])
      }
    } else {
      if (category === 'movie') {
        setMovieBookmarks((prev: MovieProps[]) =>
          prev.filter((movie) => movie.id !== id)
        )
      } else {
        setShowBookmarks((prev: ShowProps[]) =>
          prev.filter((show) => show.id !== id)
        )
      }
    }
    console.log('Movie Bookmarks:', movieBookmarks)
    console.log('Show Bookmarks:', showBookmarks)
  }

  return (
    <div className={styles.container} onClick={clickHandler}>
      {isActive ? (
        <Image
          src='/icon-bookmark-full.svg'
          alt='empty bookmark icon'
          width={12}
          height={14}
        ></Image>
      ) : (
        <Image
          src='/icon-bookmark-empty.svg'
          alt='empty bookmark icon'
          width={12}
          height={14}
        ></Image>
      )}
    </div>
  )
}
