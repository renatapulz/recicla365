import { createBrowserRouter } from 'react-router-dom'
import App from '../App.jsx'
import Home from '../pages/Home/Home.jsx';
import GerenciarPontos from '../pages/GerenciarPontos/GerenciarPontos.jsx'
import Login from '../pages/Login/login.jsx';
import PropTypes from 'prop-types';
import { useContext } from "react";
import { AuthContext } from '../hooks/AuthContext.jsx';

export const Private = ({ Item }) => {
    const { logado } = useContext(AuthContext)
    return logado ? <Item /> : <Login />;
};

Private.propTypes = {
    Item: PropTypes.elementType.isRequired
};

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
                element: <Private Item={GerenciarPontos} />,
            },
            {
                path: "/cadastro",
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
        ]
    }
]);

export default routers;
