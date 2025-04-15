import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonSelect, IonSelectOption, IonButton, IonFooter, IonToolbar, IonInput } from '@ionic/react';
import './Crear_Meta.css';
import { useHistory } from "react-router-dom";
import { useUsuario } from "../context/UsuarioContext";
import { registrarUsuario, editarUsuario } from "../services/userRegister.js"


const Crear_Meta: React.FC = () => {

  type BotonesSeleccionColor = {
    btnAz: boolean;
    btnAm: boolean;
    btnRos: boolean;
    btnVer: boolean;
  };

  const [seleccionBtnColor, setseleccionBtnColor] = useState({
    btnAz: false,
    btnAm: false,
    btnRos: false,
    btnVer: false,
  })

  const seleccionarColor = (btn: keyof BotonesSeleccionColor) => {
    setseleccionBtnColor((estadoAnterior) => ({
      btnAz: btn === 'btnAz', // Solo este botón será true si es el seleccionado
      btnAm: btn === 'btnAm',
      btnRos: btn === 'btnRos',
      btnVer: btn === 'btnVer',
    }));
  };

  type BotonesSeleccionIcono = {
    btnCan: boolean;
    btnFlo: boolean;
    btnTen: boolean;
    btnDog: boolean;
  };

  const [seleccionBtnIcono, setseleccionBtnIcono] = useState({
    btnCan: false,
    btnFlo: false,
    btnTen: false,
    btnDog: false,
  })

  const seleccionarIcono = (btn: keyof BotonesSeleccionIcono) => {
    setseleccionBtnIcono((estadoAnterior) => ({
      btnCan: btn === 'btnCan', // Solo este botón será true si es el seleccionado
      btnFlo: btn === 'btnFlo',
      btnTen: btn === 'btnTen',
      btnDog: btn === 'btnDog',
    }));
  };

  const [meta, setMeta] = useState({
    nombre: "",
    dinero: 0,
    color: 0,
    icono: 0,
    plazo: 0,
  });

  const [error, setError] = useState(false);

  const history = useHistory();

  const irAAhorro = () => {
    history.push('/ahorro');
  };

  /*const agregarMeta = (nuevaMeta: any) => {
    editarUsuario(docRef.Id, nuevaMeta); // Agrega la nueva meta al array de metas del usuario;
  };*/

  const registroMeta = () => {
    const nombre = (document.getElementById('input-nombre') as HTMLInputElement)?.value;

    const nuevaMeta = {
      ...meta,
      nombre,
    };

    console.log(nuevaMeta);

    if (nombre !== "" && meta.dinero !== 0 && meta.plazo !== 0 && meta.color !== 0 && meta.icono !== 0) {
      setMeta(nuevaMeta);
      //agregarMeta(nuevaMeta); // Agregar la nueva meta al contexto
      setError(false);
      irAAhorro();
    } else {
      setError(true);
    }
  };


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
            onIonChange={(e: any) => setMeta({ ...meta, nombre: e.target.value })}
          ></IonInput>
        </div>
        <div className='Dinero-a-ahorrar'>
          <p className='p2-crear-meta' id='p-dinero-a-ahorrar'>$ a ahorrar:</p>
          <IonInput id='input-dinero-a-ahorrar' type="number" placeholder='pesos' label='$'
            clearInput={true}
            onIonInput={(e: any) => setMeta({ ...meta, dinero: parseFloat(e.target.value) })}></IonInput>
        </div>
        <div className='Color'>
          <p className='p2-crear-meta' id='p-color'>Color:</p>
          <IonButton id='btnAz' onClick={() => { seleccionarColor('btnAz'); setMeta({ ...meta, color: 1 }); }}>
            {
              seleccionBtnColor.btnAz === true ?
                <img src="..\..\assets\palomita.png"></img>
                :
                <>
                </>
            }
          </IonButton>
          <IonButton id='btnRos' onClick={() =>{ seleccionarColor('btnRos'); setMeta({ ...meta, color: 2 }); }}>
            {
              seleccionBtnColor.btnRos === true ?
                <img src="..\..\assets\palomita.png"></img>
                :
                <>
                </>
            }
          </IonButton>
          <IonButton id='btnAma' onClick={() => {seleccionarColor('btnAm'); setMeta({ ...meta, color: 3 }); }}>
            {
              seleccionBtnColor.btnAm === true ?
                <img src="..\..\assets\palomita.png"></img>
                :
                <>
                </>
            }
          </IonButton>
          <IonButton id='btnVer' onClick={() => {seleccionarColor('btnVer'); setMeta({ ...meta, color: 4 });}}>
            {
              seleccionBtnColor.btnVer === true ?
                <img src="..\..\assets\palomita.png"></img>
                :
                <>
                </>
            }
          </IonButton>
        </div>
        <div className='Icono'>
          <p className='p2-crear-meta' id='p-icono'>Icono:</p>
          <IonButton id='btnCan' onClick={() => { seleccionarIcono('btnCan'); setMeta({ ...meta, icono: 1 }); }}>
            {
              seleccionBtnIcono.btnCan === true ? (
                <img src="..\..\assets\palomita.png"></img>
              ) : (
                <img src="../../assets/Candy.png"></img>)
            }
          </IonButton>
          <IonButton id='btnFlo' onClick={() => {seleccionarIcono('btnFlo'); setMeta({ ...meta, icono: 2 }); }}>
            {
              seleccionBtnIcono.btnFlo === true ? (
                <img src="..\..\assets\palomita.png"></img>
              ) : (
                <img src="../../assets/Flower.png"></img>)
            }
          </IonButton>
          <IonButton id='btnTen' onClick={() => {seleccionarIcono('btnTen'); setMeta({ ...meta, icono: 3 }); }}>
            {
              seleccionBtnIcono.btnTen === true ? (
                <img src="..\..\assets\palomita.png"></img>
              ) : (
                <img src="../../assets/Shoes.png"></img>)
            }
          </IonButton>
          <IonButton id='btnDog' onClick={() => {seleccionarIcono('btnDog'); setMeta({ ...meta, icono: 4 }); }}>
            {
              seleccionBtnIcono.btnDog === true ? (
                <img src="..\..\assets\palomita.png"></img>
              ) : (
                <img src="../../assets/Golden retriever.png"></img>)
            }
          </IonButton>
        </div>
        <div className='Agregar-plazo'>
          <IonSelect interface="popover" label='Plazo:' class='select-plazo' placeholder='Plazo' justify="start"
            onIonChange={(e: any) => setMeta({ ...meta, plazo: parseInt(e.target.value) })}
            id='select-plazo'>
            <IonSelectOption value='1' id='seleccion-plazo'>Semanal</IonSelectOption>
            <IonSelectOption value="2" id='seleccion-plazo'>Mensual</IonSelectOption>
            <IonSelectOption value="3" id='seleccion-plazo'>Anual</IonSelectOption>
            <IonSelectOption value="0" id='seleccion-plazo'>Sin plazo</IonSelectOption>
          </IonSelect>
        </div>
        <div className='contenedorBtnSiguiente'>
          <IonButton id='btnSiguiente1' onClick={registroMeta}>Crear Meta</IonButton>
          {error === true &&
            <h1> Todos los datos son obligatorios</h1>
          }
        </div>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonButton className='btnMenu1'>
            <img src="../../assets/home.png" />
          </IonButton>
          <IonButton className='btnMenu1'>
            <img src="../../assets/info.png" />
          </IonButton>
          <IonButton className='btnMenu1'>
            <img src="../../assets/ahorro.png" />
          </IonButton>
          <IonButton className='btnMenu1'>
            <img src="../../assets/perfil.png" />
          </IonButton>
        </IonToolbar>
      </IonFooter>
    </IonPage >
  );
};

export default Crear_Meta;


