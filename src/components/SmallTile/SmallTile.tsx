'use client'

import styles from './SmallTile.module.css'
import Image from 'next/image'

import { useState } from 'react'

export default function SmallTile({
  year,
  category,
  rating,
  title,
  image,
}: {
  year: number
  category: 'movie' | 'tv-series'
  rating: number
  title: string
  image: string
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <div className={`${styles.container} pointerHover`}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`${styles.imgContainer} ${hovered && 'dimmed'}`}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${image})`,
          backgroundSize: 'cover',
        }}
      >
        <div className={`${!hovered && 'hidden'} playBtn`}>
          <Image
            src='/icon-play.svg'
            alt='movie icon'
            width={30}
            height={30}
          ></Image>
          <span>Play</span>
        </div>
      </div>
      <p className={styles.info}>
        {year}&nbsp;&nbsp;•&nbsp;&nbsp;
        {category === 'movie' ? (
          <span>
            <Image
              src='/icon-category-movie.svg'
              alt='movie icon'
              width={12}
              height={12}
            ></Image>
            &nbsp; Movie
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
        )}
        &nbsp;&nbsp;•&nbsp;&nbsp;
        <Image
          src='/icon-star.svg'
          alt='star icon'
          width={12}
          height={12}
        ></Image>
        &nbsp;
        {Math.round(10 * rating) / 10}
      </p>
      <h3 className={styles.title}>{title}</h3>
    </div>
  )
}
