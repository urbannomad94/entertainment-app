import SmallTile from '@/components/SmallTile/SmallTile'
import styles from './page.module.css'

import { getMovies } from '@/utils/fetchData'

export default async function Movies() {
  const movies = await getMovies()

  const movieTiles = movies.results.map((movie: any) => {
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
