"use client";

import { useState } from "react";
import Button from "./Button";

const sendEmail = () => {
  fetch("https://formspree.io/f/xgedvqje", {
    method: "POST",
    body: JSON.stringify(formState),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        alert("Algo salió mal, correo no fue enviado. : " + error.message);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      alert("¡Correo enviado!, Gracias por comunicarte con nosotros");
      console.log({
        message: "¡Correo enviado!, Gracias por comunicarte con nosotros",
        data,
      });
    })
    .catch((error) => {
      alert("Algo salió mal, correo no fue enviado. : " + error.message);
      console.log("Algo salió mal, correo no fue enviado. : " + error.message);
    });
};

export default function ContactForm({ initialState, fields }) {
  const [formState, setFormState] = useState(initialState);
  const resetForm = () => setFormState(initialState);

  const handleInputChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      sendEmail();
      resetForm();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full h-full grid gap-4">
      <h2 className="text-2xl font-bold text-center">Contáctanos</h2>
      {fields.map(({ component: Component, ...props }) => {
        return (
          <Component key={props.name} onChange={handleInputChange} {...props} />
        );
      })}
      <Button type="submit" className="place-self-center">
        Enviar
      </Button>
    </form>
  );
}
