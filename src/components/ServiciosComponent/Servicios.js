import React from "react";
import "./Servicio.scss";

export const Servicios = () => {
  return (
    <div className="page-service">
      <section className="services">
        <article className="services__design">
          <h2>Diseño Web</h2>
          <p className="services__text">
            Como diseñador web, mi función es crear experiencias visuales
            atractivas y funcionales en línea que transmitan la identidad y
            mensaje de mis clientes de manera efectiva.
          </p>
        </article>
        <article className="services__dev">
          <h2>Desarrollo Web</h2>
          <p className="services__text">
            Como desarrollador web, mi función es crear sitios web funcionales y
            atractivos que satisfagan las necesidades de mis clientes y usuarios
            finales.
          </p>
        </article>
        <article className="services__seo">
          <h2>Posicionamiento Web</h2>
          <p className="services__text">
            Como especialista en posicionamiento web, mi función es optimizar
            sitios web para que aparezcan en los primeros resultados de
            búsqueda, aumentando la visibilidad en línea y generando tráfico de
            calidad para mis clientes.
          </p>
        </article>
      </section>
    </div>
  );
};
