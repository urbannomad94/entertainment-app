import NavBar from '@/componenets/NavBar/NavBar'
import SearchBar from '@/componenets/SearchBar/SearchBar'

import styles from './layout.module.css'

export const metadata = {
  title: 'Entertainment App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.wrapper}>
        <SearchBar />
        {children}
      </div>
    </div>
  )
}
