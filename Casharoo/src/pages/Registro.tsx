import React from 'react';
import { IonContent, IonHeader, IonPage, IonButton, IonTitle, IonInput, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Registro.css';

const Registro: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding" scrollY={false}>
        <IonHeader collapse="condense">
          </IonHeader>

            <div className="rectangle-container" /*SECCION DONDE ESTARÁN LOS CUADROS*/> 
              
              <div className='rectangulotitulo' /*CUADRO AMARILLO DEL TÍTULO*/> 
                <h1>Escoge tu personaje</h1>
              </div>

              <div className='rectangulochico' id='rect1' /*CUADRO PEQUEÑO ROSA*/>
                <IonButton id='BtnRosa'></IonButton>
              </div > 
              <div className='rectangulochico' id='rect2'  /*CUADRO PEQUEÑO AZUL*/>
                <IonButton id='BtnAzul'></IonButton>
              </div>

              <div className="rectangle" /*CUADRO ROSA CLARITO PRINCIPAL*/></div> 
            </div>


            <div className='Nombre' /*SECCION DONDE SE INGRESA EL NOMBRE*/> 
              
              <h1 style={{ color: 'white'}} id='NomTexto' /*TÍTULO*/  >Tu nombre:</h1> 
                
                <IonInput  /*DONDE SE INGRESA EL NOMBRE*/
                  placeholder="   Me llamo..."
                  clearInput={true}
                  fill='solid'
                  id='InputNom'
                  color={'warning'}
                  ></IonInput>
            </div>


            <div className='Logo' /*SECCION DONDE SE INGRESA EL LOGO*/> 
              <img src="..\..\assets\logo.png" width={304} height={79} id='LogoImg' /*IMAGEN LOGO*/></img> 
            </div>

        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Registro;
