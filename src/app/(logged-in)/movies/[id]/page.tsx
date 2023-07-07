'use client'

import { useParams } from 'next/navigation'
import Image from 'next/image'
import styles from './page.module.css'
import { MovieProps } from '@/app/types/Types.types'
import { getMovieDetails } from '@/utils/fetchData'
import { useEffect, useState } from 'react'

export default async function MovieDetails() {
  const { id } = useParams()
  const [details, setDetails] = useState<MovieProps>({} as MovieProps)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMovieDetails(id)
      console.log(data)
      setDetails(data)
    }
    fetchData()
  }, [id])

  return (
    <div className={styles.container}>
      <h2>{details.title}</h2>
      <p>{details.tagline}</p>
      <p>{details.runtime}</p>
      <p>{details.overview}</p>
      <p>{details.release_date}</p>
      <p>{details.vote_average}</p>
      <p>{details.budget}</p>
      <div
        className={styles.imgContainer}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${details.poster_path})`,
          backgroundSize: 'cover',
        }}
      >
        {/* <Image
          src={`https://image.tmdb.org/t/p/original${details.backdrop_path}`}
          alt='movie poster'
          // width={509}
          // height={763}
          // fill
        ></Image> */}
      </div>
    </div>
  )
}
