import React, { useState } from 'react';
import { IonButton, IonContent, IonHeader, IonPage, IonAlert } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import ExploreContainer from '../components/ExploreContainer';
import './Cap2.css';

const Cap2: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false); // Estado para saber si la respuesta es correcta
  const [showAlert, setShowAlert] = useState(false); // Estado para mostrar la alerta
  const [alertMessage, setAlertMessage] = useState(""); // Mensaje de la alerta

  const reglas = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const nextnextSlide = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 2);
    }
  };

  // Array de los divs del carrusel
  const slides = [
    <div key={0} className="slide1CP2">
      <div className='parte1CP2'>
        Capítulo 2 - Banco
      </div>
      <div className='parte2CP2'>
        <img src="..\..\assets\Uno1.PNG" height="100%"></img>
      </div>
      <div className='parte3CP2'>
        <div className='3interno'>
          La mamá y su hijo están haciendo mandados un fin de semana. El primer mandado es ir a un banco a retirar dinero para poder hacer compras.
        </div>
      </div>
    </div>,
    <div key={1} className="slide2CP2">
      <div className='parte1CP2'>
        Capítulo 2 - Banco
      </div>
      <div className='parte2CP2'>
        <img src="..\..\assets\Dos2.PNG" height="100%"></img>
      </div>
      <div className=' parte3CP2'>
        <div className='3interno'></div>
      </div>
    </div>,
    <div key={2} className="slide3CP2">
      <div className='parte1CP2'>
        Capítulo 2 - Banco
      </div>
      <div className='parte2CP2'>
        <img src="..\..\assets\Tres3.PNG" height="100%"></img>
      </div>
      <div className=' parte3CP2'>
        <div className='3interno'></div>
      </div>
    </div>,
    <div key={3} className="slide4CP2">
      <div className='parte1CP2'>
        Capítulo 2 - Banco
      </div>
      <div className='parte2CP2'>
        <img src="..\..\assets\Cuatro4.PNG" height="100%"></img>
      </div>
      <div className='parte3CP2'>
        <div className='3interno'></div>
      </div>
    </div>,
    <div key={4} className="slide5CP2">
      <div className='parte1CP2'>
        Capítulo 2 - Banco
      </div>
      <div className='parte2CP2'>
        <img src="..\..\assets\Cinco5.PNG" height="100%"></img>
      </div>
      <div className='parte3CP2'>
        <div className='3interno'>Después de la explicación de piggy, todos caminan para seguir con los mandados.
        </div>
      </div>
    </div>,
    <div key={5} className="slide6CP2">
      <div className='parte1CP2'>
        Capítulo 2 - Banco
      </div>
      <div className='parte2CP2'>
        <img src="..\..\assets\Seis6.PNG" height="100%"></img>
      </div>
      <div className='parte3CP2'>
        <div className="botonesContainerCP2">
          <IonButton className='decidirCap21' onClick={() => handleDecision(true)}>Guardar tu dinero y prestarle a los que lo necesitan</IonButton>
          <IonButton className='decidirCap21' onClick={() => handleDecision(false)}>Quitarte tu dinero</IonButton>
          <IonButton className='decidirCap21' onClick={() => handleDecision(false)}>Darte consejos de cómo gastar mejor tu dinero</IonButton>
        </div>
      </div>
    </div>,
    <div key={6} className="slide7CP2">
      <div className='parte1CP2'>
        Capítulo 2 - Banco
      </div>
      <div className='parte2CP2'>
        <img src="..\..\assets\Siete7.PNG" height="100%"></img>
      </div>
      <div className='parte3CP2'>
        <div className='3interno'></div>
      </div>
    </div>,
    <div key={7} className="slide8CP2">
      <div className='parte1CP2'>
        Capítulo 2 - Banco
      </div>
      <div className=' parte2CP2'>
        <img src="..\..\assets\Ocho8.PNG" height="100%"></img>
      </div>
      <div className=' parte3CP2'>
        <div className='3interno'></div>
      </div>
    </div>,
    <div key={8} className="slide9CP2">
      <div className='parte1CP2'>
        Capítulo 2 - Banco
      </div>
      <div className=' parte2CP2'>
        <img src="..\..\assets\Nueve9.PNG" height="100%"></img>
      </div>
      <div className=' parte3CP2'>
        <div className='3interno'></div>
      </div>
    </div>,
    <div key={9} className="slide10CP2">
      <div className='parte1CP2'>
        Capítulo 2 - Banco
      </div>
      <div className=' parte2CP2'>
        <img src="..\..\assets\Diez10.PNG" height="100%"></img>
      </div>
      <div className=' parte3CP2'>
        <div className='3interno'></div>
      </div>
    </div>,
    <div key={10} className="slide11CP2">
      <div className='parte1CP2'>
        Capítulo 2 - Banco
      </div>
      <div className=' parte2CP2'>
        <img src="..\..\assets\Once11.PNG" height="100%"></img>
      </div>
      <div className=' parte3CP2'>
        <div className='3interno'>
          <IonButton className='decidirCap22' onClick={nextnextSlide}>Entendí las reglas</IonButton>
          <IonButton className='decidirCap22' onClick={reglas}>Explicame las reglas otra vez</IonButton>
        </div>
      </div>
    </div>,
    <div key={11} className="slide12CP2">
      <div className='parte1CP2'>
        Capítulo 2 - Banco
      </div>
      <div className=' parte2CP2'>
        <img src="..\..\assets\Doce12.PNG" height="100%"></img>
      </div>
      <div className=' parte3CP2'>
        <div className='3interno'></div>
      </div>
    </div>,
    <div key={12} className="slide13CP2">
      <div className='parte1CP2'>
        Capítulo 2 - Banco
      </div>
      <div className=' parte2CP2'>
        <img src="..\..\assets\Trece13.PNG" height="100%"></img>
      </div>
      <div className=' parte3CP2'>
        <div className='3interno'>
          La hermana se suma al juego y ahora también tiene una cuenta en el banco.
        </div>
      </div>
    </div>,
    <div key={13} className="slide14CP2">
      <div className='parte1CP2'>
        Capítulo 2 - Banco
      </div>
      <div className=' parte2CP2'>
        <img src="..\..\assets\Catorce14.PNG" height="100%"></img>
      </div>
      <div className=' parte3CP2'>
        <div className='3interno'>
          La cuenta de ahorros de ella es muy baja y no puede comprar los materiales que necesita urgentemente para un proyecto de la escuela
        </div>
      </div>
    </div>,
    <div key={14} className="slide15CP2">
      <div className='parte1CP2'>
        Capítulo 2 - Banco
      </div>
      <div className=' parte2CP2'>
        <img src="..\..\assets\Quince15.PNG" height="100%"></img>
      </div>
      <div className=' parte3CP2'>
        <div className="botonesContainerCP2">
          <IonButton className='decidirCap23' onClick={() => handleDecision(false)}>Pedir un préstamo y después no pagarle al banco</IonButton>
          <IonButton className='decidirCap23' onClick={() => handleDecision(false)}>No comprar sus materiales</IonButton>
          <IonButton className='decidirCap23' onClick={() => handleDecision(true)}>Pedir un préstamo al banco y devolver todo el dinero más los intereses</IonButton>
        </div>
      </div>
    </div>,
    <div key={15} className="slide16CP2">
      <div className='parte1CP2'>
        Capítulo 2 - Banco
      </div>
      <div className=' parte2CP2'>
        <img src="..\..\assets\Dieciseis16.PNG" height="100%"></img>
      </div>
      <div className=' parte3CP2'>
        <div className='3interno'>
        </div>
      </div>
    </div>,

    <div key={16} className="slide17CP2">
      <div className='parte1CP2'>
        Capítulo 2 - Banco
      </div>
      <div className=' parte2CP2'>
        <img src="..\..\assets\Diecisiete17.PNG" height="100%"></img>
      </div>
      <div className=' parte3CP2'>
        <div className='3interno'>
          <IonButton className='decidirCap24' onClick={() => setCurrentIndex(0)}>Repetir la historia</IonButton>
          <IonButton className='decidirCap24' href="/Juego2">Continuar con el juego</IonButton>
        </div>
      </div>
    </div>
  ];

  const handleDecision = (isCorrectChoice: boolean) => {
    if (isCorrectChoice) {
      setIsCorrect(true);
      setAlertMessage("¡Felicidades! Has elegido la opción correcta.");
    } else {
      setIsCorrect(false);
      setAlertMessage("Inténtalo de nuevo.");
    }
    setShowAlert(true); // Mostrar alerta con el mensaje correspondiente
  };

  // Función para mover al siguiente slide
  const nextSlide = () => {
    if ([5, 14].includes(currentIndex) && !isCorrect) return; // Impide avanzar solo en las slides de decisiones si la respuesta es incorrecta

    if (currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsCorrect(false); // Reinicia el estado para la siguiente slide
    }
  };

  // Función para mover al slide anterior
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
    if (currentIndex === 12) {
      setCurrentIndex(currentIndex - 2);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <link href="https://fonts.googleapis.com/css2?family=Itim&display=swap" rel="stylesheet"></link>
      </IonHeader>
      <IonContent>
        <div className="carruselContainerCP2">
          <div className="carruselSlidesCP2">
            {slides[currentIndex]}
          </div>

          <div className="carruselButtonsCP2">
            <IonButton onClick={prevSlide} className='1button'> Anterior </IonButton>
            <IonButton onClick={nextSlide} className='1button' disabled={([5, 10, 14].includes(currentIndex) && !isCorrect)} // Solo se desactiva en las slides de decisiones si no es correcta
            >
              Siguiente
            </IonButton>
          </div>
        </div>
      </IonContent>

      {/*Mensaje de alerta de retroalimentación*/}
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        message={alertMessage}
        buttons={[
          {
            text: 'Aceptar',
            handler: () => {
              // No hacer nada por ahora, solo cerrar la alerta
            },
          },
        ]}
      />

    </IonPage>
  );
};

export default Cap2;