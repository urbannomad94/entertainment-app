import SmallTile from '@/components/SmallTile/SmallTile'
import styles from './page.module.css'
import { getTVShows } from '@/utils/fetchData'

export default async function TvSeries() {
  const shows = await getTVShows()

  const showTiles = shows.results.map((show: any) => {
    return (
      <SmallTile
        key={show.id}
        year={show.first_air_date.split('-')[0].toString()}
        category='movie'
        rating={show.adult}
        title={show.title}
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
