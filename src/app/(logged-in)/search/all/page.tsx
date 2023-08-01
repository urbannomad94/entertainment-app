'use client'

import SmallTile from '@/components/SmallTile/SmallTile'
import Link from 'next/link'
import { useContext } from 'react'
import { MultiContext } from '@/context/MultiProvider'
import { searchMovies, searchShows } from '@/utils/fetchData'

export default async function AllSearch() {
  const { search } = useContext(MultiContext)

  const movieResults = await searchMovies(search)
  const showResults = await searchShows(search)
  const searchResults = [...movieResults, ...showResults].sort(
    (a, b) => 0.5 - Math.random()
  )

  const searchTiles = searchResults?.map((movieOrShow: any) => {
    const type = movieOrShow.hasOwnProperty('title') ? 'movies' : 'tv-series'
    return (
      <Link
        key={movieOrShow.id}
        href={`/${type}/${movieOrShow.id}`}
        style={{ textDecoration: 'none' }}
      >
        <SmallTile
          id={movieOrShow.id}
          year={
            type === 'movies'
              ? +movieOrShow.release_date.split('-')[0].toString()
              : +movieOrShow.first_air_date.split('-')[0].toString()
          }
          category={type === 'movies' ? 'movie' : 'tv'}
          rating={movieOrShow.vote_average}
          title={type === 'movies' ? movieOrShow.title : movieOrShow.name}
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
