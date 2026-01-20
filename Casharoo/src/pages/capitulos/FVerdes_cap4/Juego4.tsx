import React, { useState, useEffect } from 'react';
import { IonApp, IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonToast, IonModal } from '@ionic/react';
import { useIonRouter } from '@ionic/react';
import './Juego4.css';
import { completarCap, actualizarDinero } from "../../../services/userRegister.js";
import { obtenerUsuario } from '../../../services/userRegister';


const TEXT_BLOCK = `- Finanzas verdes: Invertir y apoyar económicamente proyectos buenos para el medio ambiente.

- Bonos verdes: Tipo de inversión que buscan empresas o gobiernos para financiar proyectos con impacto ambiental.

- Consumo responsable: Consumir productos conciente de lo que necesito y lo que tenga un menor impacto en el medio ambiente.

- Préstamos verdes: Pedir dinero a instituciones o bancos para hacer proyectos que beneficien al planeta.`;

type Pair = { concept: string; definition: string };

const PAIRS: Pair[] = [
    { concept: 'Finanzas verdes', definition: 'Invertir y apoyar económicamente proyectos buenos para el medio ambiente' },
    { concept: 'Bonos verdes', definition: 'Tipo de inversión que buscan empresas o gobiernos para financiar proyectos con impacto ambiental' },
    { concept: 'Consumo responsable', definition: 'Consumir productos conciente de lo que necesito y lo que tenga un menor impacto en el medio ambiente.' },
    { concept: 'Préstamos verdes', definition: 'Pedir dinero a instituciones o bancos para hacer proyectos que beneficien al planeta.' },
];

// Helper: normalize strings for comparison (remove accents, toUpperCase)
const normalize = (s: string) => s.normalize('NFD').replace(/\p{Diacritic}/gu, '').toUpperCase();

const maskFromConcept = (concept: string, guessed: Set<string>) => {
    // Show letters if guessed; keep spaces and punctuation
    const chars = concept.split('');
    return chars.map(ch => {
        if (ch === ' ') return ' ';
        const normalized = normalize(ch);
        if (/[^A-Z0-9]/.test(normalized)) return ch; // punctuation
        return guessed.has(normalized) ? ch : '_';
    }).join('');
};

const MAX_ATTEMPTS = 6;

