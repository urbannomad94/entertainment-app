'use client'

import SmallTile from '@/components/SmallTile/SmallTile'
import styles from './page.module.css'
import { useContext } from 'react'
import { MultiContext } from '@/context/MultiProvider'
import { MovieProps, ShowProps } from '@/types/Types.types'
import Link from 'next/link'

// export const metadata = {
//   title: 'Entertainment App | Bookmarks',
// }

export default function Bookmarks() {
  const { movieBookmarks, showBookmarks } = useContext(MultiContext)

  const bookmarkedMovies = movieBookmarks.map((movie: MovieProps) => {
    return (
      <Link
        key={movie.id}
        href={`/movies/${movie.id}`}
        style={{ textDecoration: 'none' }}
      >
        <div key={movie.id} style={{ marginBottom: '10px' }}>
          <SmallTile
            id={movie.id}
            year={+movie.release_date.split('-')[0]}
            category='movie'
            rating={movie.vote_average}
            title={movie.title}
            image={movie.backdrop_path}
          />
        </div>
      </Link>
    )
  })

  const bookmarkedShows = showBookmarks.map((show: ShowProps) => {
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
      <h1>Bookmarked Movie</h1>
      <div className='gridContainer'>{bookmarkedMovies}</div>
      <h1 style={{ marginTop: '40px' }}>Bookmarked TV Series</h1>
      <div className='gridContainer'>{bookmarkedShows}</div>
    </>
  )
}
