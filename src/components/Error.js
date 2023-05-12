import { useRouteError } from 'react-router-dom'

const Error = () => {
    const { status, statusText } = useRouteError()
    return (
        <div className='w-screen h-screen flex flex-col justify-center items-center'>
            <h1 className='text-red-600 font-medium text-xl'>Opps page not founded.....</h1>
            <h2 className='font-medium text-xl'>{status + ":" + statusText}</h2>
        </div>

    )
}

export default Error