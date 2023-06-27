import styles from './page.module.css'
import LargeTile from '@/components/LargeTile/LargeTile'
import SmallTile from '@/components/SmallTile/SmallTile'
import { getMovieAndShows } from '@/utils/fetchData'

export const metadata = {
  title: 'Entertainment App | Browse',
}

export default async function Browse() {
  const moviesAndShows = await getMovieAndShows()

  const recommendedTiles = moviesAndShows.map((movieOrShow: any) => {
    return (
      <SmallTile
        key={movieOrShow.id}
        year={
          movieOrShow.media_type === 'movie'
            ? movieOrShow.release_date.split('-')[0]
            : movieOrShow.first_air_date.split('-')[0]
        }
        category={movieOrShow.media_type}
        rating={movieOrShow.adult}
        title={
          movieOrShow.media_type === 'movie'
            ? movieOrShow.title
            : movieOrShow.name
        }
        image={movieOrShow.backdrop_path}
      />
    )
  })

  return (
    <>
      <h1 className={styles.title}>Trending</h1>
      <div className={styles.trendingContainer}>
        <LargeTile
          year={2019}
          category='movie'
          rating='PG'
          title='Beyond Earth'
          image='placeholder'
        />
        <LargeTile
          year={2022}
          category='tv-series'
          rating='PG-13'
          title='Andor'
          image='placeholder'
        />
      </div>
      <h1 className={styles.title}>Recommended for you</h1>
      <div className='gridContainer'>{recommendedTiles}</div>
    </>
  )
}
