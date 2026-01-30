import React, { useState } from 'react';
import { IonButton, IonContent, IonHeader, IonPage, IonAlert } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './Cap5.css';

const Cap5: React.FC = () => {
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
        <div key={0} className="slide1CP5">
            <div className='parte1CP5'>
                Capítulo 5 - Tarjetas de débito
            </div>
            <div className='parte2CP5'>
                <img src="..\..\assets\Cap5\Cap5-1.png" height="100%"></img>
            </div>
            <div className='parte3CP5'>
                <div className='3interno'>Una persona está pagando la comida del restaurante con una tarjeta.</div>
            </div>
        </div>,
        <div key={1} className="slide2CP5">
            <div className='parte1CP5'>
                Capítulo 5 - Tarjetas de débito
            </div>
            <div className='parte2CP5'>
                <img src="..\..\assets\Cap5\Cap5-2.png" height="100%"></img>
            </div>
            <div className=' parte3CP5'>
                <div className='3interno'></div>
            </div>
        </div>,
        <div key={2} className="slide3CP5">
            <div className='parte1CP5'>
                Capítulo 5 - Tarjetas de débito
            </div>
            <div className='parte2CP5'>
                <img src="..\..\assets\Cap5\Cap5-3.png" height="100%"></img>
            </div>
            <div className=' parte3CP5'>
                <div className='3interno'></div>
            </div>
        </div>,
        <div key={3} className="slide4CP5">
            <div className='parte1CP5'>
                Capítulo 5 - Tarjetas de débito
            </div>
            <div className='parte2CP5'>
                <img src="..\..\assets\Cap5\Cap5-4.png" height="100%"></img>
            </div>
            <div className='parte3CP5'>
                <div className='3interno'></div>
            </div>
        </div>,
        <div key={4} className="slide5CP5">
            <div className='parte1CP5'>
                Capítulo 5 - Tarjetas de débito
            </div>
            <div className='parte2CP5'>
                <img src="..\..\assets\Cap5\Cap5-5.png" height="100%"></img>
            </div>
            <div className='parte3CP5'>
                <div className='3interno'>
                </div>
            </div>
        </div>,
        <div key={5} className="slide6CP5">
            <div className='parte1CP5'>
                Capítulo 5 - Tarjetas de débito
            </div>
            <div className='parte2CP5'>
                <img src="..\..\assets\Cap5\Cap5-6.png" height="100%"></img>
            </div>
            <div className='parte3CP5'>
                <div className='3interno'></div>
            </div>
        </div>,
        <div key={6} className="slide7CP5">
            <div className='parte1CP5'>
                Capítulo 5 - Tarjetas de débito
            </div>
            <div className='parte2CP5'>
                <img src="..\..\assets\Cap5\Cap5-7.png" height="100%"></img>
            </div>
            <div className='parte3CP5'>
                <div className='3interno'></div>
            </div>
        </div>,
        <div key={7} className="slide8CP5">
            <div className='parte1CP5'>
                Capítulo 5 - Tarjetas de débito
            </div>
            <div className=' parte2CP5'>
                <img src="..\..\assets\Cap5\Cap5-8.png" height="100%"></img>
            </div>
            <div className=' parte3CP5'>
                <div className="botonesContainerCP5">
                    <IonButton className='decidirCap51' onClick={() => handleDecision(false)}>Con tarjeta de crédito</IonButton>
                    <IonButton className='decidirCap51' onClick={() => handleDecision(true)}>Con tarjeta de débito</IonButton>
                    <IonButton className='decidirCap51' onClick={() => handleDecision(false)}>Con efectivo</IonButton>
                </div>
            </div>
        </div>,
        <div key={8} className="slide9CP5">
            <div className='parte1CP5'>
                Capítulo 5 - Tarjetas de débito
            </div>
            <div className=' parte2CP5'>
                <img src="..\..\assets\Cap5\Cap5-9.png" height="100%"></img>
            </div>
            <div className=' parte3CP5'>
                <div className='3interno'></div>
            </div>
        </div>,
        <div key={9} className="slide10CP5">
            <div className='parte1CP5'>
                Capítulo 5 - Tarjetas de débito
            </div>
            <div className=' parte2CP5'>
                <img src="..\..\assets\Cap5\Cap5-10.png" height="100%"></img>
            </div>
            <div className=' parte3CP5'>
                <div className="botonesContainerCP5">
                    <IonButton className='decidirCap51' onClick={() => handleDecision(true)}>Un pastel de $300</IonButton>
                    <IonButton className='decidirCap51' onClick={() => handleDecision(false)}>Un auto</IonButton>
                    <IonButton className='decidirCap51' onClick={() => handleDecision(false)}>Un nuevo celular a meses sin intereses</IonButton>
                </div>
            </div>
        </div>,
        <div key={10} className="slide11CP5">
            <div className='parte1CP5'>
                Capítulo 5 - Tarjetas de débito
            </div>
            <div className=' parte2CP5'>
                <img src="..\..\assets\Cap5\Cap5-11.png" height="100%"></img>
            </div>
            <div className=' parte3CP5'>
                <div className='3interno'></div>
            </div>
        </div>,
        <div key={11} className="slide21CP5">
            <div className='parte1CP5'>
                Capítulo 5 - Tarjetas de débito
            </div>
            <div className=' parte2CP5'>
                <img src="..\..\assets\Cap5\Cap5-12.png" height="100%"></img>
            </div>
            <div className=' parte3CP5'>
                <div className='3interno'>
                    <IonButton className='decidirCap52' onClick={() => setCurrentIndex(0)}>¡Explicame otra vez!</IonButton>
                    <IonButton className='decidirCap52' href="/Juego5">¡Empecemos a jugar!</IonButton>
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
        if (([7].includes(currentIndex) || [9].includes(currentIndex)) && !isCorrect) return; // Impide avanzar solo en las slides de decisiones si la respuesta es incorrecta

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
                <div className="carruselContainerCP5">
                    <div className="carruselSlidesCP5">
                        {slides[currentIndex]}
                    </div>

                    <div className="carruselButtonsCP5">
                        <IonButton onClick={prevSlide} className='1button'> Anterior </IonButton>
                        <IonButton onClick={nextSlide} className='1button' disabled={(([7].includes(currentIndex) || [9].includes(currentIndex)) && !isCorrect)} // Solo se desactiva en las slides de decisiones si no es correcta
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

export default Cap5;