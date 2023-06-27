import SmallTile from '@/components/SmallTile/SmallTile'
import styles from './page.module.css'

import { MovieData, getMovies } from '@/utils/fetchData'

export const metadata = {
  title: 'Entertainment App | Movies',
}

export default async function Movies() {
  const movies: MovieData[] = await getMovies()

  const movieTiles = movies.map((movie: any) => {
    return (
      <SmallTile
        key={movie.id}
        year={movie.release_date.split('-')[0].toString()}
        category='movie'
        rating={movie.adult}
        title={movie.title}
        image={movie.backdrop_path}
      />
    )
  })

  return (
    <>
      <h1>Movies</h1>
      <div className='gridContainer'>{movieTiles}</div>
    </>
  )
}
