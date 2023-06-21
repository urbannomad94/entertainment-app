'use client'

import styles from './LargeTile.module.css'
import Image from 'next/image'

import { useState } from 'react'

export default function LargeTile({
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
      <p>
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
      <h3 className='title'>{title}</h3>
    </div>
  )
}
