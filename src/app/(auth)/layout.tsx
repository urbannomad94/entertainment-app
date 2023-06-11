import styles from './layout.module.css'

export const metadata = {
  title: 'Entertainment App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className={styles.container}>{children}</div>
}
