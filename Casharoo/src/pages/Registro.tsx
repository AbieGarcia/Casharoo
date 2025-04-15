import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonButton, IonTitle, IonInput, IonToolbar } from '@ionic/react';
import { useHistory } from "react-router-dom";
import ExploreContainer from '../components/ExploreContainer';
import './Registro.css';
import { registrarUsuario } from "../services/userRegister.js"

const Registro: React.FC = () => {
  const [registro, setRegistro] = useState({
    nombre: "",
    sexo: 0,
    usuario: "",
    contrasena: "",
    capitulo: [
      { capitulo: 1, disabled: false },
      { capitulo: 2, disabled: true },
      { capitulo: 3, disabled: true },
      { capitulo: 4, disabled: true },
      { capitulo: 5, disabled: true },
      { capitulo: 6, disabled: true },
      { capitulo: 7, disabled: true },
    ],
    metas: [],
  })


  const [error, setError] = useState(false);
  const history = useHistory();

  const irAMapa = () => {
    history.push('/mapa');
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
      irAMapa();
    } else {
      setError(true);
    }
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <div className="rectangle-container">
          <div className='rectangulotitulo'>
            <h1>Escoge tu personaje</h1>
          </div>
          <div className='rectangulochico' id='rect1'>
            <IonButton id='BtnRosa' onClick={() => setRegistro({ ...registro, sexo: 1 })}>
              <img src="../../assets/girl.png" height={185} width={310} />
            </IonButton>
          </div>
          <div className='rectangulochico' id='rect2'>
            <IonButton id='BtnAzul'>
              <img src="../../assets/boy.png" onClick={() => setRegistro({ ...registro, sexo: 2 })} height={180} width={300} />
            </IonButton>
          </div>
          <div className="rectangle"></div>
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
          <h1 style={{ color: 'white' }} id='NomTexto'>Tu usuario:</h1>
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
          <h1 style={{ color: 'white' }} id='NomTexto'>Tu contraseña:</h1>
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
          <img src="..\..\assets\logo.png" width={304} height={79} id='LogoImgRegistro'></img>
        </div>

        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};


export default Registro;