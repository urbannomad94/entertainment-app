'use client'

import SmallTile from '@/components/SmallTile/SmallTile'
import Link from 'next/link'
import { useContext, useEffect } from 'react'
import { MultiContext } from '@/context/MultiProvider'

export default async function MoviesSearch() {
  const { searchResults } = useContext(MultiContext)

  const searchTiles = searchResults.map((movieOrShow: any) => {
    return (
      <Link
        key={movieOrShow.id}
        href={`/${
          movieOrShow.media_type === 'movie' ? 'movies' : 'tv-series'
        }/${movieOrShow.id}`}
        style={{ textDecoration: 'none' }}
      >
        <SmallTile
          key={movieOrShow.id}
          year={
            movieOrShow.media_type === 'movie'
              ? movieOrShow.release_date.split('-')[0]
              : movieOrShow.first_air_date.split('-')[0]
          }
          category={movieOrShow.media_type}
          rating={movieOrShow.vote_average}
          title={
            movieOrShow.media_type === 'movie'
              ? movieOrShow.title
              : movieOrShow.name
          }
          image={movieOrShow.backdrop_path}
        />
      </Link>
    )
  })

  return (
    <>
      <h1>Movies</h1>
      <div className='gridContainer'>{searchTiles}</div>
    </>
  )
}
