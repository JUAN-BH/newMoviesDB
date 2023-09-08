import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination} from 'swiper/modules';
import { useGlobalStateContext } from "../contexts/GlobalStateContext";
import { MReview } from "../components/MReview";
import { useMovieInfo } from "../hooks/useMovieInfo"
import { langs } from "../utils/languages";
import 'swiper/css';
import 'swiper/css/pagination';

export const MovieReviews = () => {
    const { state } = useGlobalStateContext();
    const {movieData} = useMovieInfo('/reviews');
    const arrData = movieData?.results;
    
    const lang = state.lang;
    const title = (lang == "es" && langs.es.moviePage.mr) || "Movie Reviews";

    if(!arrData?.length > 0){
        return null;
    }

    return(
        <section className="movieReviews">
            <h2>{title}</h2>
            <Swiper       
                modules={[Pagination]}
                pagination={{ clickable: true }}
                spaceBetween={10}
                slidesPerView={1}
                // autoplay={true}
            >
                {
                    arrData?.map((item) => {
                        return (
                            <SwiperSlide key={item.id}>
                                { ({isActive}) => <MReview key={item.id} info={item} isActive={isActive} /> }
                                {/* <MReview key={item.id} info={item}  /> */}
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}