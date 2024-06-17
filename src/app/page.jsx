import AnimeList from "@/app/components/AnimeList"
import Header from "./components/AnimeList/header"
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "./libs/api-libs"

const Page = async () => {
    const topAnime = await getAnimeResponse("top/anime","limit=10")
    let recommendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
    recommendedAnime = reproduce(recommendedAnime, 5)

  return (
    <>
      <section>
        <Header title="Paling Populer" LinkTiltle="Lihat Semua" LinkHref="/populer" />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header title="Rekomendasi" />
        <AnimeList api={recommendedAnime} />
      </section>
    </>
  )
}
export default Page
