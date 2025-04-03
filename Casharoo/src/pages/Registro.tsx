import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonButton, IonTitle, IonInput, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Registro.css';

const Registro: React.FC = () => {
  const [registro, setRegistro] = useState({
    nombre: "",
    sexo: 0,
    telefono: 0,
    capitulo: [
      { capitulo: 1, disabled: false },
      { capitulo: 2, disabled: true },
      { capitulo: 3, disabled: true },
      { capitulo: 4, disabled: true },
      { capitulo: 5, disabled: true },
      { capitulo: 6, disabled: true },
      { capitulo: 7, disabled: true },

    ]
  })

  const registrarnombre = (e: any) => {
    console.log('Evento:', e); // Verificar el evento
    setRegistro({ ...registro, [e.target.name]: e.target.value });
  };

  const registrosexo = () => {
    console.log("ok")
    setRegistro({ ...registro, sexo: 1 })
    console.log(registro)

  }

  const [personajes, setPersonajes] = useState("nino")

  return (
    <IonPage>
      <IonContent className="ion-padding" >


        <div className="rectangle-container" /*SECCION DONDE ESTARÁN LOS CUADROS*/>

          <div className='rectangulotitulo' /*CUADRO AMARILLO DEL TÍTULO*/>
            <h1>Escoge tu personaje</h1>
          </div>

          <div className='rectangulochico' id='rect1' /*CUADRO PEQUEÑO ROSA*/>
            <IonButton id='BtnRosa' onClick={registrosexo}></IonButton>

          </div >
          <div className='rectangulochico' id='rect2'  /*CUADRO PEQUEÑO AZUL*/>
            <IonButton id='BtnAzul' onClick={(e) => setRegistro({ ...registro, sexo: 0 })}></IonButton>

          </div>

          <div className="rectangle" /*CUADRO ROSA CLARITO PRINCIPAL*/></div>
        </div>


        <div className='Nombre' /*SECCION DONDE SE INGRESA EL NOMBRE*/>

          <h1 style={{ color: 'white' }} id='NomTexto' /*TÍTULO*/  >Tu nombre:</h1>

          <IonInput  /*DONDE SE INGRESA EL NOMBRE*/
            placeholder="   Me llamo..."
            // clearInput={true}
            onIonChange={registrarnombre}
            name="nombre"
            // fill='solid'
            id='InputNom'
            color={'warning'}
          ></IonInput>
        </div>


        <div className='Logo' /*SECCION DONDE SE INGRESA EL LOGO*/>
          <img src="..\..\assets\logo.png" width={304} height={79} id='LogoImg' /*IMAGEN LOGO*/></img>
        </div>
            <div className="rectangle-container" /*SECCION DONDE ESTARÁN LOS CUADROS*/> 
              
              <div className='rectangulotitulo' /*CUADRO AMARILLO DEL TÍTULO*/> 
                <h1>Escoge tu personaje</h1>
              </div>

              <div className='rectangulochico' id='rect1' /*CUADRO PEQUEÑO ROSA*/>
                <IonButton id='BtnRosa'>
                      <img src="../../assets/girl.png" height={185} width={310}/>
                </IonButton>
              </div > 
              <div className='rectangulochico' id='rect2'  /*CUADRO PEQUEÑO AZUL*/>
                <IonButton id='BtnAzul'>
                <img src="../../assets/boy.png" height={180} width={300}/>
                </IonButton>
              </div>

              <div className="rectangle" /*CUADRO ROSA CLARITO PRINCIPAL*/></div> 
            </div>


            <div className='Nombre' /*SECCION DONDE SE INGRESA EL NOMBRE*/> 
              
              <h1 style={{ color: 'white'}} id='NomTexto' /*TÍTULO*/  >Tu nombre:</h1> 
                
                <IonInput  /*DONDE SE INGRESA EL NOMBRE*/
                  placeholder="   Me llamo..."
                  clearInput={true}
                  fill='solid'
                  id='InputNom'
                  color={'warning'}
                  ></IonInput>
            </div>

            <div className='Username' /*SECCION DONDE SE INGRESA EL NOMBRE DE USUARIO*/> 
              
              <h1 style={{ color: 'white'}} id='NomTexto' /*TÍTULO*/  >Tu usuario:</h1> 
                
                <IonInput  /*DONDE SE INGRESA EL NOMBRE DE USUARIO*/
                  placeholder="   Mi usuario es..."
                  clearInput={true}
                  fill='solid'
                  id='InputNom'
                  color={'warning'}
                  ></IonInput>
            </div>

            <div className='contenedorBtnSiguiente'>
              <IonButton id='btnSiguiente'>Siguiente</IonButton>
            </div>


            <div className='Logo' /*SECCION DONDE SE INGRESA EL LOGO*/> 
              <img src="..\..\assets\logo.png" width={304} height={79} id='LogoImgRegistro' /*IMAGEN LOGO*/></img> 
            </div>

        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Registro;