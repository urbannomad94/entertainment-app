import SmallTile from '@/components/SmallTile/SmallTile'
import styles from './page.module.css'

export const metadata = {
  title: 'Entertainment App | Bookmarks',
}

export default function Bookmarks() {
  return (
    <>
      <h1>Bookmarked Movie</h1>
      <div className='gridContainer'>
        {/* TODO: Add bookmarker movies here */}
      </div>
      <h1 style={{ marginTop: '40px' }}>Bookmarked TV Series</h1>
      <div className='gridContainer'>
        {/* TODO: Add bookmarker movies here */}
      </div>
    </>
  )
}
