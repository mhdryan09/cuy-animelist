import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Home = async () => {
  // fetching data
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`);
  const topAnime = await response.json();

  return (
    <>
    {/* Anime Terpopuler */}
      <section>
        <Header title={"Paling Populer"} linkHref="/populer" linkTitle="Lihat Semua" />
        <AnimeList api={topAnime} />
      </section>
    </>
  )
}

export default Home;
