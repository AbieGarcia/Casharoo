import { IonContent, IonHeader, IonPage, IonButton, IonFooter, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import './Info_Extra_Bancos.css';

import { useHistory } from 'react-router-dom';


const Info_Extra_Bancos: React.FC = () => {
    const history = useHistory();

    const [showTip, setShowTip] = useState(false);

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
                        <p className='text-cap1-extra'>Bancos</p>
                    </header>

                    <div className='apart_amarillo'>
                        <p>Los bancos son instituciones que ayudan a las personas a guardar, prestar y mover su dinero.</p>
                        <img className='imgCap' src="..\..\assets\infExtra_2\banco.png"></img>
                    </div>
                    <p id='infoExtra_txt'>Tal vez aún no tienes una cuenta de ahorro o crédito, pero entender cómo funcionan los bancos te ayudará a tomar mejores decisiones cuando la tengas.</p>

                    <div className='infoExtra_conceptos'>
                        <p className='infoExtra_title_amarillo'>Conceptos importantes</p>
                        <div className='liItem'>
                            <img className='check' src='..\..\assets\checkmark.png'></img>
                            <p>Préstamos</p>
                        </div>
                        <div className='liItem'>
                            <img className='check' src='..\..\assets\checkmark.png'></img>
                            <p>Ahorros</p>
                        </div>
                        <div className='liItem'>
                            <img className='check' src='..\..\assets\checkmark.png'></img>
                            <p>Intereses</p>
                        </div>
                        <div className='liItem'>
                            <img className='check' src='..\..\assets\checkmark.png'></img>
                            <p>Transacciones bancarias</p>
                        </div>
                    </div>

                    <div className='infoExtra_tema1_amarillo'>
                        <p className='infoExtra_title_amarillo'> Funciones principales</p>
                        <div className='apart_amarillo'>
                            <img className='imgCap' src="..\..\assets\infExtra_2\bancoConecta.png"></img>
                            <p >Los bancos conectan el dinero de las personas que ahorran con el de las personas que necesitan pedir prestado. Además, ofrecen herramientas para manejar y mover tu dinero.</p>
                        </div>
                        <ol>
                            <li><strong>Cuidar y guardar tus ahorros:</strong> Reciben dinero de sus clientes que depositan en sus cuentas. Como recompensa les pagan un rendimiento, que es un pequeño dinero extra al que ya tenían.</li>
                            <li><strong>Prestar dinero:</strong> Con el dinero de quienes ahorran, le prestan a quienes lo necesitan. Quien pida un préstamo debe devolver lo que les prestaron más un interés, que es dinero adicional al que pidieron prestado.</li>
                            <li><strong>Servicios de pago:</strong> Permiten mover el dinero de sus clientes de una cuenta o banco a otro por medio de transacciones bancarias.</li>
                        </ol>
                    </div>

                    <div className='infoExtra_tema2_amarillo'>
                        <p className='infoExtra_title_amarillo'>Tipos de transacciones bancarias</p>
                        <div className='apart_amarillo'>
                            <p>Son las maneras de mover y manejar tu dinero, estas son:</p>
                        </div>


                        <div className='infoExtra_card_amarillo'>
                            <p className='infoExtra_card_titleamarillo'>Depósitos:</p>
                            <p id='infoExtra_txt'>Añadir dinero a una cuenta (darle tu dinero al banco)</p>
                            <img className='imgCap' src="..\..\assets\infExtra_2\deposito.png"></img>
                        </div>

                        <div className='infoExtra_card_amarillo'>
                            <p className='infoExtra_card_titleamarillo'>Retiros:</p>
                            <p id='infoExtra_txt'>Sacar dinero de una cuenta (recuperar tu dinero del banco)</p>
                            <img className='imgCap' src="..\..\assets\infExtra_2\retiro.png"></img>
                        </div>

                        <div className='infoExtra_card_amarillo'>
                            <p className='infoExtra_card_titleamarillo'>Transferencias:</p>
                            <p id='infoExtra_txt'>Enviar o recibir dinero de la cuenta de otra persona</p>
                            <img className='imgCap' src="..\..\assets\infExtra_2\transferencia.png"></img>
                        </div>
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
                                <p className="piggy-question-amarillo">¿Sabías que…?</p>
                                <p> Si un banco llega a tener problemas, tu dinero no desaparece. </p>
                                <p className='piggy-content-2'>En México existe el <strong>IPAB</strong>, una institución que <strong>protege los ahorros</strong> de las personas hasta cierto límite (alrededor de <strong>3 millones de pesos</strong>).</p>
                                <p>Su trabajo es ayudarte a recuperar tu dinero protegido.</p>
                            </div>
                        )}
                    </div>


                </body>
            </IonContent>
        </IonPage >
    );
};

export default Info_Extra_Bancos;


