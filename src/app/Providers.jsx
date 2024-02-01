'use client'

import {ThemeProvider} from 'next-themes'

const Providers = ({ children }) => {
  return (
    <ThemeProvider defaultTheme='system' attribute='class'>
      <div className='min-h-screen dark:bg-gray-700 dark:text-gray-200 select-none transition-colors duration-300'>
        { children }
      </div>
    </ThemeProvider>
  )
}

export default Providers