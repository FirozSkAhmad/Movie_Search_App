import { useNavigate, useParams } from "react-router-dom"
import useMovieData from "../../utils/useMovieData"
import ShimmerAboutMovie from "./ShimmerAboutMovie"

const AboutMovie = () => {

    const navigate = useNavigate()

    const { id } = useParams()

    const movieData = useMovieData(id)


    return (Object.keys(movieData).length > 0) ? (
        <div className="flex justify-center items-center h-screen bg-gray-400">
            <div className="border-2 border-black flex  bg-green-300 min-w-[250px] w-2/6 h-72 p-2 rounded-md gap-3">
                <div className="w-64">
                <img className="h-[100%] object-fill rounded-md" src={movieData.Poster}></img>
                </div>  
                <div className="flex flex-col justify-around">
                    <div>
                        <h2><span className="font-medium">Movie Name: </span>{movieData.Title}</h2>
                        <h2><span className="font-medium">Directed By: </span>{movieData.Director}</h2>
                        <h2><span className="font-medium">Rating: </span>{movieData.Ratings[0].Value}</h2>
                        <h2><span className="font-medium">Actors: </span>{movieData.Actors}</h2>
                    </div>
                    <div>
                        <button className="bg-slate-500 p-2 rounded-lg text-white font-medium" onClick={() => navigate(-1)}>Go Back</button>
                    </div>
                </div>
            </div>
        </div>

    ) : <ShimmerAboutMovie />
}

export default AboutMovie