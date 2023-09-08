import { useEffect, useState } from "react"
import { useGlobalStateContext } from "../contexts/GlobalStateContext";
import { langs } from "../utils/languages";

export const MReview = ({ info, isActive }) => {
    const { state } = useGlobalStateContext();
    const [seeMore, setSeeMore] = useState(false)
    const lang = state.lang;
    const readM = (lang == "es" && langs.es.moviePage.readM) || "Read More";
    const readL = (lang == "es" && langs.es.moviePage.readL) || "Read Less";
    const wBy = (lang == "es" && langs.es.moviePage.wBy) || "A review by";
    const wOn = (lang == "es" && langs.es.moviePage.wOn) || "Written on";
    const handleSeeMore = () => {
        setSeeMore(!seeMore)
    }
    useEffect(() => {
        setSeeMore(false)
    }, [isActive])
  return (
    <article className='MReview'>
        <div className="MReview__introInfo">
            <figure>
                {info.author_details.avatar_path ? 
                    (<img src={`https://image.tmdb.org/t/p/original/${info.author_details.avatar_path}`} alt="user" />) :
                    ( <p>{info.author.split(" ")[0].charAt(0)}</p> )
                }
            </figure>   
            <div>
                <p>{wBy} {info.author}</p>
                <p>{wOn} {info.created_at.split("T")[0]}</p>
            </div>
        </div>
        <div className="MReview__review">
            {info.content.length > 650 ? 
                    (
                        seeMore ? <p>{info.content} <br /> <span onClick={handleSeeMore}> {readL} </span> </p> : <p>{info.content.substring(0, 650)}... <br /> <span onClick={handleSeeMore}> {readM}</span> </p>                        
                    ) 
                : 
                    ( 
                        <p>{info.content}</p>
                    )
            }
        </div>
    </article>
  )
}
