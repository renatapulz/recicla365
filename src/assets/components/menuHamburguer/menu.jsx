import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { useContext } from "react";
import { AuthContext } from '../../../hooks/AuthContext.jsx';


function Menu() {
    const [isOpen, setOpen] = useState(false)
    const { logado, logout } = useContext(AuthContext);

    const toggleMenu = () => {
        setOpen(!isOpen);
    };

    return (
        <div>
            <div className={isOpen ? 'icon iconActive' : 'icon'} onClick={toggleMenu}>
                <div className="hamburguer hamburguerIcon"></div>
            </div>
            <div className={isOpen ? 'menu menuOpen' : 'menu menuClose'}>
                <div className="list">
                    <ul className="listItems">
                        { logado ? (
                            <>
                                <li><Link to="/" className="link-menu" onClick={toggleMenu}>Pontos de coleta</Link></li>
                                <li><Link to="/gerenciamento" className="link-menu" onClick={toggleMenu}>Gerenciar pontos</Link></li>
                                <li><buttom onClick={() => { toggleMenu(); logout(); }} className="link-menu">Sair</buttom></li>
                            </>
                        ) : (
                            <>
                                <li><Link to="/" className="link-menu" onClick={toggleMenu}>Pontos de coleta</Link></li>
                                <li><Link to="/login" className="link-menu" onClick={toggleMenu}>Cadastrar Pontos</Link></li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Menu;
