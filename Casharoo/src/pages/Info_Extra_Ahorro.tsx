import { IonContent, IonHeader, IonPage, IonButton, IonFooter, IonToolbar } from '@ionic/react';
import './Info_Extra_Ahorro.css';

const Info_Extra_Ahorro: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;700&display=swap" rel="stylesheet"></link>
      </IonHeader>
      <IonContent className='fondo-extra-ahorro'>
        <div className='header-info-extra-ahorro'>
          <IonButton id='boton-regresar-info-extra'>
            <img src="..\..\assets\Arrow 1.png"></img>
          </IonButton>
        </div>
        <div className='cap1-ahorro-extra'>
          <p className='text-cap1'>Cap 1. Ahorro</p>
        </div>
        <div className='rectangulo1-info-extra-ahorro'>
          <p className='texto1-info-extra-ahorro'>El ahorro es un habito esencial que te acompañara toda la vida.</p>
        </div>
        <div className='imagen1-info-extra-ahorro'>
          <img src="..\..\assets\Piggy bank.png" className=''></img>
        </div>
        <div className='rectangulo-info-extra-invisible'>
          <p className='texto2-info-extra-ahorro'>Es recomendable empezar este habito desde joven para que en un futuro
            ya lo tengas integrado a tu dia a dia.</p>
        </div>
        <div className='rectangulo2-info-extra-ahorro'>
          <p className='texto1-info-extra-ahorro'>Los conceptos que debes comprender para ahorrar adecuadamente son meta,
            ingresos, egresos y lapsos.</p>
        </div>
        <div className='imagen2-info-extra-ahorro'>
          <img src="..\..\assets\Jar.png"></img>
        </div>
        <div className='rectangulo2-info-extra-invisible'>
          <p className='texto2-info-extra-ahorro'>Estos conceptos ya los mencionamos brevemente en el la historia de
            este capitulo</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Info_Extra_Ahorro;


