'use client'

import { useParams } from 'next/navigation'
import styles from './page.module.css'
import { getDetails } from '@/utils/fetchData'

// export const metadata = {
//   title: 'Entertainment App | Movies',
// }

export default async function MovieDetails() {
  const { id } = useParams()

  // const options = {
  //   method: 'GET',
  //   headers: {
  //     accept: 'application/json',
  //     Authorization: `Bearer ${process.env.MOVIEDB_API_KEY}`,
  //   },
  // }

  // const res = await fetch(
  //   `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
  //   options
  // )
  // const movie = await res.json()

  const movie = await getDetails(id)

  return (
    <>
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
    </>
  )
}
