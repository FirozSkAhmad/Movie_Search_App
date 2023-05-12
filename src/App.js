import ReactDOM from "react-dom/client"
import Body from "./components/Body"
import AboutMovie from "./components/AboutMovie"
import Error from './components/Error'
import '../index.css'

import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom'

const App = () => {
    return (
        <>
            <Outlet />
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        element: <App />,
        path: '/',
        errorElement: <Error />,
        children: [
            {
                element: <Body />,
                path: '/'
            },
            {
                element: <AboutMovie />,
                path: 'moviedata/:id'
            }
        ]
    }

])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter} />)