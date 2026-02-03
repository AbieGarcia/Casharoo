import React, { useEffect, useState } from 'react';
import {
    IonApp, IonContent, IonHeader, IonTitle, IonToolbar,
    IonButton, IonToast, IonIcon, IonModal
} from '@ionic/react';
import { trophy, cash, happyOutline, lockClosedOutline } from 'ionicons/icons';
import { useIonRouter } from '@ionic/react';
import { completarCap, actualizarDinero } from "../../../services/userRegister.js"
import { obtenerUsuario } from '../../../services/userRegister';
import './Juego7.css';

const WORDS = ['IVA', 'SAT', 'ISR', 'ADEUDO', 'DECLARACION', 'IMPUESTOS'];

const GRID: string[][] = [
    ['V', 'H', 'A', 'G', 'S', 'Q', 'B', 'L', 'K', 'Z', 'U', 'N', 'C', 'G', 'O'],
    ['I', 'F', 'D', 'F', 'T', 'A', 'P', 'G', 'L', 'F', 'I', 'E', 'G', 'X', 'V'],
    ['M', 'W', 'N', 'E', 'N', 'U', 'K', 'O', 'T', 'A', 'Q', 'R', 'W', 'Q', 'J'],
    ['P', 'X', 'I', 'S', 'R', 'U', 'E', 'R', 'L', 'X', 'V', 'H', 'D', 'I', 'H'],
    ['U', 'N', 'C', 'I', 'V', 'A', 'I', 'G', 'U', 'Z', 'J', 'W', 'R', 'E', 'T'],
    ['E', 'A', 'A', 'R', 'U', 'G', 'J', 'L', 'A', 'E', 'I', 'Z', 'L', 'A', 'E'],
    ['S', 'M', 'H', 'T', 'F', 'D', 'Z', 'M', 'U', 'X', 'I', 'V', 'K', 'A', 'A'],
    ['T', 'A', 'E', 'D', 'E', 'C', 'L', 'A', 'R', 'A', 'C', 'I', 'O', 'N', 'P'],
    ['O', 'U', 'D', 'B', 'M', 'F', 'U', 'W', 'Z', 'C', 'D', 'A', 'T', 'T', 'N'],
    ['S', 'E', 'A', 'Z', 'N', 'N', 'H', 'O', 'I', 'A', 'U', 'N', 'U', 'M', 'L'],
    ['A', 'D', 'E', 'U', 'D', 'O', 'A', 'D', 'E', 'R', 'B', 'B', 'L', 'J', 'M'],
    ['W', 'N', 'R', 'S', 'F', 'X', 'Z', 'Z', 'E', 'J', 'U', 'B', 'V', 'G', 'H'],
    ['R', 'N', 'A', 'I', 'B', 'I', 'U', 'U', 'Z', 'U', 'O', 'L', 'A', 'I', 'D'],
    ['U', 'O', 'T', 'P', 'B', 'R', 'U', 'Z', 'W', 'G', 'N', 'I', 'A', 'D', 'D'],
    ['L', 'H', 'E', 'B', 'N', 'D', 'I', 'S', 'A', 'T', 'V', 'K', 'V', 'T', 'Z'],
];

interface Cell { row: number; col: number; word: string; }

