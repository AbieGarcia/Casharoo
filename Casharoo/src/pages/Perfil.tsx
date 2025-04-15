import React, { useState, useEffect } from 'react';
import { IonContent, IonText, IonHeader, IonIcon, IonPage, IonButton, IonTitle, IonInput, IonToolbar, IonFooter } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { obtenerUsuario } from '../services/userRegister';
import './Perfil.css';

const Perfil: React.FC = () => {

  const [usuario, setUsuario] = useState<any>(null);
  const [progreso, setProgreso] = useState<number>(0);

  useEffect(() => {
    const cargarUsuario = async () => {
      const usuarioId = localStorage.getItem("usuarioId"); // Obtén el ID del usuario desde localStorage
      if (usuarioId) {
        const datosUsuario = await obtenerUsuario(usuarioId);
        setUsuario(datosUsuario); // Guarda los datos del usuario en el estado

        // Verifica los datos de los capítulos
        console.log("Capítulos del usuario:", datosUsuario.capitulo);

        // Calcula el progreso
        if (datosUsuario && Array.isArray(datosUsuario.capitulo)) {
          let progresoCalculado = 0;
          for (const capitulo of datosUsuario.capitulo) {
            if (capitulo.disabled === false) {
              progresoCalculado += 1; // Suma 1 por cada capítulo habilitado
            }
          }
          setProgreso(progresoCalculado); // Guarda el progreso en el estado
        }
      }
    };

    cargarUsuario();
  }, []);

  if (!usuario) {
    return (
      <IonPage>
        <IonContent className="ion-padding">
          <IonText>Cargando datos del usuario...</IonText>
        </IonContent>
      </IonPage>
    );
  }

  return (
    <IonPage>

      <IonContent className="ion-padding" scrollY={false}>

        <div id='contenedorRacha'>
          <img src="../../assets/racha.png"></img>
        </div>
        <div id='contenedorUsuario'>
          <h2 id='nom'>{usuario.nombre}</h2>
        </div>
        <div id='nivel'>
          <h2 id='nivTxt'>Progreso: {progreso}</h2>
        </div>
        <div className='monito-perfil'>
          {usuario.sexo === 1 ? <img src="../../assets/girl.png"></img> : <img src="../../assets/boy.png"></img>}
        </div>


      </IonContent>

      <IonFooter>
        <IonToolbar>
          <IonButton className='btnMenu'>
            <img src="../../assets/home.png" />
          </IonButton>
          <IonButton className='btnMenu'>
            <img src="../../assets/info.png" />
          </IonButton>
          <IonButton className='btnMenu'>
            <img src="../../assets/perfil.png" />
          </IonButton>
        </IonToolbar>
      </IonFooter>

    </IonPage>
  );
};

export default Perfil;
