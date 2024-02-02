'use client'

import { useEffect } from 'react'

const Error = ({error, reset}) => {

  useEffect(() => {

  }, [error])
  
  return (
    <div className='mt-10 text-center'>
      <h1>Something went wrong, please try again</h1>
      <button className='hover:text-amber-600' onClick={() => reset()}>Try again</button>
    </div>
  )
}

export default Error