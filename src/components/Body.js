import { useEffect, useState } from "react"
import MovieCard from "./MovieCard"
import { Link } from 'react-router-dom'
import Shimmer from "./Shimmer"
import NoMovies from "./NoMovies"
import useMoviesData from '../../utils/useMoviesData'
import EmptyName from "./EmptyName"


const Body = () => {

    const [name, setName, data, setData, getData] = useMoviesData()

    const [nameHolder, setNameHolder] = useState(name)

    function searchHandler() {
        setData([])
        setName(nameHolder)
        getData(nameHolder)
    }

    return (
        <div className="my-5">
            <div className="flex justify-center items-center m-10 gap-3">
                <input className="border-2 border-blue-500 p-2 rounded-md focus:border-blue-950" value={nameHolder} type="text" placeholder="Movie Name" onChange={(e) => setNameHolder(e.target.value)}></input>
                <button className="bg-blue-500 p-2 rounded-md text-white font-medium" onClick={searchHandler}>Search</button>
            </div>
            <div className="flex flex-wrap justify-center gap-5">
                {(data) ? (data.length > 0) ? data.map((movieData) => <Link key={movieData.imdbID} to={`moviedata/${movieData.imdbID}`}><MovieCard data={movieData} /></Link>) : <Shimmer /> : (name) ? <NoMovies /> : <EmptyName />}
            </div>
        </div>
    )
}

export default Body