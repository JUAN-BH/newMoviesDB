import { MReview } from "../components/MReview";
import { useMovieInfo } from "../hooks/useMovieInfo"

export const MovieReviews = () => {
    const {movieData} = useMovieInfo('/reviews');
    const arrData = movieData?.results;
    return(
        <section className="movieReviews">
            <h1>Movie Reviews</h1>
            <div>
                {
                    arrData?.map((item) => {
                        return (
                            <MReview key={item.id} info={item} />
                        )
                    })
                }
            </div>
        </section>
    )
}