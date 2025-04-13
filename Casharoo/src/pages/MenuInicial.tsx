
import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonTabs, IonTabBar, IonImg, IonTabButton, IonIcon, IonLabel, IonRouterOutlet, IonFooter, IonButton } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { Route, Redirect } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './MenuInicial.css';
import { registrarUsuario } from "../services/userRegister.js";

const MenuInicial: React.FC = () => {
  return (
    <IonPage>
      <div className='logo'>
        <img src="../../assets/logo.png" height={100} width={360} />
      </div> 
      <div className='piggy'>
        <img src="../../assets/piggy.PNG" height={460} width={500}/>
      </div>  
      <IonFooter>
        <IonToolbar>
          <IonButton onClick={registrarUsuario} className="btnMenu">Registrar Usuario</IonButton>
          <IonButton className='btnMenu'>
            <img src="../../assets/home.png" />
          </IonButton>
          <IonButton className='btnMenu'>
            <img src="../../assets/info.png" />
          </IonButton>
          <IonButton className='btnMenu'>
            <img src="../../assets/perfil.png" />
          </IonButton>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
}
export default MenuInicial;