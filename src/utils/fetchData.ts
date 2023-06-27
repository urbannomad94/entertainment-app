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

export async function getTVShows() {
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
