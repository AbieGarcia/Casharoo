import { IonContent, IonHeader, IonPage, IonButton, IonFooter, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import './Ahorro.css';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { obtenerUsuario } from '../services/userRegister';

const Ahorro: React.FC = () => {

  const history = useHistory();
  const irACrearMeta = () => {
    history.push('/crear-meta');
  }
  const [usuario, setUsuario] = useState<any>(null);

  useIonViewWillEnter(() => {
    const cargarUsuario = async () => {
      const usuarioId = localStorage.getItem("usuarioId");
      if (usuarioId) {
        const datosUsuario = await obtenerUsuario(usuarioId);
        setUsuario(datosUsuario);

        console.log("Metas del usuario:", datosUsuario.metas);
      }
    };

    cargarUsuario();
  }, []);

  if (!usuario) {
    return (
      <IonPage>
        <IonContent className="ion-padding">
          <h1>Cargando ahorros del usuario...</h1>
        </IonContent>
      </IonPage>
    );
  }


  return (
    <IonPage>
      <IonContent className='contenido'>
        <IonHeader>
          <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;700&display=swap" rel="stylesheet"></link>
        </IonHeader>
        <div className='rectangulo-ahorro'>
          <p className='p1-ahorro'>Ahorros</p>
        </div>
        <div className='lista-metas'>
          {usuario.metas.length > 0 ? (
            usuario.metas.map((meta: any, index: number) => (
              <div key={index} className='rectangulo-meta'
                style={{
                  backgroundColor:
                    meta.color === 1
                      ? 'rgb(7, 218, 255)'
                      : meta.color === 2
                        ? '#ff6f9f'
                        : meta.color === 3
                          ? 'rgb(255, 252, 68)'
                          : meta.color === 4
                            ? 'rgb(48, 221, 57)'
                            : '#fff',
                }}>
                <div className='meta-texto'>
                  <p className='meta-nombre'>{meta.nombre}</p>
                  <p className='meta-dinero'>Dinero: ${meta.dinero}</p>
                  <p className='meta-plazo'>
                    Plazo: {meta.plazo === 1 ? 'Semanal' : meta.plazo === 2 ? 'Mensual' : meta.plazo === 3 ? 'Anual' : 'Sin plazo'}
                  </p></div>
                <div className='rectangulo-icono'>
                  <img
                    className='icono-meta'
                    src={
                      meta.icono === 1
                        ? '../../assets/Candy.png'
                        : meta.icono === 2
                          ? '../../assets/Flower.png'
                          : meta.icono === 3
                            ? '../../assets/Shoes.png'
                            : '../../assets/Golden retriever.png'
                    }></img></div>
              </div>
            ))
          ) : (
            <h1>No tienes metas creadas aún.</h1>
          )}
        </div>
        <IonButton className='boton-mas' onClick={irACrearMeta}>
          <p className='p2-ahorro'>+</p>
        </IonButton>
      </IonContent>
      <IonFooter>
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
      </IonFooter>
    </IonPage>
  );
};

export default Ahorro;


