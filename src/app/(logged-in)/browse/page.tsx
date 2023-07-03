import styles from './page.module.css'
import LargeTile from '@/components/LargeTile/LargeTile'
import SmallTile from '@/components/SmallTile/SmallTile'
import { getMoviesAndShows, getUpcomingMovies } from '@/utils/fetchData'

export const metadata = {
  title: 'Entertainment App | Browse',
}

export default async function Browse() {
  const upcomingMovies = await getUpcomingMovies()
  const moviesAndShows = await getMoviesAndShows()

  const upcomingTiles = upcomingMovies.map((movie: any) => {
    return (
      <div key={movie.id} style={{ marginBottom: '10px' }}>
        <LargeTile
          year={movie.release_date.split('-')[0]}
          category='movie'
          rating={movie.adult}
          title={movie.title}
          image={movie.backdrop_path}
        />
      </div>
    )
  })

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
      <h1 className={styles.title}>Coming Soon</h1>
      <div className={styles.trendingContainer}>{upcomingTiles}</div>
      <h1 className={styles.title}>Trending</h1>
      <div className='gridContainer'>{recommendedTiles}</div>
    </>
  )
}
