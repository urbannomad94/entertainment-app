'use client'

import SmallTile from '@/components/SmallTile/SmallTile'
import Link from 'next/link'
import { useContext, useEffect } from 'react'
import { MultiContext } from '@/context/MultiProvider'
import { searchMovies, searchShows } from '@/utils/fetchData'

export default async function AllSearch() {
  const { search } = useContext(MultiContext)

  const movieResults = await searchMovies(search)
  const showResults = await searchShows(search)
  const searchResults = [...movieResults, ...showResults].sort(
    (a, b) => 0.5 - Math.random()
  )

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
          id={movieOrShow.id}
          year={
            movieOrShow.media_type === 'movie'
              ? +movieOrShow.release_date.split('-')[0].toString()
              : +movieOrShow.first_air_date.split('-')[0].toString()
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
      <h1>Search Results</h1>
      <div className='gridContainer'>{searchTiles}</div>
    </>
  )
}
