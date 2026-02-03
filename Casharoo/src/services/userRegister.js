import { db } from "../firebaseConfig";
import { collection, addDoc, orderBy, updateDoc, getDoc, query, where, getDocs, doc } from "firebase/firestore";

export const verificarCredenciales = async (usuario, contrasena) => {
    try {
        const usuariosRef = collection(db, "usuarios");
        const q = query(usuariosRef, where("usuario", "==", usuario), where("contrasena", "==", contrasena));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            const usuarioDoc = querySnapshot.docs[0];
            const usuarioData = { id: usuarioDoc.id, ...usuarioDoc.data() };
            console.log("Usuario autenticado:", usuarioData);
            return usuarioData;
        } else {
            console.log("Credenciales incorrectas");
            return null;
        }
    } catch (error) {
        console.error("Error al verificar credenciales:", error);
        return null;
    }
};

export const registrarUsuario = async (usuario) => {
    console.log(usuario)
    try {
        // Inicializar dinero en 0 si no existe
        const usuarioConDinero = { ...usuario, dinero: 0 };
        const docRef = await addDoc(collection(db, "usuarios"), usuarioConDinero);
        console.log("Usuario registrado con ID", docRef.id);
    } catch (error) {
        console.error("Error al registrar usuario: ", error);
    }
};

export const editarUsuario = async (usuarioId, nuevosDatos) => {
    try {
        const usuarioRef = doc(db, "usuarios", usuarioId);
        await updateDoc(usuarioRef, nuevosDatos);
        console.log("Usuario actualizado correctamente");
    } catch (error) {
        console.error("Error al actualizar usuario: ", error);
    }
};

export const registrarMeta = async (usuarioId, nuevaMeta) => {
    try {
        const usuarioRef = doc(db, "usuarios", usuarioId);
        const usuarioSnap = await getDoc(usuarioRef);

        if (usuarioSnap.exists()) {
            const usuarioData = usuarioSnap.data();
            const metaConDinero = { ...nuevaMeta, dineroAhorrado: 0 };
            const metasActualizadas = usuarioData.metas
                ? [...usuarioData.metas, metaConDinero]
                : [metaConDinero];
            await updateDoc(usuarioRef, { metas: metasActualizadas });
            console.log("Usuario actualizado correctamente con nuevas metas:", metasActualizadas);
        } else {
            console.error("No se encontró el usuario con el ID proporcionado");
        }
    } catch (error) {
        console.error("Error al actualizar usuario: ", error);
    }
};

export const completarCap = async (usuarioId, n) => {
    try {
        const usuarioRef = doc(db, "usuarios", usuarioId);
        const usuarioSnap = await getDoc(usuarioRef);

        const usuarioData = usuarioSnap.data();
        const capsActualizados = usuarioData.capitulos.map((capitulo) => {
            if (capitulo.capitulo === n) {
                return { ...capitulo, completed: true };
            }
            return capitulo;
        });
        await updateDoc(usuarioRef, { capitulos: capsActualizados });
        console.log("Usuario actualizado correctamente con nuevos caps:", capsActualizados);
    } catch (error) {
        console.error("Error al actualizar usuario: ", error);
    }
};

export const obtenerUsuario = async (usuarioId) => {
    try {
        const usuarioRef = doc(db, "usuarios", usuarioId);
        const usuarioSnap = await getDoc(usuarioRef);

        if (usuarioSnap.exists()) {
            console.log("Datos del usuario: ", usuarioSnap.data());
            return usuarioSnap.data();
        } else {
            console.log("No se encontró el usuario");
            return null;
        }
    } catch (error) {
        console.error("Error al obtener usuario: ", error);
        return null;
    }
};

export const obtenerUsuarioPorNombre = async (nombre) => {
    try {
        const usuariosRef = collection(db, "usuarios");
        const q = query(usuariosRef, where("nombre", "==", nombre));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            const usuarioDoc = querySnapshot.docs[0];
            const usuario = { id: usuarioDoc.id, ...usuarioDoc.data() };
            console.log("Usuario encontrado: ", usuario);
            return usuario;
        } else {
            console.log("No se encontró un usuario con ese nombre");
            return null;
        }
    } catch (error) {
        console.error("Error al obtener usuario por nombre: ", error);
        return null;
    }
};

export const actualizarDinero = async (usuarioId, nuevoDinero) => {
    try {
        const usuarioRef = doc(db, "usuarios", usuarioId);
        await updateDoc(usuarioRef, { dinero: nuevoDinero });
        console.log("Dinero actualizado correctamente a:", nuevoDinero);
        return true;
    } catch (error) {
        console.error('Error al actualizar dinero:', error);
        return false;
    }
};

