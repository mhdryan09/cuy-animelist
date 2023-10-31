'use client'

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation";
import { useRef } from "react"

const InputSearch = () => {
  const searchRef = useRef(); // // Reference to the input element
  const router = useRouter(); // Router for routing to different pages

  const handleSearch = (e) => {
    // jika tombol enter ditekan atau tombol di klik
    if (e.key === "Enter" || e.type === "click") {
      // matikan default submit
      e.preventDefault();
      // ambil inputan value
      const keyword = searchRef.current.value;
      // redirect halaman search dgn keyword
      router.push(`/search/${keyword}`);
      // kosongkan inputan / reset inputan
      searchRef.current.value = "";
    }
  }

  return (
    <div className="relative">
      <input ref={searchRef} type="text" placeholder='Cari Anime...' className="w-full p-2 rounded" onKeyDown={handleSearch} />
      <button className="absolute top-2 end-3" onClick={handleSearch}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  )
}

export default InputSearch