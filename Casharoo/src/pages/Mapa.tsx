import { IonContent, IonHeader, IonIcon, IonPage, IonButton, IonTitle, IonInput, IonToolbar, IonFooter } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { obtenerUsuario } from '../services/userRegister';
import './Mapa.css';

const Mapa: React.FC = () => {
  const [usuario, setUsuario] = useState<any>(null);

  useEffect(() => {
    const cargarUsuario = async () => {
      const usuarioId = localStorage.getItem("usuarioId");
      const datosUsuario = await obtenerUsuario(usuarioId);
      setUsuario(datosUsuario);
    };

    cargarUsuario();
  }, []);


  const history = useHistory();

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

  if (!usuario) {
    return (
      <IonPage>
        <IonContent className="ion-padding">
          <h1>Cargando...</h1>
        </IonContent>
      </IonPage>
    );
  }

  return (
    <IonPage>
      <IonContent scrollY={false}>
        <div className='pagina'>
          <IonButton className='btn' id='M1'>
            {
              monedaCap[0].disabled === false ?
                <a href="/info-intro-ahorro">
                  <img src="../../assets/moneda.png" width={130} height={60} />
                </a>
                :
                <>
                  <img src="../../assets/moneda.png" width={130} height={60} className='monedaDesactivada' />
                </>
            }

          </IonButton>
          <IonButton id='M2' className='btn'>
            {
              monedaCap[1].disabled === false ?
                <a href="/Cap2">
                  <img src="../../assets/moneda.png" width={130} height={60} />
                </a>
                :
                <>
                  <img src="../../assets/moneda.png" width={130} height={60} className='monedaDesactivada' />
                </>
            }
          </IonButton>
          <IonButton id='M3' className='btn'>
            {
              monedaCap[2].disabled === false ?
                <a href="/Cap3">
                  <img src="../../assets/moneda.png" width={130} height={60} />
                </a>
                :
                <>
                  <img src="../../assets/moneda.png" width={130} height={60} className='monedaDesactivada' />
                </>
            }
          </IonButton>
          <IonButton id='M4' className='btn'>
            {
              monedaCap[3].disabled === false ?
                <a href="/Cap4">
                  <img src="../../assets/moneda.png" width={130} height={60} />
                </a>
                :
                <>
                  <img src="../../assets/moneda.png" width={130} height={60} className='monedaDesactivada' />
                </>
            }
          </IonButton>
          <IonButton id='M5' className='btn'>
            {
              monedaCap[4].disabled === false ?
                <a href="/Cap5">
                  <img src="../../assets/moneda.png" width={130} height={60} />
                </a>
                :
                <>
                  <img src="../../assets/moneda.png" width={130} height={60} className='monedaDesactivada' />
                </>
            }
          </IonButton>
          <IonButton id='M6' className='btn'>
            {
              monedaCap[5].disabled === false ?
                <a href="/Cap6">
                  <img src="../../assets/moneda.png" width={130} height={60} />
                </a>
                :
                <>
                  <img src="../../assets/moneda.png" width={130} height={60} className='monedaDesactivada' />
                </>
            }
          </IonButton>
          <IonButton id='M7' className='btn'>
            {
              monedaCap[6].disabled === false ?
                <a href="/Cap7">
                  <img src="../../assets/moneda.png" width={130} height={60} />
                </a>
                :
                <>
                  <img src="../../assets/moneda.png" width={130} height={60} className='monedaDesactivada' />
                </>
            }
          </IonButton>
        </div>
      </IonContent>

      <IonFooter>
        {usuario && usuario.capitulos && usuario.capitulos[0]?.completed ? (
          <IonToolbar>
            <IonButton className='btnMenu1' onClick={() => history.push('/mapa')}>
              <img src="../../assets/home.png" />
            </IonButton>
            <IonButton className='btnMenu1' onClick={() => history.push('/info-extra')}>
              <img src="../../assets/info.png" />
            </IonButton>
            <IonButton className='btnMenu1' onClick={() => history.push('/ahorro')}>
              <img src="../../assets/ahorro.png" />
            </IonButton>
            <IonButton className='btnMenu1' onClick={() => history.push('/perfil')}>
              <img src="../../assets/perfil.png" />
            </IonButton>
          </IonToolbar>
        ) : (
          <IonToolbar>
            <IonButton className='btnMenu'>
              <img src="../../assets/home.png" onClick={() => history.push('/mapa')} />
            </IonButton>
            <IonButton className='btnMenu'>
              <img src="../../assets/info.png" onClick={() => history.push('/info-extra')} />
            </IonButton>
            <IonButton className='btnMenu'>
              <img src="../../assets/perfil.png" onClick={() => history.push('/perfil')} />
            </IonButton>
          </IonToolbar>
        )}
      </IonFooter>
    </IonPage >
  );
};

export default Mapa;
