'use client'

import styles from './LargeTile.module.css'
import Image from 'next/image'
import bg from '../../../public/thumbnails/beyond-earth/trending/large.jpg'

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
  const [hovered, setHovered] = useState(false)

  // const backgroundImage =
  //   '../../../public/thumbnails/beyond-earth/trending/large.jpg'

  return (
    <>
      <div
        className={`${styles.container} ${hovered && 'dimmed'} pointerHover`}
        style={{
          backgroundImage: `url(${bg.src})`,
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
        <p>
          {year} •{' '}
          {category === 'movie' ? (
            <span>
              <Image
                src='/icon-category-movie.svg'
                alt='play icon'
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
    </>
  )
}
