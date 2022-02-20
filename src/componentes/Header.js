import React from "react";
import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <header>
            <h1>Menú Principal</h1>
                <nav>
                    <NavLink className="Menu" to="/">Inicio</NavLink>
                    <NavLink className="Menu" to="/blog">Blog</NavLink>
                    <NavLink className="Menu" to="/acerca_de">Acerca de</NavLink>
                </nav>
        </header>
    );
}
 
export default Header;