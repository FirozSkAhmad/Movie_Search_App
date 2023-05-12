import { useEffect, useState } from "react"
import { BASE_MOVIES_URL } from './constants'

const useMoviesData = () => {

    const [data, setData] = useState([])

    const [name, setName] = useState('titanic')

    useEffect(() => {
        getData("titanic")
    }, [])

    async function getData(name) {
        try {
            const data = await fetch(BASE_MOVIES_URL + name)
            const json = await data.json()
            return setData(json.Search)
        }
        catch (err) {
            return setData(null)
        }
    }
    return [name, setName, data, setData, getData]
}

export default useMoviesData
