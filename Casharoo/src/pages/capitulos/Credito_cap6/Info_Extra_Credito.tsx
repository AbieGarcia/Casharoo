import { IonContent, IonHeader, IonPage, IonButton, IonFooter, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import './Info_Extra_Credito.css';

import { useHistory } from 'react-router-dom';


const Info_Extra_Credito: React.FC = () => {
    const history = useHistory();

    const [showTip, setShowTip] = useState(false);


    const [historialCreditico, setHistorialCrediticio] = useState([
        {
            id: 0,
            active: false,
            title: "¿Qué es?",
            content: "Es tu “currículum financiero”, un registro de las deudas que tienes y cómo las has manejado, si has pagado a tiempo, qué créditos o tarjetas tienes, cuánto debes.",
            img: "..\..\assets\infExtra_6\historial.png"
        },
        {
            id: 1,
            active: false,
            title: "¿Para qué sirve?",
            content: "Cuando quieres pedir prestado dinero o solicitar una tarjeta de crédito los bancos checan tu historial crediticio en el Buró de Crédito para decidir si confiar en ti o no. Puede ser algo decisivo.",
            img: "..\..\assets\infExtra_6\historial.png"
        },
        {
            id: 2,
            active: false,
            title: "¿Cómo empezar a construir uno?",
            content: "Los bancos pueden empezar a conocerte financieramente con una cuenta de ahorro activa, pero tu historial crediticio comienza cuando usas productos donde te prestan dinero, como una tarjeta de crédito o un crédito pequeño.",
            img: '..\..\assets\infExtra_6\historial.png'
        },

    ])

    const toggleHistCred = (id: number) => {
        setHistorialCrediticio(prev =>
            prev.map(t => t.id === id ? { ...t, active: !t.active } : t)
        );
    }

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
                        <p className='text-cap3-extra'>Crédito</p>
                    </header>

                    <div className='apart_azul_cred'>
                        <img className='imgCapGrande' src="..\..\assets\infExtra_6\tarjetaCred.png"></img>
                        <p>Las tarjetas de crédito son una gran herramienta para comprar cosas que queremos, empezar proyectos y alcanzar metas.</p>
                    </div>
                    <p id='infoExtra_txt'>Pueden ser una herramienta poderosa si son utilizadas correctamente. Por eso es muy importante recordar que una tarjeta de crédito no es igual a tener más dinero, sino a aplazar el momento en el que pagas.</p>

                    <div className='infoExtra_conceptos'>
                        <p className='infoExtra_title_azul'>Conceptos importantes</p>
                        <div className='liItem'>
                            <img className='check' src='..\..\assets\checkmark.png'></img>
                            <p>Límite de crédito</p>
                        </div>
                        <div className='liItem'>
                            <img className='check' src='..\..\assets\checkmark.png'></img>
                            <p>Intereses</p>
                        </div>
                        <div className='liItem'>
                            <img className='check' src='..\..\assets\checkmark.png'></img>
                            <p>Pago mínimo</p>
                        </div>
                        <div className='liItem'>
                            <img className='check' src='..\..\assets\checkmark.png'></img>
                            <p>Meses sin intereses</p>
                        </div>
                        <div className='liItem'>
                            <img className='check' src='..\..\assets\checkmark.png'></img>
                            <p>Historial crediticio</p>
                        </div>
                    </div>


                    <div className='infoExtra_tema1_azul'>
                        <p className='infoExtra_title_azul'>Historial crediticio</p>
                        <img className='imgCapGrande' src="..\..\assets\infExtra_6\historial.png"></img>
                        {
                            historialCreditico.map(t => (
                                !t.active ? (
                                    <button key={t.id} className='infoExtra_btn_azul' onClick={() => toggleHistCred(t.id)}>
                                        <p className='infoExtra_card_titleazul'>{t.title}</p>
                                        <span className={`arrow-amarillo ${t.active ? "open" : ""}`}>⌄</span>
                                    </button>
                                ) :
                                    (
                                        <div key={t.id} className='infoExtra_btn_azul' onClick={() => toggleHistCred(t.id)}>
                                            <p id='infoExtra_txt'>{t.content}</p>
                                            <span className={`arrow-amarillo ${t.active ? "open" : ""}`}>⌄</span>


                                        </div>
                                    )
                            ))
                        }
                    </div>



                    <div className='infoExtra_tema2_azul'>
                        <p className='infoExtra_title_azul'>Estado de cuenta</p>
                        <div className='apart_azul'>
                            <p id='infoExtra_txt'>Es importante saber leer tu estado de cuenta para poder <strong>verificar los movimientos que has hecho, cuánto debes y hasta cuando tienes que pagar.</strong> Repasemos lo que viene en este documento.</p>
                        </div>
                        <p></p>
                        <table>
                            <tr>
                                <th>Parte del estado</th>
                                <th>¿Qué me dice?</th>
                            </tr>
                            <tr>
                                <td>Saldo</td>
                                <td id='infoExtra_txt_strong'><strong>Cuánto dinero debes</strong> en total</td>
                            </tr>
                            <tr>
                                <td>Movimientos</td>
                                <td id='infoExtra_txt_strong'>Lista de<strong> todas las compras que hiciste</strong> con tu tarjeta este mes</td>
                            </tr>
                            <tr>
                                <td>Promociones</td>
                                <td id='infoExtra_txt_strong'><strong>Compras realizadas a meses</strong></td>
                            </tr>
                            <tr>
                                <td>Fecha de corte</td>
                                <td id='infoExtra_txt_strong'><strong>Último día que consideró el banco</strong> para cobrarte este mes</td>
                            </tr>
                            <tr>
                                <td>Fecha límite de pago</td>
                                <td id='infoExtra_txt_strong'> <strong>Hasta cuándo tienes para pagar</strong> </td>
                            </tr>
                            <tr>
                                <td>Pago mínimo</td>
                                <td id='infoExtra_txt_strong'>Lo mínimo que tienes que pagar para que te sigan prestando dinero. <strong>Pagar solo esto evita el castigo, pero no evita los intereses</strong></td>
                            </tr>
                            <tr>
                                <td>Pago para no generar intereses</td>
                                <td id='infoExtra_txt_strong'>La cantidad a pagar de todo lo que consumiste este mes, liquidar esto significa que ya no deberás nada. <strong>Pagar esta cantidad significa que usaste la tarjeta sin costo extra</strong></td>
                            </tr>
                            <tr>
                                <td>CAT (Costo Anual Total)</td>
                                <td id='infoExtra_txt_strong'> <strong>Porcentaje que resume todo lo que pagas por un crédito en un año</strong>, incluyendo intereses, comisiones que se queda el banco y cobros adicionales.</td>
                            </tr>
                        </table>

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
                                <p className="piggy-question-azul">Piggy te recuerda que…</p>
                                <p className='piggy-content-3'><strong>Si revisas tu estado de cuenta y encuentras un cargo que no reconoces, avisa de inmediato a tu banco.</strong></p>
                                <p> Tienes hasta 90 días desde la fecha de corte para reclamar y proteger tu dinero.</p>
                            </div>
                        )}
                    </div>


                </body>
            </IonContent>
        </IonPage >
    );
};

export default Info_Extra_Credito;


