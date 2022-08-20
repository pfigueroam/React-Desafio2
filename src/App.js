import Formulario from "./componentes/formulario.jsx";
import Boton from "./componentes/boton";
import Agregados from "./componentes/agregados";
import React, {useState} from 'react';

function App() {
  const [password,setPassword] =  useState('252525');
  const [valContrasena, setValcontrasena] = useState(false);


  return (
    <body>
      <div className ="container">
        <form>
          <Formulario password={password} setValPassword = {setValcontrasena} />

          {valContrasena ? <Boton /> :null}
        </form>
        
        <div className="drops">
          <Agregados />
        </div>
      </div>
    </body>
  );
}

export default App;
