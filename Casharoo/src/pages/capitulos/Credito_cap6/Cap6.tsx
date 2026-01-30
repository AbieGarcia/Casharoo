import React, { useState } from 'react';
import { IonButton, IonContent, IonHeader, IonPage, IonAlert } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './Cap6.css';

const Cap6: React.FC = () => {
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
        <div key={0} className="slide1CP6">
            <div className='parte1CP6'>
                Capítulo 6 - Tarjetas de crédito
            </div>
            <div className='parte2CP6'>
                <img src="..\..\assets\Cap6.1.png" height="100%"></img>
            </div>
            <div className='parte3CP6'>
                <div className='3interno'>
                </div>
            </div>
        </div>,
        <div key={1} className="slide2CP6">
            <div className='parte1CP6'>
                Capítulo 6 - Tarjetas de crédito
            </div>
            <div className='parte2CP6'>
                <img src="..\..\assets\Cap6.2.png" height="100%"></img>
            </div>
            <div className=' parte3CP6'>
                <div className='3interno'></div>
            </div>
        </div>,
        <div key={2} className="slide3CP6">
            <div className='parte1CP6'>
                Capítulo 6 - Tarjetas de crédito
            </div>
            <div className='parte2CP6'>
                <img src="..\..\assets\Cap6.3.png" height="100%"></img>
            </div>
            <div className=' parte3CP6'>
                <div className='3interno'></div>
            </div>
        </div>,
        <div key={3} className="slide4CP6">
            <div className='parte1CP6'>
                Capítulo 6 - Tarjetas de crédito
            </div>
            <div className='parte2CP6'>
                <img src="..\..\assets\Cap6.4.png" height="100%"></img>
            </div>
            <div className='parte3CP6'>
                <div className='3interno'>Ambos se suben a una moneda que los lleva a un banco</div>
            </div>
        </div>,
        <div key={4} className="slide5CP6">
            <div className='parte1CP6'>
                Capítulo 6 - Tarjetas de crédito
            </div>
            <div className='parte2CP6'>
                <img src="..\..\assets\Cap6.5.png" height="100%"></img>
            </div>
            <div className='parte3CP6'>
                <div className='3interno'>
                </div>
            </div>
        </div>,
        <div key={5} className="slide6CP6">
            <div className='parte1CP6'>
                Capítulo 6 - Tarjetas de crédito
            </div>
            <div className='parte2CP6'>
                <img src="..\..\assets\Cap6.6.png" height="100%"></img>
            </div>
            <div className='parte3CP6'>
                <div className='3interno'></div>
            </div>
        </div>,
        <div key={6} className="slide7CP6">
            <div className='parte1CP6'>
                Capítulo 6 - Tarjetas de crédito
            </div>
            <div className='parte2CP6'>
                <img src="..\..\assets\Cap6.7.png" height="100%"></img>
            </div>
            <div className='parte3CP6'>
                <div className='3interno'></div>
            </div>
        </div>,
        <div key={7} className="slide8CP6">
            <div className='parte1CP6'>
                Capítulo 6 - Tarjetas de crédito
            </div>
            <div className=' parte2CP6'>
                <img src="..\..\assets\Cap6.8.png" height="100%"></img>
            </div>
            <div className=' parte3CP6'>
                <div className='3interno'></div>
            </div>
        </div>,
        <div key={8} className="slide9CP6">
            <div className='parte1CP6'>
                Capítulo 6 - Tarjetas de crédito
            </div>
            <div className=' parte2CP6'>
                <img src="..\..\assets\Cap6.9.png" height="100%"></img>
            </div>
            <div className=' parte3CP6'>
                <div className='3interno'></div>
            </div>
        </div>,
        <div key={9} className="slide10CP6">
            <div className='parte1CP6'>
                Capítulo 6 - Tarjetas de crédito
            </div>
            <div className=' parte2CP6'>
                <img src="..\..\assets\Cap6.10.png" height="100%"></img>
            </div>
            <div className=' parte3CP6'>
                <div className='3interno'></div>
            </div>
        </div>,
        <div key={10} className="slide11CP6">
            <div className='parte1CP6'>
                Capítulo 6 - Tarjetas de crédito
            </div>
            <div className=' parte2CP6'>
                <img src="..\..\assets\Cap6.11.png" height="100%"></img>
            </div>
            <div className=' parte3CP6'>
                <div className='3interno'></div>
            </div>
        </div>,
        <div key={11} className="slide12CP6">
            <div className='parte1CP6'>
                Capítulo 6 - Tarjetas de crédito
            </div>
            <div className=' parte2CP6'>
                <img src="..\..\assets\Cap6.12.png" height="100%"></img>
            </div>
            <div className=' parte3CP6'>
                <div className='3interno'></div>
            </div>
        </div>,
        <div key={12} className="slide13CP6">
            <div className='parte1CP6'>
                Capítulo 6 - Tarjetas de crédito
            </div>
            <div className=' parte2CP6'>
                <img src="..\..\assets\Cap6.13.png" height="100%"></img>
            </div>
            <div className=' parte3CP6'>
                <div className='3interno'></div>
            </div>
        </div>,
        <div key={13} className="slide14CP6">
            <div className='parte1CP6'>
                Capítulo 6 - Tarjetas de crédito
            </div>
            <div className=' parte2CP6'>
                <img src="..\..\assets\Cap6.14.png" height="100%"></img>
            </div>
            <div className=' parte3CP6'>
                <div className="botonesContainerCP6">
                    <IonButton className='decidirCap61' onClick={() => handleDecision(false)}>Lo que no pagaste es gratis</IonButton>
                    <IonButton className='decidirCap61' onClick={() => handleDecision(false)}>Te regalan dinero y otra tarjeta de crédito</IonButton>
                    <IonButton className='decidirCap61' onClick={() => handleDecision(true)}>El banco te va a cobrar mucho más dinero</IonButton>
                </div>
            </div>
        </div>,
        <div key={14} className="slide15CP6">
            <div className='parte1CP6'>
                Capítulo 6 - Tarjetas de crédito
            </div>
            <div className=' parte2CP6'>
                <img src="..\..\assets\Cap6.15.png" height="100%"></img>
            </div>
            <div className=' parte3CP6'>
                <div className='3interno'></div>
            </div>
        </div>,
        <div key={15} className="slide16CP6">
            <div className='parte1CP6'>
                Capítulo 6 - Tarjetas de crédito
            </div>
            <div className=' parte2CP6'>
                <img src="..\..\assets\Cap6.16.png" height="100%"></img>
            </div>
            <div className=' parte3CP6'>
                <div className='3interno'></div>
            </div>
        </div>,
        <div key={16} className="slide17CP6">
            <div className='parte1CP6'>
                Capítulo 6 - Tarjetas de crédito
            </div>
            <div className=' parte2CP6'>
                <img src="..\..\assets\Cap6.17.png" height="100%"></img>
            </div>
            <div className=' parte3CP6'>
                <div className='3interno'></div>
            </div>
        </div>,
        <div key={17} className="slide18CP6">
            <div className='parte1CP6'>
                Capítulo 6 - Tarjetas de crédito
            </div>
            <div className=' parte2CP6'>
                <img src="..\..\assets\Cap6.18.png" height="100%"></img>
            </div>
            <div className=' parte3CP6'>
                <div className='3interno'></div>
            </div>
        </div>,
        <div key={18} className="slide19CP6">
            <div className='parte1CP6'>
                Capítulo 6 - Tarjetas de crédito
            </div>
            <div className=' parte2CP6'>
                <img src="..\..\assets\Cap6.19.png" height="100%"></img>
            </div>
            <div className=' parte3CP6'>
                <div className='3interno'></div>
            </div>
        </div>,
        <div key={19} className="slide20CP6">
            <div className='parte1CP6'>
                Capítulo 6 - Tarjetas de crédito
            </div>
            <div className=' parte2CP6'>
                <img src="..\..\assets\Cap6.20.png" height="100%"></img>
            </div>
            <div className=' parte3CP6'>
                <div className='3interno'></div>
            </div>
        </div>,
        <div key={20} className="slide21CP6">
            <div className='parte1CP6'>
                Capítulo 6 - Tarjetas de crédito
            </div>
            <div className=' parte2CP6'>
                <img src="..\..\assets\Cap6.21.png" height="100%"></img>
            </div>
            <div className=' parte3CP6'>
                <div className='3interno'>
                    <IonButton className='decidirCap62' onClick={() => setCurrentIndex(0)}>¡Explicame otra vez!</IonButton>
                    <IonButton className='decidirCap62' href="/Juego6">¡Empecemos a jugar!</IonButton>
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
        if ([13].includes(currentIndex) && !isCorrect) return; // Impide avanzar solo en las slides de decisiones si la respuesta es incorrecta

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
                <div className="carruselContainerCP6">
                    <div className="carruselSlidesCP6">
                        {slides[currentIndex]}
                    </div>

                    <div className="carruselButtonsCP6">
                        <IonButton onClick={prevSlide} className='1button'> Anterior </IonButton>
                        <IonButton onClick={nextSlide} className='1button' disabled={([13].includes(currentIndex) && !isCorrect)} // Solo se desactiva en las slides de decisiones si no es correcta
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

export default Cap6;