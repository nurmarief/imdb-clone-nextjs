import Link from 'next/link'

const MenuItem = ({ title, address, Icon }) => {
  return (
    <Link href={address} className='hover:text-amber-500'>
      <Icon className='sm:hidden text-2xl' />
      <p className='hidden sm:inline text-sm uppercase'>{ title }</p>
    </Link>
  )
}

export default MenuItem