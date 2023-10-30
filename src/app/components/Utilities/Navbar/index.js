import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='bg-indigo-500'>
      <div className='flex md:flex-row flex-col gap-2 justify-between p-4'>
        <Link href="/" className='font-bold text-white text-2xl'>Cuy Anime List</Link>
        <input type="text" placeholder='Cari Anime...' />
      </div>
    </header>
  )
}

export default Navbar