import { IonContent, IonHeader, IonPage, IonButton, IonFooter, IonToolbar } from '@ionic/react';
import './Inicio2.css';

const Inicio2: React.FC = () => {
  return (
    <IonPage>
      <IonContent className='contenido'>

        <div className='imagen-casharoo'>
          <img src="..\..\assets\logo.png"></img>
        </div>
        <div className='imagen-piggy'>
          <img src="..\..\assets\piggy.PNG"></img>
        </div>
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

export default Inicio2;


