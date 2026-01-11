import React, { useState, useEffect } from 'react';
import { IonApp, IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonButton, IonAlert } from '@ionic/react';
import { completarCap, actualizarDinero } from "../../../services/userRegister.js"
import { obtenerUsuario } from '../../../services/userRegister';
import './Juego1.css';


interface WordPair {
  left: string;
  right: string;
  matched: boolean;
}

const Juego1: React.FC = () => {

  const [usuario, setUsuario] = useState<any>(null);

  useEffect(() => {
    const cargarUsuario = async () => {
      const usuarioId = localStorage.getItem("usuarioId");
      const datosUsuario = await obtenerUsuario(usuarioId);
      setUsuario(datosUsuario);
    };

    cargarUsuario();
  }, []);

  const [wordPairs, setWordPairs] = useState<WordPair[]>([
    { left: 'Ahorro', right: 'Guardar una parte del ingreso durante un tiempo con un objetivo', matched: false },
    { left: 'Meta', right: 'El precio del objeto que quiero comprar o el dinero que quiero juntar', matched: false },
    { left: 'Lapso', right: 'Tiempo que toma llegar a la meta', matched: false },
    { left: 'Ingreso', right: 'El dinero que recibes o ganas', matched: false },
    { left: 'Egreso', right: 'El dinero que no se guarda para gastos', matched: false },
  ]);

  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
  const [selectedRight, setSelectedRight] = useState<number | null>(null);
  const [shuffledRight, setShuffledRight] = useState<string[]>([]);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Barajar las palabras de la derecha al iniciar
  useEffect(() => {
    const rightWords = wordPairs.map(pair => pair.right);
    setShuffledRight(shuffleArray([...rightWords]));
  }, []);

  // Verificar si el juego está completo
  useEffect(() => {
    if (wordPairs.every(pair => pair.matched)) {
      setGameCompleted(true);
      setShowSuccess(true);
    }
  }, [wordPairs]);

  const shuffleArray = (array: any[]) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const handleLeftClick = (index: number) => {
    if (wordPairs[index].matched) return;
    setSelectedLeft(index);
    checkMatch();
  };

  const handleRightClick = (index: number) => {
    if (selectedLeft === null) return;

    const rightWord = shuffledRight[index];
    const leftWord = wordPairs[selectedLeft].left;
    const originalPair = wordPairs.find(pair => pair.left === leftWord);

    if (originalPair && originalPair.right === rightWord) {
      // Match correcto
      const updatedPairs = wordPairs.map(pair =>
        pair.left === leftWord ? { ...pair, matched: true } : pair
      );
      setWordPairs(updatedPairs);
      setSelectedLeft(null);
    } else {
      // Match incorrecto
      setSelectedRight(index);
      setTimeout(() => {
        setSelectedRight(null);
        setSelectedLeft(null);
      }, 1000);
    }
  };

  const checkMatch = () => {
    if (selectedLeft !== null && selectedRight !== null) {
      const rightWord = shuffledRight[selectedRight];
      const leftWord = wordPairs[selectedLeft].left;
      const originalPair = wordPairs.find(pair => pair.left === leftWord);

      if (originalPair && originalPair.right === rightWord) {
        // Match correcto
        const updatedPairs = wordPairs.map(pair =>
          pair.left === leftWord ? { ...pair, matched: true } : pair
        );
        setWordPairs(updatedPairs);
      }

      setSelectedLeft(null);
      setSelectedRight(null);
    }
  };

  const resetGame = () => {
    const resetPairs = wordPairs.map(pair => ({ ...pair, matched: false }));
    setWordPairs(resetPairs);
    setShuffledRight(shuffleArray(wordPairs.map(pair => pair.right)));
    setSelectedLeft(null);
    setSelectedRight(null);
    setGameCompleted(false);
  };

  const usuarioId = localStorage.getItem("usuarioId");

  const handleGameComplete = async () => {
    setShowSuccess(false);

    if (usuarioId && usuario) {
      const nuevoDinero = (usuario.dinero || 0) + 10;
      await actualizarDinero(usuarioId, nuevoDinero);

      setUsuario({ ...usuario, dinero: nuevoDinero });
    }

    await completarCap(usuarioId, 1);
  };

  return (
    <IonApp>
      <IonHeader className='nombre'>
          <IonTitle className='nom1'>Juego de Relacionar</IonTitle>
      </IonHeader>
      <IonContent className="ion-padding">

        <div className='recompensa-container'>
          <div className='recompensa2'>
            <span>Recompensa: $10</span>
            <span style={{ fontSize: '24px' }}></span>
          </div>
        </div>

        <div className="game-container">
          <IonGrid>
            <IonRow>
              <IonCol>
                <h3 className="column-title">Concepto</h3>
                {wordPairs.map((pair, index) => (
                  <div
                    key={`left-${index}`}
                    className={`word-card ${selectedLeft === index ? 'selected' : ''} ${pair.matched ? 'matched' : ''}`}
                    onClick={() => handleLeftClick(index)}
                  >
                    {pair.left}
                  </div>
                ))}
              </IonCol>

              <IonCol>
                <h3 className="column-title">Definición</h3>
                {shuffledRight.map((word, index) => (
                  <div
                    key={`right-${index}`}
                    className={`word-card ${selectedRight === index ? 'selected' : ''} 
                      ${wordPairs.some(pair => pair.right === word && pair.matched) ? 'matched' : ''}`}
                    onClick={() => handleRightClick(index)}
                  >
                    {word}
                  </div>
                ))}
              </IonCol>
            </IonRow>
          </IonGrid>

          {gameCompleted && (
            <div className="completion-message">
              <IonButton className='jugarOtraVez' expand="block" onClick={resetGame} >
                Jugar de nuevo
              </IonButton>
              <IonButton className='Regresar' expand="block" href="/Mapa">
                Ir a menu
              </IonButton>
            </div>
          )}
        </div>

        <IonAlert
          isOpen={showSuccess}
          onDidDismiss={handleGameComplete}
          header={'¡Felicidades, has ganado! 🎉'}
          message={'Has desbloqueado la sección de ahorros y ganaste 10 Piggy Pesos'}
          buttons={['OK']}
        />
      </IonContent>
    </IonApp>
  );
};

export default Juego1;