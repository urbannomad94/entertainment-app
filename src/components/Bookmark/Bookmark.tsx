'use client'

import { MultiContext } from '@/context/MultiProvider'
import styles from './Bookmark.module.css'
import Image from 'next/image'
import { useState, useContext } from 'react'

export default function Bookmark({ id }: { id: number }) {
  const { movieBookmarks, setMovieBookmarks, showBookmarks, setShowBookmarks } =
    useContext(MultiContext)

  const [isActive, setIsActive] = useState(false)

  // let active
  // if (movieBookmarks.includes(id) || showBookmarks.includes(id)) {
  //   active = true
  // } else {
  //   active = false
  // }

  function clickHandler(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault()
    // e.stopPropagation()
    setIsActive((prev) => !prev)
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
