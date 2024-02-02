import NavbarItem from './NavbarItem'
import { Suspense } from 'react'

const Navbar = () => {
  return (
    <div className='p-4 flex gap-6 justify-center bg-amber-100 dark:bg-gray-600 lg:text-lg'>
      <Suspense>
        <NavbarItem title='Trending' param='fetchTrending' />
        <NavbarItem title='Top Rated' param='fetchTopRated' />
      </Suspense>
    </div>
  )
}

export default Navbar