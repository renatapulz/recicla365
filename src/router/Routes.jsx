import { createBrowserRouter } from 'react-router-dom'
import App from '../App.jsx'
import Home from '../pages/Home/Home.jsx';
import GerenciarPontos from '../pages/GerenciarPontos/GerenciarPontos.jsx'

const routers = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <h1>Página não encontrada</h1>,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/gerenciamento",
                element: <GerenciarPontos />,
                
            }
        ]
    }
    ])

    export default routers;

