import React, { useState } from 'react';
import { IonButton, IonContent, IonHeader, IonPage, IonAlert } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import ExploreContainer from '../components/ExploreContainer';
import './Cap8.css';

const Cap8: React.FC = () => {
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
        <div key={0} className="slide1CP4">
            <div className='parte1CP4'>
                Capítulo 8 - Retiro
            </div>
            <div className='parte2CP4'>
                <img src="..\..\assets\Cap8-1.png" height="100%"></img>
            </div>
            <div className='parte3CP4'>
                <div className='3interno'>
                </div>
            </div>
        </div>,
        <div key={1} className="slide2CP4">
            <div className='parte1CP4'>
                Capítulo 8 - Retiro
            </div>
            <div className='parte2CP4'>
                <img src="..\..\assets\Cap8-2.png" height="100%"></img>
            </div>
            <div className=' parte3CP4'>
                <div className='3interno'></div>
            </div>
        </div>,
        <div key={2} className="slide3CP4">
            <div className='parte1CP4'>
                Capítulo 8 - Retiro
            </div>
            <div className='parte2CP4'>
                <img src="..\..\assets\Cap8-3.png" height="100%"></img>
            </div>
            <div className=' parte3CP4'>
                <div className='3interno'></div>
            </div>
        </div>,
        <div key={3} className="slide4CP4">
            <div className='parte1CP4'>
                Capítulo 8 - Retiro
            </div>
            <div className='parte2CP4'>
                <img src="..\..\assets\Cap8-4.png" height="100%"></img>
            </div>
            <div className=' parte3CP4'>
                <div className="botonesContainerCP4">
                    <IonButton className='decidirCap42' onClick={() => handleDecision(false)}>Ahorro</IonButton>
                    <IonButton className='decidirCap42' onClick={() => handleDecision(true)}>Inversión</IonButton>
                    <IonButton className='decidirCap42' onClick={() => handleDecision(false)}>Préstamo</IonButton>

                </div>
            </div>
        </div>,
        <div key={4} className="slide5CP4">
            <div className='parte1CP4'>
                Capítulo 8 - Retiro
            </div>
            <div className='parte2CP4'>
                <img src="..\..\assets\Cap8-5.png" height="100%"></img>
            </div>
            <div className='parte3CP4'>
                <div className='3interno'>
                </div>
            </div>
        </div>,

        <div key={5} className="slide6CP4">
            <div className='parte1CP4'>
                Capítulo 8 - Retiro
            </div>
            <div className='parte2CP4'>
                <img src="..\..\assets\Cap8-6.png" height="100%"></img>
            </div>
            <div className='parte3CP4'>
                <div className='3interno'>
                </div>
            </div>
        </div>,
        <div key={6} className="slide7CP4">
            <div className='parte1CP4'>
                Capítulo 8 - Retiro
            </div>
            <div className='parte2CP4'>
                <img src="..\..\assets\Cap8-7.png" height="100%"></img>
            </div>
            <div className='parte3CP4'>
                <div className='3interno'></div>
            </div>
        </div>,
        <div key={7} className="slide8CP4">
            <div className='parte1CP4'>
                Capítulo 8 - Retiro
            </div>
            <div className=' parte2CP4'>
                <img src="..\..\assets\Cap8-8.png" height="100%"></img>
            </div>
            <div className=' parte3CP4'>
                <div className='3interno'></div>
            </div>
        </div>,
        <div key={8} className="slide9CP4">
            <div className='parte1CP4'>
                Capítulo 8 - Retiro
            </div>
            <div className=' parte2CP4'>
                <img src="..\..\assets\Cap8-9.png" height="100%"></img>
            </div>
            <div className=' parte3CP4'>
                <div className='3interno'></div>
            </div>
        </div>,

        <div key={9} className="slide10CP4">
            <div className='parte1CP4'>
                Capítulo 8 - Retiro
            </div>
            <div className=' parte2CP4'>
                <img src="..\..\assets\Cap8-10.png" height="100%"></img>
            </div>
            <div className=' parte3CP4'>
                <div className='3interno'></div>

            </div>
        </div>,


        <div key={10} className="slide11CP4">
            <div className='parte1CP4'>
                Capítulo 8 - Retiro
            </div>
            <div className=' parte2CP4'>
                <img src="..\..\assets\Cap8-11.png" height="100%"></img>
            </div>
            <div className=' parte3CP4'>
                <div className='3interno'></div>
            </div>
        </div>,
        <div key={11} className="slide12CP4">
            <div className='parte1CP4'>
                Capítulo 8 - Retiro
            </div>
            <div className=' parte2CP4'>
                <img src="..\..\assets\Cap8-12.png" height="100%"></img>
            </div>
            <div className=' parte3CP4'>
                <div className="botonesContainerCP48">
                    <div >
                        <IonButton className='decidirCap48' onClick={() => handleDecision(false)}>3,000 </IonButton>

                        <IonButton className='decidirCap48' onClick={() => handleDecision(false)}>1,330 </IonButton>

                    </div>

                    <div className='row1'><IonButton className='decidirCap48' onClick={() => handleDecision(true)}>1,331 </IonButton>
                        <IonButton className='decidirCap48' onClick={() => handleDecision(false)}>2,500</IonButton></div>
                </div>
            </div>
        </div>,
        <div key={12} className="slide13CP4">
            <div className='parte1CP4'>
                Capítulo 8 - Retiro
            </div>
            <div className=' parte2CP4'>
                <img src="..\..\assets\Cap8-13.png" height="100%"></img>
            </div>
            <div className=' parte3CP4'>
                <div className='3interno'></div>
            </div>
        </div>,
        <div key={13} className="slide14CP4">
            <div className='parte1CP4'>
                Capítulo 8 - Retiro
            </div>
            <div className=' parte2CP4'>
                <img src="..\..\assets\Cap8-14.png" height="100%"></img>
            </div>
            <div className=' parte3CP4'>
                <div className='3interno'></div>
            </div>
        </div>,
        <div key={14} >
            <div className='parte1CP4'>
                Capítulo 8 - Retiro
            </div>
            <div className=' parte2CP4'>
                <img src="..\..\assets\Cap8-15.png" height="100%"></img>
            </div>
            <div className=' parte3CP4'>
                <div className='3interno'>
                    <IonButton className='decidirCap44' onClick={() => setCurrentIndex(0)}>Repetir la historia</IonButton>
                    <IonButton className='decidirCap44' href="/Juego8">Continuar con el juego</IonButton>
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
        if ([3, 11].includes(currentIndex) && !isCorrect) return; // Impide avanzar solo en las slides de decisiones si la respuesta es incorrecta

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
        if (currentIndex === 15) {
            setCurrentIndex(currentIndex - 2);
        }
    };

    return (
        <IonPage>
            <IonHeader>
                <link href="https://fonts.googleapis.com/css2?family=Itim&display=swap" rel="stylesheet"></link>
            </IonHeader>
            <IonContent>
                <div className="carruselContainerCP4">
                    <div className="carruselSlidesCP4">
                        {slides[currentIndex]}
                    </div>

                    <div className="carruselButtonsCP4">
                        <IonButton onClick={prevSlide} className='1button'> Anterior </IonButton>
                        <IonButton onClick={nextSlide} className='1button' disabled={([3, 11].includes(currentIndex) && !isCorrect)} // Solo se desactiva en las slides de decisiones si no es correcta
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

export default Cap8;