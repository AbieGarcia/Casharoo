import React, { useState } from 'react';
import { IonButton, IonContent, IonHeader, IonPage, IonAlert } from '@ionic/react';
import './Cap3.css';

const Cap3: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isCorrect, setIsCorrect] = useState(false); // Estado para saber si la respuesta es correcta
    const [showAlert, setShowAlert] = useState(false); // Estado para mostrar la alerta
    const [alertMessage, setAlertMessage] = useState(""); // Mensaje de la alerta


    const nextnextSlide = () => {
        if (currentIndex < slides.length - 1) {
            setCurrentIndex(currentIndex + 2);
        }
    };

    // Array de los divs del carrusel
    const slides = [
        <div key={0} className="slide1CP3">
            <div className='parte1CP3'>
                Capítulo 3 - Inversiones
            </div>
            <div className='parte2CP3'>
                <img src="..\..\assets\Cap3.11.png" height="100%"></img>
            </div>
            <div className='parte3CP3'>
                <div className='3interno'>
                </div>
            </div>
        </div>,
        <div key={1} className="slide2CP3">
            <div className='parte1CP3'>
                Capítulo 3 - Inversiones
            </div>
            <div className='parte2CP3'>
                <img src="..\..\assets\Cap3.12.png" height="100%"></img>
            </div>
            <div className=' parte3CP3'>
                <div className='3interno'></div>
            </div>
        </div>,
        <div key={2} className="slide3CP3">
            <div className='parte1CP3'>
                Capítulo 3 - Inversiones
            </div>
            <div className='parte2CP3'>
                <img src="..\..\assets\Cap3.13.png" height="100%"></img>
            </div>
            <div className=' parte3CP3'>
                <div className='3interno'></div>
            </div>
        </div>,
        <div key={3} className="slide4CP3">
            <div className='parte1CP3'>
                Capítulo 3 - Inversiones
            </div>
            <div className='parte2CP3'>
                <img src="..\..\assets\Cap3.14.png" height="100%"></img>
            </div>
            <div className='parte3CP3'>
                <div className='3interno'></div>
            </div>
        </div>,
        <div key={4} className="slide5CP3">
            <div className='parte1CP3'>
                Capítulo 3 - Inversiones
            </div>
            <div className='parte2CP3'>
                <img src="..\..\assets\Cap3.15.png" height="100%"></img>
            </div>
            <div className='parte3CP3'>
                <div className="botonesContainerCP3">
                    <IonButton className='decidirCap31' onClick={() => handleDecision(true)}>Venderlos más caros de lo que costaron los ingredientes</IonButton>
                    <IonButton className='decidirCap31' onClick={() => handleDecision(false)}>Esperar a que mis clientes me den propina</IonButton>
                    <IonButton className='decidirCap31' onClick={() => handleDecision(false)}>Venderlos al mismo precio que costaron los ingredientes</IonButton>
                </div>
            </div>
        </div>,
        <div key={5} className="slide6CP3">
            <div className='parte1CP3'>
                Capítulo 3 - Inversiones
            </div>
            <div className='parte2CP3'>
                <img src="..\..\assets\Cap3.16.png" height="100%"></img>
            </div>
            <div className='parte3CP3'>
                <div className='3interno'></div>
            </div>
        </div>,
        <div key={6} className="slide7CP3">
            <div className='parte1CP3'>
                Capítulo 3 - Inversiones
            </div>
            <div className='parte2CP3'>
                <img src="..\..\assets\Cap3.17.png" height="100%"></img>
            </div>
            <div className='parte3CP3'>
                <div className='3interno'></div>
            </div>
        </div>,
        <div key={7} className="slide8CP3">
            <div className='parte1CP3'>
                Capítulo 3 - Inversiones
            </div>
            <div className=' parte2CP3'>
                <img src="..\..\assets\Cap3.18.png" height="100%"></img>
            </div>
            <div className=' parte3CP3'>
                <div className='3interno'></div>
            </div>
        </div>,
        <div key={8} className="slide9CP3">
            <div className='parte1CP3'>
                Capítulo 3 - Inversiones
            </div>
            <div className=' parte2CP3'>
                <img src="..\..\assets\Cap3.19.png" height="100%"></img>
            </div>
            <div className=' parte3CP3'>
                <div className="botonesContainerCP3">
                    <IonButton className='decidirCap32' onClick={() => handleDecision(false)}>$100</IonButton>
                    <IonButton className='decidirCap32' onClick={() => handleDecision(true)}>$200</IonButton>
                    <IonButton className='decidirCap32' onClick={() => handleDecision(false)}>$300</IonButton>
                </div>
            </div>
        </div>,
        <div key={9} className="slide10CP3">
            <div className='parte1CP3'>
                Capítulo 3 - Inversiones
            </div>
            <div className=' parte2CP3'>
                <img src="..\..\assets\Cap3.110.png" height="100%"></img>
            </div>
            <div className=' parte3CP3'>
                <div className='3interno'></div>
            </div>
        </div>,
        <div key={10} className="slide11CP3">
            <div className='parte1CP3'>
                Capítulo 3 - Inversiones
            </div>
            <div className=' parte2CP3'>
                <img src="..\..\assets\Cap3.111.png" height="100%"></img>
            </div>
            <div className=' parte3CP3'>
                <div className='3interno'>
                </div>
            </div>
        </div>,
        <div key={11} className="slide12CP3">
            <div className='parte1CP3'>
                Capítulo 3 - Inversiones
            </div>
            <div className=' parte2CP3'>
                <img src="..\..\assets\Cap3.112.png" height="100%"></img>
            </div>
            <div className=' parte3CP3'>
                <div className='3interno'></div>
            </div>
        </div>,
        <div key={12} className="slide13CP3">
            <div className='parte1CP3'>
                Capítulo 3 - Inversiones
            </div>
            <div className=' parte2CP3'>
                <img src="..\..\assets\Cap3.113.png" height="100%"></img>
            </div>
            <div className=' parte3CP3'>
                <div className='3interno'>
                </div>
            </div>
        </div>,
        <div key={13} className="slide14CP3">
            <div className='parte1CP3'>
                Capítulo 3 - Inversiones
            </div>
            <div className=' parte2CP3'>
                <img src="..\..\assets\Cap3.114.png" height="100%"></img>
            </div>
            <div className=' parte3CP3'>
                <div className='3interno'>
                </div>
            </div>
        </div>,
        <div key={14} className="slide15CP3">
            <div className='parte1CP3'>
                Capítulo 3 - Inversiones
            </div>
            <div className=' parte2CP3'>
                <img src="..\..\assets\Cap3.115.png" height="100%"></img>
            </div>
            <div className=' parte3CP3'>
                <div className='3interno'>
                </div>
            </div>
        </div>,
        <div key={15} className="slide16CP3">
            <div className='parte1CP3'>
                Capítulo 3 - Inversiones
            </div>
            <div className=' parte2CP3'>
                <img src="..\..\assets\Cap3.116.png" height="100%"></img>
            </div>
            <div className=' parte3CP3'>
                <div className="botonesContainerCP3">
                    <IonButton className='decidirCap33' onClick={() => handleDecision(true)}>Aparte de pasteles vender también cupcakes y otros productos</IonButton>
                    <IonButton className='decidirCap33' onClick={() => handleDecision(false)}>Mejor no vender nada</IonButton>
                    <IonButton className='decidirCap33' onClick={() => handleDecision(false)}>Promocionar mejor los pasteles y llamar a clientes</IonButton>
                </div>
            </div>
        </div>,

        <div key={16} className="slide17CP3">
            <div className='parte1CP3'>
                Capítulo 3 - Inversiones
            </div>
            <div className=' parte2CP3'>
                <img src="..\..\assets\Cap3.117.png" height="100%"></img>
            </div>
            <div className=' parte3CP3'>
                <div className='3interno'>
                </div>
            </div>
        </div>,

        <div key={17} className="slide18CP3">
            <div className='parte1CP3'>
                Capítulo 3 - Inversiones
            </div>
            <div className=' parte2CP3'>
                <img src="..\..\assets\Cap3.118.png" height="100%"></img>
            </div>
            <div className=' parte3CP3'>
                <div className='3interno'>
                </div>
            </div>
        </div>,

        <div key={18} className="slide19CP3">
            <div className='parte1CP3'>
                Capítulo 3 - Inversiones
            </div>
            <div className=' parte2CP3'>
                <img src="..\..\assets\Cap3.119.png" height="100%"></img>
            </div>
            <div className=' parte3CP3'>
                <div className='3interno'>
                    <IonButton className='decidirCap34' onClick={() => setCurrentIndex(0)}>Repetir la historia</IonButton>
                    <IonButton className='decidirCap34' href="/Juego3">Continuar con el juego</IonButton>
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
        if ([4, 8, 15].includes(currentIndex) && !isCorrect) return; // Impide avanzar solo en las slides de decisiones si la respuesta es incorrecta

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
                <div className="carruselContainerCP3">
                    <div className="carruselSlidesCP3">
                        {slides[currentIndex]}
                    </div>

                    <div className="carruselButtonsCP3">
                        <IonButton onClick={prevSlide} className='1button'> Anterior </IonButton>
                        <IonButton onClick={nextSlide} className='1button' disabled={([4, 8, 15].includes(currentIndex) && !isCorrect)} // Solo se desactiva en las slides de decisiones si no es correcta
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

export default Cap3;