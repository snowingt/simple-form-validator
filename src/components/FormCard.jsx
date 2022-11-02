import React from "react";
import "../style.css";
import { useState } from "react";

const FormCard = ({ crearDate }) => {
  const [cardDate, setCardDate] = React.useState({
    name: "",
    number: "",
    dateM: "",
    dateY: "",
    cvc: "",
  });
  // extraemos los valores del state
  const { name, number, dateM, dateY, cvc } = cardDate;
  // error
  const [error, setError] = React.useState(false);
  const [errorNumber, setErrorNumber] = React.useState(false);
  const [errorDate, setErrorDate] = React.useState(false);
  const [errorCvc, setErrorCvc] = React.useState(false);
  const actualizarState = (e) => {
    setCardDate({
      ...cardDate,
      [e.target.name]: e.target.value,
    });
  };
  //emviar formulario para que no se recargue la pagina
  const submitForm = (e) => {
    e.preventDefault();
    //validar
    if (
      name.trim() === "" ||
      number.trim() === ""||
      dateM.trim() === "" ||
      dateY.trim() === "" ||
      cvc.trim() === ""
    ) {
      setError(true);
      return;
    }if (number.length !== 16) { 
      setErrorNumber(true);
      return;
    }if (cvc.length !== 3) {

      setErrorCvc(true);
      return;
        
    }if (dateM.length !== 2||dateY.length !== 2) {
        setErrorDate(true);
        return;
        
    } else {
        
    }
    setError(false);
    setErrorDate(false);

    setErrorCvc(false);
    setErrorNumber(false);
    //asignar un id

    //crear la cita
    crearDate(cardDate);

    //reiniciar el form
    setCardDate({
      name: "",
      number: "",
      dateM: "",
      dateY: "",
      cvc: "",
    });
  };

  return (
    <div>
      <div className="second--item">
        <div className="form--container">
          <form className="form--date" action="" onSubmit={submitForm}>
            <div className="name--data">
              <h4>CARDHOLDER NAME</h4>
              <input
                className="input--name"
                type="text"
                placeholder="e.g. Jane Appleseed"
                name="name"
                onChange={actualizarState}
                value={name}
              />
            </div>
            <div className="card--number">
              <h4>CARD NUMBER</h4>
              <input
              maxLength={16}
              minLength={16}
                className="input--number"
                type="number"
                placeholder="e.g. 1234 5678 9123 0000"
                name="number"
                onChange={actualizarState}
                value={number}
              />
            </div>
            <div className="date--card">
              <div className="mmyy">
                <h4>EXP. DATE(MM/YY) </h4>

                <input
                  type="number"
                  placeholder="MM"
                  className="input--date input--m"
                  name="dateM"
                  onChange={actualizarState}
                  value={dateM}
                />
                <input
                  type="number"
                  placeholder="YY"
                  className="input--date input--y"
                  name="dateY"
                  onChange={actualizarState}
                  value={dateY}
                />
              </div>
              <div>
                <h4>CVC</h4>
                <input
                  type="number"
                  placeholder="e.g. 123"
                  className="code--card input--code"
                  name="cvc"
                  onChange={actualizarState}
                  value={cvc}
                />
              </div>
            </div>

            <button type="submit">confirm</button>
          </form>
          {error ? <p>Todos los campos son obligatorios</p> : null}
          {errorDate ? <p>Introduzca un DATE number correcto</p> : null}
          {errorCvc ? <p>Introduzca un CVC  correcto</p> : null}
          {errorNumber ? <p>Introduzca un card number correcto con 16 digitos</p> : null}
        </div>
      </div>
    </div>
  );
};

export default FormCard;