const Juego4: React.FC = () => {
    const router = useIonRouter();
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
        if (usuarioId && usuario) {
            const nuevoDinero = (usuario.dinero || 0) + 10;
            await actualizarDinero(usuarioId, nuevoDinero);

            setUsuario({ ...usuario, dinero: nuevoDinero });
        }

        await completarCap(usuarioId, 4);
        router.push('/Mapa', 'forward', 'replace');
    };

    const [idx, setIdx] = useState(0);
    const [guessedLetters, setGuessedLetters] = useState<Set<string>>(new Set());
    const [attemptsLeft, setAttemptsLeft] = useState(MAX_ATTEMPTS);
    const [message, setMessage] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [solved, setSolved] = useState(false);
    const [score, setScore] = useState(0);
    const [showTextModal, setShowTextModal] = useState(false);

    // Teclado sin la letra Ñ (solo A-Z)
    const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    const pair = PAIRS[idx];
    useEffect(() => {
        // reset per pair
        setGuessedLetters(new Set());
        setAttemptsLeft(MAX_ATTEMPTS);
        setSolved(false);
    }, [idx]);

    // Protecciones cuando idx está fuera del rango (estado final)
    const normalizedConcept = pair ? normalize(pair.concept) : '';
    const masked = pair ? maskFromConcept(pair.concept, guessedLetters) : '';
    const isFullyRevealed = pair ? !masked.includes('_') : false;

    useEffect(() => {
        if (isFullyRevealed && !solved) {
            setSolved(true);
            setScore(s => s + 1);
            setMessage('¡Has completado la palabra!');
            setShowToast(true);
        }
    }, [isFullyRevealed]);

    const handleLetterClick = (chRaw: string) => {
        const ch = normalize(chRaw);
        if (guessedLetters.has(ch) || solved) { setMessage('Letra ya usada'); setShowToast(true); return; }
        const next = new Set(guessedLetters);
        next.add(ch);
        setGuessedLetters(next);

        // Determine if incorrect and update attempts
        if (!normalizedConcept.includes(ch)) {
            setAttemptsLeft(a => {
                const nextAttempts = a - 1;
                checkGameOver(next, nextAttempts);
                return nextAttempts;
            });
            setMessage('Letra incorrecta');
        } else {
            setMessage('Letra correcta');
            // if revealing last letter, effect will handle solved
        }
        setShowToast(true);
    };

    const checkGameOver = (letters: Set<string>, attemptsAfter: number) => {
        if (attemptsAfter <= 0 && !isFullyRevealed) {
            setMessage(`Se acabaron los intentos. La palabra era: ${pair.concept}`);
            setShowToast(true);
            // reveal all letters
            const allLetters = new Set<string>();
            normalizedConcept.split('').forEach(c => { if (/[A-Z0-9]/.test(c)) allLetters.add(c); });
            setGuessedLetters(allLetters);
            setSolved(true); // mark as finished (lost)
        }
    };

    const next = () => {
        if (idx < PAIRS.length - 1) setIdx(i => i + 1);
        else setIdx(PAIRS.length); // finished
    };

    const restart = () => {
        setIdx(0); setScore(0); setSolved(false); setGuessedLetters(new Set()); setAttemptsLeft(MAX_ATTEMPTS);
    };

    const finished = idx >= PAIRS.length;



    return (
        <IonApp>
            <IonHeader>
                <IonToolbar className="nombre4">
                    <IonTitle className="nom4">Ahorcado financiero</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding juego4-hangman">
                {!finished ? (
                    <div className="hangman-area">
                        <div className="top-row">
                            <div>Definición:</div>
                            <div className="definition">{pair.definition}</div>
                            <div>Puntaje: {score} / {PAIRS.length}</div>
                        </div>

                        <div className="masked">{masked.split('').map((c, i) => (
                            <span key={i} className={`mask-char ${c === ' ' ? 'space' : ''} ${c !== ' ' && c !== '_' ? 'revealed' : ''}`}>
                                {c}
                            </span>
                        ))}</div>
                        <div className="status">Intentos restantes: {attemptsLeft}</div>

                        {!solved && (
                            <div className="hangman-and-keyboard">
                                <div className="hangman-drawing">
                                    <svg viewBox="0 0 120 140" className="hangman-svg">
                                        <g className="scaffold">
                                            <line x1="10" y1="130" x2="100" y2="130" stroke="#3d3d3d" strokeWidth="3" />
                                            <line x1="30" y1="10" x2="30" y2="130" stroke="#3d3d3d" strokeWidth="3" />
                                            <line x1="30" y1="10" x2="80" y2="10" stroke="#3d3d3d" strokeWidth="3" />
                                            <line x1="80" y1="10" x2="80" y2="30" stroke="#3d3d3d" strokeWidth="3" />
                                        </g>
                                        <circle cx="80" cy="40" r="10" stroke="#3d3d3d" strokeWidth="2" fill="transparent" className={(MAX_ATTEMPTS - attemptsLeft) >= 1 ? 'visible' : ''} />
                                        <line x1="80" y1="50" x2="80" y2="80" stroke="#3d3d3d" strokeWidth="2" className={(MAX_ATTEMPTS - attemptsLeft) >= 2 ? 'visible' : ''} />
                                        <line x1="80" y1="60" x2="70" y2="70" stroke="#3d3d3d" strokeWidth="2" className={(MAX_ATTEMPTS - attemptsLeft) >= 3 ? 'visible' : ''} />
                                        <line x1="80" y1="60" x2="90" y2="70" stroke="#3d3d3d" strokeWidth="2" className={(MAX_ATTEMPTS - attemptsLeft) >= 4 ? 'visible' : ''} />
                                        <line x1="80" y1="80" x2="70" y2="100" stroke="#3d3d3d" strokeWidth="2" className={(MAX_ATTEMPTS - attemptsLeft) >= 5 ? 'visible' : ''} />
                                        <line x1="80" y1="80" x2="90" y2="100" stroke="#3d3d3d" strokeWidth="2" className={(MAX_ATTEMPTS - attemptsLeft) >= 6 ? 'visible' : ''} />
                                    </svg>
                                </div>


                                <div className="keyboard">
                                    {ALPHABET.map(l => (
                                        <button key={l} className={`key ${guessedLetters.has(l) ? 'used' : ''}`} disabled={guessedLetters.has(l) || solved} onClick={() => handleLetterClick(l)}>{l}</button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {solved && (
                            <div className="result">
                                <h3>{attemptsLeft > 0 ? '¡Has resuelto!' : 'Ronda terminada'}</h3>
                                <p>Palabra: <strong>{pair.concept}</strong></p>
                                <IonButton onClick={next}>{idx < PAIRS.length - 1 ? 'Siguiente' : 'Ver resultados'}</IonButton>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="finish">
                        <h3>Juego finalizado</h3>
                        <h4>Tu puntaje: {score} / {PAIRS.length}</h4>
                        {score === PAIRS.length ? (
                            <>
                                <p className="congrats">¡Perfecto! Ganaste 10 Piggy Pesos. Puedes ir al mapa o jugar de nuevo.</p>
                                <div className="final-actions">
                                    <IonButton onClick={restart}>Jugar otra vez</IonButton>
                                    <IonButton color="secondary" onClick={handleGameComplete}>Salir</IonButton>
                                </div>
                            </>
                        ) : (
                            <>
                                <p className="warning">No obtuviste 4/4. Debes repetir el juego para poder continuar.</p>
                                <div className="final-actions">
                                    <button className="repeatbtn" onClick={restart}>Reintentar</button>
                                </div>
                            </>
                        )}

                        <div className="final-text">
                            <h4>Concepto y Explicación</h4>
                            <pre>{TEXT_BLOCK}</pre>
                        </div>
                    </div>
                )}

                <IonToast isOpen={showToast} onDidDismiss={() => setShowToast(false)} message={message} duration={1600} />
            </IonContent>
        </IonApp>
    );
};

export default Juego4;
