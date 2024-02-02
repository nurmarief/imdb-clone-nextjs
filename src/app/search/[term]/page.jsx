import Results from '@/components/Results'

export default async function SearchPage({ params }) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${params.term}&language=en-US&page=1&include_adult=false`
  )
  const data = await res.json()
  const results = data.results
  return (
    <div>
      {results && results.length === 0 && (
        <h1 className='pt-6 text-center'>No results found</h1>
      )}
      {results && <Results results={results} />}
    </div>
  )
}