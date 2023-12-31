import Image from "next/image"
import Link from "next/link"

const AnimeList = ({ api }) => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
      {api.data?.map((anime, index) => {
        return (
          <Link href={`/${anime.mal_id}`} className="cursor-pointer text-color-primary hover:text-color-accent transition-all" key={index}>
            <Image src={anime.images.webp.image_url} alt="logo" width={350} height={350} className="w-full max-h-64 object-cover"></Image>
            <h3 className="font-bold md:text-xl p-4 text-sm">{anime.title}</h3>
          </Link>
        )
      })}

    </div>
  )
}

export default AnimeList

// ? adalah optional chaining
/*
 optional chaining digunakan untuk mengakses properti map pada objek api.data. Jika api.data bernilai null atau undefined, maka optional chaining akan mengembalikan undefined dan tidak menimbulkan kesalahan. Jika api.data memiliki nilai yang valid, maka metode map akan dijalankan pada array api.data.
*/