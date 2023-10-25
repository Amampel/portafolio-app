import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Contacto } from "../components/ContactoComponent/Contacto";
import { Curriculum } from "../components/CurriculumComponent/Curriculum";
import { Inicio } from "../components/Inicio";
import { HeaderNav } from "../components/layout/HeaderNav";
import { Footer } from "../components/layout/Footer";
import { Portafolio } from "../components/PortafolioComponent/Portafolio";
import { Servicios } from "../components/ServiciosComponent/Servicios";

export const Rutas = () => {
  return (
    <BrowserRouter>
      {/* HEADER Y NAVEGACION  */}
      <HeaderNav></HeaderNav>
      {/* CONTENIDO CENTRAL */}
      <section className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/inicio"></Navigate>}></Route>
          <Route path="*" element={<Navigate to="/inicio"></Navigate>}></Route>
          <Route path="/inicio" element={<Inicio />}></Route>
          <Route path="/curriculum" element={<Curriculum />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
          <Route path="/portafolio" element={<Portafolio />}></Route>
          <Route path="/servicios" element={<Servicios />}></Route>
        </Routes>
      </section>

      {/* FOOTER */}
      <Footer></Footer>
    </BrowserRouter>
  );
};
