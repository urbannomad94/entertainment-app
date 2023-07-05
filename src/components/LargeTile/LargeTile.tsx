'use client'

import { TileProps } from '@/app/types/Types.types'
import styles from './LargeTile.module.css'
import Image from 'next/image'

import { useState } from 'react'

export default function LargeTile({
  year,
  category,
  rating,
  title,
  image,
}: TileProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <>
      <div
        className={`${styles.container} ${hovered && 'dimmed'} pointerHover`}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${image})`,
          backgroundSize: 'cover',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
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
        <div className={styles.info}>
          <p>
            {year}&nbsp;&nbsp;•&nbsp;&nbsp;
            {category === 'movie' ? (
              <span>
                <Image
                  src='/icon-category-movie.svg'
                  alt='play icon'
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
                ></Image>
                &nbsp; TV Series
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
          <h3 className='title'>{title}</h3>
        </div>
      </div>
    </>
  )
}
