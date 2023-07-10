import { MovieProps, ShowProps } from '@/app/types/Types.types'

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
  const moviesArr: MovieProps[] = movies.results
  return moviesArr
}

export async function getShows() {
  const res = await fetch(
    'https://api.themoviedb.org/3/trending/tv/day?language=en-US',
    options
  )
  const tvShows = await res.json()
  const showsArr: ShowProps[] = tvShows.results
  return showsArr
}

export async function getUpcomingMovies() {
  const res = await fetch(
    'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
    options
  )
  const upcomingMovies = await res.json()
  const upcomingMoviesArr: MovieProps[] = upcomingMovies.results
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

export async function getMovieDetails(id: string) {
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

export async function getShowDetails(id: string) {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/tv/${id}?language=en-US`,
      options
    )
    const details = await res.json()
    return details
  } catch (error) {
    console.error(error)
  }
}

export async function searchMovies(search: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`,
    options
  )
  const movies = await res.json()
  const moviesArr: MovieProps[] = movies.results
  return moviesArr
}

export async function searchShows(search: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/tv?query=${search}&include_adult=false&language=en-US&page=1`,
    options
  )
  const shows = await res.json()
  const showsArr: ShowProps[] = shows.results
  return showsArr
}

export async function searchMoviesAndShows(search: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/multi?query=${search}&include_adult=false&language=en-US&page=1`,
    options
  )
  const moviesAndShows = await res.json()
  const moviesAndShowsArr = moviesAndShows.results
  return moviesAndShowsArr
}
