import React, { useState, useEffect } from 'react';
import { IonApp, IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonButton, IonAlert, IonCard, IonCardContent } from '@ionic/react';
import './Juego2.css';
import { completarCap } from "../services/userRegister.js"


interface Card {
  id: number;
  content: string;
  isFlipped: boolean;
  isMatched: boolean;
  type: 'term' | 'definition';
}

const Juego2: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Pares de términos y definiciones
  const wordPairs = [
    { term: 'Banco', definition: 'Lugar donde guardan y prestan el dinero' },
    { term: 'Transacciones bancarias', definition: 'Todas las acciones que se pueden hacer con el dinero (guardarlo, sacarlo, dárselo a alguien, etc..)' },
    { term: 'Ahorro', definition: 'Dinero guardado' },
    { term: 'Préstamo', definition: 'Pedir más dinero que no es tuyo' },
    { term: 'Intereses', definition: 'Dinero extra que das cuando te prestan dinero o que te dan cuando dejas usar tu dinero' }
  ];

  // Inicializar el juego
  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    // Crear cartas para términos y definiciones
    const termCards: Card[] = wordPairs.map((pair, index) => ({
      id: index * 2,
      content: pair.term,
      isFlipped: false,
      isMatched: false,
      type: 'term'
    }));

    const definitionCards: Card[] = wordPairs.map((pair, index) => ({
      id: index * 2 + 1,
      content: pair.definition,
      isFlipped: false,
      isMatched: false,
      type: 'definition'
    }));

    // Combinar y barajar las cartas
    const allCards = [...termCards, ...definitionCards];
    const shuffledCards = shuffleArray(allCards);

    setCards(shuffledCards);
    setFlippedCards([]);
    setGameCompleted(false);
  };

  const shuffleArray = (array: any[]) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const handleCardClick = (index: number) => {
    // No hacer nada si la carta ya está volteada o emparejada
    if (cards[index].isFlipped || cards[index].isMatched || flippedCards.length >= 2) {
      return;
    }

    // Voltear la carta
    const newCards = [...cards];
    newCards[index].isFlipped = true;
    setCards(newCards);

    // Agregar a las cartas volteadas
    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    // Si tenemos 2 cartas volteadas, verificar si coinciden
    if (newFlippedCards.length === 2) {
      checkForMatch(newFlippedCards);
    }
  };

  const checkForMatch = (flippedIndices: number[]) => {
    const [firstIndex, secondIndex] = flippedIndices;
    const firstCard = cards[firstIndex];
    const secondCard = cards[secondIndex];

    // Encontrar el par correspondiente en wordPairs
    const pair = wordPairs.find(pair =>
      (pair.term === firstCard.content && pair.definition === secondCard.content) ||
      (pair.term === secondCard.content && pair.definition === firstCard.content)
    );

    if (pair) {
      // Coincidencia encontrada
      setTimeout(() => {
        const newCards = [...cards];
        newCards[firstIndex].isMatched = true;
        newCards[secondIndex].isMatched = true;
        setCards(newCards);
        setFlippedCards([]);

        // Verificar si el juego está completo
        if (newCards.every(card => card.isMatched)) {
          setGameCompleted(true);
          setShowSuccess(true);
        }
      }, 500);
    } else {
      // No coinciden, voltear de nuevo
      setTimeout(() => {
        const newCards = [...cards];
        newCards[firstIndex].isFlipped = false;
        newCards[secondIndex].isFlipped = false;
        setCards(newCards);
        setFlippedCards([]);
      }, 1000);
    }
  };

  const resetGame = () => {
    initializeGame();
  };

  const usuarioId = localStorage.getItem("usuarioId");

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar className='nombre' color='secondary'>
          <IonTitle >Memorama Financiero</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="game-container">
          <IonGrid>
            <IonRow>
              {cards.map((card, index) => (
                <IonCol className='cartas' size="6" sizeSm="4" sizeMd="4" key={card.id}>
                  <IonCard
                    className={`memory-card ${card.isFlipped ? 'flipped' : ''} ${card.isMatched ? 'matched' : ''}`}
                    onClick={() => handleCardClick(index)}
                  >
                    <IonCardContent className="card-content">
                      <div className="card-front">?</div>
                      <div className="card-back">
                        {card.content}
                      </div>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>

          {gameCompleted && (
            <div className="completion-message">
              <IonButton expand="block" onClick={resetGame}>Jugar de nuevo</IonButton>
              <IonButton className='Regresar' expand="block" href="/Mapa">Ir a menú</IonButton>
            </div>
          )}
        </div>

        <IonAlert
          isOpen={showSuccess}
          onDidDismiss={() => { setShowSuccess(false); completarCap(usuarioId, 2) }}
          header={'¡Felicidades!'}
          message={`Has completado el memorama. Has desbloqueado el siguiente capítulo.`}
          buttons={['OK']}
        />
      </IonContent>
    </IonApp>
  );
};

export default Juego2;