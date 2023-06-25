import styles from './page.module.css'
import LargeTile from '@/components/LargeTile/LargeTile'
import SmallTile from '@/components/SmallTile/SmallTile'

export default function Browse() {
  return (
    <>
      <h1 className={styles.title}>Trending</h1>
      <div className={styles.trendingContainer}>
        <LargeTile
          year={2019}
          category='movie'
          rating='PG'
          title='Beyond Earth'
        />
        <LargeTile
          year={2022}
          category='tv-series'
          rating='PG-13'
          title='Andor'
        />
      </div>
      <h1 className={styles.title}>Recommended for you</h1>
      <div className='gridContainer'>
        <SmallTile
          year={2022}
          category='tv-series'
          rating='PG-13'
          title='Andor'
        />
        <SmallTile
          year={2022}
          category='tv-series'
          rating='PG-13'
          title='Andor'
        />
        <SmallTile
          year={2022}
          category='tv-series'
          rating='PG-13'
          title='Andor'
        />
        <SmallTile
          year={2022}
          category='tv-series'
          rating='PG-13'
          title='Andor'
        />
        <SmallTile
          year={2022}
          category='tv-series'
          rating='PG-13'
          title='Andor'
        />
        <SmallTile
          year={2022}
          category='tv-series'
          rating='PG-13'
          title='Andor'
        />
        <SmallTile
          year={2022}
          category='tv-series'
          rating='PG-13'
          title='Andor'
        />
        <SmallTile
          year={2022}
          category='tv-series'
          rating='PG-13'
          title='Andor'
        />
        <SmallTile
          year={2022}
          category='tv-series'
          rating='PG-13'
          title='Andor'
        />
        <SmallTile
          year={2022}
          category='tv-series'
          rating='PG-13'
          title='Andor'
        />
        <SmallTile
          year={2022}
          category='tv-series'
          rating='PG-13'
          title='Andor'
        />
        <SmallTile
          year={2022}
          category='tv-series'
          rating='PG-13'
          title='Andor'
        />
      </div>
    </>
  )
}
