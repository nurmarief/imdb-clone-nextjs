import NavbarItem from "./NavbarItem"

const Navbar = () => {
  return (
    <div className='p-4 flex gap-6 justify-center bg-amber-100 dark:bg-gray-600 lg:text-lg'>
      <NavbarItem title='Trending' param='fetchTrending' />
      <NavbarItem title='Top Rated' param='fetchTopRated' />
    </div>
  )
}

export default Navbar