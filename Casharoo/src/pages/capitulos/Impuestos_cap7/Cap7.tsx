import React, { useState } from 'react';
import { IonButton, IonContent, IonHeader, IonPage, IonAlert } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import ExploreContainer from '../components/ExploreContainer';
import './Cap7.css';

const Cap7: React.FC = () => {
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
                Capítulo 7 - Impuestos
            </div>
            <div className='parte2CP4'>
                <img src="..\..\assets\Cap7-1.png" height="100%"></img>
            </div>
            <div className='parte3CP4'>
                <div className='3interno'>
                </div>
            </div>
        </div>,
        <div key={1} className="slide2CP4">
            <div className='parte1CP4'>
                Capítulo 7 - Impuestos
            </div>
            <div className='parte2CP4'>
                <img src="..\..\assets\Cap7-2.png" height="100%"></img>
            </div>
            <div className=' parte3CP4'>
                <div className='3interno'></div>
            </div>
        </div>,
        <div key={2} className="slide3CP4">
            <div className='parte1CP4'>
                Capítulo 7 - Impuestos
            </div>
            <div className='parte2CP4'>
                <img src="..\..\assets\Cap7-3.png" height="100%"></img>
            </div>
            <div className=' parte3CP4'>
                <div className='3interno'></div>
            </div>
        </div>,
        <div key={3} className="slide4CP4">
            <div className='parte1CP4'>
                Capítulo 7 - Impuestos
            </div>
            <div className='parte2CP4'>
                <img src="..\..\assets\Cap7-4.png" height="100%"></img>
            </div>
            <div className='parte3CP4'>
                <div className='3interno'></div>
            </div>
        </div>,
        <div key={4} className="slide5CP4">
            <div className='parte1CP4'>
                Capítulo 7 - Impuestos
            </div>
            <div className='parte2CP4'>
                <img src="..\..\assets\Cap7-5.png" height="100%"></img>
            </div>
            <div className='parte3CP4'>
                <div className='3interno'>
                </div>
            </div>
        </div>,

        <div key={5} className="slide6CP4">
            <div className='parte1CP4'>
                Capítulo 7 - Impuestos
            </div>
            <div className='parte2CP4'>
                <img src="..\..\assets\Cap7-6.png" height="100%"></img>
            </div>
            <div className='parte3CP4'>
                <div className='3interno'>
                </div>
            </div>
        </div>,
        <div key={6} className="slide7CP4">
            <div className='parte1CP4'>
                Capítulo 7 - Impuestos
            </div>
            <div className='parte2CP4'>
                <img src="..\..\assets\Cap7-7.png" height="100%"></img>
            </div>
            <div className='parte3CP4'>
                <div className='3interno'></div>
            </div>
        </div>,
        <div key={7} className="slide8CP4">
            <div className='parte1CP4'>
                Capítulo 7 - Impuestos
            </div>
            <div className=' parte2CP4'>
                <img src="..\..\assets\Cap7-8.png" height="100%"></img>
            </div>
            <div className=' parte3CP4'>
                <div className='3interno'></div>
            </div>
        </div>,
        <div key={8} className="slide9CP4">
            <div className='parte1CP4'>
                Capítulo 7 - Impuestos
            </div>
            <div className=' parte2CP4'>
                <img src="..\..\assets\Cap7-9.png" height="100%"></img>
            </div>
            <div className=' parte3CP4'>
                <div className="botonesContainerCP4">
                    <IonButton className='decidirCap42' onClick={() => handleDecision(true)}>Para tener los servicios que necesitamos</IonButton>
                    <IonButton className='decidirCap42' onClick={() => handleDecision(false)}>Para comprarle una casa a mi amigo</IonButton>
                    <IonButton className='decidirCap42' onClick={() => handleDecision(false)}>Para jugar con mis amigos</IonButton>
                </div>
            </div>
        </div>,

        <div key={9} className="slide10CP4">
            <div className='parte1CP4'>
                Capítulo 7 - Impuestos
            </div>
            <div className=' parte2CP4'>
                <img src="..\..\assets\Cap7-10.png" height="100%"></img>
            </div>
            <div className=' parte3CP4'>
                <div className='3interno'></div>

            </div>
        </div>,


        <div key={10} className="slide11CP4">
            <div className='parte1CP4'>
                Capítulo 7 - Impuestos
            </div>
            <div className=' parte2CP4'>
                <img src="..\..\assets\Cap7-11.png" height="100%"></img>
            </div>
            <div className=' parte3CP4'>
                <div className='3interno'></div>
            </div>
        </div>,
        <div key={11} className="slide12CP4">
            <div className='parte1CP4'>
                Capítulo 7 - Impuestos
            </div>
            <div className=' parte2CP4'>
                <img src="..\..\assets\Cap7-12.png" height="100%"></img>
            </div>
            <div className=' parte3CP4'>
                <div className='3interno'></div>
            </div>
        </div>,
        <div key={12} className="slide13CP4">
            <div className='parte1CP4'>
                Capítulo 7 - Impuestos
            </div>
            <div className=' parte2CP4'>
                <img src="..\..\assets\Cap7-13.png" height="100%"></img>
            </div>
            <div className=' parte3CP4'>
                <div className='3interno'></div>
            </div>
        </div>,
        <div key={13} className="slide14CP4">
            <div className='parte1CP4'>
                Capítulo 7 - Impuestos
            </div>
            <div className=' parte2CP4'>
                <img src="..\..\assets\Cap7-14.png" height="100%"></img>
            </div>
            <div className=' parte3CP4'>
                <div className='3interno'></div>
            </div>
        </div>,
        <div key={14} className="slide15CP4">
            <div className='parte1CP4'>
                Capítulo 7 - Impuestos
            </div>
            <div className=' parte2CP4'>
                <img src="..\..\assets\Cap7-15.png" height="100%"></img>
            </div>
            <div className=' parte3CP4'>
                <div className="botonesContainerCP4">
                    <IonButton className='decidirCap42' onClick={() => handleDecision(false)}>El SAT es quien pone las reglas de cuánto paga cada quien</IonButton>
                    <IonButton className='decidirCap42' onClick={() => handleDecision(true)}>El SAT facilita y vigila el pago de impuestos</IonButton>
                    <IonButton className='decidirCap42' onClick={() => handleDecision(false)}> El SAT le regala dinero a la gente que paga impuestos</IonButton>
                </div>
            </div>
        </div>,
        <div key={15} >
            <div className='parte1CP4'>
                Capítulo 7 - Impuestos
            </div>
            <div className=' parte2CP4'>
                <img src="..\..\assets\Cap7-16.png" height="100%"></img>
            </div>
            <div className=' parte3CP4'>
                <div className='3interno'>
                    <IonButton className='decidirCap44' onClick={() => setCurrentIndex(0)}>Repetir la historia</IonButton>
                    <IonButton className='decidirCap44' href="/Juego7">Continuar con el juego</IonButton>
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
        if ([8, 14].includes(currentIndex) && !isCorrect) return; // Impide avanzar solo en las slides de decisiones si la respuesta es incorrecta

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
                        <IonButton onClick={nextSlide} className='1button' disabled={([8, 14].includes(currentIndex) && !isCorrect)} // Solo se desactiva en las slides de decisiones si no es correcta
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

export default Cap7;