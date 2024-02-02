import Image from 'next/image'
import Link from 'next/link'
import {FiThumbsUp} from 'react-icons/fi'

const Card = ({result}) => {
  return (
    <div className='sm:m-2 rounded-lg sm:border sm:border-slate-400 group/card cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md transition-shadow duration-200'>
      <Link href={`/movie/${result.id}`}>
        <Image 
          className='sm:rounded-t-lg group-hover/card:opacity-75 transition-opacity duration-200'
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          width={500}
          height={300}
        />
        <div className='p-2'>
          <div className='line-clamp-2 text-md'>{result.overview}</div>
          <h2 className='text-lg font-bold truncate'>
            {result.title || result.name}
          </h2>
          <p className='flex items-center'>
            {result.release_date || result.first_air_date}
            <FiThumbsUp className='h-5 mr-1 ml-3' />
            {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  )
}

export default Card