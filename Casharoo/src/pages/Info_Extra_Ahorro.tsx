import { IonContent, IonHeader, IonPage, IonButton, IonFooter, IonToolbar } from '@ionic/react';
import './Info_Extra_Ahorro.css';

import { useHistory } from 'react-router-dom';


const Info_Extra_Ahorro: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;700&display=swap" rel="stylesheet"></link>
      </IonHeader>
      <IonContent>
        <body className='bodyExtra'>
          <div>
            <header className='headerExtra'>
              <IonButton className='regresar-info-ahorro' onClick={() => history.goBack()}>
                <img src="..\..\assets\Arrow 1.png"></img>
              </IonButton>
              <p className='text-cap1-extra'>Cap 1. Ahorro</p>
            </header>
          </div>
          <div className='informacionExtra'>
            <div className='imgTextExtra'>
              <div className='TextExtra1'>
                <p>El ahorro es un habito esencial que te acompañara toda la vida.</p>
              </div>
              <div className='imgExtra'>
                <img src="..\..\assets\Piggy bank.png"></img>
              </div>
            </div>
            <p >Es recomendable empezar este habito desde joven para que en un futuro
              ya lo tengas integrado a tu dia a dia.</p>
            <div className='imgTextExtra'>
              <div className='imgExtra'>
                <img src="..\..\assets\Jar.png"></img>
              </div>
              <div className='TextExtra1'>
                <p>Los conceptos que debes comprender para ahorrar adecuadamente son meta,
                  ingresos, egresos y lapsos.</p>
              </div>
            </div>
            <p>Estos conceptos ya los mencionamos brevemente en el la historia de
              este capitulo</p>
          </div>
        </body>
      </IonContent>
    </IonPage>
  );
};

export default Info_Extra_Ahorro;


