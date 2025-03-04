import { IonContent, IonHeader, IonPage, IonButton, IonFooter, IonToolbar } from '@ionic/react';
import './Ahorro.css';

const Ahorro: React.FC = () => {
  return (
    <IonPage>
      <IonContent className='contenido'>
        <IonHeader>
          <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;700&display=swap" rel="stylesheet"></link>
        </IonHeader>
        <div className='rectangulo-ahorro'>
          <p className='p1-ahorro'>Ahorros</p>
        </div>
        <IonButton className='boton-mas'>
          <p className='p2-ahorro'>+</p>
        </IonButton>
          <div className='rectangulo'>
            <IonButton id='boton'>
              <img src="..\..\assets\home.png"></img>
            </IonButton>
            <IonButton  id='boton'>
              <img src="..\..\assets\info.png"></img>
            </IonButton>
            <IonButton  id='boton'>
              <img src="..\..\assets\perfil.png"></img>
            </IonButton>
            <IonButton  id='boton'>
              <img src="..\..\assets\ahorro.png"></img>
            </IonButton>
          </div>
      </IonContent>
    </IonPage>
  );
};

export default Ahorro;


