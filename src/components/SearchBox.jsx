'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SearchBox() {
  const [search, setSearch] = useState('')
  const router = useRouter()
  const handleSubmit = (e) => {
    e.preventDefault()
    router.push(`/search/${search}`)
  }
  return (
    <form
      className='mx-auto px-5 max-w-6xl flex justify-between'
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        placeholder='Search keywords...'
        className='outline-none rounded-md w-full h-14 flex-1 bg-transparent placeholder-gray-500'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className='text-amber-600 disabled:text-gray-400'
        disabled={search === ''}
      >
        Search
      </button>
    </form>
  )
}