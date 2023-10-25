import React from "react";
import { Link } from "react-router-dom";
import eci from "../assets/eci.jpg";
import ea from "../assets/ea.jpg";
import acciona from "../assets/acciona.jpg";
import sabadell from "../assets/sabadell.png";

export const Inicio = () => {
  return (
    <div className="home">
      <h1>
        Hola, soy Adrià Mampel y soy <strong>Desarrollador Web</strong> de
        Barcelona, y ofrezco mis servicios de <strong>programación</strong> y
        <strong> desarrollo</strong> en todo tipo de proyectos web.
      </h1>

      <h2>
        Te ayudo a crear tu sitio o aplicación web, tener más visibilidad y
        relevancia en internet. <Link to="/contacto">Contacta conmigo</Link>
      </h2>

      <section className="lasts-works">
        <h2 className="heading">Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis proyectos de desarrollo web.</p>
        <div className="works">
          <div>
            <h2>El corte inglés:</h2>
            <img
              className="works__detail"
              src={eci}
              onClick={() => window.open("https://seguros.elcorteingles.es/")}
            />
          </div>
          <div>
            <h2>Europ Assistance:</h2>
            <img
              className="works__detail"
              src={ea}
              onClick={() => window.open("https://www.europ-assistance.com/")}
            />
          </div>
          <div>
            <h2>Acciona:</h2>
            <img
              className="works__detail"
              src={acciona}
              onClick={() => window.open("https://www.acciona.com/es/")}
            />
          </div>
          <div>
            <h2>Banco Sabadell:</h2>
            <img
              className="works__detail"
              src={sabadell}
              onClick={() =>
                window.open(
                  "https://www.bancsabadell.com/bsnacional/es/particulares/"
                )
              }
            />
          </div>
        </div>
      </section>
    </div>
  );
};
