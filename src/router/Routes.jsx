import { createBrowserRouter } from 'react-router-dom'
import App from '../App.jsx'
import Home from '../pages/Home/Home.jsx';
import GerenciarPontos from '../pages/GerenciarPontos/GerenciarPontos.jsx'
import EditarPonto from '../pages/EdicaoPonto/EditarPonto.jsx';
import LoginPage from '../pages/Login/LoginPage.jsx';
import CadastroPage from '../pages/CadastroUsuario/CadastroPage.jsx'
import CadastroPontoPage from '../pages/CadastroPonto/CadastroPontoPage.jsx';
import PropTypes from 'prop-types';
import { useContext } from "react";
import { AuthContext } from '../hooks/AuthContext.jsx';

export const Private = ({ Item }) => {
    const { logado } = useContext(AuthContext)
    return logado ? <Item /> : <LoginPage />;
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
                path: "/edicao",
                element: <Private Item={EditarPonto} />,
            },
            {
                path: "/cadastro-user",
                element: <CadastroPage />,
            },
            {
                path: "/login",
                element: <LoginPage />,
            },
            {
                path: "/cadastro-ponto",
                element: <Private Item={CadastroPontoPage} />,
            }
        ]
    }
]);

export default routers;