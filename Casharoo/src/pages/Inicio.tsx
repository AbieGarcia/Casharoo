import React, { useState, useEffect } from 'react';
import { obtenerUsuario } from '../services/userRegister';
import { useHistory } from 'react-router-dom';
import { 
  IonContent, 
  IonPage, 
  IonToolbar, 
  IonFooter, 
  IonButton 
} from '@ionic/react';
import './Inicio.css';

const Inicio: React.FC = () => {
  const [usuario, setUsuario] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const cargarUsuario = async () => {
      try {
        const usuarioId = localStorage.getItem("usuarioId");
        if (usuarioId) {
          const datosUsuario = await obtenerUsuario(usuarioId);
          setUsuario(datosUsuario);
        }
      } catch (error) {
        console.error('Error al cargar usuario:', error);
      } finally {
        setIsLoading(false);
      }
    };

    cargarUsuario();
  }, []);

  const hasCompletedFirstChapter = usuario?.capitulos?.[0]?.completed;



  if (isLoading) {
    return (
      <IonPage>
        <IonContent className="ion-padding">
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '100%' 
          }}>
            <h1>Cargando...</h1>
          </div>
        </IonContent>
      </IonPage>
    );
  }

  return (
    <IonPage>
      <IonContent className="contenido">
        <div className="logo">
          <img 
            src="../../assets/logo.png" 
            alt="Casharoo Logo"
          />
        </div>
        
        <div className="piggy">
          <img 
            src="../../assets/piggy.PNG" 
            alt="Alcancía Casharoo"
          />
        </div>
      </IonContent>

      <IonFooter>
        <IonToolbar>
          {usuario.capitulos[0]?.completed ? (
            <>
              <IonButton 
                className="btnMenu1" 
                onClick={() => history.push('/mapa')}
              >
                <img src="../../assets/home.png" alt="Inicio" />
              </IonButton>
              
              <IonButton 
                className="btnMenu1" 
                onClick={() => history.push('/info-extra')}
              >
                <img src="../../assets/info.png" alt="Información" />
              </IonButton>
                            
              <IonButton 
                className="btnMenu1" 
                onClick={() => history.push('/ahorro')}
              >
                <img src="../../assets/ahorro.png" alt="Ahorro" />
              </IonButton>

              <IonButton 
                className="btnMenu1" 
                onClick={() => history.push('/inversion')}
              >
                <img src="../../assets/invest.png" alt="Inversión" />
              </IonButton>
              
              <IonButton 
                className="btnMenu1" 
                onClick={() => history.push('/perfil')}
              >
                <img src="../../assets/perfil.png" alt="Perfil" />
              </IonButton>
            </>
          ) : (
            <>
              <IonButton 
                className="btnMenu" 
                onClick={() => history.push('/mapa')}
              >
                <img src="../../assets/home.png" alt="Inicio" />
              </IonButton>
              
              <IonButton 
                className="btnMenu" 
                onClick={() => history.push('/info-extra')}
              >
                <img src="../../assets/info.png" alt="Información" />
              </IonButton>
              
              <IonButton 
                className="btnMenu" 
                onClick={() => history.push('/perfil')}
              >
                <img src="../../assets/perfil.png" alt="Perfil" />
              </IonButton>
            </>
          )}
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
}

export default Inicio;