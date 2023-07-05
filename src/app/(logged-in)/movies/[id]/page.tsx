'use client'

import { useParams } from 'next/navigation'
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
      <p>{details.overview}</p>
    </div>
  )
}
