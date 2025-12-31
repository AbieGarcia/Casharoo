import { IonContent, IonHeader, IonPage, IonButton, IonFooter, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import './Info_Extra_Inversiones.css';

import { useHistory } from 'react-router-dom';


const Info_Extra_Inversiones: React.FC = () => {
    const history = useHistory();

    const [showTip, setShowTip] = useState(false);

    return (
        <IonPage>
            <IonHeader>
                <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;700&display=swap" rel="stylesheet"></link>
            </IonHeader>
            <IonContent>
                <body className='bodyExtra_azul'>

                    <header className='headerExtra_azul'>
                        <IonButton className='regresar-info-ahorro' onClick={() => history.goBack()}>
                            <img src="..\..\assets\Arrow 1.png"></img>
                        </IonButton>
                        <p className='text-cap3-extra'>Inversiones</p>
                    </header>

                    <div className='apart_azul'>
                        <p>Invertir es como poner tu dinero a trabajar para que, con el tiempo, pueda crecer.</p>
                        <img className='imgCap' src="..\..\assets\infExtra_3\invertir.png"></img>
                    </div>
                    <p id='infoExtra_txt'>Aunque pueden parecer muy atractivas, no son magia, a veces el dinero crece, a veces se mantiene igual y otras veces puede bajar. Por eso hay que entender cómo funcionan antes de usarlas.</p>

                    <div className='infoExtra_conceptos'>
                        <p className='infoExtra_title_azul'>Conceptos importantes</p>
                        <div className='liItem'>
                            <img className='check' src='..\..\assets\checkmark.png'></img>
                            <p>Interés</p>
                        </div>
                        <div className='liItem'>
                            <img className='check' src='..\..\assets\checkmark.png'></img>
                            <p>Riesgo</p>
                        </div>
                        <div className='liItem'>
                            <img className='check' src='..\..\assets\checkmark.png'></img>
                            <p>Ganancia</p>
                        </div>
                        <div className='liItem'>
                            <img className='check' src='..\..\assets\checkmark.png'></img>
                            <p>Diversificación</p>
                        </div>
                    </div>


                    <div className='infoExtra_tema1_azul'>
                        <p className='infoExtra_title_azul'>Inversiones en la vida real</p>
                        <div className='apart_azul'>
                            <p >Como viste en este capítulo, una idea de negocio, como el de la venta de pasteles, es un ejemplo de inversión real. Pero no todas las inversiones son negocios, también hay otros tipos.</p>
                        </div>
                        <div className='infoExtra_card_azul'>
                            <p className='infoExtra_card_titleazul'>CETES</p>
                            <p id='infoExtra_txt'>Le prestas dinero al gobierno mexicano por un tiempo y al final del plazo, te devuelven lo que les prestaste más una ganancia. Es considerada una inversión de bajo riesgo e ideal para principiantes.</p>
                            <img src="..\..\assets\infExtra_3\CETES.png"></img>
                        </div>
                        <div className='infoExtra_card_azul'>
                            <p className='infoExtra_card_titleazul'>Acciones de empresas</p>
                            <p id='infoExtra_txt'>Compras un pedacito de una empresa. Mientras a esa empresa le vaya bien tu pedacito vale más. Pero mientras a la empresa le vaya mal tu pedacito pierde valor. Tu acción la puedes vender cuando creas que su valor te conviene más. Es una inversión con más riesgo, dependes de cómo le vaya a la empresa y es importante informarte antes de invertir.</p>
                            <img src="..\..\assets\infExtra_3\acciones.png"></img>
                        </div>
                    </div>



                    <div className='infoExtra_tema2_azul'>
                        <p className='infoExtra_title_azul'>Intereses e inversiones</p>
                        <p id='infoExtra_txt'>En algunas inversiones, la ganancia que obtienes se llama interés.
                            Dependiendo de la inversión, ese interés puede ser simple o compuesto.
                        </p>


                        <div className='infoExtra_card_azul'>
                            <p className='infoExtra_card_titleazul'>Interés simple</p>
                            <p id='infoExtra_txt'>Tu ganancia se calcula siempre sobre tu dinero original.</p>
                            <p id='infoExtra_txt'><strong>Ejemplo:</strong> Inviertes $100 en el banco y te prometen crecer tu dinero 5% cada año
                            </p>

                            <tr><th>Interés simple ejemplo</th></tr>
                            <table>
                                <tr>
                                    <th></th>
                                    <th>Ganancia (interés)</th>
                                    <th>Dinero final</th>
                                </tr>
                                <tr>
                                    <td>Año 1</td>
                                    <td>$5</td>
                                    <td>$105</td>
                                </tr>
                                <tr>
                                    <td>Año 2</td>
                                    <td>$5</td>
                                    <td>$110</td>
                                </tr>
                                <tr>
                                    <td>Año 3</td>
                                    <td>$5</td>
                                    <td>$115</td>
                                </tr>
                            </table>
                        </div>
                        <div className='infoExtra_card_azul'>
                            <p className='infoExtra_card_titleazul'>Interés compuesto</p>
                            <p id='infoExtra_txt'>Tu ganancia se calcula sobre tu dinero original + el dinero que vas ganando.</p>
                            <p id='infoExtra_txt'><strong>Ejemplo:</strong> Inviertes $100 en el banco y te prometen crecer tu dinero 5% cada año usando interés compuesto</p>

                            <tr><th>Interés compuesto ejemplo</th></tr>
                            <table>
                                <tr>
                                    <th></th>
                                    <th>Dinero inicial</th>
                                    <th>Ganancia (interés)</th>
                                    <th>Dinero final</th>
                                </tr>
                                <tr>
                                    <td>Año 1</td>
                                    <td>$100</td>
                                    <td>$5</td>
                                    <td>$105</td>
                                </tr>
                                <tr>
                                    <td>Año 2</td>
                                    <td>$105</td>
                                    <td>$5.25</td>
                                    <td>$110.25</td>
                                </tr>
                                <tr>
                                    <td>Año 3</td>
                                    <td>$110.25</td>
                                    <td>$5.51</td>
                                    <td>$115.76</td>
                                </tr>
                            </table>

                        </div>
                        <p className='apart_azul'>Como puedes ver, con el interés compuesto el dinero crece un poco más cada año, porque las ganancias también empiezan a generar nuevas ganancias.</p>
                    </div>


                    {/* PIGGY TIPS */}
                    <div className="piggy-tip-container">
                        <button className="piggy-tip-header-azul" onClick={() => setShowTip(!showTip)}>
                            <span className="piggy-icon">🐷</span>
                            <span className="piggy-title-azul">Piggy Tip</span>
                            <span className={`arrow-azul ${showTip ? 'open' : ''}`}>⌄</span>
                        </button>

                        {showTip && (
                            <div className="piggy-tip-card">
                                <p className="piggy-question-azul">Mito vs. Verdad</p>
                                <p><strong>Mito:</strong> Invertir es una forma rápida de hacerse rico.</p>
                                <p><strong>Verdad:</strong> La mayoría de las inversiones crecen poco a poco y necesitan tiempo. Generalmente las grandes ganancias implican riesgos más grandes.</p>
                            </div>
                        )}
                    </div>


                </body>
            </IonContent>
        </IonPage >
    );
};

export default Info_Extra_Inversiones;


