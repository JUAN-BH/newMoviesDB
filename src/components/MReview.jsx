import { useState } from "react"

export const MReview = ({ info }) => {
    const [seeMore, setSeeMore] = useState(false)
    const handleSeeMore = () => {
        setSeeMore(!seeMore)
    }
    // const textReview = info.content > 

  return (
    <article className="MReview">
        <div className="MReview__introInfo">
            <figure>
                {info.author_details.avatar_path ? 
                    (<img src={`https://image.tmdb.org/t/p/original/${info.author_details.avatar_path}`} alt="user" />) :
                    ( <p>{info.author.split(" ")[0].charAt(0)}</p> )
                }
            </figure>   
            <div>
                <p>A review by {info.author}</p>
                <p>Written on {info.created_at.split("T")[0]}</p>
            </div>
        </div>
        <div className="MReview__review">
            {info.content.length > 650 ? 
                    (
                        seeMore ? <p>{info.content} <br /> <span onClick={handleSeeMore}> Read Less </span> </p> : <p>{info.content.substring(0, 650)}... <br /> <span onClick={handleSeeMore}> Read More</span> </p>                        
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
