'use client'

import SmallTile from '@/components/SmallTile/SmallTile'
import { ShowProps } from '@/app/types/Types.types'
import Link from 'next/link'
import { useContext } from 'react'
import { MultiContext } from '@/context/MultiProvider'

export default async function MoviesSearch() {
  const { searchResults } = useContext(MultiContext)

  const searchTiles = searchResults.map((show: ShowProps) => {
    return (
      <Link
        key={show.id}
        href={`/tv-series/${show.id}`}
        style={{ textDecoration: 'none' }}
      >
        <SmallTile
          key={show.id}
          year={+show.first_air_date.split('-')[0].toString()}
          category='tv-series'
          rating={show.vote_average}
          title={show.name}
          image={show.backdrop_path}
        />
      </Link>
    )
  })

  return (
    <>
      <h1>TV Series</h1>
      <div className='gridContainer'>{searchTiles}</div>
    </>
  )
}
