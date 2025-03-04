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
        <div className='rectangulo'>
          <IonButton id='boton'>
            <img src="..\..\assets\home.png"></img>
          </IonButton>
          <IonButton id='boton'>
            <img src="..\..\assets\info.png"></img>
          </IonButton>
          <IonButton id='boton'>
            <img src="..\..\assets\perfil.png"></img>
          </IonButton>
          <IonButton id='boton'>
            <img src="..\..\assets\ahorro.png"></img>
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Inicio2;


