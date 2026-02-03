import React, { useState, useEffect } from 'react';
import { IonApp, IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonAlert } from '@ionic/react';
import { completarCap, actualizarDinero } from "../../../services/userRegister.js";
import { obtenerUsuario } from '../../../services/userRegister';
import './Juego8.css';


interface Question {
    question: string;
    options: string[];
    correctIndex: number;
}

const questions: Question[] = [
    {
        question: '¿Quién tiene más dinero al jubilarse?',
        options: [
            'Piggy B, porque ahorra más cada mes',
            'Piggy A, porque su dinero tuvo más tiempo para crecer',
            'Los dos tienen lo mismo',
        ],
        correctIndex: 1
    },
    {
        question: '¿Cuál de las siguientes opciones describe mejor el interés compuesto?',
        options: [
            'El dinero crece solo una vez al año',
            'El banco te regala dinero por ahorrar',
            'El dinero genera ganancias sobre el dinero que ya ganó',
        ],
        correctIndex: 2
    },
    {
        question: '¿Por qué una pensión necesita inversión y no solo ahorro?',
        options: [
            'Porque el ahorro desaparece con el tiempo',
            'Porque los bancos lo exigen',
            'Porque el dinero necesita crecer para alcanzar muchos años en el futuro',
        ],
        correctIndex: 2
    },
    {
        question: 'Si empiezas a ahorrar tarde para tu jubilación, ¿qué suele pasar?',
        options: [
            'Necesitas ahorrar menos dinero',
            'No importa, el tiempo no afecta',
            'Tienes que ahorrar mucho más cada mes',
        ], correctIndex: 2
    },
    {
        question: '¿Cuál es la mejor idea que deja este capítulo?',
        options: [
            'Ahorrar solo cuando seas mayor',
            'Confiar en que alguien más pagará tu retiro',
            'Empezar temprano y darle tiempo a tu dinero',
        ],
        correctIndex: 2
    }
];

const Juego8: React.FC = () => {
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
                <div>
                    <h1>
                        Dos personas ahorran para su retiro:

                    </h1>
                    <p className='info-juego'>
                        Piggy A ahorra $500 al mes desde los 25 años.
                        <br />

                        Piggy B ahorra $1,000 al mes desde los 40 años.
                        <br />


                        Ambos usan interés compuesto.

                    </p>
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

export default Juego8;