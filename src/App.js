import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./componentes/Header";
import Inicio from "./componentes/Inicio";
import Blog from "./componentes/Blog";
import AcercaDe from "./componentes/AcercaDe";
import Post from "./componentes/Post";
import Error404 from "./componentes/Error404";


const App = () => {
  return (
    <BrowserRouter>
        <div className="ContenedorPrincipal">
              <Header/>
              <main>
              <Routes>
                  <Route path="/" element={<Inicio/>}/>
                  <Route path="/blog" element={<Blog/>}/>
                  <Route path="/post/:id" element={<Post/>}/>
                  <Route path="*" element={<Error404/>}/>
                  <Route path="/acerca_de" element={<AcercaDe/>}/>
              </Routes>
            </main>
        </div>
    </BrowserRouter>
  );
}
 
export default App;