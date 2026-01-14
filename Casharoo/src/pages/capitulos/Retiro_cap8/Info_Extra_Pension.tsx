import { IonContent, IonHeader, IonPage, IonButton, IonFooter, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import './Info_Extra_Pension.css';

import { useHistory } from 'react-router-dom';


const Info_Extra_Pension: React.FC = () => {
    const history = useHistory();

    const [showTip, setShowTip] = useState(false);

    const [AFORE, setAFORE] = useState([
        {
            id: 0,
            active: false,
            title: "¿Qué es?",
            content: "Las AFORES son instituciones financieras que guardan e invierten el dinero destinado al retiro de los trabajadores, para que cuando llegue el momento de jubilarse o retirarse, puedan usar ese dinero y los rendimientos que generó con el tiempo.",
        },
        {
            id: 1,
            active: false,
            title: "¿Cómo aportar al AFORE?",
            content: "El dinero de tu cuenta AFORE se añade de manera automática cada vez que te pagan:",
        },
        {
            id: 2,
            active: false,
            title: "AFORES autorizados",
            content: "En México existen varias AFORES autorizadas para manejar los ahorros para el retiro. Cada una tiene diferentes rendimientos y comisiones. Algunos ejemplos son:",
        },

    ])

    const toggleAFORE = (id: number) => {
        setAFORE(prev =>
            prev.map(t => t.id === id ? { ...t, active: !t.active } : t)
        );
    }

    return (
        <IonPage>
            <IonHeader>
                <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;700&display=swap" rel="stylesheet"></link>
            </IonHeader>
            <IonContent>
                <body className='bodyExtra'>

                    <header className='headerExtra_amarillo'>
                        <IonButton className='regresar-info-ahorro' onClick={() => history.goBack()}>
                            <img src="..\..\assets\Arrow 1.png"></img>
                        </IonButton>
                        <p className='text-cap1-extra'>Pensión</p>
                    </header>

                    <div className='apart_amarillo'>
                        <p >Aunque pueda parecer que falta mucho mucho tiempo para jubilarte, empezar a pensar en ese momento desde joven puede marcar una gran diferencia en tu futuro.</p>
                        <img className='imgCapGrande' src="..\..\assets\infExtra_8\viejitos.png"></img>
                    </div>
                    <p id='infoExtra_txt'>Existen varias herramientas que te ayudan a prepararte para tu vida como adulto mayor. Conocerlas no solo te educa, te da una ventaja para tomar mejores decisiones más adelante.</p>

                    <div className='infoExtra_conceptos'>
                        <p className='infoExtra_title_amarillo'>Conceptos importantes</p>
                        <div className='liItem'>
                            <img className='check' src='..\..\assets\checkmark.png'></img>
                            <p>AFORE</p>
                        </div>
                        <div className='liItem'>
                            <img className='check' src='..\..\assets\checkmark.png'></img>
                            <p>Plan de pensión</p>
                        </div>
                        <div className='liItem'>
                            <img className='check' src='..\..\assets\checkmark.png'></img>
                            <p>Interés compuesto</p>
                        </div>
                        <div className='liItem'>
                            <img className='check' src='..\..\assets\checkmark.png'></img>
                            <p>Jubilación</p>
                        </div>
                    </div>

                    <div className='infoExtra_tema1_amarillo'>
                        <p className='infoExtra_title_amarillo'>AFORE</p>
                        <div className='apart_amarillo_deb'>
                            <img className='imgCapGrande' src="..\..\assets\infExtra_8\afore.png"></img>
                            <p >Ya entendiste que es un  PPR (Plan Personal de Retiro), pero ¿sabías que por ley todos los trabajadores en México tienen otro fondo de ahorro para su retiro? Ese fondo se llama AFORE.
                            </p>
                        </div>
                        {

                            !AFORE[0].active ? (
                                <button key={AFORE[0].id} className='infoExtra_btn_amarillo' onClick={() => toggleAFORE(AFORE[0].id)}>

                                    <p className='infoExtra_card_titleamarillo'>{AFORE[0].title}</p>

                                    <span className={`arrow-amarillo ${AFORE[0].active ? "open" : ""}`}>⌄</span>
                                </button>
                            ) :
                                (
                                    <div className='infoExtra_btn_amarillo' onClick={() => toggleAFORE(AFORE[0].id)}>
                                        <div>
                                            <p id='infoExtra_txt'>{AFORE[0].content}</p>
                                            <p id='infoExtra_txt'><strong>Aunque una AFORE administre el dinero, el dinero siempre es del trabajador</strong></p>

                                        </div>
                                        <span className={`arrow-amarillo ${AFORE[0].active ? "open" : ""}`}>⌄</span>

                                    </div>
                                )

                        }
                        {

                            !AFORE[1].active ? (
                                <button key={AFORE[1].id} className='infoExtra_btn_amarillo' onClick={() => toggleAFORE(AFORE[1].id)}>
                                    <p className='infoExtra_card_titleamarillo'>{AFORE[1].title}</p>
                                    <span className={`arrow-amarillo ${AFORE[1].active ? "open" : ""}`}>⌄</span>
                                </button>
                            ) :
                                (
                                    <div className='infoExtra_btn_amarillo' onClick={() => toggleAFORE(AFORE[1].id)}>
                                        <div>
                                            <p id='infoExtra_txt'>{AFORE[1].content}</p>
                                            <ul>
                                                <li>Una parte la aporta el trabajador</li>
                                                <li>Otra parte quien lo contrató</li>
                                                <li>Y otra parte el gobierno</li>
                                            </ul>
                                            <p><strong>Todo ese dinero se va juntando para el futuro</strong></p>
                                        </div>
                                        <span className={`arrow-amarillo ${AFORE[1].active ? "open" : ""}`}>⌄</span>

                                    </div>
                                )

                        }
                        {

                            !AFORE[2].active ? (
                                <button key={AFORE[2].id} className='infoExtra_btn_amarillo' onClick={() => toggleAFORE(AFORE[2].id)}>
                                    <p className='infoExtra_card_titleamarillo'>{AFORE[2].title}</p>
                                    <span className={`arrow-amarillo ${AFORE[2].active ? "open" : ""}`}>⌄</span>
                                </button>
                            ) :
                                (
                                    <div className='infoExtra_btn_amarillo' onClick={() => toggleAFORE(AFORE[2].id)}>
                                        <div>
                                            <p id='infoExtra_txt'>{AFORE[2].content}</p>
                                            <ul>
                                                <li>Afore Azteca</li>
                                                <li>Banamex Afore</li>
                                                <li>Profuturo</li>
                                                <li>Sura</li>
                                            </ul>
                                        </div>
                                        <span className={`arrow-amarillo ${AFORE[2].active ? "open" : ""}`}>⌄</span>

                                    </div>
                                )

                        }

                    </div>

                    <div className='infoExtra_tema2_amarillo'>
                        <p className='infoExtra_title_amarillo'>Inversiones y AFORE</p>
                        <div className='apart_amarillo'>
                            <p>El dinero que se ahorra en una AFORE no se queda guardado sin moverse.
                                Se invierte en diferentes productos que usan interés compuesto, lo que permite que crezca con el paso de los años.
                            </p>
                        </div>
                        <p id='infoExtra_txt'>Dependiendo de la edad:</p>
                        <ul>
                            <li><strong>Caundo eres joven</strong>, el dinero puede invertirse con más riesgo y mayor posibilidad de crecimiento</li>
                            <li><strong>Conforme pasan los años</strong>, las inversiones se vuelven más seguras</li>
                        </ul>
                        <p>Esto ayuda a cuidar el ahorro para el retiro.</p>
                        <img className='imgCapGrande' src="..\..\assets\infExtra_8\inversion.png"></img>
                    </div>


                    {/* PIGGY TIPS */}
                    <div className="piggy-tip-container">
                        <button className="piggy-tip-header-amarillo" onClick={() => setShowTip(!showTip)}>
                            <span className="piggy-icon">🐷</span>
                            <span className="piggy-title-amarillo">Piggy Tip</span>
                            <span className={`arrow-amarillo ${showTip ? 'open' : ''}`}>⌄</span>
                        </button>

                        {showTip && (
                            <div className="piggy-tip-card">
                                <p className="piggy-question-amarillo">Piggy te recuerda que…</p>
                                <p className='piggy-content-2'><strong>En el ahorro para el retiro, el tiempo vale más que el dinero</strong></p>
                                <p>Ahorrar poco durante muchos años puede ser mejor que ahorrar mucho durante pocos años</p>
                                <p>Por eso, empezar temprano hace que el interés compuesto trabaje a tu favor</p>
                            </div>
                        )}
                    </div>


                </body>
            </IonContent>
        </IonPage >
    );
};

export default Info_Extra_Pension;


