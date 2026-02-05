import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonButton, IonTitle, IonInput, IonToolbar } from '@ionic/react';
import { useHistory } from "react-router-dom";
import './Registro.css';
import { registrarUsuario } from "../../services/userRegister.js"

const Registro: React.FC = () => {
  const [registro, setRegistro] = useState({
    nombre: "",
    sexo: 0,
    usuario: "",
    contrasena: "",
    capitulos: [
      { capitulo: 1, disabled: false, completed: false },
      { capitulo: 2, disabled: true, completed: false },
      { capitulo: 3, disabled: true, completed: false },
      { capitulo: 4, disabled: true, completed: false },
      { capitulo: 5, disabled: true, completed: false },
      { capitulo: 6, disabled: true, completed: false },
      { capitulo: 7, disabled: true, completed: false },
    ],
    metas: [],
    dinero: 0,
  })

  const [error, setError] = useState("");
  const history = useHistory();

  const irALogIn = () => {
    history.push('/login');
  };

  const registroUsuario = () => {
    // Validar que todos los campos estén completos
    if (!registro.nombre.trim() || registro.sexo === 0 || !registro.usuario.trim() || !registro.contrasena.trim()) {
      setError("Todos los datos son obligatorios");
      return;
    }

    console.log("Registro completo:", registro);

    // Si todo está correcto, registrar y redirigir
    setError("");
    registrarUsuario(registro);
    irALogIn();
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <div className='Logo'>
          <img src='../../assets/logo.png' id='LogoImgRegistro' alt='logo' />
        </div>
        <div className="rectangle">
          <div className='rectangulotitulo'>
            <h1>Escoge tu personaje</h1>
          </div>
          <div className='contPersonajes'>
            <div className='rectangulochico' id='rect1'>
              <IonButton id='BtnRosa' onClick={() => setRegistro({ ...registro, sexo: 1 })}>
                <img className="imgbtn" src="../../assets/girl.png" />
              </IonButton>
            </div>
            <div className='rectangulochico' id='rect2'>
              <IonButton id='BtnAzul' onClick={() => setRegistro({ ...registro, sexo: 2 })}>
                <img className="imgbtn" src="../../assets/boy.png" />
              </IonButton>
            </div>
          </div>
        </div>

        <div className='Nombre'>
          <h1 style={{ color: 'white' }} id='NomTexto'>Tu nombre:</h1>
          <IonInput
            placeholder="   Me llamo..."
            clearInput={true}
            fill='solid'
            id='InputNombre'
            class='InputNom'
            color={'warning'}
            value={registro.nombre}
            onIonInput={(e: any) => setRegistro({ ...registro, nombre: e.target.value })}
          ></IonInput>
        </div>

        <div className='Username'>
          <h1 style={{ color: 'white' }} id='NomTexto2'>Tu usuario:</h1>
          <IonInput
            placeholder="   Mi usuario es..."
            clearInput={true}
            fill='solid'
            id='InputUsuario'
            class='InputUs'
            color={'warning'}
            value={registro.usuario}
            onIonInput={(e: any) => setRegistro({ ...registro, usuario: e.target.value })}
          ></IonInput>
        </div>

        <div className='Contrasena'>
          <h1 style={{ color: 'white' }} id='NomTexto3'>Tu contraseña:</h1>
          <IonInput
            placeholder="   Contraseña"
            clearInput={true}
            fill='solid'
            id='InputContrasena'
            class='InputCon'
            color={'warning'}
            type="password"
            value={registro.contrasena}
            onIonInput={(e: any) => setRegistro({ ...registro, contrasena: e.target.value })}
          ></IonInput>
        </div>

        <div className='contenedorBtnSiguiente'>
          <IonButton id='btnSiguiente' onClick={registroUsuario}>Siguiente</IonButton>
          {error && <h1 style={{ color: "#F09" }}>{error}</h1>}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Registro;