import React, { useState } from 'react';
import { IonContent, IonHeader,IonIcon, IonPage, IonButton, IonTitle, IonInput, IonToolbar, IonFooter } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Perfil.css';

const Perfil: React.FC = () => {

  return (
    <IonPage>

      <IonContent className="ion-padding" scrollY={false}>

        <div id='contenedorRacha'>
            <img src="../../assets/racha.png"></img>
        </div>
        <div id='contenedorUsuario'>
            <h2 id='nom'>Nombre</h2>
        </div>
        <div id='nivel'>
          <h2 id='nivTxt'>Nivel 1</h2>
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

export default Perfil;
