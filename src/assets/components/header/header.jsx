import { Link } from "react-router-dom";
import Menu from "../menuHamburguer/menu";
import "./style.css";


function NavBar() {
    return (
        <header className="background-header">
            <Menu />
            <div className="container">
                <div><Link to="/" className="logo">Recicle 365</Link></div>
            </div>
        </header>
    )
}

export default NavBar;
