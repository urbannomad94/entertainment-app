'use client'

import { useParams } from 'next/navigation'
import styles from './page.module.css'
import { ShowProps } from '@/app/types/Types.types'
import { getShowDetails } from '@/utils/fetchData'
import { useEffect, useState } from 'react'

// export const metadata = {
//   title: 'Entertainment App | Movies',
// }

export default async function ShowDetails() {
  const { id } = useParams()
  const [details, setDetails] = useState<ShowProps>({} as ShowProps)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getShowDetails(id)
      console.log(data)
      setDetails(data)
    }
    fetchData()
  }, [id])

  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <h2 className={styles.title}>{details.name}</h2>
        <p className={styles.tagline}>{details.tagline}</p>
        <p>
          <span className={styles.red}>Episode Runtime: </span>
          {details.episode_run_time} minutes
        </p>
        <p>
          <span className={styles.red}>Description: </span>
          {details.overview}
        </p>
        <p>
          <span className={styles.red}>Initial Release Date: </span>
          {details.first_air_date}
        </p>
        <p>
          <span className={styles.red}>Average Rating: </span>
          {details.vote_average}
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
