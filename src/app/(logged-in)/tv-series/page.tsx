import SmallTile from '@/components/SmallTile/SmallTile'
import styles from './page.module.css'
import { ShowsData, getShows } from '@/utils/fetchData'

export const metadata = {
  title: 'Entertainment App | TV Series',
}

export default async function TvSeries() {
  const shows: ShowsData[] = await getShows()

  const showTiles = shows.map((show: any) => {
    return (
      <SmallTile
        key={show.id}
        year={show.first_air_date.split('-')[0].toString()}
        category='tv-series'
        rating={show.adult}
        title={show.name}
        image={show.backdrop_path}
      />
    )
  })
  return (
    <>
      <h1>TV Series</h1>
      <div className='gridContainer'>{showTiles}</div>
    </>
  )
}
