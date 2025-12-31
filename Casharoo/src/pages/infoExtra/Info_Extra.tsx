import React, { useState, useEffect } from 'react';
import { obtenerUsuario } from '../../services/userRegister';
import { IonContent, IonHeader, IonIcon, IonPage, IonButton, IonTitle, IonInput, IonToolbar, IonFooter } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import './Info_Extra.css';
import { useHistory } from 'react-router-dom';


const Info: React.FC = () => {
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
    actualizarCapitulos();
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
    {
      capitulo: 8,
      disabled: true,
    },

  ])

  const actualizarCapitulos = () => {
    const nuevosCapitulos = capitulosInfo.map((capi) => ({
      ...capi,
      disabled: capi.capitulo > completados,
    }));
    setCapitulosInfo(nuevosCapitulos);
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

      <IonContent className="ion-padding">

        <div className='contenedorLogo'>
          <img src="..\..\assets\logo.png" width={304} height={79} id='logo'></img>
        </div>

        <div className='contenedorBtns'>

          <div id='Cap1'>
            <IonButton className='btnInfo' id='R' disabled={!usuario.capitulos[0].completed} onClick={() => history.push('/info-extra/ahorro')}>
              <h2 style={{ color: 'white' }}>Cap 1. Ahorro</h2>
            </IonButton>
          </div>

          <div id='Cap2'>
            <IonButton className='btnInfo' id='Am' disabled={!usuario.capitulos[1].completed} onClick={() => history.push('/info-extra/bancos')}>
              {
                capitulosInfo[1].disabled === false ?
                  <h2 style={{ color: 'white' }} >Cap 2. Bancos</h2>
                  :
                  <>
                    <h2 style={{ color: 'white' }} id='textDisabled'>Cap 2. Bancos </h2>
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
            <IonButton className='btnInfo' id='Az' disabled={!usuario.capitulos[2].completed}>
              {
                capitulosInfo[2].disabled === false ?
                  <h2 style={{ color: 'white' }} >Cap 3. Inversiones</h2>
                  :
                  <>
                    <h2 style={{ color: 'white' }} id='textDisabled'>Cap 3. Inversiones </h2>
                    <img src='../../assets/candado.png' id='candado'></img>
                  </>
              }
            </IonButton>
          </div>


          <div id='Cap4'>
            <IonButton className='btnInfo' id='R' disabled={!usuario.capitulos[3].completed}>
              {
                capitulosInfo[3].disabled === false ?
                  <h2 style={{ color: 'white' }} >Cap 4. Finanzas verdes</h2>
                  :
                  <>
                    <h2 style={{ color: 'white' }} id='textDisabled'>Cap 4. Finanzas verdes</h2>
                    <img src='../../assets/candado.png' id='candado'></img>
                  </>
              }
            </IonButton>
          </div>

          <div id='Cap5'>
            <IonButton className='btnInfo' id='Am' disabled={!usuario.capitulos[4].completed}>
              {
                capitulosInfo[4].disabled === false ?
                  <h2 style={{ color: 'white' }} >Cap 5. Débito</h2>
                  :
                  <>
                    <h2 style={{ color: 'white' }} id='textDisabled'>Cap 5. Débito</h2>
                    <img src='../../assets/candado.png' id='candado'></img>
                  </>
              }
            </IonButton>
          </div>

          <div id='Cap6'>
            <IonButton className='btnInfo' id='Az' disabled={!usuario.capitulos[5].completed}>
              {
                capitulosInfo[5].disabled === false ?
                  <h2 style={{ color: 'white' }} >Cap 6. Crédito</h2>
                  :
                  <>
                    <h2 style={{ color: 'white' }} id='textDisabled'>Cap 6. Crédito</h2>
                    <img src='../../assets/candado.png' id='candado'></img>
                  </>
              }
            </IonButton>
          </div>

          <div id='Cap7'>
            <IonButton className='btnInfo' id='R' disabled={!usuario.capitulos[6].completed}>
              {
                capitulosInfo[6].disabled === false ?
                  <h2 style={{ color: 'white' }} >Cap 7. Impuestos</h2>
                  :
                  <>
                    <h2 style={{ color: 'white' }} id='textDisabled'>Cap 7. Impuestos </h2>
                    <img src='../../assets/candado.png' id='candado'></img>
                  </>
              }
            </IonButton>
          </div>

          <div id='Cap8'>
            <IonButton className='btnInfo' id='Am' disabled={!usuario.capitulos[4].completed}>
              {
                capitulosInfo[4].disabled === false ?
                  <h2 style={{ color: 'white' }} >Cap 8. Retiro</h2>
                  :
                  <>
                    <h2 style={{ color: 'white' }} id='textDisabled'>Cap 8. Retiro</h2>
                    <img src='../../assets/candado.png' id='candado'></img>
                  </>
              }
            </IonButton>
          </div>

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
    </IonPage>
  );
};

export default Info;
