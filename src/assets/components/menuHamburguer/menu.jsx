import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";


function Menu() {
    const [isOpen, setOpen] = useState(false)


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
                        <li><Link to="/" className="link-menu">Pontos de coleta</Link></li>
                        <li><Link to="/login" className="link-menu">Cadastrar Pontos</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Menu;
