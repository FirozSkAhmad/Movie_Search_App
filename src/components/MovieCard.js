const MovieCard = (props) => {

    const { data } = props

    const { Title, Year, Poster } = data

    return (
        <div className="w-64 h-80 flex flex-col items-center p-3 rounded-md bg-gray-400">
            <img className="w-52 h-52 my-2 rounded-md" alt="movie-poster" src={Poster} />
            <div>
                <h1 className="my-1"><span className="font-medium">Movie Name : </span>{Title.split(" ").length > 2 ? Title.split(" ").slice(0, 2).join(" ") + "..." : Title.split(" ").slice(0, 2).join(" ")}</h1>
                <h2 className="my-1"><span className="font-medium">Release Date : </span>{Year}</h2>
            </div>
        </div>
    )
}

export default MovieCard