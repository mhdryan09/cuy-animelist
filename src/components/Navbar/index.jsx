import Link from 'next/link'
import React from 'react'
import InputSearch from './InputSearch'

const Navbar = () => {
  return (
    <header className='bg-color-accent'>
      <div className='flex md:flex-row flex-col gap-2 justify-between md:items-center p-4'>
        <Link href="/" className='font-bold text-2xl'>Cuy Anime List</Link>
        <InputSearch />
      </div>
    </header>
  )
}

export default Navbar