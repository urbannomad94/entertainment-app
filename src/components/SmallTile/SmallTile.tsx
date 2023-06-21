'use client'

import styles from './SmallTile.module.css'
import Image from 'next/image'

import { useState } from 'react'

export default function SmallTile({
  year,
  category,
  rating,
  title,
}: {
  year: number
  category: 'movie' | 'tv-series'
  rating: 'G' | 'PG' | 'PG-13' | 'R'
  title: string
}) {
  return (
    <div className={`${styles.container} pointerHover`}>
      <div className={styles.imgContainer}>
        <Image
          src='/thumbnails/112/regular/medium.jpg'
          alt='movie image'
          fill
          className='image'
        ></Image>
      </div>
      <p className={styles.info}>
        {year} •{' '}
        {category === 'movie' ? (
          <span>
            <Image
              src='/icon-category-movie.svg'
              alt='movie icon'
              width={12}
              height={12}
            ></Image>{' '}
            Movie
          </span>
        ) : (
          <span>
            <Image
              src='/icon-category-tv.svg'
              alt='tv series icon'
              width={12}
              height={12}
            ></Image>{' '}
            TV Series
          </span>
        )}{' '}
        • {rating}
      </p>
      <h3 className={styles.title}>{title}</h3>
    </div>
  )
}

;<Image
  src='/icon-category-movie.svg'
  alt='movie icon'
  width={12}
  height={12}
></Image>
