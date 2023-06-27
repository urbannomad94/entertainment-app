export type MovieData = {
  id: number
  release_date: string
  adult: boolean
  title: string
  backdrop_path: string
}[]

export type ShowsData = {
  id: number
  first_air_date: string
  adult: boolean
  name: string
  backdrop_path: string
}[]

export async function getMovies() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.MOVIEDB_API_KEY}`,
    },
  }

  const res = await fetch(
    'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
    options
  )
  const movies = await res.json()
  const moviesArr: MovieData = movies.results
  return moviesArr
}

export async function getShows() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.MOVIEDB_API_KEY}`,
    },
  }

  const res = await fetch(
    'https://api.themoviedb.org/3/trending/tv/day?language=en-US',
    options
  )
  const tvShows = await res.json()
  const showsArr: ShowsData = tvShows.results
  return showsArr
}

export async function getMovieAndShows() {
  const movies = await getMovies()
  const shows = await getShows()
  const moviesAndShows = [...movies, ...shows].sort(
    (a, b) => 0.5 - Math.random()
  )
  return moviesAndShows
}
