import React, { useState, useEffect } from 'react';
import { obtenerUsuario } from '../services/userRegister';
import { useHistory } from 'react-router-dom';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonTabs, IonTabBar, IonImg, IonTabButton, IonIcon, IonLabel, IonRouterOutlet, IonFooter, IonButton } from '@ionic/react';
import './Inicio.css';

const Inicio: React.FC = () => {
  const [usuario, setUsuario] = useState<any>(null);
  const history = useHistory();

  useEffect(() => {
    const cargarUsuario = async () => {
      const usuarioId = localStorage.getItem("usuarioId");
      const datosUsuario = await obtenerUsuario(usuarioId);
      setUsuario(datosUsuario);
    };

    cargarUsuario();
  }, []);

  if (!usuario) {
    return (
      <IonPage>
        <IonContent className="ion-padding">
          <h1>Cargando...</h1>
        </IonContent>
      </IonPage>
    );
  }

  return (
    <IonPage>
      <div className='logo'>
        <img src="../../assets/logo.png" height={100} width={360} />
      </div>
      <div className='piggy'>
        <img src="../../assets/piggy.PNG" height={460} width={500} />
      </div>
      <IonFooter>
        {usuario && usuario.capitulos && usuario.capitulos[0]?.completed ? (
          <IonToolbar>
            <IonButton className='btnMenu1' onClick={() => history.push('/mapa')}>
              <img src="../../assets/home.png" />
            </IonButton>
            <IonButton className='btnMenu1' onClick={() => history.push('/info-extra')}>
              <img src="../../assets/info.png" />
            </IonButton>
            <IonButton className='btnMenu1' onClick={() => history.push('/ahorro')}>
              <img src="../../assets/ahorro.png" />
            </IonButton>
            <IonButton className='btnMenu1' onClick={() => history.push('/perfil')}>
              <img src="../../assets/perfil.png" />
            </IonButton>
          </IonToolbar>
        ) : (
          <IonToolbar>
            <IonButton className='btnMenu'>
              <img src="../../assets/home.png" onClick={() => history.push('/mapa')} />
            </IonButton>
            <IonButton className='btnMenu'>
              <img src="../../assets/info.png" onClick={() => history.push('/info-extra')} />
            </IonButton>
            <IonButton className='btnMenu'>
              <img src="../../assets/perfil.png" onClick={() => history.push('/perfil')} />
            </IonButton>
          </IonToolbar>
        )}
      </IonFooter>
    </IonPage>
  );
}
export default Inicio;