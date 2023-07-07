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
      <h2>{details.name}</h2>
      <p>{details.tagline}</p>
      <p>{details.episode_run_time}</p>
      <p>{details.overview}</p>
      <p>{details.first_air_date}</p>
      <p>{details.vote_average}</p>
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
