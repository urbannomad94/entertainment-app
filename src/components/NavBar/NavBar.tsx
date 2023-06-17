import styles from './NavBar.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function NavBar() {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Image src='/logo.svg' alt='logo' fill></Image>
      </div>
      <div className={styles.tabs}>
        <Link href='/browse' className='pointerHover'>
          <div className={styles.imgContainer}>
            <Image src='/icon-nav-home.svg' alt='browse' fill></Image>
          </div>
        </Link>
        <Link href='/movies' className='pointerHover'>
          <div className={styles.imgContainer}>
            <Image src='/icon-nav-movies.svg' alt='movies' fill></Image>
          </div>
        </Link>
        <Link href='/tv-series' className='pointerHover'>
          <div className={styles.imgContainer}>
            <Image src='/icon-nav-tv-series.svg' alt='tv series' fill></Image>
          </div>
        </Link>
        <Link href='/bookmarks' className='pointerHover'>
          <div className={styles.imgContainer}>
            <Image src='/icon-nav-bookmark.svg' alt='bookmarked' fill></Image>
          </div>
        </Link>
      </div>
      <div className={styles.avatarContainer}>
        <Image
          src='/image-avatar.png'
          alt='avatar'
          fill
          className={styles.avatar}
        ></Image>
      </div>
    </div>
  )
}
