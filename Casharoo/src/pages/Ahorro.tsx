import { IonContent, IonHeader, IonPage, IonButton, IonFooter, IonToolbar } from '@ionic/react';
import './Ahorro.css';
import { useHistory } from 'react-router-dom';

const Ahorro: React.FC = () => {

  const history = useHistory();
  const irACrearMeta = () => {
    history.push('/crear-meta');
  }

  return (
    <IonPage>
      <IonContent className='contenido'>
        <IonHeader>
          <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;700&display=swap" rel="stylesheet"></link>
        </IonHeader>
        <div className='rectangulo-ahorro'>
          <p className='p1-ahorro'>Ahorros</p>
        </div>
        <IonButton className='boton-mas' onClick={irACrearMeta}>
          <p className='p2-ahorro'>+</p>
        </IonButton>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonButton className='btnMenu1'>
            <img src="../../assets/home.png" />
          </IonButton>
          <IonButton className='btnMenu1'>
            <img src="../../assets/info.png" />
          </IonButton>
          <IonButton className='btnMenu1'>
            <img src="../../assets/ahorro.png" />
          </IonButton>
          <IonButton className='btnMenu1'>
            <img src="../../assets/perfil.png" />
          </IonButton>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Ahorro;


