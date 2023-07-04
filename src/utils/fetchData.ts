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

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOVIEDB_API_KEY}`,
  },
}

export async function getMovies() {
  const res = await fetch(
    'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
    options
  )
  const movies = await res.json()
  const moviesArr: MovieData = movies.results
  return moviesArr
}

export async function getShows() {
  const res = await fetch(
    'https://api.themoviedb.org/3/trending/tv/day?language=en-US',
    options
  )
  const tvShows = await res.json()
  const showsArr: ShowsData = tvShows.results
  return showsArr
}

export async function getUpcomingMovies() {
  const res = await fetch(
    'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
    options
  )
  const upcomingMovies = await res.json()
  const upcomingMoviesArr: MovieData = upcomingMovies.results
  return upcomingMoviesArr
}

export async function getMoviesAndShows() {
  const movies = await getMovies()
  const shows = await getShows()
  const moviesAndShows = [...movies, ...shows].sort(
    (a, b) => 0.5 - Math.random()
  )
  return moviesAndShows
}

export async function getDetails(id: string) {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      options
    )
    const details = await res.json()
    return details
  } catch (error) {
    console.error(error)
  }
}
