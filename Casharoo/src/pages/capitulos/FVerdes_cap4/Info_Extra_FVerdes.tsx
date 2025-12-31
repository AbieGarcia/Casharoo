import { IonContent, IonHeader, IonPage, IonButton, IonFooter, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import './Info_Extra_FVerdes.css';

import { useHistory } from 'react-router-dom';


const Info_Extra_FVerdes: React.FC = () => {
    const history = useHistory();

    const [showTip, setShowTip] = useState(false);

    return (
        <IonPage>
            <IonHeader>
                <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;700&display=swap" rel="stylesheet"></link>
            </IonHeader>
            <IonContent>
                <body className='bodyExtra_rosa'>

                    <header className='headerExtra_rosa'>
                        <IonButton className='regresar-info-ahorro' onClick={() => history.goBack()}>
                            <img src="..\..\assets\Arrow 1.png"></img>
                        </IonButton>
                        <p className='text-cap3-extra'>Finanzas Verdes</p>
                    </header>

                    <div className='apart_rosa'>
                        <p>Las finanzas verdes muestran que nuestro dinero también tiene un impacto en el planeta.</p>
                        <img className='imgCap' src="..\..\assets\infExtra_4\planeta.png"></img>
                    </div>
                    <p id='infoExtra_txt'>Cada vez que gastamos, ahorramos o invertimos dinero, estamos apoyando algo. Aprender a usarlo de forma responsable puede ayudar a cuidar el medio ambiente hoy y en el futuro.</p>

                    <div className='infoExtra_conceptos'>
                        <p className='infoExtra_title_rosa'>Conceptos importantes</p>
                        <div className='liItem'>
                            <img className='check' src='..\..\assets\checkmark.png'></img>
                            <p>Finanzas verdes</p>
                        </div>
                        <div className='liItem'>
                            <img className='check' src='..\..\assets\checkmark.png'></img>
                            <p>Bonos verdes</p>
                        </div>
                        <div className='liItem'>
                            <img className='check' src='..\..\assets\checkmark.png'></img>
                            <p>Consumo responsable</p>
                        </div>
                        <div className='liItem'>
                            <img className='check' src='..\..\assets\checkmark.png'></img>
                            <p>Préstamos verdes</p>
                        </div>
                    </div>

                    <div className='infoExtra_tema1_rosa'>
                        <p className='infoExtra_title_rosa'>Greenwashing</p>
                        <div className='apart_rosa_fv'>
                            <img className='imgCapGrande' src="..\..\assets\infExtra_4\greenwashing.png"></img>
                            <p >Aunque muchos productos, proyectos o empresas se presentan como ecológicos o amigables con el medio ambiente, no todo lo que dice ser “verde” realmente lo es. Esto es el greenwashing.</p>
                        </div>
                        <p id='infoExtra_txt'><strong>Un proyecto realmente verde debe:</strong></p>
                        <ul>
                            <li>Explicar en qué se está usando el dinero</li>
                            <li>Mostrar y medir su impacto positivo en el planeta</li>
                            <li>Ser claro y transparente</li>
                        </ul>
                    </div>

                    <div className='infoExtra_tema2_rosa'>
                        <p className='infoExtra_title_rosa'>Tu dinero también impacta</p>
                        <p id='infoExtra_txt'><strong>Cuando gastas o inviertes dinero, estás apoyando:</strong></p>
                        <ul>
                            <li>A una empresa</li>
                            <li>A una idea</li>
                            <li>A una forma de producir y consumir</li>
                        </ul>
                        <p id='infoExtra_txt'><strong>Eso significa que tu dinero puede ayudar a:</strong></p>
                        <ul>
                            <li>Proyectos que cuidan el medio ambiente</li>
                            <li>O a otros que lo dañan más</li>
                        </ul>
                        <div className='apart_rosa'>
                            <p id='infoExtra_txt'>Las finanzas verdes nos recuerdan que <strong>no solo importa cuánto dinero ganamos</strong>, sino <strong>en qué lo usamos</strong>. Elegir opciones más responsables, cuando es posible, también es una forma de cuidar el planeta.</p>
                        </div>
                    </div>


                    {/* PIGGY TIPS */}
                    <div className="piggy-tip-container">
                        <button className="piggy-tip-header-rosa" onClick={() => setShowTip(!showTip)}>
                            <span className="piggy-icon">🐷</span>
                            <span className="piggy-title-rosa">Piggy Tip</span>
                            <span className={`arrow-rosa ${showTip ? 'open' : ''}`}>⌄</span>
                        </button>

                        {showTip && (
                            <div className="piggy-tip-card">
                                <p className="piggy-question-rosa">Recuerda que…</p>
                                <p id='infoExtra_txt'>Cuidar el planeta no siempre significa comprar cosas “eco”.
                                    Muchas veces, reutilizar, reparar, o no comprar es la opción más responsable.</p>
                            </div>
                        )}
                    </div>


                </body>
            </IonContent>
        </IonPage >
    );
};

export default Info_Extra_FVerdes;


