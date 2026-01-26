import React, { useEffect, useState } from 'react';
import {
    IonApp,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    IonToast,
    IonIcon
} from '@ionic/react';
import { trophy, cash } from 'ionicons/icons';
import { useIonRouter } from '@ionic/react';
import './Juego7.css';

const WORDS = [
    'IVA',
    'SAT',
    'ISR',
    'ADEUDO',
    'DECLARACION',
    'IMPUESTOS'
];

const GRID: string[][] = [
    ['V', 'H', 'A', 'G', 'S', 'Q', 'B', 'L', 'K', 'Z', 'U', 'N', 'C', 'G', 'O', 'F', 'B', 'Ü', 'W', 'J'],
    ['Z', 'F', 'D', 'F', 'T', 'Á', 'P', 'G', 'L', 'F', 'Í', 'E', 'G', 'X', 'V', 'J', 'W', 'I', 'K', 'U'],
    ['V', 'W', 'N', 'E', 'N', 'Ú', 'K', 'O', 'T', 'A', 'Q', 'R', 'W', 'Q', 'J', 'G', 'R', 'A', 'H', 'Ñ'],
    ['Ñ', 'Ñ', 'E', 'É', 'G', 'Ó', 'C', 'M', 'Ó', 'X', 'H', 'M', 'Y', 'A', 'M', 'Ü', 'R', 'D', 'A', 'P'],
    ['K', 'X', 'I', 'A', 'R', 'Ú', 'E', 'R', 'L', 'X', 'V', 'H', 'D', 'I', 'H', 'B', 'S', 'P', 'X', 'É'],
    ['Z', 'Ñ', 'C', 'I', 'V', 'A', 'Í', 'G', 'U', 'Z', 'J', 'W', 'R', 'E', 'T', 'D', 'O', 'L', 'B', 'I'],
    ['D', 'Á', 'A', 'R', 'Ú', 'G', 'J', 'L', 'A', 'E', 'I', 'S', 'L', 'A', 'E', 'Ñ', 'T', 'J', 'E', 'Í'],
    ['X', 'M', 'H', 'T', 'F', 'D', 'Z', 'M', 'U', 'X', 'I', 'V', 'S', 'Á', 'A', 'H', 'S', 'F', 'L', 'U'],
    ['N', 'A', 'E', 'D', 'S', 'Z', 'H', 'Ú', 'O', 'A', 'Ñ', 'Ñ', 'Í', 'R', 'Á', 'V', 'E', 'T', 'É', 'P'],
    ['I', 'U', 'D', 'B', 'M', 'F', 'Ú', 'W', 'Z', 'Ü', 'C', 'D', 'A', 'T', 'T', 'Ñ', 'U', 'R', 'Z', 'W'],
    ['L', 'É', 'A', 'Z', 'Ñ', 'N', 'H', 'O', 'I', 'A', 'U', 'Ñ', 'Ü', 'M', 'L', 'H', 'P', 'R', 'L', 'E'],
    ['I', 'M', 'Í', 'X', 'A', 'C', 'J', 'O', 'A', 'D', 'É', 'R', 'B', 'B', 'L', 'J', 'M', 'V', 'M', 'É'],
    ['W', 'N', 'R', 'S', 'F', 'X', 'Z', 'Z', 'E', 'J', 'Ü', 'B', 'V', 'G', 'H', 'S', 'I', 'C', 'G', 'S'],
    ['R', 'N', 'A', 'Í', 'B', 'I', 'U', 'Ü', 'Z', 'U', 'O', 'L', 'A', 'I', 'D', 'E', 'R', 'P', 'L', 'E'],
    ['Ú', 'Ó', 'T', 'P', 'B', 'R', 'U', 'Z', 'W', 'G', 'N', 'I', 'A', 'D', 'D', 'X', 'X', 'X', 'P', 'C'],
    ['L', 'H', 'E', 'B', 'N', 'D', 'Í', 'Ü', 'H', 'A', 'I', 'V', 'K', 'V', 'T', 'Z', 'Í', 'U', 'C', 'C'],
    ['É', 'K', 'R', 'I', 'R', 'J', 'B', 'Í', 'Á', 'P', 'U', 'Q', 'Ú', 'É', 'P', 'X', 'N', 'E', 'O', 'E'],
    ['Ú', 'S', 'C', 'W', 'R', 'H', 'Ü', 'C', 'T', 'Q', 'P', 'Q', 'B', 'C', 'O', 'T', 'Ó', 'U', 'N', 'Ó'],
    ['D', 'É', 'E', 'I', 'É', 'C', 'J', 'W', 'R', 'Ñ', 'U', 'C', 'M', 'É', 'Ó', 'T', 'C', 'W', 'L', 'L'],
    ['X', 'Q', 'S', 'Í', 'P', 'S', 'V', 'É', 'Ü', 'C', 'T', 'D', 'P', 'Ü', 'O', 'É', 'Á', 'L', 'J', 'P'],
];

