import SmallTile from '@/components/SmallTile/SmallTile'
import styles from './page.module.css'

export default async function Movies() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.MOVIEDB_API_KEY}`,
    },
  }

  const res = await fetch(
    'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
    options
  )
  const movies = await res.json()

  const movieTiles = movies.results.map((movie: any) => {
    return (
      <SmallTile
        key={movie.id}
        year={movie.release_date.split('-')[0].toString()}
        category='movie'
        rating='PG-13'
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
