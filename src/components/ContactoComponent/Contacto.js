import React from "react";
import "./Contacto.scss";

export const Contacto = () => {
  return (
    <div className="contact-page">
      <h2>Contacto</h2>

      <form className="contact-form" action="mailto:adriaml1998@gmail.com">
        <input
          className="contact-form__input"
          type="text"
          placeholder="Nombre"
        ></input>
        <input
          className="contact-form__input"
          type="text"
          placeholder="Apellidos"
        ></input>
        <input
          className="contact-form__input"
          type="mail"
          placeholder="email@email.com"
        ></input>
        <textarea
          className="contact-form__textarea"
          placeholder="Motivo de contacto"
        ></textarea>
        <input
          className="contact-form__submit"
          type="submit"
          value="Enviar"
        ></input>
      </form>
    </div>
  );
};
