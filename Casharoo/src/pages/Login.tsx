import React from 'react';
import { IonContent, IonHeader, IonPage, IonButton, IonTitle, IonInput, IonToolbar, IonText, IonNavLink } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Login.css';
import { useHistory } from 'react-router-dom';
import Registro from './Registro';


const Login: React.FC = () => {

  const history = useHistory();
  const irARegistro = () => {
    history.push('/registro');
  }
  return (
    <IonPage>
      <IonContent className="ion-padding" scrollY={false}>

        <div className='contBienvenida'>
          <IonText id='lblBienvenido'> ¡Bienvenido! </IonText>
        </div>

            <div className='NombreLogin' /*SECCION DONDE SE INGRESA EL NOMBRE*/> 
              
              <h1 style={{ color: 'white'}} id='NomTexto' /*TÍTULO*/  >Tu nombre:</h1> 
                
                <IonInput  /*DONDE SE INGRESA EL NOMBRE*/
                  placeholder="   Me llamo..."
                  clearInput={true}
                  fill='solid'
                  id='InputNom'
                  color={'warning'}
                  ></IonInput>
            </div>

            <div className='UsernameLogin' /*SECCION DONDE SE INGRESA EL NOMBRE DE USUARIO*/> 
              
              <h1 style={{ color: 'white'}} id='NomTexto' /*TÍTULO*/  >Tu usuario:</h1> 
                
                <IonInput  /*DONDE SE INGRESA EL NOMBRE DE USUARIO*/
                  placeholder="   Mi usuario es..."
                  clearInput={true}
                  fill='solid'
                  id='InputNom'
                  color={'warning'}
                  ></IonInput>
            </div>

            <div className='contenedorBtnSiguienteLogin'>
              <IonButton id='btnSiguiente'>Siguiente</IonButton>
            </div>

            <div className='contenedorBtnCrear'>
              <IonButton id='btnCrearUsuario' onClick={irARegistro}>Crear una cuenta</IonButton>
            </div>

            <div className='Logo' /*SECCION DONDE SE INGRESA EL LOGO*/> 
              <img src="..\..\assets\logo.png" width={304} height={79} id='LogoImg' /*IMAGEN LOGO*/></img> 
            </div>

        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Login;