export const actualizarRacha = async (usuarioId, datosUsuario) => {
    try {
        const hoy = new Date();
        hoy.setHours(0, 0, 0, 0);

        const ultimoAcceso = datosUsuario.ultimoAcceso
            ? new Date(datosUsuario.ultimoAcceso.seconds * 1000 || datosUsuario.ultimoAcceso)
            : null;

        let nuevaRacha = datosUsuario.racha || 0;

        if (ultimoAcceso) {
            ultimoAcceso.setHours(0, 0, 0, 0);

            const diferenciaDias = Math.floor((hoy.getTime() - ultimoAcceso.getTime()) / (1000 * 60 * 60 * 24));

            if (diferenciaDias === 0) {
                console.log("Ya entraste hoy, racha mantiene:", nuevaRacha);
            } else if (diferenciaDias === 1) {
                nuevaRacha += 1;
                console.log("¡Día consecutivo! Nueva racha:", nuevaRacha);
            } else {
                nuevaRacha = 1;
                console.log("Racha rota. Empezando de nuevo:", nuevaRacha);
            }
        } else {
            nuevaRacha = 1;
            console.log("Primera vez. Racha iniciada:", nuevaRacha);
        }

        const usuarioRef = doc(db, "usuarios", usuarioId);
        await updateDoc(usuarioRef, {
            racha: nuevaRacha,
            ultimoAcceso: hoy
        });

        return nuevaRacha;
    } catch (error) {
        console.error("Error al actualizar racha:", error);
        return datosUsuario.racha || 0;
    }
};

//inversion
const MODO_TESTING = false;

const TRES_HORAS = MODO_TESTING
    ? 2 * 1000           
    : 1 * 60 * 60 * 1000;

const randomConSeed = (seed) => {
    let x = Math.sin(seed) * 10000;
    x = Math.abs(x - Math.floor(x));

    x = Math.sin(x * 12.9898 + 78.233) * 43758.5453123;
    x = Math.abs(x - Math.floor(x));

    return x;
};

const evaluarAñoConSeed = (inversionId, numeroAño, fechaInicio, probabilidadFracaso) => {
    const idHash = inversionId.split('').reduce((acc, char) => {
        return acc + char.charCodeAt(0);
    }, 0);

    const seed = (idHash * 7919) + (numeroAño * 3571) + (fechaInicio * 2971);

    const random = randomConSeed(seed) * 100;
    const exito = random > probabilidadFracaso;

    console.log(`🎲 Año ${numeroAño}: Random=${random.toFixed(2)}, Probabilidad Fracaso=${probabilidadFracaso}%, Resultado=${exito ? '✅ ÉXITO' : '❌ FRACASO'}`);

    return exito;
};

export const crearInversion = async (usuarioId, planData, capitalInicial, añosTotales) => {
    try {
        console.log('📊 Creando inversión...', { usuarioId, planData: planData.nombre, capitalInicial, añosTotales });

        const usuarioRef = doc(db, "usuarios", usuarioId);
        const usuarioSnap = await getDoc(usuarioRef);

        if (!usuarioSnap.exists()) {
            console.error("Usuario no encontrado");
            return { success: false, error: "Usuario no encontrado" };
        }

        const usuarioData = usuarioSnap.data();
        const dineroDisponible = usuarioData.dinero || 0;

        console.log(`Dinero disponible: ${dineroDisponible} PP, Capital a invertir: ${capitalInicial} PP`);

        if (dineroDisponible < capitalInicial) {
            console.error("Dinero insuficiente");
            return { success: false, error: "Dinero insuficiente" };
        }

        const inversionesRef = collection(db, "inversiones");
        const q = query(inversionesRef, where("usuarioId", "==", usuarioId), where("estado", "==", "activa"));
        const inversionesActivas = await getDocs(q);

        if (!inversionesActivas.empty) {
            console.error("Ya tiene una inversión activa");
            return { success: false, error: "Ya tienes una inversión activa" };
        }

        const ahora = new Date();
        const nuevaInversion = {
            usuarioId,
            estado: "activa",
            plan: planData,
            capitalInicial,
            capitalActual: capitalInicial,
            añosTotales,
            añosCompletados: 0,
            fechaInicio: ahora,
            ultimaEvaluacion: ahora,
            proximaEvaluacion: new Date(ahora.getTime() + TRES_HORAS),
            historial: [
                { año: 0, capital: capitalInicial, exito: null, fecha: ahora }
            ],
            createdAt: ahora,
            completedAt: null,
            vista: false
        };

        const docRef = await addDoc(inversionesRef, nuevaInversion);
        console.log("Inversión creada con ID:", docRef.id);

        const nuevoSaldo = dineroDisponible - capitalInicial;
        await updateDoc(usuarioRef, {
            dinero: nuevoSaldo
        });

        console.log(`Se restaron ${capitalInicial} PP. Nuevo saldo: ${nuevoSaldo} PP`);

        if (MODO_TESTING) {
            console.log(`MODO TESTING: Próxima evaluación en 30 segundos`);
        }

        return { success: true, inversionId: docRef.id, inversion: { id: docRef.id, ...nuevaInversion } };
    } catch (error) {
        console.error("Error al crear inversión:", error);
        return { success: false, error: error.message };
    }
};

