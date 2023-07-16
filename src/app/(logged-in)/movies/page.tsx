import SmallTile from '@/components/SmallTile/SmallTile'
import styles from './page.module.css'
import { MovieProps } from '@/app/types/Types.types'
import { getMovies } from '@/utils/fetchData'
import Link from 'next/link'

export const metadata = {
  title: 'Entertainment App | Movies',
}

export default async function Movies() {
  const movies: MovieProps[] = await getMovies()

  const movieTiles = movies.map((movie: MovieProps) => {
    return (
      <Link
        key={movie.id}
        href={`/movies/${movie.id}`}
        style={{ textDecoration: 'none' }}
      >
        <SmallTile
          id={movie.id}
          year={+movie.release_date.split('-')[0].toString()}
          category='movie'
          rating={movie.vote_average}
          title={movie.title}
          image={movie.backdrop_path}
        />
      </Link>
    )
  })

  return (
    <>
      <h1>Movies</h1>
      <div className='gridContainer'>{movieTiles}</div>
    </>
  )
}
