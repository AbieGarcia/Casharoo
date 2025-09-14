import React from 'react';
import { IonContent, IonHeader, IonPage, IonButton, IonTitle, IonInput, IonToolbar, IonText, IonNavLink } from '@ionic/react';
import './Login.css';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { verificarCredenciales } from '../services/userRegister';
import Registro from './Registro';


const Login: React.FC = () => {

  const history = useHistory();
  const irARegistro = () => {
    history.push('/registro');
  }

  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = async () => {
    try {
      console.log("Usuario ingresado:", usuario);
      console.log("Contraseña ingresada:", contrasena);

      // Llama a la función para verificar las credenciales
      const usuarioAutenticado = await verificarCredenciales(usuario, contrasena);
      if (usuarioAutenticado) {
        setError(false);

        // Guarda el usuario autenticado en localStorage o en el contexto
        localStorage.setItem("usuarioId", usuarioAutenticado.id);

        // Redirige al usuario a la página principal o al dashboard
        history.replace('/inicio');
      } else {
        setError(true);
        console.log("Credenciales incorrectas");
      }
    } catch (error) {
      console.error("Error durante el login:", error);
      setError(true);
    }
  };

  return (
    <IonPage>
      <IonContent className="ion-padding" scrollY={false}>
        <div className='contBienvenida'>
          <IonText id='lblBienvenido'> ¡Bienvenido! </IonText>
        </div>
      <div className='UsernameLogin'>  
        <h1 style={{ color: 'white' }} id='NomTexto1' /*TÍTULO*/  >Tu usuario:</h1>

        <IonInput  /*DONDE SE INGRESA EL NOMBRE DE USUARIO*/
          placeholder="   Mi usuario..."
          clearInput={true}
          fill='solid'
          id='InputNombre'
          value={usuario}
          onIonInput={(e: any) => setUsuario(e.target.value)}
        ></IonInput>
      </div>

      <div className='ContrasenaLogin' /*SECCION DONDE SE INGRESA EL NOMBRE DE USUARIO*/>

        <h1 style={{ color: 'white' }} id='NomTexto1' /*TÍTULO*/  >Tu contraseña:</h1>

        <IonInput  /*DONDE SE INGRESA EL NOMBRE DE USUARIO*/
          placeholder="   Contraseña..."
          clearInput={true}
          fill='solid'
          id='InputCon'
          color={'warning'}
          value={contrasena}
          onIonInput={(e: any) => setContrasena(e.target.value)}
        ></IonInput>
      </div>

      <div className='contenedorBtnSiguienteLogin'>
        <IonButton id='btnSiguiente' onClick={handleLogin}>Iniciar sesión</IonButton>
        {error && <h1 style={{ color: "#F09", position: "relative", top: "100px" }}>Usuario o contraseña incorrectos</h1>}
      </div>

      <div className='contenedorBtnCrear'>
        <IonButton id='btnCrearUsuario' onClick={irARegistro}>Crear una cuenta</IonButton>
      </div>

      <div className='Logo'>
        <img src="..\..\assets\logo.png" id='LogoImg'></img>
      </div>
    </IonContent>
    </IonPage >
  );
};

export default Login;