export const obtenerInversionActiva = async (usuarioId) => {
    try {
        const inversionesRef = collection(db, "inversiones");
        const q = query(inversionesRef, where("usuarioId", "==", usuarioId), where("estado", "==", "activa"));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            return null;
        }

        const inversionDoc = querySnapshot.docs[0];
        return { id: inversionDoc.id, ...inversionDoc.data() };
    } catch (error) {
        console.error("Error al obtener inversión activa:", error);
        return null;
    }
};

export const verificarYActualizarInversion = async (usuarioId) => {
    try {
        console.log('Verificando inversión para usuario:', usuarioId);

        const inversion = await obtenerInversionActiva(usuarioId);

        if (!inversion) {
            console.log('No hay inversión activa');
            return null;
        }

        console.log('Inversión encontrada:', {
            id: inversion.id,
            plan: inversion.plan.nombre,
            añosCompletados: inversion.añosCompletados,
            añosTotales: inversion.añosTotales,
            capitalActual: inversion.capitalActual
        });

        const ahora = new Date();
        const ultimaEvaluacion = inversion.ultimaEvaluacion.toDate ? inversion.ultimaEvaluacion.toDate() : new Date(inversion.ultimaEvaluacion);
        const tiempoPasado = ahora.getTime() - ultimaEvaluacion.getTime();

        console.log(`Tiempo desde última evaluación: ${(tiempoPasado / 1000).toFixed(0)} segundos`);

        const añosPendientes = Math.floor(tiempoPasado / TRES_HORAS);

        console.log(`Años pendientes de evaluar: ${añosPendientes}`);
        if (añosPendientes === 0) {
            const tiempoRestante = TRES_HORAS - tiempoPasado;
            console.log(`Aún no es tiempo. Faltan ${(tiempoRestante / 1000).toFixed(0)} segundos para próximo año`);
            return { ...inversion, actualizado: false };
        }

        let capitalActual = inversion.capitalActual;
        const nuevosResultados = [];
        const fechaInicioTimestamp = inversion.fechaInicio.toDate ? inversion.fechaInicio.toDate().getTime() : new Date(inversion.fechaInicio).getTime();

        console.log('Procesando años...');

        for (let i = 0; i < añosPendientes; i++) {
            const añoActual = inversion.añosCompletados + i + 1;

            if (añoActual > inversion.añosTotales) {
                console.log(`Año ${añoActual} excede total de ${inversion.añosTotales}. Deteniendo.`);
                break;
            }

            const exito = evaluarAñoConSeed(inversion.id, añoActual, fechaInicioTimestamp, inversion.plan.riesgo);

            const capitalAntes = capitalActual;

            if (exito) {
                capitalActual = Math.round(capitalActual * (1 + inversion.plan.tasa / 100));
                console.log(`Año ${añoActual}: ÉXITO - ${capitalAntes} PP → ${capitalActual} PP (+${capitalActual - capitalAntes} PP)`);
            } else {
                console.log(`Año ${añoActual}: FRACASO - Capital se mantiene en ${capitalActual} PP`);
            }

            const fechaAño = new Date(ultimaEvaluacion.getTime() + (i + 1) * TRES_HORAS);

            nuevosResultados.push({
                año: añoActual,
                exito,
                capital: capitalActual,
                fecha: fechaAño
            });
        }

        const añosCompletadosNuevo = inversion.añosCompletados + añosPendientes;
        const inversionRef = doc(db, "inversiones", inversion.id);

        const historialActualizado = [
            ...inversion.historial,
            ...nuevosResultados
        ];

        await updateDoc(inversionRef, {
            capitalActual,
            añosCompletados: Math.min(añosCompletadosNuevo, inversion.añosTotales),
            ultimaEvaluacion: ahora,
            proximaEvaluacion: new Date(ahora.getTime() + TRES_HORAS),
            historial: historialActualizado,
            estado: añosCompletadosNuevo >= inversion.añosTotales ? "completada" : "activa"
        });

        console.log(`Inversión actualizada. Años completados: ${Math.min(añosCompletadosNuevo, inversion.añosTotales)}/${inversion.añosTotales}`);

        if (añosCompletadosNuevo >= inversion.añosTotales) {
            const usuarioRef = doc(db, "usuarios", usuarioId);
            const usuarioSnap = await getDoc(usuarioRef);
            const usuarioData = usuarioSnap.data();

            await updateDoc(usuarioRef, {
                dinero: (usuarioData.dinero || 0) + capitalActual
            });

            await updateDoc(inversionRef, {
                completedAt: ahora
            });

            console.log(`Inversion completa`);
            console.log(`Capital final: ${capitalActual} PP`);
            console.log(`Ganancia: ${capitalActual - inversion.capitalInicial} PP`);
            console.log(`Se sumaron ${capitalActual} PP a la cuenta del usuario`);

            return {
                ...inversion,
                capitalActual,
                añosCompletados: añosCompletadosNuevo,
                historial: historialActualizado,
                estado: "completada",
                actualizado: true,
                completada: true,
                nuevosResultados
            };
        }

        if (MODO_TESTING) {
            console.log(`Próxima evaluación en 30 segundos`);
        }

        return {
            ...inversion,
            capitalActual,
            añosCompletados: añosCompletadosNuevo,
            historial: historialActualizado,
            actualizado: true,
            nuevosResultados
        };
    } catch (error) {
        console.error("Error al verificar y actualizar inversión:", error);
        return null;
    }
};

