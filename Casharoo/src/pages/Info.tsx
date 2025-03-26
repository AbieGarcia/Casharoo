import React, { useState } from 'react';
import { IonContent, IonHeader,IonIcon, IonPage, IonButton, IonTitle, IonInput, IonToolbar, IonFooter } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Info.css';

const Info: React.FC = () => {

  const [capitulosInfo, setCapitulosInfo] = useState([
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

      <IonContent className="ion-padding">

        <div className='contenedorLogo'>
          <img src="..\..\assets\logo.png" width={304} height={79} id='logo'></img>
        </div>

        <div className='contenedorBtns'>
        
        <div id='Cap1'>
          <IonButton className='btnInfo' id='R' disabled={capitulosInfo[0].disabled}> 
            <h2 style={{ color: 'white'}}>Cap 1. Ahorro</h2>
          </IonButton>
        </div>
      
        <div id='Cap2'>
          <IonButton className='btnInfo' id='Am'  disabled={capitulosInfo[1].disabled}> 
            {
              capitulosInfo[1].disabled === false ?
              <h2 style={{ color: 'white'}} >Cap 2. Bancos</h2>
              :
              <>
                  <h2 style={{ color: 'white'}} id='textDisabled'>Cap 2. Bancos </h2>
                  <img src='../../assets/candado.png' id='candado'></img>
              </>
            }

            {/* {
              capitulosInfo[1].disabled === false  &&
              <>
                <h1>oli</h1>
                <h2 style={{ color: 'white'}} >false</h2>
              </>
            } */}
          </IonButton>
        </div>
          
        <div id='Cap3'>
          <IonButton className='btnInfo' id='Az' disabled={capitulosInfo[2].disabled}> 
          {
              capitulosInfo[2].disabled === false ?
              <h2 style={{ color: 'white'}} >Cap 3. Débito</h2>
              :
              <>
                  <h2 style={{ color: 'white'}} id='textDisabled'>Cap 3. Débito </h2>
                  <img src='../../assets/candado.png' id='candado'></img>
              </>
            }
          </IonButton>
        </div>

          
        <div id='Cap4'>
          <IonButton className='btnInfo' id='R' disabled={capitulosInfo[3].disabled}> 
            {
              capitulosInfo[3].disabled === false ?
              <h2 style={{ color: 'white'}} >Cap 4. Crédito</h2>
              :
              <>
                  <h2 style={{ color: 'white'}} id='textDisabled'>Cap 4. Crédito</h2>
                  <img src='../../assets/candado.png' id='candado'></img>
              </>
            }
          </IonButton>
        </div>
   
        <div id='Cap5'>
          <IonButton className='btnInfo' id='Am'  disabled={capitulosInfo[4].disabled}> 
            {
              capitulosInfo[4].disabled === false ?
              <h2 style={{ color: 'white'}} >Cap 5. Impuestos</h2>
              :
              <>
                  <h2 style={{ color: 'white'}} id='textDisabled'>Cap 5. Impuestos</h2>
                  <img src='../../assets/candado.png' id='candado'></img>
              </>
            }
          </IonButton>
        </div>
  
        <div id='Cap6'>
          <IonButton className='btnInfo' id='Az' disabled={capitulosInfo[5].disabled}> 
            {
              capitulosInfo[5].disabled === false ?
              <h2 style={{ color: 'white'}} >Cap 6. Inversiones</h2>
              :
              <>
                  <h2 style={{ color: 'white'}} id='textDisabled'>Cap 6. Inversiones</h2>
                  <img src='../../assets/candado.png' id='candado'></img>
              </>
            }
          </IonButton>
        </div>
  
        <div id='Cap7'>
          <IonButton className='btnInfo' id='R' disabled={capitulosInfo[6].disabled}> 
            {
              capitulosInfo[6].disabled === false ?
              <h2 style={{ color: 'white'}} >Cap 7. Pensión</h2>
              :
              <>
                  <h2 style={{ color: 'white'}} id='textDisabled'>Cap 7. Pensión </h2>
                  <img src='../../assets/candado.png' id='candado'></img>
              </>
            }
          </IonButton>
        </div>
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

export default Info;