const Juego7: React.FC = () => {
    const router = useIonRouter();
    const [usuario, setUsuario] = useState<any>(null);
    const [cells, setCells] = useState<Cell[]>([]);
    const [selected, setSelected] = useState<Cell[]>([]);
    const [completedWords, setCompletedWords] = useState<string[]>([]);
    const [score, setScore] = useState(0);
    const [toast, setToast] = useState('');
    const [showWinModal, setShowWinModal] = useState(false);

    useEffect(() => {
        const cargarUsuario = async () => {
            const usuarioId = localStorage.getItem("usuarioId");
            const datosUsuario = await obtenerUsuario(usuarioId);
            setUsuario(datosUsuario);
        };

        cargarUsuario();
    }, []);

    const reiniciarJuego = () => {
        setSelected([]);
        setCompletedWords([]);
        setScore(0);
        setShowWinModal(false);
    };

    const usuarioId = localStorage.getItem("usuarioId");

    const handleGameComplete = async () => {
        setShowWinModal(false);

        if (usuarioId && usuario) {
            const nuevoDinero = (usuario.dinero || 0) + 10;
            await actualizarDinero(usuarioId, nuevoDinero);

            setUsuario({ ...usuario, dinero: nuevoDinero });
        }

        await completarCap(usuarioId, 7);
    };

    useEffect(() => {
        const directions = [[0, 1], [1, 0], [0, -1], [-1, 0], [1, 1], [1, -1], [-1, 1], [-1, -1]];
        const found: Cell[] = [];
        WORDS.forEach(word => {
            for (let r = 0; r < GRID.length; r++) {
                for (let c = 0; c < GRID[0].length; c++) {
                    for (const [dx, dy] of directions) {
                        let ok = true;
                        const temp: Cell[] = [];
                        for (let i = 0; i < word.length; i++) {
                            const nr = r + dx * i; const nc = c + dy * i;
                            if (nr < 0 || nc < 0 || nr >= GRID.length || nc >= GRID[0].length || GRID[nr][nc] !== word[i]) {
                                ok = false; break;
                            }
                            temp.push({ row: nr, col: nc, word });
                        }
                        if (ok) found.push(...temp);
                    }
                }
            }
        });
        setCells(found);
    }, []);

    const handleClick = (r: number, c: number) => {
        const cellData = cells.find(cell => cell.row === r && cell.col === c);
        if (!cellData || selected.some(s => s.row === r && s.col === c)) return;

        const updatedSelected = [...selected, cellData];
        setSelected(updatedSelected);
        setScore(s => s + 1);

        const wordToTrack = cellData.word;
        const totalLetters = cells.filter(cell => cell.word === wordToTrack).length;
        const selectedLetters = updatedSelected.filter(cell => cell.word === wordToTrack).length;

        if (totalLetters === selectedLetters && !completedWords.includes(wordToTrack)) {
            const newCompleted = [...completedWords, wordToTrack];
            setCompletedWords(newCompleted);
            setScore(s => s + 1);
            setToast(`✨ ¡Encontraste: ${wordToTrack}! ✨`);

            if (newCompleted.length === WORDS.length) {
                setShowWinModal(true);
            }
        }
    };

    return (
        <IonApp>
            <IonHeader>
                <IonToolbar className="kids-toolbar">
                    <IonTitle><IonIcon icon={happyOutline} /> Sopa Tributaria</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className="kids-bg ion-padding">
                <div className="game-wrapper">
                    <div className="piggy-score">
                        <IonIcon icon={cash} color="success" />
                        <span> {score} Piggy Pesos</span>
                    </div>

                    <div className="words-cloud">
                        {WORDS.map(w => (
                            <div key={w} className={`word-bubble ${completedWords.includes(w) ? 'is-found' : ''}`}>
                                {completedWords.includes(w) ? '⭐ ' : ''}{w}
                            </div>
                        ))}
                    </div>

                    <div className="sopa-container">
                        <div className="sopa-grid-kids">
                            {GRID.map((row, rowIndex) =>
                                row.map((letter, colIndex) => {
                                    const isSel = selected.some(s => s.row === rowIndex && s.col === colIndex);
                                    const isDone = isSel && completedWords.includes(cells.find(c => c.row === rowIndex && c.col === colIndex)?.word || '');

                                    return (
                                        <div
                                            key={`${rowIndex}-${colIndex}`}
                                            className={`sopa-cell-kids ${isSel ? 'sel' : ''} ${isDone ? 'done' : ''}`}
                                            onClick={() => handleClick(rowIndex, colIndex)}
                                        >
                                            {letter}
                                        </div>
                                    );
                                })
                            )}
                        </div>
                    </div>


                </div>

                {/* MODAL DE VICTORIA: ÚNICA FORMA DE SALIR */}
                <IonModal isOpen={showWinModal} backdropDismiss={false} className="win-modal">
                    <div className="modal-container">
                        <div className="modal-box">
                            <div className="modal-header-white">
                                <h2>¡Felicidades, has ganado! 🎉</h2>
                            </div>

                            <div className="modal-body">
                                <span className="party-emoji">🎊</span>
                                <p>Has completado la sopa y ganaste <b>10 Piggy Pesos</b></p>
                            </div>

                            <div className="modal-footer-buttons">
                                <IonButton className="btn-pink" expand="block" onClick={reiniciarJuego}>
                                    JUGAR DE NUEVO
                                </IonButton>

                                <IonButton routerLink="/mapa" className="btn-pink" expand="block" onClick={handleGameComplete}>
                                    IR A CAPÍTULOS
                                </IonButton>
                            </div>
                        </div>
                    </div>
                </IonModal>

                <IonToast isOpen={!!toast} message={toast} duration={1500} position="top" onDidDismiss={() => setToast('')} />
            </IonContent>
        </IonApp>
    );
};

export default Juego7;







