import React, { useState } from 'react';
import { IonContent, IonHeader,IonIcon, IonPage, IonButton, IonTitle, IonInput, IonToolbar, IonFooter } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Mapa.css';

const Mapa: React.FC = () => {  
    
    const [monedaCap, setMonedaCap] = useState([
    {
      capitulo: 1,
      disabled: false,
    },
    {
      capitulo: 2,
      disabled: true,
    },    
    {
      capitulo: 3,
      disabled: true,
    },    
    {
      capitulo: 4,
      disabled: true,
    },    
    {
      capitulo: 5,
      disabled: true,
    },    
    {
      capitulo: 6,
      disabled: true,
    },    
    {
      capitulo: 7,
      disabled: true,
    },    

  ])

  return (
    <IonPage>
      <IonContent  scrollY={false}>
        <div className='pagina'>
        <IonButton className='btn' id='M1'>
            {
              monedaCap[0].disabled === false ?
              <a href="/info-intro-ahorro">
              <img src="../../assets/moneda.png" width={130} height={60}/>
              </a>
              :
              <>
                <img src="../../assets/moneda.png" width={130} height={60} className='monedaDesactivada'/>
              </>
            }

        </IonButton>
        <IonButton id='M2' className='btn'>
                        {
              monedaCap[1].disabled === false ?
              <a href="/Cap2">
              <img src="../../assets/moneda.png" width={130} height={60}/>
              </a>
              :
              <>
                <img src="../../assets/moneda.png" width={130} height={60} className='monedaDesactivada'/>
              </>
            }
        </IonButton>
        <IonButton id='M3' className='btn'>
                        {
              monedaCap[2].disabled === false ?
              <a href="/Cap3">
              <img src="../../assets/moneda.png" width={130} height={60}/>
              </a>
              :
              <>
                <img src="../../assets/moneda.png" width={130} height={60} className='monedaDesactivada'/>
              </>
            }
        </IonButton>
        <IonButton id='M4' className='btn'>
                        {
              monedaCap[3].disabled === false ?
              <a href="/Cap4">
              <img src="../../assets/moneda.png" width={130} height={60}/>
              </a>
              :
              <>
                <img src="../../assets/moneda.png" width={130} height={60} className='monedaDesactivada'/>
              </>
            }
        </IonButton>
        <IonButton id='M5'className='btn'>
                        {
              monedaCap[4].disabled === false ?
              <a href="/Cap5">
              <img src="../../assets/moneda.png" width={130} height={60}/>
              </a>
              :
              <>
                <img src="../../assets/moneda.png" width={130} height={60} className='monedaDesactivada'/>
              </>
            }
        </IonButton>
        <IonButton id='M6' className='btn'>
                        {
              monedaCap[5].disabled === false ?
              <a href="/Cap6">
              <img src="../../assets/moneda.png" width={130} height={60}/>
              </a>
              :
              <>
                <img src="../../assets/moneda.png" width={130} height={60} className='monedaDesactivada'/>
              </>
            }
        </IonButton>
        <IonButton id='M7' className='btn'>
                        {
              monedaCap[6].disabled === false ?
              <a href="/Cap7">
              <img src="../../assets/moneda.png" width={130} height={60}/>
              </a>
              :
              <>
                <img src="../../assets/moneda.png" width={130} height={60} className='monedaDesactivada'/>
              </>
            }
        </IonButton>
        </div>
      </IonContent>

            <IonFooter>
              <IonToolbar>
                <IonButton className='btnMenu'>
                  <img src="../../assets/home.png"/>
                </IonButton>
                <IonButton className='btnMenu'>
                <img src="../../assets/info.png"/>
                </IonButton>
                <IonButton className='btnMenu'>
                <img src="../../assets/perfil.png"/>
                </IonButton>
              </IonToolbar>
            </IonFooter>

    </IonPage>
  );
};

export default Mapa;
