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

      if (datosUsuario?.capitulos) {
        getCompletados(datosUsuario);
      }
    };

    cargarUsuario();
  }, []);

  const [completados, setCompletados] = useState(1);

  useEffect(() => {
    actualizarMoneda();
  }, [completados]);



  const history = useHistory();


  const getCompletados = (usuario: any) => {
    if (usuario.capitulos[0]?.completed) {
      setCompletados(2);
    }
    if (usuario.capitulos[1]?.completed) {
      setCompletados(3);
    }
    if (usuario.capitulos[2]?.completed) {
      setCompletados(4);
    }
    if (usuario.capitulos[3]?.completed) {
      setCompletados(5);
    }
    if (usuario.capitulos[4]?.completed) {
      setCompletados(6);
    }
    if (usuario.capitulos[5]?.completed) {
      setCompletados(7);
    }
    if (usuario.capitulos[6]?.completed) {
      setCompletados(8);
    }
  }

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
    {
      capitulo: 8,
      disabled: true,
    },

  ])

  const actualizarMoneda = () => {
    const nuevasMonedas = monedaCap.map((moneda) => ({
      ...moneda,
      disabled: moneda.capitulo > completados,
    }));
    setMonedaCap(nuevasMonedas);
  };


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
          <IonButton id='M8' className='btn'>
            {
              monedaCap[7].disabled === false ?
                <a href="/Cap8">
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
        <IonToolbar>
          {usuario.capitulos[0]?.completed ? (
            <>
              <IonButton
                className="btnMenu1"
                onClick={() => history.push('/mapa')}
              >
                <img src="../../assets/home.png" alt="Inicio" />
              </IonButton>

              <IonButton
                className="btnMenu1"
                onClick={() => history.push('/info-extra')}
              >
                <img src="../../assets/info.png" alt="Información" />
              </IonButton>

              <IonButton
                className="btnMenu1"
                onClick={() => history.push('/ahorro')}
              >
                <img src="../../assets/ahorro.png" alt="Ahorro" />
              </IonButton>

              <IonButton
                className="btnMenu1"
                onClick={() => history.push('/inversion')}
              >
                <img src="../../assets/invest.png" alt="Inversión" />
              </IonButton>

              <IonButton
                className="btnMenu1"
                onClick={() => history.push('/perfil')}
              >
                <img src="../../assets/perfil.png" alt="Perfil" />
              </IonButton>
            </>
          ) : (
            <>
              <IonButton
                className="btnMenu"
                onClick={() => history.push('/mapa')}
              >
                <img src="../../assets/home.png" alt="Inicio" />
              </IonButton>

              <IonButton
                className="btnMenu"
                onClick={() => history.push('/info-extra')}
              >
                <img src="../../assets/info.png" alt="Información" />
              </IonButton>

              <IonButton
                className="btnMenu"
                onClick={() => history.push('/perfil')}
              >
                <img src="../../assets/perfil.png" alt="Perfil" />
              </IonButton>
            </>
          )}
        </IonToolbar>
      </IonFooter>
    </IonPage >
  );
};

export default Mapa;
