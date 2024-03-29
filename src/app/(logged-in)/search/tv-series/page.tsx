'use client'

import SmallTile from '@/components/SmallTile/SmallTile'
import { ShowProps } from '@/types/Types.types'
import Link from 'next/link'
import { useContext } from 'react'
import { MultiContext } from '@/context/MultiProvider'
import { searchShows } from '@/utils/fetchData'

export default async function ShowSearch() {
  const { search } = useContext(MultiContext)

  const searchResults = await searchShows(search)

  const searchTiles = searchResults?.map((show: ShowProps) => {
    return (
      <Link
        key={show.id}
        href={`/tv-series/${show.id}`}
        style={{ textDecoration: 'none' }}
      >
        <SmallTile
          id={show.id}
          year={+show?.first_air_date.split('-')[0].toString()}
          category='tv'
          rating={show.vote_average}
          title={show.name}
          image={show.backdrop_path}
        />
      </Link>
    )
  })

  return (
    <>
      <h1>TV Series Search Results</h1>
      <div className='gridContainer'>{searchTiles}</div>
    </>
  )
}
