import React, { useState } from 'react';
import { IonButton, IonContent, IonHeader, IonPage, IonAlert } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import ExploreContainer from '../../../components/ExploreContainer';
import './Cap1.css';

const Cap1: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false); // Estado para saber si la respuesta es correcta
  const [showAlert, setShowAlert] = useState(false); // Estado para mostrar la alerta
  const [alertMessage, setAlertMessage] = useState(""); // Mensaje de la alerta

  // Array de los divs del carrusel
  const slides = [
    <div key={0} className="slide1">
      <div className='parte1'>
        Capítulo 1 - Ahorro
      </div>
      <div className='parte2'>
        <img src="..\..\assets\uno.PNG" height="100%"></img>
      </div>
      <div className='parte3'>
        <div className='3interno'>
          Los hermanos reciben su primer domingo y una alcancía de cochinito de parte de su papá.
        </div>
      </div>
    </div>,

    <div key={1} className="slide2">
      <div className='parte1'>
        Capítulo 1 - Ahorro
      </div>
      <div className='parte2'>
        <img src="..\..\assets\dos.PNG"></img>
      </div>
      <div className='parte3'>
        <div className='3interno'>
          Los niños quieren comprar unos patines, pero no les alcanza. Su papá les aconseja guardar una parte de su dinero en la alcancía.
        </div>
      </div>
    </div>,
    <div key={2} className="slide3">
      <div className='parte1'>
        Capítulo 1 - Ahorro
      </div>
      <div className='parte2'>
        <img src="..\..\assets\3.PNG"></img>
      </div>
      <div className='parte3'>
        <div className='3interno'>
          Los niños guardan una parte del dinero en la alcancía.
        </div>
      </div>
    </div>,
    <div key={3} className="slide4">
      <div className='parte1'>
        Capítulo 1 - Ahorro
      </div>
      <div className='parte2'>
        <img src="..\..\assets\4.PNG"></img>
      </div>
      <div className='parte3'>
        <div className='3interno'></div>
      </div>
    </div>,
    <div key={4} className="slide5">
      <div className='parte1'>
        Capítulo 1 - Ahorro
      </div>
      <div className='parte2'>
        <img src="..\..\assets\5.PNG"></img>

      </div>
      <div className='parte3'>
        <div className='3interno'></div>
      </div>
    </div>,
    <div key={5} className="slide6">
      <div className='parte1'>
        Capítulo 1 - Ahorro
      </div>
      <div className='parte2'>
        <img src="..\..\assets\6.PNG"></img>

      </div>
      <div className='parte3'>
        <div className='3interno'></div>
      </div>
    </div>,
    <div key={6} className="slide7">
      <div className='parte1'>
        Capítulo 1 - Ahorro
      </div>
      <div className='parte2'>
        <img src="..\..\assets\7.PNG"></img>

      </div>
      <div className='parte3'>
        <div className='3interno'></div>
      </div>
    </div>,
    <div key={7} className="slide8">
      <div className='parte1'>
        Capítulo 1 - Ahorro
      </div>
      <div className='parte2'>
        <img src="..\..\assets\8.PNG"></img>

      </div>
      <div className='parte3'>
        <div className='3interno'></div>
      </div>
    </div>,
    <div key={8} className="slide9">
      <div className='parte1'>
        Capítulo 1 - Ahorro
      </div>
      <div className='parte2'>
        <img src="..\..\assets\9.PNG"></img>

      </div>
      <div className='parte3'>
        <div className='3interno'></div>
      </div>
    </div>,
    <div key={9} className="slide10">
      <div className='parte1'>
        Capítulo 1 - Ahorro
      </div>
      <div className='parte2'>
        <img src="..\..\assets\10.PNG"></img>

      </div>
      <div className='parte3'>
        <div className='3interno'></div>
      </div>
    </div>,
    <div key={10} className="slide11">
      <div className='parte1'>
        Capítulo 1 - Ahorro
      </div>
      <div className='parte2'>
        <img src="..\..\assets\11.PNG"></img>

      </div>
      <div className='parte3'>
        <div className="botones-container">
          <IonButton className='decidir' onClick={() => handleDecision(false)}>Gastar $100</IonButton>
          <IonButton className='decidir' onClick={() => handleDecision(true)}>Gastar $50</IonButton>
          <IonButton className='decidir' onClick={() => handleDecision(false)}>Gastar mi dinero en dulces</IonButton>
        </div>
      </div>
    </div>,
    <div key={11} className="slide12">
      <div className='parte1'>
        Capítulo 1 - Ahorro
      </div>
      <div className='parte2'>
        <img src="..\..\assets\12.PNG"></img>

      </div>
      <div className='parte3'>
        <div className='3interno'></div>
      </div>
    </div>,
    <div key={12} className="slide13">
      <div className='parte1'>
        Capítulo 1 - Ahorro
      </div>
      <div className='parte2'>
        <img src="..\..\assets\13.PNG"></img>

      </div>
      <div className='parte3'>
        <div className='3interno'></div>
      </div>
    </div>,
    <div key={13} className="slide14">
      <div className='parte1'>
        Capítulo 1 - Ahorro
      </div>
      <div className='parte2'>
        <img src="..\..\assets\14.PNG"></img>

      </div>
      <div className='parte3'>
        <div className='3interno'></div>
      </div>
    </div>,
    <div key={14} className="slide15">
      <div className='parte1'>
        Capítulo 1 - Ahorro
      </div>
      <div className='parte2'>
        <img src="..\..\assets\15.PNG"></img>

      </div>
      <div className='parte3'>
        <div className='3interno'></div>
      </div>
    </div>,
    <div key={15} className="slide16">
      <div className='parte1'>
        Capítulo 1 - Ahorro
      </div>
      <div className='parte2'>
        <img src="..\..\assets\16.PNG"></img>

      </div>
      <div className='parte3'>
        <div className='3interno'>
          El hermano se gasta su dinero comprando dulces en la cafetería todos los días, se lo termina acabando en 3 días.
        </div>
      </div>
    </div>,
    <div key={16} className="slide17">
      <div className='parte1'>
        Capítulo 1 - Ahorro
      </div>
      <div className='parte2'>
        <img src="..\..\assets\17.PNG"></img>

      </div>
      <div className='parte3'>
        <div className="botones-container">
          <IonButton className='decidir2' onClick={() => handleDecision(false)}>Que siga gastando su dinero en dulces</IonButton>
          <IonButton className='decidir2' onClick={() => handleDecision(true)}>Que guarde una parte de su dinero</IonButton>
        </div>
      </div>
    </div>,
    <div key={17} className="slide18">
      <div className='parte1'>
        Capítulo 1 - Ahorro
      </div>
      <div className='parte2'>
        <img src="..\..\assets\18.PNG"></img>

      </div>
      <div className='parte3'>
        <div className='3interno'></div>
      </div>
    </div>,
    <div key={18} className="slide19">
      <div className='parte1'>
        Capítulo 1 - Ahorro
      </div>
      <div className='parte2'>
        <img src="..\..\assets\19.PNG"></img>

      </div>
      <div className='parte3'>
        <div className='3interno'></div>
      </div>
    </div>,
    <div key={19} className="slide20">
      <div className='parte1'>
        Capítulo 1 - Ahorro
      </div>
      <div className='parte2'>
        <img src="..\..\assets\20.PNG"></img>

      </div>
      <div className='parte3'>
        <div className='3interno'></div>
      </div>
    </div>,
    <div key={20} className="slide21">
      <div className='parte1'>
        Capítulo 1 - Ahorro
      </div>
      <div className='parte2'>
        <img src="..\..\assets\21.PNG"></img>

      </div>
      <div className='parte3'>
        <div className='3interno'></div>
      </div>
    </div>,
    <div key={21} className="slide22">
      <div className='parte1'>
        Capítulo 1 - Ahorro
      </div>
      <div className='parte2'>
        <img src="..\..\assets\22.PNG"></img>

      </div>
      <div className='parte3'>
        <div className="botones-container">
          <IonButton className='decidir3' onClick={() => setCurrentIndex(0)}>Repetir la historia</IonButton>
          <IonButton className='decidir3' href="/Juego1">Continuar con el juego</IonButton>
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
    if ([10, 16].includes(currentIndex) && !isCorrect) return; // Impide avanzar solo en las slides de decisiones si la respuesta es incorrecta

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
  };

  return (
    <IonPage>
      <IonHeader>
        <link href="https://fonts.googleapis.com/css2?family=Itim&display=swap" rel="stylesheet"></link>
      </IonHeader>
      <IonContent>
        <div className="carrusel-container">
          <div className="carrusel-slides">
            {slides[currentIndex]}
          </div>

          <div className="carrusel-buttons">
            <IonButton onClick={prevSlide} className='1button'> Anterior </IonButton>
            <IonButton onClick={nextSlide} className='1button' disabled={([10, 16].includes(currentIndex) && !isCorrect)} // Solo se desactiva en las slides de decisiones si no es correcta
            >
              Siguiente
            </IonButton>
          </div>
        </div>
      </IonContent>

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

export default Cap1;
