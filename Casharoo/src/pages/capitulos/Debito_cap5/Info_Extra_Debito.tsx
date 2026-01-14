import { IonContent, IonHeader, IonPage, IonButton, IonFooter, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import './Info_Extra_Debito.css';

import { useHistory } from 'react-router-dom';


const Info_Extra_Debito: React.FC = () => {
    const history = useHistory();

    const [showTip, setShowTip] = useState(false);

    const [partesTarjeta, setPartesTarjeta] = useState([
        {
            id: 0,
            active: false,
            title: "1. Número de tarjeta",
            content: "Número único que identifica la tarjeta",
        },
        {
            id: 1,
            active: false,
            title: "2. Fechas de vencimiento",
            content: "Desde qué fecha a qué fecha se puede usar",
        },
        {
            id: 2,
            active: false,
            title: "3. Nombre del titular",
            content: "Quién es el dueño de la tarjeta",
        },
        {
            id: 3,
            active: false,
            title: "4. Banda magnética",
            content: "Almacena datos de la tarjeta",
        },
        {
            id: 4,
            active: false,
            title: "5. Espacio para firma",
            content: "Lugar donde firma el titular",
        },
        {
            id: 5,
            active: false,
            title: "6. CVV",
            content: "Código de verificación de tres dígitos para validar compras en línea",
        },
    ])

    const toggleTarjeta = (id: number) => {
        setPartesTarjeta(prev =>
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
                        <p className='text-cap1-extra'>Débito</p>
                    </header>

                    <div className='apart_amarillo_deb'>
                        <img className='imgCapGrande' src="..\..\assets\infExtra_5\tarjeta.png"></img>
                    </div>
                    <p id='infoExtra_txt'>Las tarjetas son herramientas muy útiles para manejar nuestro dinero día a día. Hay varios tipos de tarjetas, pero esta es una de las más fáciles e importantes de entender.</p>

                    <div className='infoExtra_conceptos'>
                        <p className='infoExtra_title_amarillo'>Conceptos importantes</p>
                        <div className='liItem'>
                            <img className='check' src='..\..\assets\checkmark.png'></img>
                            <p>Tarjeta de débito</p>
                        </div>
                        <div className='liItem'>
                            <img className='check' src='..\..\assets\checkmark.png'></img>
                            <p>Saldo</p>
                        </div>
                        <div className='liItem'>
                            <img className='check' src='..\..\assets\checkmark.png'></img>
                            <p>Cuenta bancaria</p>
                        </div>
                        <div className='liItem'>
                            <img className='check' src='..\..\assets\checkmark.png'></img>
                            <p>Efectivo</p>
                        </div>
                    </div>

                    <div className='infoExtra_tema1_amarillo'>
                        <p className='infoExtra_title_amarillo'>Partes de una tarjeta</p>
                        <div className='apart_amarillo'>
                            <p >Sin importar el tipo de tarjeta (débito o crédito), su apariencia y partes son iguales:
                            </p>
                        </div>
                        <p></p>
                        <img src='..\..\assets\infExtra_5\piggy card.png'></img>

                        {
                            partesTarjeta.map(t => (
                                !t.active ? (
                                    <button key={t.id} className='infoExtra_btn_amarillo' onClick={() => toggleTarjeta(t.id)}>
                                        <p className='infoExtra_card_titleamarillo'>{t.title}</p>
                                        <span className={`arrow-amarillo ${t.active ? "open" : ""}`}>⌄</span>
                                    </button>
                                ) :
                                    (
                                        <div className='infoExtra_btn_amarillo' onClick={() => toggleTarjeta(t.id)}>
                                            <p id='infoExtra_txt'>{t.content}</p>
                                            <span className={`arrow-amarillo ${t.active ? "open" : ""}`}>⌄</span>

                                        </div>
                                    )
                            ))
                        }

                    </div>

                    <div className='infoExtra_tema2_amarillo'>
                        <p className='infoExtra_title_amarillo'>Formas de usar una tarjeta</p>
                        <div className='apart_amarillo'>
                            <p>A la hora de pagar con una  tarjeta hay varias maneras de hacerlo:</p>
                        </div>
                        <ol>
                            <li><strong>Pago sin contacto:</strong> Solo acercando la tarjeta a la terminal de pago</li>
                            <li><strong>Chip y PIN:</strong> Insertando la tarjeta a la terminal y tecleando tu clave secreta de 4 números</li>
                            <li><strong>En línea:</strong> Ingresando los datos de tu tarjeta (número, vencimiento, nombre del titular ) más el CVV.</li>
                        </ol>
                        <img className='imgCapGrande' src="..\..\assets\infExtra_5\terminal.png"></img>
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
                                <p className='piggy-content-2'><strong>Tu tarjeta es como una llave secreta</strong></p>
                                <p>Nunca compartas tu número de tarjeta, tu PIN ni tu CVV con nadie, ni siquiera con amigos o familiares.</p>
                            </div>
                        )}
                    </div>


                </body>
            </IonContent>
        </IonPage >
    );
};

export default Info_Extra_Debito;


