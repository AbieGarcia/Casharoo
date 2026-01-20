import React, { useMemo, useState, useEffect } from 'react';
import { IonApp, IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonButton } from '@ionic/react';
import './Juego6.css';
import { useIonRouter } from '@ionic/react';
import { completarCap, actualizarDinero } from "../../../services/userRegister.js";
import { obtenerUsuario } from '../../../services/userRegister';

type Direction = 'across' | 'down';

type WordEntry = {
    id: number;
    word: string; // uppercase, no spaces
    clue: string;
    row: number;
    col: number;
    dir: Direction;
    number: number; // clue number
};

const WORDS: WordEntry[] = [
    // Horizontales
    { id: 3, word: 'ESTADO DE CUENTA', clue: 'Documento donde puedes ver cuánto gastaste, cuánto debes y cuándo pagar', row: 0, col: 0, dir: 'across', number: 3 },
    { id: 4, word: 'RESPONSABLE', clue: 'Así se comporta alguien que paga a tiempo y usa bien su tarjeta', row: 3, col: 5, dir: 'across', number: 4 },
    { id: 9, word: 'INTERESES', clue: 'Dinero extra que pagas si no devuelves a tiempo lo que te prestaron', row: 5, col: 0, dir: 'across', number: 9 },
    { id: 10, word: 'TOTALERO', clue: 'Persona que paga todo lo que debe y no genera intereses', row: 7, col: 2, dir: 'across', number: 10 },
    // Verticales
    { id: 1, word: 'TARJETA', clue: 'Herramienta con la que el banco te presta dinero que debes devolver después', row: 0, col: 2, dir: 'down', number: 1 },
    { id: 2, word: 'PAGOMINIMO', clue: 'Cantidad más pequeña que el banco te permite pagar, pero que genera intereses', row: 0, col: 16, dir: 'down', number: 2 },
    { id: 5, word: 'BURO', clue: 'Lugar donde se guarda tu historial de pagos y deudas', row: 9, col: 10, dir: 'down', number: 5 },
    { id: 6, word: 'LIMITE', clue: 'Cantidad máxima de dinero que el banco te permite gastar con tu tarjeta', row: 4, col: 7, dir: 'down', number: 6 },
    { id: 7, word: 'DEUDA', clue: 'Dinero que debes devolver al banco después de usar tu tarjeta', row: 4, col: 12, dir: 'down', number: 7 },
    { id: 8, word: 'MESES', clue: 'Forma de pagar una compra poco a poco cuando no hay intereses extra', row: 14, col: 14, dir: 'down', number: 8 },
];

const ROWS = 19;
const COLS = 16;

// MATRIX provided by user: 0 = black, 2 = gray (space), letters = cells where user types
const MATRIX: string[][] = [
    ['0', '0', '0', 'T', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'P'],
    ['E', 'S', 'T', 'A', 'D', 'O', '2', 'D', 'E', '2', 'C', 'U', 'E', 'N', 'T', 'A'],
    ['0', '0', '0', 'R', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'G'],
    ['0', '0', '0', 'J', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'O'],
    ['0', '0', '0', 'E', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '2'],
    ['0', '0', '0', 'T', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'M'],
    ['0', '0', '0', 'A', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'I'],
    ['0', '0', '0', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'N'],
    ['0', '0', '0', 'D', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'I'],
    ['0', '0', 'R', 'E', 'S', 'P', 'O', 'N', 'S', 'A', 'B', 'L', 'E', '0', '0', 'M'],
    ['0', '0', '0', '2', '0', '0', '0', '0', '0', '0', 'U', '0', '0', '0', '0', 'O'],
    ['0', '0', '0', 'C', '0', '0', '0', '0', '0', '0', 'R', '0', '0', '0', '0', '0'],
    ['0', '0', '0', 'R', '0', '0', '0', 'L', '0', '0', 'O', '0', '0', '0', '0', '0'],
    ['0', '0', '0', 'E', '0', 'D', '0', 'I', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', 'D', '0', 'E', '0', 'M', '0', '0', '0', '0', '0', '0', 'M', '0'],
    ['0', '0', '0', 'I', '0', 'U', '0', 'I', 'N', 'T', 'E', 'R', 'E', 'S', 'E', 'S'],
    ['0', '0', '0', 'T', '0', 'D', '0', 'T', '0', '0', '0', '0', '0', '0', 'S', '0'],
    ['0', '0', 'T', 'O', 'T', 'A', 'L', 'E', 'R', 'O', '0', '0', '0', '0', 'E', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'S', '0'],
];



// explicit clue numbers provided by user (null = no number)
const NUMBERS: (number | null)[][] = [
    [null, null, null, 1, null, null, null, null, null, null, null, null, null, null, null, 2],
    [3, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, 4, null, null, null, null, null, null, null, 5, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, 6, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, 7, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, 9, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, 10, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
];

function buildGridFromMatrix() {
    const grid: ({ letter?: string; number?: number; gray?: boolean } | null)[][] = Array.from({ length: ROWS }, () => Array.from({ length: COLS }, () => null));

    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            const ch = MATRIX[r][c];
            if (!ch || ch === '0') {
                grid[r][c] = null; // black
            } else if (ch === '2') {
                grid[r][c] = { gray: true };
            } else {
                grid[r][c] = { letter: ch };
            }

            // attach explicit number if provided
            const num = NUMBERS[r] && NUMBERS[r][c];
            if (num && grid[r][c]) {
                grid[r][c]!.number = num;
            }
        }
    }

    // place numbers from WORDS at their starts if possible (only where not provided)
    for (const w of WORDS) {
        if (w.row < ROWS && w.col < COLS) {
            const cell = grid[w.row][w.col];
            if (cell && !cell.number) cell.number = w.number;
        }
    }

    return grid;
}

