import Results from '@/components/Results'

const Home = async ({ searchParams }) => {
  const genre = searchParams.genre || 'fetchTrending'
  const res = await fetch(
    `https://api.themoviedb.org/3${genre === 'fetchTrending' ? '/movie/top_rated' : '/trending/all/week'
    }?api_key=${process.env.TMDB_API_KEY}&language=US&page=1`
  )
  const data = await res.json()

  if (!res) {
    throw new Error('Failed to fetch')
  }

  const results = data.results

  return (
    <h1>
      <Results results={results} />
    </h1>
  )
}

export default Home