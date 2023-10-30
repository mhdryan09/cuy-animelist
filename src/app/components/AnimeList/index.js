import Image from "next/image"
import Link from "next/link"

const AnimeList = ({ id, title, images }) => {
  return (
    <Link href={`/${id}`} className="cursor-pointer">
      <Image src={images} alt="logo" width={350} height={350}></Image>
      <h3 className="font-bold md:text-xl p-4 text-sm">{title}</h3>
    </Link>
  )
}

export default AnimeList