const GRID_TEMPLATE = buildGridFromMatrix();

const normalize = (s: string) => s.normalize('NFD').replace(/\p{Diacritic}/gu, '').toUpperCase();

const Juego6: React.FC = () => {
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

        await completarCap(usuarioId, 6);
        router.push('/Mapa', 'forward', 'replace');
    };

    const [cells, setCells] = useState<(string | null)[][]>(() => {
        // create user input grid mirroring GRID_TEMPLATE ('' for input cells, null for black)
        return GRID_TEMPLATE.map(row => row.map(cell => cell ? '' : null));
    });
    const [hintsUsed, setHintsUsed] = useState(0);
    const [hintedCells, setHintedCells] = useState<Set<string>>(new Set());

    const solved = useMemo(() => {
        // check all letters
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                const tmpl = GRID_TEMPLATE[r][c];
                if (tmpl && tmpl.letter) {
                    const input = cells[r][c] as string;
                    if (!input) return false;
                    if (normalize(input) !== normalize(tmpl.letter)) return false;
                }
            }
        }
        return true;
    }, [cells]);

    const onChangeCell = (r: number, c: number, value: string) => {
        // allow only letters, single char
        const ch = (value || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
        const newCells = cells.map(row => row.slice());
        newCells[r][c] = ch.slice(0, 1);
        setCells(newCells);
    };



    const giveHint = () => {
        if (hintsUsed >= 3) return;

        // find all empty (not filled) cells that belong to words
        const candidates: { r: number; c: number }[] = [];
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                const tmpl = GRID_TEMPLATE[r][c];
                if (tmpl && tmpl.letter) {
                    const cur = cells[r][c];
                    if (!cur || cur === '') candidates.push({ r, c });
                }
            }
        }

        if (candidates.length === 0) return;
        // pick a random empty cell to reveal
        const pick = candidates[Math.floor(Math.random() * candidates.length)];
        const r = pick.r; const c = pick.c;
        const letter = GRID_TEMPLATE[r][c]!.letter!;
        const newCells = cells.map(row => row.slice());
        newCells[r][c] = letter;
        setCells(newCells);

        const nextHinted = new Set(hintedCells);
        nextHinted.add(`${r},${c}`);
        setHintedCells(nextHinted);
        setHintsUsed(h => h + 1);
    };

    const reset = () => {
        setCells(GRID_TEMPLATE.map(row => row.map(cell => cell ? '' : null)));
        setHintsUsed(0);
        setHintedCells(new Set());
    };

    return (
        <IonApp>
            <IonHeader>
                <IonToolbar className="nombre6">
                    <IonTitle className="nom6">Juego 6 — Crucigrama de finanzas</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding juego6-content">
                <div className="layout">
                    <div className="grid-wrap">
                        <div className="grid">
                            {Array.from({ length: ROWS }).map((_, r) => (
                                <div key={r} className="grid-row">
                                    {Array.from({ length: COLS }).map((_, c) => {
                                        const tmpl = GRID_TEMPLATE[r][c];
                                        if (!tmpl) return <div key={c} className="cell black" />;

                                        // gray cell (space) - user cannot write here
                                        if (tmpl.gray) {
                                            return (
                                                <div key={c} className={`cell gray`}>
                                                    {tmpl.number && <div className="cell-number">{tmpl.number}</div>}
                                                </div>
                                            );
                                        }

                                        const rawVal = cells[r][c];
                                        const val = (rawVal || '').toString();
                                        const correct = val && tmpl.letter && normalize(val) === normalize(tmpl.letter);
                                        const showWrong = val && tmpl.letter && normalize(val) !== normalize(tmpl.letter);
                                        const showRight = val && tmpl.letter && normalize(val) === normalize(tmpl.letter);
                                        const hinted = hintedCells.has(`${r},${c}`);
                                        return (
                                            <div key={c} className={`cell letter ${showWrong ? 'wrong' : ''} ${showRight ? 'right' : ''} ${hinted ? 'hinted' : ''}`}>
                                                {tmpl.number && <div className="cell-number">{tmpl.number}</div>}
                                                <input
                                                    maxLength={1}
                                                    value={val}
                                                    onChange={(e) => onChangeCell(r, c, e.target.value)}
                                                    aria-label={`r${r}c${c}`}
                                                    className="cell-input"
                                                    disabled={false}
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                            ))}
                        </div>

                        <div className="controls">
                            <IonButton color="light" onClick={reset}>Limpiar</IonButton>
                        </div>
                    </div>

                    <div className="clues">
                        <div className="final-actions">
                            {solved ? (
                                <>
                                    <p className="success">¡Has completado el crucigrama correctamente!</p>
                                    <IonButton color="secondary" onClick={reset}>Repetir juego</IonButton>
                                    <IonButton color="secondary" onClick={handleGameComplete}>Regresar al mapa</IonButton>
                                </>
                            ) : (
                                <>
                                    <p className="hint">Completa el crucigrama correctamente para continuar</p>
                                </>
                            )}
                        </div>
                        <div>
                            <h3>Horizontal</h3>
                            {WORDS.filter(w => w.dir === 'across').map(w => (
                                <p key={w.number}><strong>{w.number}</strong> {w.clue}</p>
                            ))}
                        </div>

                        <div>
                            <h3>Abajo</h3>
                            {WORDS.filter(w => w.dir === 'down').map(w => (
                                <p key={w.number}><strong>{w.number}</strong> {w.clue}</p>
                            ))}
                            <br />
                            <br />
                        </div>

                    </div>
                </div>


            </IonContent>
        </IonApp>
    );
};

export default Juego6;
