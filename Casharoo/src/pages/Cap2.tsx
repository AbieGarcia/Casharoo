import React, { useState } from 'react';
import { IonButton, IonContent, IonHeader, IonPage, IonAlert} from '@ionic/react';
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
    <div key={0} className="slide11">
      <div className='parte1'>
        <h1>
        Capítulo 2 - Banco
        </h1>
        </div>
      <img className='parte2' src="..\..\assets\Uno1.PNG"></img>
      <div className='parte3'>
        <div className='3interno'>
        La mamá y su hijo están haciendo mandados un fin de semana. El primer mandado es ir a un banco a retirar dinero para poder hacer compras.
        </div>
      </div>
    </div>,

    <div key={1} className="slide22">
      <div className='parte1'>
      <h1>
        Capítulo 2 - Banco
      </h1>
      </div>
      <img className='parte2' src="..\..\assets\Dos2.PNG"></img>
      <div className='parte3'>
      <div className='3interno'></div>
      </div>
    </div>,
    <div key={2} className="slide33">
      <div className='parte1'>
      <h1>
        Capítulo 2 - Banco
      </h1>
      </div>
      <img className='parte2' src="..\..\assets\Tres3.PNG"></img>
      <div className='parte3'>
      <div className='3interno'></div>
      </div>
    </div>,
    <div key={3} className="slide44">
      <div className='parte1'>
      <h1>
        Capítulo 2 - Banco
      </h1>
      </div>
      <img className='parte2' src="..\..\assets\Cuatro4.PNG"></img>
      <div className='parte3'>
      <div className='3interno'></div>
      </div>
    </div>,
    <div key={4} className="slide55">
      <div className='parte1'>
      <h1>
        Capítulo 2 - Banco
      </h1>
      </div>
      <img className='parte2' src="..\..\assets\Cinco5.PNG"></img>
      <div className='parte3'>
      <div className='3interno'>Después de la explicación de piggy, todos caminan para seguir con los mandados.
      </div>
      </div>
    </div>,
    <div key={5} className="slide66">
      <div className='parte1'>
      <h1>
        Capítulo 2 - Banco
      </h1>
      </div>
      <img className='parte2' src="..\..\assets\Seis6.PNG"></img>
      <div className='parte3'>
      <div className='3interno'>
        decide...
                <div className="botones-container">
          <IonButton className='decidir1' onClick={() => handleDecision(true)}>Guardar tu dinero y prestarle a los que lo necesitan</IonButton>
          <IonButton className='decidir1' onClick={() => handleDecision(false)}>Quitarte tu dinero</IonButton>
          <IonButton className='decidir1' onClick={() => handleDecision(false)}>Darte consejos de cómo gastar mejor tu dinero</IonButton>
        </div>
      </div>
      </div>
    </div>,
    <div key={6} className="slide77">
      <div className='parte1'>
      <h1>
        Capítulo 2 - Banco
      </h1>
      </div>
      <img className='parte2' src="..\..\assets\Siete7.PNG"></img>
      <div className='parte3'>
      <div className='3interno'></div>
      </div>
    </div>,
    <div key={7} className="slide88">
      <div className='parte1'>
      <h1>
        Capítulo 2 - Banco
      </h1>
      </div>
      <img className='parte2' src="..\..\assets\Ocho8.PNG"></img>
      <div className='parte3'>
      <div className='3interno'></div>
      </div>
    </div>,
    <div key={8} className="slide99">
      <div className='parte1'>
      <h1>
        Capítulo 2 - Banco
      </h1>
      </div>
      <img className='parte2' src="..\..\assets\Nueve9.PNG"></img>
      <div className='parte3'>
      <div className='3interno'></div>
      </div>
    </div>,
    <div key={9} className="slide1010">
      <div className='parte1'>
      <h1>
        Capítulo 2 - Banco
      </h1>
      </div>
      <img className='parte2' src="..\..\assets\Diez10.PNG"></img>
      <div className='parte3'>
      <div className='3interno'></div>
      </div>
    </div>,
    <div key={10} className="slide1111">
      <div className='parte1'>
      <h1>
        Capítulo 2 - Banco
      </h1>
      </div>
      <img className='parte2' src="..\..\assets\Once11.PNG"></img>
      <div className='parte3'>
      <div className='3interno'>
        decide...
        <div className="botones-container">
  <IonButton className='decidirCap2' onClick={nextnextSlide}>Entendí las reglas</IonButton>
  <IonButton className='decidirCap2' onClick={reglas}>Explicame las reglas otra vez</IonButton>
</div>
      </div>
      </div>
    </div>,
    <div key={11} className="slide1212">
      <div className='parte1'>
      <h1>
        Capítulo 2 - Banco
      </h1>
      </div>
      <img className='parte2' src="..\..\assets\Doce12.PNG"></img>
      <div className='parte3'>
      <div className='3interno'></div>
      </div>
    </div>,
    <div key={12} className="slide1313">
      <div className='parte1'>
      <h1>
        Capítulo 2 - Banco
      </h1>
      </div>
      <img className='parte2' src="..\..\assets\Trece13.PNG"></img>
      <div className='parte3'>
      <div className='3interno'>
      La hermana se suma al juego y ahora también tiene una cuenta en el banco.
      </div>
      </div>
    </div>,
    <div key={13} className="slide1414">
      <div className='parte1'>
      <h1>
        Capítulo 2 - Banco
      </h1>
      </div>
      <img className='parte2' src="..\..\assets\Catorce14.PNG"></img>
      <div className='parte3'>
      <div className='3interno'>  
      La cuenta de ahorros de ella es muy baja y no puede comprar los materiales que necesita urgentemente para un proyecto de la escuela
      </div>
      </div>
    </div>,
    <div key={14} className="slide1515">
      <div className='parte1'>
      <h1>
        Capítulo 2 - Banco
      </h1>
      </div>
      <img className='parte2' src="..\..\assets\Quince15.PNG"></img>
      <div className='parte3'>
      <div className='3interno'>
      ¿Qué le recomiendas?
          <div className="botones-container">
          <IonButton className='decidir1' onClick={() => handleDecision(false)}>Pedir un préstamo y después no pagarle al banco</IonButton>
          <IonButton className='decidir1' onClick={() => handleDecision(false)}>No comprar sus materiales</IonButton>
          <IonButton className='decidir1' onClick={() => handleDecision(true)}>Pedir un préstamo al banco y devolver todo el dinero más los intereses</IonButton>
        </div>
      </div>
      </div>
    </div>,
    <div key={15} className="slide1616">
      <div className='parte1'>
      <h1>
        Capítulo 2 - Banco
      </h1>
      </div>
      <img className='parte2' src="..\..\assets\Dieciseis16.PNG"></img>
      <div className='parte3'>
      <div className='3interno'>
        </div>
      </div>
    </div>,
    <div key={16} className="slide1717">
      <div className='parte1'>
      <h1>
        Capítulo 2 - Banco
      </h1>
      </div>
      <img className='parte2' src="..\..\assets\Diecisiete17.PNG"></img>
      <div className='parte3'>
      <div className='3interno'>
        <IonButton className='decidir3' onClick={() => setCurrentIndex(0)}>Repetir la historia</IonButton> 
        <IonButton className='decidir3' href="/Juego2">Continuar con el juego</IonButton> 
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
        <div className="carrusel-container">
          <div className="carrusel-slides">
            {slides[currentIndex]}
          </div>

          <div className="carrusel-buttons">
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