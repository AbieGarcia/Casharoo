import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonSelect, IonSelectOption, IonButton, IonFooter, IonToolbar, IonInput, useIonViewWillEnter } from '@ionic/react';
import './Crear_Meta.css';
import { useHistory } from "react-router-dom";
import { obtenerUsuario } from '../../services/userRegister';
import { registrarMeta } from '../../services/userRegister';

type BotonesSeleccionColor = {
  btnAz: boolean;
  btnAm: boolean;
  btnRos: boolean;
  btnVer: boolean;
};

type BotonesSeleccionIcono = {
  btnCan: boolean;
  btnFlo: boolean;
  btnTen: boolean;
  btnDog: boolean;
};

const Crear_Meta: React.FC = () => {
  const history = useHistory();
  const [usuario, setUsuario] = useState<any>(null);
  const [error, setError] = useState(false);
  const [seleccionBtnColor, setseleccionBtnColor] = useState<BotonesSeleccionColor>({
    btnAz: false,
    btnAm: false,
    btnRos: false,
    btnVer: false,
  });

  const [seleccionBtnIcono, setseleccionBtnIcono] = useState<BotonesSeleccionIcono>({
    btnCan: false,
    btnFlo: false,
    btnTen: false,
    btnDog: false,
  });

  const [meta, setMeta] = useState({
    nombre: "",
    dinero: 0,
    aportePorPlazo: 0,
    color: 0,
    icono: 0,
    plazo: 0,
  });

  useIonViewWillEnter(() => {
    setMeta({
      nombre: "",
      dinero: 0,
      aportePorPlazo: 0,
      color: 0,
      icono: 0,
      plazo: 0,
    });

    setseleccionBtnColor({
      btnAz: false,
      btnAm: false,
      btnRos: false,
      btnVer: false,
    });

    setseleccionBtnIcono({
      btnCan: false,
      btnFlo: false,
      btnTen: false,
      btnDog: false,
    });

    setError(false);
  });

  useEffect(() => {
    const cargarUsuario = async () => {
      const usuarioId = localStorage.getItem("usuarioId");
      const datosUsuario = await obtenerUsuario(usuarioId);
      setUsuario(datosUsuario);
    };

    cargarUsuario();
  }, []);

  const seleccionarColor = (btn: keyof BotonesSeleccionColor) => {
    setseleccionBtnColor((estadoAnterior) => ({
      btnAz: btn === 'btnAz',
      btnAm: btn === 'btnAm',
      btnRos: btn === 'btnRos',
      btnVer: btn === 'btnVer',
    }));
  };

  const seleccionarIcono = (btn: keyof BotonesSeleccionIcono) => {
    setseleccionBtnIcono((estadoAnterior) => ({
      btnCan: btn === 'btnCan',
      btnFlo: btn === 'btnFlo',
      btnTen: btn === 'btnTen',
      btnDog: btn === 'btnDog',
    }));
  };

  const irAAhorro = () => {
    history.push('/ahorro');
  };

  const usuarioId = localStorage.getItem("usuarioId");

  const registroMeta = () => {
    console.log(meta);

    if (meta.nombre !== "" && meta.dinero !== 0 && meta.plazo !== 0 && meta.color !== 0 && meta.icono !== 0) {
      if (meta.plazo === 4 || (meta.plazo !== 4 && meta.aportePorPlazo > 0)) {
        registrarMeta(usuarioId, meta);
        setError(false);
        irAAhorro();
      } else {
        setError(true);
      }
    } else {
      setError(true);
    }
  };

  const limpiarFormulario = () => {
    setMeta({
      nombre: "",
      dinero: 0,
      aportePorPlazo: 0,
      color: 0,
      icono: 0,
      plazo: 0,
    });

    setseleccionBtnColor({
      btnAz: false,
      btnAm: false,
      btnRos: false,
      btnVer: false,
    });

    setseleccionBtnIcono({
      btnCan: false,
      btnFlo: false,
      btnTen: false,
      btnDog: false,
    });

    setError(false);
    irAAhorro();
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
      <IonContent className='contenido'>
        <IonHeader>
          <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;700&display=swap" rel="stylesheet"></link>
        </IonHeader>
        <div className='Nueva-meta'>
          <p className='p1-crear-meta'>Nueva meta</p>
        </div>
        <div className='nombre-crear-meta'>
          <p className='p2-crear-meta' id='p-nombre'>Nombre:</p>
          <IonInput id='input-nombre' placeholder=' Nombre de la meta'
            clearInput={true}
            value={meta.nombre}
            onIonInput={(e: any) => setMeta({ ...meta, nombre: e.target.value })}
          ></IonInput>
        </div>
        <div className='Dinero-a-ahorrar'>
          <p className='p2-crear-meta' id='p-dinero-a-ahorrar'>Meta Total:</p>
          <IonInput id='input-dinero-a-ahorrar' type="number" placeholder='pesos' label='$'
            clearInput={true}
            value={meta.dinero}
            onIonInput={(e: any) => setMeta({ ...meta, dinero: parseFloat(e.target.value) })}></IonInput>
        </div>
        <div className='Color'>
          <h3 className='p2-crear-meta' id='p-color'>Color:</h3>
          <div className='btns-color'>
            <IonButton id='btnAz' onClick={() => { seleccionarColor('btnAz'); setMeta({ ...meta, color: 1 }); }}>
              {
                seleccionBtnColor.btnAz === true ?
                  <img src="../../assets/palomita.png" className='check-color'></img>
                  :
                  <>
                  </>
              }
            </IonButton>
            <IonButton id='btnRos' onClick={() => { seleccionarColor('btnRos'); setMeta({ ...meta, color: 2 }); }}>
              {
                seleccionBtnColor.btnRos === true ?
                  <img src="../../assets/palomita.png" className='check-color'></img>
                  :
                  <>
                  </>
              }
            </IonButton>
            <IonButton id='btnAma' onClick={() => { seleccionarColor('btnAm'); setMeta({ ...meta, color: 3 }); }}>
              {
                seleccionBtnColor.btnAm === true ?
                  <img src="../../assets/palomita.png" className='check-color'></img>
                  :
                  <>
                  </>
              }
            </IonButton>
            <IonButton id='btnVer' onClick={() => { seleccionarColor('btnVer'); setMeta({ ...meta, color: 4 }); }}>
              {
                seleccionBtnColor.btnVer === true ?
                  <img src="../../assets/palomita.png" className='check-color'></img>
                  :
                  <>
                  </>
              }
            </IonButton>
          </div>
        </div>
        <div className='Icono'>
          <h3 className='p2-crear-meta' id='p-icono'>Icono:</h3>
          <div className='btns-icono'>
            <IonButton id='btnCan' onClick={() => { seleccionarIcono('btnCan'); setMeta({ ...meta, icono: 1 }); }}>
              {
                seleccionBtnIcono.btnCan === true ? (
                  <img src="../../assets/palomita.png" className='check'></img>
                ) : (
                  <img src="../../assets/Candy.png"></img>)
              }
            </IonButton>
            <IonButton id='btnFlo' onClick={() => { seleccionarIcono('btnFlo'); setMeta({ ...meta, icono: 2 }); }}>
              {
                seleccionBtnIcono.btnFlo === true ? (
                  <img src="../../assets/palomita.png" className='check'></img>
                ) : (
                  <img src="../../assets/Flower.png"></img>)
              }
            </IonButton>
            <IonButton id='btnTen' onClick={() => { seleccionarIcono('btnTen'); setMeta({ ...meta, icono: 3 }); }}>
              {
                seleccionBtnIcono.btnTen === true ? (
                  <img src="../../assets/palomita.png" className='check'></img>
                ) : (
                  <img src="../../assets/Shoes.png"></img>)
              }
            </IonButton>
            <IonButton id='btnDog' onClick={() => { seleccionarIcono('btnDog'); setMeta({ ...meta, icono: 4 }); }}>
              {
                seleccionBtnIcono.btnDog === true ? (
                  <img src="../../assets/palomita.png" className='check'></img>
                ) : (
                  <img src="../../assets/Golden retriever.png"></img>)
              }
            </IonButton>
          </div>
        </div>
        <div className='Agregar-plazo'>
          <IonSelect interface="popover" label='Plazo:' class='select-plazo' placeholder='Plazo' justify="start"
            value={meta.plazo}
            onIonChange={(e: any) => setMeta({ ...meta, plazo: parseInt(e.target.value) })}
            id='select-plazo'>
            <IonSelectOption value={1} id='seleccion-plazo'>Semanal</IonSelectOption>
            <IonSelectOption value={2} id='seleccion-plazo'>Mensual</IonSelectOption>
            <IonSelectOption value={3} id='seleccion-plazo'>Anual</IonSelectOption>
            <IonSelectOption value={4} id='seleccion-plazo'>Sin plazo</IonSelectOption>
          </IonSelect>
        </div>
        {meta.plazo !== 0 && meta.plazo !== 4 && (
          <div className='Aporte-por-plazo'>
            <p className='p2-crear-meta' id='p-aporte-plazo'>
              Aporte por {meta.plazo === 1 ? 'semana' : meta.plazo === 2 ? 'mes' : 'año'}:
            </p>
            <IonInput id='input-aporte-plazo' type="number" placeholder='pesos' label='$'
              clearInput={true}
              value={meta.aportePorPlazo}
              onIonInput={(e: any) => setMeta({ ...meta, aportePorPlazo: parseFloat(e.target.value) })}></IonInput>
          </div>
        )}
        <IonButton id='btnSiguiente1' onClick={registroMeta}>Crear Meta</IonButton>
        <IonButton id='btnSiguiente1' style={{ '--background': '#EF4444' } as any} onClick={limpiarFormulario}>Cancelar</IonButton>
        {error === true &&
          <h1> Todos los datos son obligatorios</h1>
        }
      </IonContent>
    </IonPage >
  );
};

export default Crear_Meta;


