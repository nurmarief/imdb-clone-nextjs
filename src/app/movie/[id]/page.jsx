import Image from 'next/image'

const MoviePage = async ({params}) => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.TMDB_API_KEY}`)
  const movie = await res.json()

  return (
    <div className='w-full'>
      <div className='mx-auto p-4 md:pt-8 max-w-6xl md:space-x-6 flex flex-col md:flex-row content-center'>
        <Image
          className='rounded-lg'
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
          alt={movie.title || movie.name}
          width={500}
          height={300}
          style={{maxWidth: '100%', height: '100%'}}
        />
        <div className='p-2'>
          <h2 className='mb-3 text-lg font-bold'>{movie.title || movie.name}</h2>
          <p className='mb-3 text-lg'>{movie.overview}</p>
          <p className='mb-3'>
            <span className='mr-1 font-semibold'>Date released:&nbsp;</span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p className='mb-3'>
            <span className='mr-1 font-semibold'>Rating:&nbsp;</span>
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoviePage