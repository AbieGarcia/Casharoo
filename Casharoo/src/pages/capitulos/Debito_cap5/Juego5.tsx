import React, { useState, useEffect } from 'react';
import {
    IonApp,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    IonText,
    IonAlert
} from '@ionic/react';
import './Juego5.css';
import { useIonRouter } from '@ionic/react';
import { completarCap, actualizarDinero } from "../../../services/userRegister.js";
import { obtenerUsuario } from '../../../services/userRegister';

const bancoPalabras = [
    "cuenta bancaria",
    "saldo",
    "prestado",
    "rechazado",
    "dinero físico",
    "inmediatas",
    "efectivo",
    "a meses",
    "inversión",
    "intereses"
];

const respuestasCorrectas = [
    "dinero físico",
    "cuenta bancaria",
    "saldo",
    "prestado",
    "rechazado",
    "inmediatas",
    "efectivo"
];

const Juego5: React.FC = () => {
    const router = useIonRouter();
    const [usuario, setUsuario] = useState<any>(null);

    const [respuestas, setRespuestas] = useState<(string | null)[]>(Array(7).fill(null));
    const [palabraSeleccionada, setPalabraSeleccionada] = useState<string | null>(null);
    const [verificado, setVerificado] = useState(false);

    const [showError, setShowError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        const cargarUsuario = async () => {
            const usuarioId = localStorage.getItem("usuarioId");
            const datosUsuario = await obtenerUsuario(usuarioId);
            setUsuario(datosUsuario);
        };
        cargarUsuario();
    }, []);

    const usuarioId = localStorage.getItem("usuarioId");

    const resetGame = () => {
        setRespuestas(Array(7).fill(null));
        setPalabraSeleccionada(null);
        setVerificado(false);
    };

    const colocarPalabra = (index: number) => {
        if (!palabraSeleccionada) return;
        const nuevas = [...respuestas];
        nuevas[index] = palabraSeleccionada;
        setRespuestas(nuevas);
        setPalabraSeleccionada(null);
    };

    const palabraUsada = (palabra: string) => respuestas.includes(palabra);

    const verificar = () => {
        setVerificado(true);

        const correcto = respuestas.every(
            (r, i) => r === respuestasCorrectas[i]
        );

        if (correcto) {
            setShowSuccess(true);
        } else {
            setShowError(true);
        }
    };

    const handleGameComplete = async () => {
        setShowSuccess(false);

        if (usuarioId && usuario) {
            const nuevoDinero = (usuario.dinero || 0) + 10;
            await actualizarDinero(usuarioId, nuevoDinero);
            setUsuario({ ...usuario, dinero: nuevoDinero });
        }

        await completarCap(usuarioId, 5);
        router.push('/Mapa', 'forward', 'replace');
    };

    return (
        <IonApp>
            <IonHeader>
                <IonToolbar className="toolbar-juego5">
                    <IonTitle className="titulo-juego5">Completa el párrafo</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding juego6-content">
                <div className='recompensa-container'>
                    <div className='recompensa2'>
                        <span>Recompensa: $10</span>
                        <span style={{ fontSize: '24px' }}></span>
                    </div>
                </div>
                <div className="parrafo">
                    <IonText>
                        <p>
                            Las tarjetas de débito son una alternativa al {renderEspacio(0)}.
                            Sirven para pagar con dinero guardado en una {renderEspacio(1)}.
                            Ese dinero disponible se llama {renderEspacio(2)}.
                            Cuando pagas con tarjeta no usas dinero {renderEspacio(3)}.
                            Si no alcanza, el pago será {renderEspacio(4)}.
                            Por eso se usa para compras {renderEspacio(5)} y para no depender del {renderEspacio(6)}.
                        </p>
                    </IonText>
                </div>

                <h3>Banco de palabras</h3>
                <div className="banco-palabras">
                    {bancoPalabras.map(p => {
                        const usada = palabraUsada(p);
                        return (
                            <span
                                key={p}
                                className={`palabra ${usada ? "usada" : ""} ${palabraSeleccionada === p ? "seleccionada" : ""}`}
                                onClick={() => !usada && setPalabraSeleccionada(p)}
                            >
                                {p}
                            </span>
                        );
                    })}
                </div>

                <IonButton expand="block" className="boton-verificar" onClick={verificar}>
                    Verificar
                </IonButton>

                <IonAlert
                    isOpen={showError}
                    onDidDismiss={() => setShowError(false)}
                    header="Inténtalo de nuevo"
                    message="Algunas respuestas no son correctas. ¡Tú puedes hacerlo!"
                    buttons={[
                        {
                            text: "Reintentar",
                            handler: () => resetGame()
                        }
                    ]}
                />

                <IonAlert
                    isOpen={showSuccess}
                    header="¡Felicidades!"
                    message="Has desbloqueado el siguiente capítulo y ganaste 10 Piggy Pesos."
                    buttons={[
                        {
                            text: "Volver a jugar",
                            handler: () => resetGame()
                        },
                        {
                            text: "OK",
                            handler: handleGameComplete
                        }
                    ]}
                />

            </IonContent>
        </IonApp>
    );

    function renderEspacio(index: number) {
        return (
            <span
                className={`espacio ${verificado
                    ? respuestas[index] === respuestasCorrectas[index]
                        ? "correcto"
                        : "incorrecto"
                    : ""
                    }`}
                onClick={() => colocarPalabra(index)}
            >
                {respuestas[index] || "______"}
            </span>
        );
    }
};

export default Juego5;
