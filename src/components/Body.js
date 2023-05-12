import { useEffect, useState } from "react"
import MovieCard from "./MovieCard"
import { Link } from 'react-router-dom'
import Shimmer from "./Shimmer"
import NoMovies from "./NoMovies"
import useMoviesData from '../../utils/useMoviesData'


const Body = () => {

    const [name, setName,data, setData, getData] = useMoviesData()

    function searchHandler() {
        setData([])
        getData(name)
    }

    return (
        <div className="my-5">
            <div className="flex justify-center items-center m-10 gap-3">
                <input className="border-2 border-blue-500 p-2 rounded-md focus:border-blue-950" value={name} type="text" placeholder="Movie Name" onChange={(e) => setName(e.target.value)}></input>
                <button className="bg-blue-500 p-2 rounded-md text-white font-medium" onClick={searchHandler}>Search</button>
            </div>
            <div className="flex flex-wrap justify-center gap-5">
                {(data) ? (data.length > 0) ? data.map((movieData) => <Link key={movieData.imdbID} to={`moviedata/${movieData.imdbID}`}><MovieCard data={movieData} /></Link>) : <Shimmer /> : <NoMovies />}
            </div>
        </div>
    )
}

export default Body