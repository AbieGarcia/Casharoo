import React from 'react';
import { IonContent, IonHeader, IonPage, IonButton, IonTitle, IonInput, IonToolbar, IonText, IonNavLink } from '@ionic/react';
import './Login.css';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { verificarCredenciales, actualizarRacha } from '../../services/userRegister';
import Registro from './Registro';


const Login: React.FC = () => {

  const history = useHistory();
  const irARegistro = () => {
    history.push('/registro');
  }

  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      // Validar que los campos no estén vacíos
      if (!usuario.trim() || !contrasena.trim()) {
        setError("Por favor completa todos los campos");
        return;
      }

      console.log("Usuario ingresado:", usuario);
      console.log("Contraseña ingresada:", contrasena);

      // Llama a la función para verificar las credenciales
      const usuarioAutenticado = await verificarCredenciales(usuario, contrasena);
      if (usuarioAutenticado) {
        setError("");

        // Guarda el usuario autenticado en localStorage
        localStorage.setItem("usuarioId", usuarioAutenticado.id);

        // AQUÍ SE ACTUALIZA LA RACHA AL HACER LOGIN
        await actualizarRacha(usuarioAutenticado.id, usuarioAutenticado);
        console.log("Racha actualizada exitosamente");

        // Redirige al usuario a la página principal
        history.replace('/inicio');
      } else {
        setError("Usuario o contraseña incorrectos");
        console.log("Credenciales incorrectas");
      }
    } catch (error) {
      console.error("Error durante el login:", error);
      setError("Error al intentar iniciar sesión");
    }
  };

  return (
    <IonPage>
      <IonContent className="ion-padding" scrollY={false}>
        <div className='Logo'>
          <img src="..\..\assets\logo.png" id='LogoImg'></img>
        </div>
        <div className='contBienvenida'>
          <IonText id='lblBienvenido'> ¡Bienvenido! </IonText>
        </div>
        <div className='UsernameLogin'>
          <h1 style={{ color: 'white' }} id='NomTexto1'>Tu usuario:</h1>

          <IonInput
            placeholder="   Mi usuario..."
            clearInput={true}
            fill='solid'
            id='InputNombre'
            value={usuario}
            onIonInput={(e: any) => setUsuario(e.target.value)}
          ></IonInput>
        </div>

        <div className='ContrasenaLogin'>
          <h1 style={{ color: 'white' }} id='NomTexto1'>Tu contraseña:</h1>

          <IonInput
            placeholder="   Contraseña..."
            clearInput={true}
            fill='solid'
            id='InputCon'
            color={'warning'}
            type="password"
            value={contrasena}
            onIonInput={(e: any) => setContrasena(e.target.value)}
          ></IonInput>
        </div>

        <div className='contenedorBtnSiguienteLogin'>
          <IonButton id='btnSiguiente' onClick={handleLogin}>Iniciar sesión</IonButton>
          {error && <h1 style={{ color: "#F09", position: "relative", top: "100px" }}>{error}</h1>}
        </div>

        <div className='contenedorBtnCrear'>
          <IonButton id='btnCrearUsuario' onClick={irARegistro}>Crear una cuenta</IonButton>
        </div>

      </IonContent>
    </IonPage >
  );
};

export default Login;