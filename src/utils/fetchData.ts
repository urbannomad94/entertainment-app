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
  return movies
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
  return tvShows
}

export async function getMovieAndShows() {
  const movies = await getMovies()
  const shows = await getShows()
  const moviesAndShows = [...movies.results, ...shows.results].sort(
    (a, b) => 0.5 - Math.random()
  )
  return moviesAndShows
}
