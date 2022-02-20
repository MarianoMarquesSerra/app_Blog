import React from "react";
import Articulos from "./Articulos";
import { NavLink } from "react-router-dom";


const Blog = () => {
    return (
        <div className="ContenedorBlog">
            <h2>Blog</h2>
             <ul>
                {
                    Articulos.map((articulo) => {
                        return <li className="Menu" key={articulo.id}>
                                    <NavLink to={`/post/${articulo.id}`}>
                                        {articulo.texto}
                                    </NavLink>
                                </li>
                    })
                }
             </ul>
        </div>
    );
}
 
export default Blog;
