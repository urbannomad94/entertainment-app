import NavBar from '@/components/NavBar/NavBar'
import SearchBar from '@/components/SearchBar/SearchBar'
import styles from './layout.module.css'
import SearchProvider from '@/context/MultiProvider'

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
      <SearchProvider>
        <div className={styles.wrapper}>
          <SearchBar />
          {children}
        </div>
      </SearchProvider>
    </div>
  )
}
