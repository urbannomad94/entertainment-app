import styles from './SearchBar.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function SearchBar() {
  return (
    <div className={styles.container}>
      <Image src='/icon-search.svg' alt='search' width='32' height='32'></Image>
      <input
        type='text'
        placeholder='Search for movies or TV series'
        className={styles.search}
      />
    </div>
  )
}
