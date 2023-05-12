const ShimmerCard = () => {
    return (
        <div className="w-64 h-72 p-3 flex flex-col rounded-md bg-gray-400">
            <div className="flex justify-center">
                <div className="w-52 h-52 my-2 bg-gray-200 rounded-md"></div>
            </div>
            <div className="ml-3">
                <div className="my-1 h-4 w-2/4 bg-gray-200 rounded-md"></div>
                <div className="my-1 h-4 w-2/4 bg-gray-200 rounded-md"></div>
            </div>
        </div>
    )
}

const Shimmer = () => {
    return (
        <>
            {Array(10).fill("").map((x, ind) => <ShimmerCard key={ind} />)}
        </>
    )
}

export default Shimmer