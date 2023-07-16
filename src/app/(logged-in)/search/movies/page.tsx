'use client'

import SmallTile from '@/components/SmallTile/SmallTile'
import { MovieProps } from '@/app/types/Types.types'
import Link from 'next/link'
import { useContext } from 'react'
import { MultiContext } from '@/context/MultiProvider'
import { searchMovies } from '@/utils/fetchData'

export default async function MoviesSearch() {
  const { search } = useContext(MultiContext)

  const searchResults = await searchMovies(search)

  const searchTiles = searchResults?.map((movie: MovieProps) => {
    return (
      <Link
        key={movie.id}
        href={`/movies/${movie.id}`}
        style={{ textDecoration: 'none' }}
      >
        <SmallTile
          id={movie.id}
          year={+movie?.release_date.split('-')[0].toString()}
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
