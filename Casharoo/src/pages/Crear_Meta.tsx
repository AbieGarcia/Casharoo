import { IonContent, IonHeader, IonPage,IonSelect, IonSelectOption, IonButton, IonFooter, IonToolbar, IonInput } from '@ionic/react';
import './Crear_Meta.css';

const Crear_Meta: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;700&display=swap" rel="stylesheet"></link>
        </IonHeader>
        <div className='Nueva-meta'>
          <p className='p1-crear-meta'>Nueva meta</p>
        </div>
        <div className='Nombre'>
          <p className='p2-crear-meta' id='p-nombre'>Nombre:</p>
          <IonInput id='input-nombre' placeholder='Nombre de la meta'
            clearInput={true} ></IonInput>
        </div>
        <div className='Dinero-a-ahorrar'>
          <p className='p2-crear-meta' id='p-dinero-a-ahorrar'>$ a ahorrar:</p>
          <IonInput id='input-dinero-a-ahorrar' placeholder='$ pesos...'
            clearInput={true} ></IonInput>
        </div>
        <div className='Color'>
          <p className='p2-crear-meta' id='p-color'>Color:</p>
        </div>
        <div className='Icono'>
          <p className='p2-crear-meta' id='p-icono'>Icono:</p>
        </div>
        <div className='Agregar-plazo'>
        <IonSelect label="Agregar plazo" interface="popover" id='select-plazo' placeholder='Plazo'>
          <IonSelectOption value="semanal" id='seleccion-plazo'>Semanal</IonSelectOption>
          <IonSelectOption value="mensual" id='seleccion-plazo'>Mensual</IonSelectOption>
          <IonSelectOption value="anual"id='seleccion-plazo'>Anual</IonSelectOption>
          <IonSelectOption value="sin plazo" id='seleccion-plazo'>Sin plazo</IonSelectOption>
        </IonSelect>
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

export default Crear_Meta;


