import { useEffect, useState } from "react"

const useMovieData = (id) => {

    const [movieData, setMovieData] = useState({})

    useEffect(() => {
        getMovieData()
    }, [])

    async function getMovieData() {
        const data = await fetch(`https://www.omdbapi.com/?apikey=acb478f3&i=${id}`)
        const json = await data.json()
        setMovieData(json)
    }

    return movieData
}

export default useMovieData