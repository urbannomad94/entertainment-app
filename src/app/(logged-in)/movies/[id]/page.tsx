'use client'

import { useParams } from 'next/navigation'
import styles from './page.module.css'
import { getDetails } from '@/utils/fetchData'
import { Suspense, useEffect, useState } from 'react'

// export const metadata = {
//   title: 'Entertainment App | Movies',
// }

export default async function MovieDetails() {
  const { id } = useParams()
  const [details, setDetails] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDetails(id)
      setDetails(data)
    }
    fetchData()
  }, [id])

  return (
    <>
      <h2>{details.title}</h2>
      <p>{details.overview}</p>
    </>
  )
}
