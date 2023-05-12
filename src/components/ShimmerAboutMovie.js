

const ShimmerAboutMovie = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-400">
            <div className="border-2 border-black  flex bg-green-300 w-2/6 h-72 p-2 rounded-md gap-3">
                <div className="flex justify-center">
                    <div className="w-52 my-2 bg-gray-300 rounded-md"></div>
                </div>
                <div className="flex flex-col justify-around">
                    <div>
                        <h2 className="my-1 h-4 w-64 bg-gray-300 rounded-md"></h2>
                        <h2 className="my-1 h-4 w-64 bg-gray-300 rounded-md"></h2>
                        <h2 className="my-1 h-4 w-64 bg-gray-300 rounded-md"></h2>
                        <h2 className="my-1 h-4 w-64 bg-gray-300 rounded-md"></h2>
                    </div>
                    <div>
                        <div className="p-2 w-14 h-10 rounded-lg bg-gray-300"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShimmerAboutMovie