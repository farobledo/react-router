import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Inicio from "./view/Inicio";
import Crear from "./view/Crear";
import Found from "./view/Found";
import Login from "./view/Login";
import Telas from "./view/Telas";
import Productos from "./view/Productos";
import Foto from "./assets/img/images (13).jfif"
import Navegacion from "./components/Navegacion";
import "./App.css";

export default function App() {
    return (

       
           
      

        <BrowserRouter>
       
        <Navegacion />
            <Routes>
           
                <Route path="/" element={<Inicio/>} />
                <Route path="*" element={<Found/>} />
                <Route path="/crear" element={<Crear/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/telas" element={<Telas/>} />
                <Route path="/productos" element={<Productos/>} />
            

            </Routes>
            <img src={Foto}/>
        </BrowserRouter>

    
    )
}