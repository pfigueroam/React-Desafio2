import React from "react";

function Formulario(props) {
  const captura = (e) => {
    props.setValPassword(e.target.value === props.password);
  };
  return (
    <React.Fragment>
      <p>
        Desafio estado de los <br></br> componentes y eventos
      </p>
      <input type="text" placeholder="Nombre"></input>
      <br></br>
      <input
        type="password"
        placeholder="Ingresa tu password"
        onChange={captura}
      />
      <br></br>
    </React.Fragment>
  );
}

export default Formulario;
