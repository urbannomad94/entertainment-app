import SmallTile from '@/components/SmallTile/SmallTile'
import styles from './page.module.css'
import { ShowProps } from '@/types/Types.types'
import { getShows } from '@/utils/fetchData'
import Link from 'next/link'

export const metadata = {
  title: 'Entertainment App | TV Series',
}

export default async function TvSeries() {
  const shows: ShowProps[] = await getShows()

  const showTiles = shows.map((show: ShowProps) => {
    return (
      <Link
        key={show.id}
        href={`/tv-series/${show.id}`}
        style={{ textDecoration: 'none' }}
      >
        <SmallTile
          id={show.id}
          year={+show.first_air_date.split('-')[0].toString()}
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
      <h1>TV Series</h1>
      <div className='gridContainer'>{showTiles}</div>
    </>
  )
}
