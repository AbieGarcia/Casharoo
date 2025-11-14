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
      <IonContent style={{ height: "100%", overflow: scroll }}>
        <body className='bodyIntro'>
          <div className='p1'>
            <header style={{ height: "30 %" }} className='HeaderIntro'>
              <IonButton className='regresar-info-ahorro' onClick={() => history.goBack()}>
                <img src="..\..\assets\Arrow 1.png"></img>
              </IonButton>
              <p className='text-cap1-intro'>Introduccion Cap 1. Ahorro </p>
            </header>
          </div>
          <div className='informacion'>
            <div className='imagen1-info-intro-ahorro'>
              <img src="..\..\assets\Salary.png" width="50%"></img>
            </div>
            <p className='texto1-info-intro-ahorro'>El tema del ahorro abarca los siguientes conceptos:</p>
            <ul className='lista'>
              <li>
                Ingresos: es el dinero que recibes por diferentes metodos.
              </li>
              <li>
                Egresos: es el dinero que gastas por diferentes metodos.
              </li>
              <li>
                Meta: es el motivo por el cual ahorras tu dinero, lo que quieres conseguir.
              </li>
              <li>
                Lapso: es el tiempo que planeas guardar dinero para llegar a una meta.
              </li>
            </ul>
            <IonButton className='button-historia'>
              <a href='/Cap1'>Ir a la historia</a>
            </IonButton>
          </div>
        </body>
      </IonContent>
    </IonPage >
  );
};

export default Info_Intro_Ahorro;


