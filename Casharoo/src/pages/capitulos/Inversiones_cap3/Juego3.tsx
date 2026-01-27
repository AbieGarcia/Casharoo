import React, { useState, useEffect } from 'react';
import { IonApp, IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonAlert } from '@ionic/react';
import { completarCap, actualizarDinero } from "../../../services/userRegister.js";
import { obtenerUsuario } from '../../../services/userRegister';
import './Juego3.css';

interface Question {
    question: string;
    options: string[];
    correctIndex: number;
}

const questions: Question[] = [
    {
        question: 'Las inversiones ayudan a…',
        options: [
            'guardar dinero de forma segura',
            'multiplicar tu dinero y tener más después',
            'pedir prestado dinero que necesito',
        ],
        correctIndex: 1
    },
    {
        question: 'Una ganancia es el dinero extra que obtuve en una inversión',
        options: ['Verdadero', 'Falso'],
        correctIndex: 0
    },
    {
        question: 'Una rentabilidad negativa significa que…',
        options: ['no estoy ganando dinero', 'estoy perdiendo dinero', 'estoy ganando más dinero'],
        correctIndex: 1
    },
    {
        question: 'Para disminuir el riesgo en una inversión puedo usar la…',
        options: ['ahorrasión', 'diversión', 'diversificación'],
        correctIndex: 2
    },
    {
        question: '¿Cuándo existen los riesgos en una inversión?',
        options: ['Siempre', 'Cuando gasto mi dinero', 'Cuando pido un préstamo'],
        correctIndex: 0
    }
];

const Juego3: React.FC = () => {
    const [usuario, setUsuario] = useState<any>(null);

    useEffect(() => {
        const cargarUsuario = async () => {
            const usuarioId = localStorage.getItem("usuarioId");
            const datosUsuario = await obtenerUsuario(usuarioId);
            setUsuario(datosUsuario);
        };

        cargarUsuario();
    }, []);

    const usuarioId = localStorage.getItem("usuarioId");


    const handleGameComplete = async () => {
        setShowSuccess(false);

        if (usuarioId && usuario) {
            const nuevoDinero = (usuario.dinero || 0) + 10;
            await actualizarDinero(usuarioId, nuevoDinero);

            setUsuario({ ...usuario, dinero: nuevoDinero });
        }

        await completarCap(usuarioId, 3);
    };


    const [index, setIndex] = useState(0);
    const [selected, setSelected] = useState<number | null>(null);
    const [incorrect, setIncorrect] = useState(false);
    const [completed, setCompleted] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const isCorrectSelection = selected !== null && selected === questions[index].correctIndex && !incorrect;
    const progressPercent = ((index + (isCorrectSelection ? 1 : 0)) / questions.length) * 100;

    const handleSelect = (optionIndex: number) => {
        if (completed) return;
        setSelected(optionIndex);

        const q = questions[index];
        if (optionIndex === q.correctIndex) {
            // Respuesta correcta: avanzar o terminar
            const next = index + 1;
            if (next >= questions.length) {
                setCompleted(true);
                setShowSuccess(true);
            } else {
                // breve retardo para que el usuario vea que fue correcto
                setTimeout(() => {
                    setIndex(next);
                    setSelected(null);
                }, 400);
            }
        } else {
            // Incorrecto: mostrar feedback breve y permitir reintento
            setIncorrect(true);
            setTimeout(() => {
                setIncorrect(false);
                setSelected(null);
            }, 800);
        }
    };

    const resetGame = () => {
        setIndex(0);
        setSelected(null);
        setIncorrect(false);
        setCompleted(false);
        setShowSuccess(false);
    };

    return (
        <IonApp>
            <IonHeader className='nombre'>
                <IonTitle className='nom3'>Juego Trivia</IonTitle>
            </IonHeader>

            <IonContent className="ion-padding">
                <div className='recompensa-container'>
                    <div className='recompensa2'>
                        <span>Recompensa: $10</span>
                        <span style={{ fontSize: '24px' }}></span>
                    </div>
                </div>
                {!completed ? (
                    <div className="trivia-container">
                        <div className="question-card">
                            <div className="question-header">
                                <div className="q-label">Pregunta {index + 1} / {questions.length}</div>
                                <div className="progress"><div className="progress-fill" style={{ width: `${progressPercent}%` }} /></div>
                            </div>
                            <div className="question-text">{questions[index].question}</div>

                            <div className="options-list">
                                {questions[index].options.map((opt, i) => (
                                    <IonButton
                                        key={i}
                                        className={`trivia-option ${selected === i ? 'selected' : ''} ${incorrect && selected === i ? 'incorrect' : ''}`}
                                        onClick={() => handleSelect(i)}
                                        fill="solid"
                                        expand="block"
                                    >
                                        {opt}
                                    </IonButton>
                                ))}
                            </div>
                            {incorrect && <div className="feedback incorrect-text">¡Incorrecto! Intenta otra vez.</div>}
                        </div>
                    </div>
                ) : (
                    <div className="completion-message">
                        <h3>¡Felicidades, las respuestas son correctas!</h3>
                        <IonButton className='jugarOtraVez' expand="block" onClick={resetGame}>Jugar de nuevo</IonButton>
                        <IonButton className='Regresar' expand="block" href="/Mapa">Ir a menú</IonButton>
                    </div>
                )}

                <IonAlert
                    isOpen={showSuccess}
                    onDidDismiss={handleGameComplete}
                    header={'¡Felicidades!'}
                    message={'`Has desbloqueado el siguiente capítulo y ganaste 10 Piggy Pesos.`'}
                    buttons={['OK']}
                />
            </IonContent>
        </IonApp>
    );
};

export default Juego3;