import { db } from "../firebaseConfig";
import { collection, addDoc, updateDoc, getDoc, query, where, getDocs, doc } from "firebase/firestore";

export const verificarCredenciales = async (usuario, contrasena) => {
    try {
        const usuariosRef = collection(db, "usuarios");
        const q = query(usuariosRef, where("usuario", "==", usuario), where("contrasena", "==", contrasena));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            const usuarioDoc = querySnapshot.docs[0]; // Obtén el primer resultado
            const usuarioData = { id: usuarioDoc.id, ...usuarioDoc.data() }; // Incluye el ID en los datos
            console.log("Usuario autenticado:", usuarioData);
            return usuarioData; // Devuelve los datos del usuario autenticado
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
        const docRef = await addDoc(collection(db, "usuarios"), usuario);
        console.log("Usuario registrado con ID", docRef.id);
        // local storage guardar id
    } catch (error) {
        console.error("Error al registrtar usuario: ", error);
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
            // Asegúrate de que metas sea un array
            const metasActualizadas = usuarioData.metas
                ? [...usuarioData.metas, { ...nuevaMeta }] // Convierte nuevaMeta en un objeto plano
                : [{ ...nuevaMeta }]; // Si no existe metas, inicializa con la nueva meta
                await updateDoc(usuarioRef, { metas: metasActualizadas });
            console.log("Usuario actualizado correctamente con nuevas metas:", metasActualizadas);
        } else {
            console.error("No se encontró el usuario con el ID proporcionado");
        }
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
            return usuarioSnap.data(); //Regresa los datos del usuario
        } else {
            console.log("No se encontro el usuario");
            return null;
        }
    } catch (error) {
        console.error("Error al obtener usuario: ", error);
        return null;
    }
};

export const obtenerUsuarioPorNombre = async (nombre) => {
    try {
        const usuarioRef = collection(db, "usuarios");
        const q = query(usuariosRef, where("nombre", "==", nombre));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            const usuarioDoc = querySnapshot.docs[0]; // Obtiene el primer resultado
            const usuario = { id: usuarioDoc.id, ...usuarioDoc.data() };
            console.log("Usuario encontrado: ", usuario);
            return usuario;
        } else {
            console.log("No se encontro un usuario con ese nombre");
            return null;
        }
    } catch (error) {
        console.error("Error al obtener usuario por nombre: ", error);
        return null;

    }
};
