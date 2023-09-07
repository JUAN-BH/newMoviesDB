import { MReview } from "../components/MReview";
import { useMovieInfo } from "../hooks/useMovieInfo"

export const MovieReviews = () => {
    const {movieData} = useMovieInfo('/reviews');
    const arrData = movieData?.results;

    if(!arrData?.length > 0){
        return null;
    }

    return(
        <section className="movieReviews">
            <h2>Movie Reviews</h2>
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