export const obtenerUltimaInversionCompletada = async (usuarioId) => {
    try {
        const inversionesRef = collection(db, "inversiones");
        const q = query(
            inversionesRef,
            where("usuarioId", "==", usuarioId),
            where("estado", "==", "completada"),
            orderBy("completedAt", "desc")
        );
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            return null;
        }

        const inversionDoc = querySnapshot.docs[0];
        return { id: inversionDoc.id, ...inversionDoc.data() };
    } catch (error) {
        console.error("Error al obtener última inversión completada:", error);
        return null;
    }
};

export const marcarInversionComoVista = async (inversionId) => {
    try {
        const inversionRef = doc(db, "inversiones", inversionId);
        await updateDoc(inversionRef, {
            vista: true
        });
        console.log("Inversión marcada como vista");
    } catch (error) {
        console.error("Error al marcar inversión como vista:", error);
    }
};

//metas ahorro
export const aportarAMeta = async (usuarioId, metaIndex, cantidad) => {
    try {
        const usuarioRef = doc(db, "usuarios", usuarioId);
        const usuarioSnap = await getDoc(usuarioRef);

        if (!usuarioSnap.exists()) {
            console.error("Usuario no encontrado");
            return { success: false, error: "Usuario no encontrado" };
        }

        const usuarioData = usuarioSnap.data();
        const metas = usuarioData.metas || [];

        if (metaIndex >= metas.length || metaIndex < 0) {
            console.error("Índice de meta inválido");
            return { success: false, error: "Meta no encontrada" };
        }

        const meta = metas[metaIndex];
        const nuevoProgreso = (meta.dineroAhorrado || 0) + cantidad;

        metas[metaIndex] = {
            ...meta,
            dineroAhorrado: nuevoProgreso
        };

        await updateDoc(usuarioRef, { metas });
        console.log(`Aporte de ${cantidad} agregado a la meta "${meta.nombre}". Progreso: ${nuevoProgreso}`);

        return { success: true, nuevoProgreso };
    } catch (error) {
        console.error("Error al aportar a meta:", error);
        return { success: false, error: error.message };
    }
};

export const eliminarMeta = async (usuarioId, metaIndex) => {
    try {
        const usuarioRef = doc(db, "usuarios", usuarioId);
        const usuarioSnap = await getDoc(usuarioRef);

        if (!usuarioSnap.exists()) {
            console.error("Usuario no encontrado");
            return { success: false, error: "Usuario no encontrado" };
        }

        const usuarioData = usuarioSnap.data();
        const metas = usuarioData.metas || [];

        if (metaIndex >= metas.length || metaIndex < 0) {
            console.error("Índice de meta inválido");
            return { success: false, error: "Meta no encontrada" };
        }

        const metaEliminada = metas[metaIndex];
        metas.splice(metaIndex, 1);

        await updateDoc(usuarioRef, { metas });
        console.log(`Meta "${metaEliminada.nombre}" eliminada correctamente`);

        return { success: true };
    } catch (error) {
        console.error("Error al eliminar meta:", error);
        return { success: false, error: error.message };
    }
};