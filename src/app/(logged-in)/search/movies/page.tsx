'use client'

import SmallTile from '@/components/SmallTile/SmallTile'
import { MovieProps } from '@/app/types/Types.types'
import Link from 'next/link'
import { useContext } from 'react'
import { MultiContext } from '@/context/MultiProvider'

export default async function MoviesSearch() {
  const { searchResults } = useContext(MultiContext)

  const searchTiles = searchResults.map((movie: MovieProps) => {
    return (
      <Link
        key={movie.id}
        href={`/movies/${movie.id}`}
        style={{ textDecoration: 'none' }}
      >
        <SmallTile
          key={movie.id}
          year={+movie.release_date.split('-')[0].toString()}
          category='movie'
          rating={movie.vote_average}
          title={movie.title}
          image={movie.backdrop_path}
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
