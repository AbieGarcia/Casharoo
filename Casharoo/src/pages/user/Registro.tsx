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
  })


  const [error, setError] = useState(false);
  const history = useHistory();

  const irALogIn = () => {
    history.push('/login');
  };

  const registroUsuario = () => {
    const nombre = (document.getElementById('InputNombre') as HTMLInputElement)?.value;
    const usuario = (document.getElementById('InputUsuario') as HTMLInputElement)?.value;
    const contrasena = (document.getElementById('InputContrasena') as HTMLInputElement)?.value;

    const nuevoRegistro = {
      ...registro,
      nombre,
      usuario,
      contrasena,
    };

    console.log(nuevoRegistro);

    if (nombre !== "" && registro.sexo !== 0 && usuario !== "") {
      setError(false);
      registrarUsuario(nuevoRegistro);
      irALogIn();
    } else {
      setError(true);
    }
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
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
              <IonButton id='BtnAzul'>
                <img className="imgbtn" src="../../assets/boy.png" onClick={() => setRegistro({ ...registro, sexo: 2 })} />
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
            onIonChange={(e: any) => setRegistro({ ...registro, nombre: e.target.value })}
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
            onIonChange={(e: any) => setRegistro({ ...registro, usuario: e.target.value })}
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
            onIonChange={(e: any) => setRegistro({ ...registro, contrasena: e.target.value })}
          ></IonInput>
        </div>

        <div className='contenedorBtnSiguiente'>
          <IonButton id='btnSiguiente' onClick={registroUsuario}>Siguiente</IonButton>
          {error === true &&
            <h1> Todos los datos son obligatorios</h1>
          }
        </div>

        <div className='Logo'>
          <img src="..\..\assets\logo.png" id='LogoImgRegistro'></img>
        </div>
      </IonContent>
    </IonPage>
  );
};


export default Registro;