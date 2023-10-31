import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Search = async ({ params }) => {
  // Mengambil keyword dari URL parameters
  const keyword = params.keyword;

  const decodedKeyword = decodeURI(keyword); // decode URI untuk mengubah tanda baca ke huruf normal

  // Mengambil data anime berdasarkan keyword
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedKeyword}`);
  // ubah data jadi json
  const searchAnime = await response.json();

  return (
    <>
      <section>
        <Header title={`Hasil Pencarian ${decodedKeyword}...`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  )
}

export default Search;
