import AnimeList from "@/app/components/AnimeList"
import Header from "@/app/components/AnimeList/header"
import { getAnimeResponse } from "@/app/libs/api-libs"

const Page = async ({ params }) => {
    const { keyword } = params
    const decodeKeyword = decodeURI(keyword)
    const searchAnime = await getAnimeResponse("anime",`q=${decodeKeyword}`)
    return (
        <>
            <section>
                <Header title={`Pencarian untuk ${decodeKeyword}....`}/>
                <AnimeList api={searchAnime} />
            </section>
        </>
    )
}
export default Page