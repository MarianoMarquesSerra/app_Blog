import React from "react";
import { useParams } from "react-router-dom";
import Articulos from "./Articulos";
import { Navigate } from "react-router-dom";

const Post = () => {
    const {id} = useParams();
    return (
        <>
            {Articulos[id-1] ?
            <div className="ContenedorArticulo">
                <h1>{Articulos[id -1].texto}</h1>
                <p>{Articulos[id-1].descripcion}</p>
            </div>
            :
            <Navigate replace to="/error404"/>
            }
        </>
    );
}
 
export default Post;
