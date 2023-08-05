// import { useParams } from 'next/navigation'
import styles from './page.module.css'
import { MovieProps } from '@/types/Types.types'
import { getMovieDetails } from '@/utils/fetchData'
import { useEffect, useState } from 'react'

export default async function MovieDetails({
  params,
}: {
  params: { id: number }
}) {
  const details = await getMovieDetails(params.id)

  const releaseDate = new Date(details.release_date)
  const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(
    releaseDate
  )
  const formattedDate = `${month} ${releaseDate.getDate()} ${releaseDate.getFullYear()}`

  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <h2 className={styles.title}>{details.title}</h2>
        <p className={styles.tagline}>{details.tagline}</p>
        <p>
          <span className={styles.red}>Runtime: </span>
          {details.runtime} minutes
        </p>
        <p>
          <span className={styles.red}>Description: </span>
          {details.overview}
        </p>
        <p>
          <span className={styles.red}>Release Date: </span>
          {details.release_date}
        </p>
        <p>
          <span className={styles.red}>Average Rating: </span>
          {details.vote_average}
        </p>
        <p>
          <span className={styles.red}>Budget: </span>${details.budget}
        </p>
      </div>
      <div
        className={styles.imgContainer}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${details.poster_path})`,
          backgroundSize: 'cover',
        }}
      ></div>
    </div>
  )
}
