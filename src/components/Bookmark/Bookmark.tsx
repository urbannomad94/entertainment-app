'use client'

import { MultiContext } from '@/context/MultiProvider'
import styles from './Bookmark.module.css'
import Image from 'next/image'
import { useContext, useEffect } from 'react'

export default function Bookmark({ id }: { id: number }) {
  const { movieBookmarks, setMovieBookmarks, showBookmarks, setShowBookmarks } =
    useContext(MultiContext)

  let active = true

  // let active
  // if (movieBookmarks.includes(id) || showBookmarks.includes(id)) {
  //   active = true
  // } else {
  //   active = false
  // }

  return (
    <div className={styles.container}>
      {active ? (
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
