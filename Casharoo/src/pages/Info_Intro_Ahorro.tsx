import { IonContent, IonHeader, IonPage, IonButton, IonFooter, IonToolbar } from '@ionic/react';
import './Info_Intro_Ahorro.css';
import { useHistory } from 'react-router-dom';

const Info_Intro_Ahorro: React.FC = () => {

  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;700&display=swap" rel="stylesheet"></link>
      </IonHeader>
      <IonContent className='fondo-intro-ahorro'>
        <div className='header-info-intro-ahorro'>
          <IonButton id='boton-regresar-info-extra' onClick={() => history.goBack()}>
            <img src="..\..\assets\Arrow 1.png"></img>
          </IonButton>
        </div>
        <div className='cap1-ahorro-intro'>
          <p className='text-cap1-intro'>Introduccion Cap 1. Ahorro </p>
        </div>
        <div className='imagen1-info-intro-ahorro'>
          <img src="..\..\assets\Salary.png"></img>
        </div>
        <div className='rectangulo-info-intro-invisible'>
          <p className='texto1-info-intro-ahorro'>El tema del ahorro abarca los siguientes
            conceptos:</p>
        </div>
        <div className='punto' id='punto1'>
          <img src="..\..\assets\Ellipse 10.png"></img>
        </div>
        <div className='rectangulo2-info-intro-invisible'>
          <p className='texto1-info-intro-ahorro'>Ingresos: es el dinero que recibes por diferentes metodos.</p>
        </div>
        <div className='punto' id='punto2'>
          <img src="..\..\assets\Ellipse 10.png"></img>
        </div>
        <div className='rectangulo3-info-intro-invisible'>
          <p className='texto1-info-intro-ahorro'>Egresos: es el dinero que gastas por diferentes metodos.
            conceptos:</p>
        </div>
        <div className='punto' id='punto3'>
          <img src="..\..\assets\Ellipse 10.png"></img>
        </div>
        <div className='rectangulo4-info-intro-invisible'>
          <p className='texto1-info-intro-ahorro'>Lapso: es el dinero que gastas por diferentes metodos.</p>
        </div>
        <div className='punto' id='punto4'>
          <img src="..\..\assets\Ellipse 10.png"></img>
        </div>
        <div className='rectangulo5-info-intro-invisible'>
          <p className='texto1-info-intro-ahorro'>Meta: es el motivo por el cual ahorras tu dinero.</p>
        </div>
        <div className='div-boton-ir-intro-ahorro'>
          <IonButton id='boton-ir-historia-intro-ahorro'>
            <a href="/Cap1">
              <p className='texto-boton-ir-intro-ahorro'>Ir a la historia</p>
            </a>
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Info_Intro_Ahorro;


