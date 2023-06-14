import styles from './NavBar.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function NavBar() {
  return (
    <div className={styles.container}>
      <Image src='/logo.svg' alt='logo' width='32' height='26'></Image>

      <div className={styles.tabs}>
        <Link href='/browse' className='pointerHover'>
          <Image
            src='/icon-nav-home.svg'
            alt='browse'
            width='20'
            height='20'
          ></Image>
        </Link>
        <Link href='/movies' className='pointerHover'>
          <Image
            src='/icon-nav-movies.svg'
            alt='movies'
            width='20'
            height='20'
          ></Image>
        </Link>
        <Link href='/tv-series' className='pointerHover'>
          <Image
            src='/icon-nav-tv-series.svg'
            alt='tv series'
            width='20'
            height='20'
          ></Image>
        </Link>
        <Link href='/bookmarks' className='pointerHover'>
          <Image
            src='/icon-nav-bookmark.svg'
            alt='bookmarked'
            width='20'
            height='20'
          ></Image>
        </Link>
      </div>
      <Image
        src='/image-avatar.png'
        alt='avatar'
        width='40'
        height='40'
        className={styles.avatar}
      ></Image>
    </div>
  )
}
