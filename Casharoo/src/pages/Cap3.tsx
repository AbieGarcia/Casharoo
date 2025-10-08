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
                Capítulo 2 - Banco
            </div>
            <div className='parte2CP3'>
                <img src="..\..\assets\Cap3.11.PNG" height="100%"></img>
            </div>
            <div className='parte3CP3'>
                <div className='3interno'>
                    La mamá y su hijo están haciendo mandados un fin de semana. El primer mandado es ir a un banco a retirar dinero para poder hacer compras.
                </div>
            </div>
        </div>,
        <div key={1} className="slide2CP3">
            <div className='parte1CP3'>
                Capítulo 2 - Banco
            </div>
            <div className='parte2CP3'>
                <img src="..\..\assets\Cap3.12.PNG" height="100%"></img>
            </div>
            <div className=' parte3CP3'>
                <div className='3interno'></div>
            </div>
        </div>,
        <div key={2} className="slide3CP3">
            <div className='parte1CP3'>
                Capítulo 2 - Banco
            </div>
            <div className='parte2CP3'>
                <img src="..\..\assets\Cap3.13.PNG" height="100%"></img>
            </div>
            <div className=' parte3CP3'>
                <div className='3interno'></div>
            </div>
        </div>,
        <div key={3} className="slide4CP3">
            <div className='parte1CP3'>
                Capítulo 2 - Banco
            </div>
            <div className='parte2CP3'>
                <img src="..\..\assets\Cap3.14.PNG" height="100%"></img>
            </div>
            <div className='parte3CP3'>
                <div className='3interno'></div>
            </div>
        </div>,
        <div key={4} className="slide5CP3">
            <div className='parte1CP3'>
                Capítulo 2 - Banco
            </div>
            <div className='parte2CP3'>
                <img src="..\..\assets\Cap3.15.PNG" height="100%"></img>
            </div>
            <div className='parte3CP3'>
                <div className='3interno'>Después de la explicación de piggy, todos caminan para seguir con los mandados.
                </div>
            </div>
        </div>,
        <div key={5} className="slide6CP3">
            <div className='parte1CP3'>
                Capítulo 2 - Banco
            </div>
            <div className='parte2CP3'>
                <img src="..\..\assets\Cap3.16.PNG" height="100%"></img>
            </div>
            <div className='parte3CP3'>
                <div className="botones-container">
                    <IonButton className='decidirCap31' onClick={() => handleDecision(true)}>Guardar tu dinero y prestarle a los que lo necesitan</IonButton>
                    <IonButton className='decidirCap31' onClick={() => handleDecision(false)}>Quitarte tu dinero</IonButton>
                    <IonButton className='decidirCap31' onClick={() => handleDecision(false)}>Darte consejos de cómo gastar mejor tu dinero</IonButton>
                </div>
            </div>
        </div>,
        <div key={6} className="slide7CP3">
            <div className='parte1CP3'>
                Capítulo 2 - Banco
            </div>
            <div className='parte2CP3'>
                <img src="..\..\assets\Cap3.17.PNG" height="100%"></img>
            </div>
            <div className='parte3CP3'>
                <div className='3interno'></div>
            </div>
        </div>,
        <div key={7} className="slide8CP3">
            <div className='parte1CP3'>
                Capítulo 2 - Banco
            </div>
            <div className=' parte2CP3'>
                <img src="..\..\assets\Cap3.18.PNG" height="100%"></img>
            </div>
            <div className=' parte3CP3'>
                <div className='3interno'></div>
            </div>
        </div>,
        <div key={8} className="slide9CP3">
            <div className='parte1CP3'>
                Capítulo 2 - Banco
            </div>
            <div className=' parte2CP3'>
                <img src="..\..\assets\Cap3.19.PNG" height="100%"></img>
            </div>
            <div className=' parte3CP3'>
                <div className='3interno'></div>
            </div>
        </div>,
        <div key={9} className="slide10CP3">
            <div className='parte1CP3'>
                Capítulo 2 - Banco
            </div>
            <div className=' parte2CP3'>
                <img src="..\..\assets\Cap3.110.PNG" height="100%"></img>
            </div>
            <div className=' parte3CP3'>
                <div className='3interno'></div>
            </div>
        </div>,
        <div key={10} className="slide11CP3">
            <div className='parte1CP3'>
                Capítulo 2 - Banco
            </div>
            <div className=' parte2CP3'>
                <img src="..\..\assets\Cap3.111.PNG" height="100%"></img>
            </div>
            <div className=' parte3CP3'>
                <div className='3interno'>

                </div>
            </div>
        </div>,
        <div key={11} className="slide12CP3">
            <div className='parte1CP3'>
                Capítulo 2 - Banco
            </div>
            <div className=' parte2CP3'>
                <img src="..\..\assets\Cap3.112.PNG" height="100%"></img>
            </div>
            <div className=' parte3CP3'>
                <div className='3interno'></div>
            </div>
        </div>,
        <div key={12} className="slide13CP3">
            <div className='parte1CP3'>
                Capítulo 2 - Banco
            </div>
            <div className=' parte2CP3'>
                <img src="..\..\assets\Cap3.113.PNG" height="100%"></img>
            </div>
            <div className=' parte3CP3'>
                <div className='3interno'>
                    La hermana se suma al juego y ahora también tiene una cuenta en el banco.
                </div>
            </div>
        </div>,
        <div key={13} className="slide14CP3">
            <div className='parte1CP3'>
                Capítulo 2 - Banco
            </div>
            <div className=' parte2CP3'>
                <img src="..\..\assets\Cap3.114.PNG" height="100%"></img>
            </div>
            <div className=' parte3CP3'>
                <div className='3interno'>
                    La cuenta de ahorros de ella es muy baja y no puede comprar los materiales que necesita urgentemente para un proyecto de la escuela
                </div>
            </div>
        </div>,
        <div key={14} className="slide15CP3">
            <div className='parte1CP3'>
                Capítulo 2 - Banco
            </div>
            <div className=' parte2CP3'>
                <img src="..\..\assets\Cap3.115.PNG" height="100%"></img>
            </div>
            <div className=' parte3CP3'>
                <div className='3interno'>
                    <div className="botonesContainerCP3">
                        <IonButton className='decidirCap33' onClick={() => handleDecision(false)}>Pedir un préstamo y después no pagarle al banco</IonButton>
                        <IonButton className='decidirCap33' onClick={() => handleDecision(false)}>No comprar sus materiales</IonButton>
                        <IonButton className='decidirCap33' onClick={() => handleDecision(true)}>Pedir un préstamo al banco y devolver todo el dinero más los intereses</IonButton>
                    </div>
                </div>
            </div>
        </div>,
        <div key={15} className="slide16CP3">
            <div className='parte1CP3'>
                Capítulo 2 - Banco
            </div>
            <div className=' parte2CP3'>
                <img src="..\..\assets\Cap3.116.PNG" height="100%"></img>
            </div>
            <div className=' parte3CP3'>
                <div className='3interno'>
                </div>
            </div>
        </div>,

        <div key={16} className="slide17CP3">
            <div className='parte1CP3'>
                Capítulo 2 - Banco
            </div>
            <div className=' parte2CP3'>
                <img src="..\..\assets\Cap3.117.PNG" height="100%"></img>
            </div>
            <div className=' parte3CP3'>
                <div className='3interno'>
                    <IonButton className='decidirCap34' onClick={() => setCurrentIndex(0)}>Repetir la historia</IonButton>
                    <IonButton className='decidirCap34' href="/Juego2">Continuar con el juego</IonButton>
                </div>
            </div>
        </div>,

        <div key={17} className="slide18CP3">
            <div className='parte1CP3'>
                Capítulo 2 - Banco
            </div>
            <div className=' parte2CP3'>
                <img src="..\..\assets\Cap3.118.PNG" height="100%"></img>
            </div>
            <div className=' parte3CP3'>
                <div className='3interno'>
                    <IonButton className='decidirCap34' onClick={() => setCurrentIndex(0)}>Repetir la historia</IonButton>
                    <IonButton className='decidirCap34' href="/Juego2">Continuar con el juego</IonButton>
                </div>
            </div>
        </div>,

        <div key={18} className="slide19CP3">
            <div className='parte1CP3'>
                Capítulo 2 - Banco
            </div>
            <div className=' parte2CP3'>
                <img src="..\..\assets\Cap3.119.PNG" height="100%"></img>
            </div>
            <div className=' parte3CP3'>
                <div className='3interno'>
                    <IonButton className='decidirCap34' onClick={() => setCurrentIndex(0)}>Repetir la historia</IonButton>
                    <IonButton className='decidirCap34' href="/Juego2">Continuar con el juego</IonButton>
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
                <div className="carruselContainerCP3">
                    <div className="carruselSlidesCP3">
                        {slides[currentIndex]}
                    </div>

                    <div className="carruselButtonsCP3">
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

export default Cap3;