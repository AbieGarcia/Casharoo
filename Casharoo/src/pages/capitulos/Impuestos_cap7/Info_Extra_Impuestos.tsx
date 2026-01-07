import { IonContent, IonHeader, IonPage, IonButton, IonFooter, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import './Info_Extra_Impuestos.css';

import { useHistory } from 'react-router-dom';


const Info_Extra_Impuestos: React.FC = () => {
    const history = useHistory();

    const [showTip, setShowTip] = useState(false);

    const [tiposImpuestos, setTiposImpuestos] = useState([
        {
            id: 0,
            active: false,
            title: "IEPS (Impuesto Especial sobre Producción y Servicios)",
            content: "Extra que pagamos por comprar productos no esenciales o no saludables como comida chatarra, bebidas saborizadas o productos muy calóricos 🍬🍿🥤.",
        },
        {
            id: 1,
            active: false,
            title: "ISAN (Impuesto sobre Automóviles Nuevos)",
            content: "Impuesto por la compra o venta de un carro nuevo 🚗💫.",
        },
        {
            id: 2,
            active: false,
            title: "Tenencia",
            content: "Pago anual por tener un carro (en algunos estados) 👤🚙. ",
        },
        {
            id: 3,
            active: false,
            title: "Refrendo",
            content: "Pago anual para renovar placas y tarjeta de circulación de un carro 👤🚙🪪.",
        },

    ])

    const toggleTipImp = (id: number) => {
        setTiposImpuestos(prev =>
            prev.map(t => t.id === id ? { ...t, active: !t.active } : t)
        );
    }

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
                        <p className='text-cap3-extra'>Impuestos</p>
                    </header>

                    <div className='apart_rosa'>
                        <p>Todos contribuimos a los servicios de transporte, educación, salud y seguridad que tenemos en nuestra comunidad gracias a nuestros impuestos.</p>
                        <img className='imgCapGrande' src="..\..\assets\infExtra_7\impuestos.png"></img>
                    </div>
                    <p id='infoExtra_txt'> Por esto es importante entenderlos de una manera responsable.</p>

                    <div className='infoExtra_conceptos'>
                        <p className='infoExtra_title_rosa'>Conceptos importantes</p>
                        <div className='liItem'>
                            <img className='check' src='..\..\assets\checkmark.png'></img>
                            <p>Impuestos</p>
                        </div>
                        <div className='liItem'>
                            <img className='check' src='..\..\assets\checkmark.png'></img>
                            <p>SAT</p>
                        </div>
                        <div className='liItem'>
                            <img className='check' src='..\..\assets\checkmark.png'></img>
                            <p>Secretaría de Hacienda</p>
                        </div>
                        <div className='liItem'>
                            <img className='check' src='..\..\assets\checkmark.png'></img>
                            <p>ISR (Impuesto sobre la renta)</p>
                        </div>
                        <div className='liItem'>
                            <img className='check' src='..\..\assets\checkmark.png'></img>
                            <p>IVA (Impuesto al valor agregado)</p>
                        </div>
                        <div className='liItem'>
                            <img className='check' src='..\..\assets\checkmark.png'></img>
                            <p>Predial</p>
                        </div>
                    </div>

                    <div className='infoExtra_tema1_rosa'>
                        <p className='infoExtra_title_rosa'>¿Por qué existen diferentes impuestos?</p>
                        <div className='apart_rosa_fv'>
                            <img className='imgCapGrande' src="..\..\assets\infExtra_7\tax.png"></img>
                            <p >No todas las personas ganan lo mismo ni consumen de la misma manera. Por eso existen diferentes tipos de impuestos.</p>
                        </div>
                        <ul>
                            <li>Algunas personas pagan impuestos <strong>por lo que ganan</strong></li>
                            <li>Otras <strong>por lo que compran</strong></li>
                            <li>Otras <strong>por lo que tienen</strong>, como una casa o un terreno</li>
                        </ul>
                        <p id='infoExtra_txt'>De esta forma, el gobierno puede recaudar dinero de manera más justa para ofrecer servicios a toda la población.</p>
                    </div>

                    <div className='infoExtra_tema2_rosa'>
                        <p className='infoExtra_title_rosa'>Otros tipos de impuestos</p>
                        <div className='apart_rosa'>
                            <p>Ya conociste los impuestos más importantes y conocidos, pero también contribuimos con impuestos a otras cosas:</p>
                        </div>
                        {
                            tiposImpuestos.map(t => (
                                !t.active ? (
                                    <button key={t.id} className='infoExtra_btn_rosa' onClick={() => toggleTipImp(t.id)}>
                                        <p className='infoExtra_card_titlerosa'>{t.title}</p>
                                        <span className={`arrow-rosa ${t.active ? "open" : ""}`}>⌄</span>
                                    </button>
                                ) :
                                    (
                                        <div key={t.id} className='infoExtra_btn_rosa' onClick={() => toggleTipImp(t.id)}>
                                            <p id='infoExtra_txt'>{t.content}</p>
                                            <span className={`arrow-rosa ${t.active ? "open" : ""}`}>⌄</span>


                                        </div>
                                    )
                            ))
                        }
                    </div>


                    <div className='infoExtra_tema3_rosa'>
                        <p className='infoExtra_title_rosa'>¿Qué pasa si no se pagan los impuestos?</p>
                        <p id='infoExtra_txt'><strong>No pagar impuestos tiene consecuencias, como:</strong></p>

                        <ul>
                            <li>Multas o recargos</li>
                            <li>Problemas legales</li>
                            <li>Dificultades para pedir créditos o abrir negocios en el futuro</li>
                        </ul>
                        <div className='apart_rosa'>
                            <p>Cumplir con los impuestos ayuda a mantener un historial financiero sano y evita problemas más adelante.</p>
                            <img className='imgCapGrande' src="..\..\assets\infExtra_7\cumplir.png"></img>

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
                                <p className="piggy-question-rosa">Piggy te reta a observar…</p>
                                <p id='infoExtra_txt'><strong>Hoy fijate en tu recibo del súper o restaurante. ¿Ves una línea que diga “IVA”?</strong> Ese impuesto ya está incluido en lo que pagaste, aunque no lo notes.</p>
                            </div>
                        )}
                    </div>


                </body>
            </IonContent>
        </IonPage >
    );
};

export default Info_Extra_Impuestos;


