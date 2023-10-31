import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Search = async ({ params }) => {
  // Mengambil keyword dari URL parameters
  const keyword = params.keyword;

  // Mengambil data anime berdasarkan keyword
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`);
  // ubah data jadi json
  const searchAnime = await response.json();

  return (
    <>
      <section>
        <Header title={`Hasil Pencarian ${keyword}`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  )
}

export default Search;