interface Position {
    row: number;
    col: number;
}

interface WordCell extends Position {
    word: string;
}

const Juego7: React.FC = () => {
    const router = useIonRouter();

    const [correctCells, setCorrectCells] = useState<WordCell[]>([]);
    const [scoredCells, setScoredCells] = useState<Position[]>([]);
    const [completedWords, setCompletedWords] = useState<string[]>([]);
    const [score, setScore] = useState(0);
    const [toast, setToast] = useState('');

    useEffect(() => {
        const directions = [
            [0, 1], [0, -1], [1, 0], [-1, 0],
            [1, 1], [1, -1], [-1, 1], [-1, -1]
        ];

        const found: WordCell[] = [];

        for (const word of WORDS) {
            const w = word.toUpperCase();

            for (let r = 0; r < GRID.length; r++) {
                for (let c = 0; c < GRID[0].length; c++) {
                    for (const [dx, dy] of directions) {
                        let ok = true;
                        const temp: WordCell[] = [];

                        for (let i = 0; i < w.length; i++) {
                            const nr = r + dx * i;
                            const nc = c + dy * i;

                            if (
                                nr < 0 || nc < 0 ||
                                nr >= GRID.length || nc >= GRID[0].length ||
                                GRID[nr][nc].toUpperCase() !== w[i]
                            ) {
                                ok = false;
                                break;
                            }

                            temp.push({ row: nr, col: nc, word });
                        }

                        if (ok) found.push(...temp);
                    }
                }
            }
        }

        setCorrectCells(found);
    }, []);

    const handleSelect = (row: number, col: number) => {
        const alreadyScored = scoredCells.some(c => c.row === row && c.col === col);
        if (alreadyScored) return;

        const match = correctCells.find(c => c.row === row && c.col === col);
        if (!match) return;

        setScoredCells(prev => [...prev, { row, col }]);
        setScore(prev => prev + 10);

        const wordCells = correctCells.filter(c => c.word === match.word);
        const scoredForWord = wordCells.every(cell =>
            [...scoredCells, { row, col }].some(
                s => s.row === cell.row && s.col === cell.col
            )
        );

        if (scoredForWord && !completedWords.includes(match.word)) {
            setCompletedWords(prev => [...prev, match.word]);
            setScore(prev => prev + 50);
            setToast(`🎉 Palabra completada: ${match.word} (+50)`);
        }
    };

    const getCellClass = (row: number, col: number) => {
        let cls = 'sopa-cell';

        if (scoredCells.some(c => c.row === row && c.col === col)) {
            cls += ' correct';
        }

        return cls;
    };

    return (
        <IonApp>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        <IonIcon icon={trophy} /> Sopa de Letras – Impuestos
                    </IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding">
                <div className="score-board">
                    <IonIcon icon={cash} />
                    <strong>{score} puntos</strong>
                </div>

                <div className="words-grid">
                    {WORDS.map(word => (
                        <div
                            key={word}
                            className={`word-bubble ${completedWords.includes(word) ? 'found' : ''}`}
                        >
                            {completedWords.includes(word) ? '✅' : '🔍'} {word}
                        </div>
                    ))}
                </div>

                <div className="sopa-wrapper">
                    <div className="sopa-grid">
                        {GRID.map((row, i) => (
                            <div className="sopa-row" key={i}>
                                {row.map((letter, j) => (
                                    <div
                                        key={`${i}-${j}`}
                                        className={getCellClass(i, j)}
                                        onMouseDown={() => handleSelect(i, j)}
                                        onTouchStart={() => handleSelect(i, j)}
                                    >
                                        {letter}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                <IonButton expand="block" onClick={() => router.push('/Mapa')}>
                    Volver al mapa
                </IonButton>

                <IonToast
                    isOpen={!!toast}
                    message={toast}
                    duration={2000}
                    onDidDismiss={() => setToast('')}
                />
            </IonContent>
        </IonApp>
    );
};

export default Juego7;