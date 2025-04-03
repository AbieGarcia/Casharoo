import { db } from "../firebaseConfig";
import { collection, addDoc, updateDoc, doc, query, where, getDocs } from "firebase/firestore";

export const registrarUsuario = async (usuario) => {
    try {
        const docRef = await addDoc(collection(db, "usuarios"), usuario);
        console.log("Usuario registrado con ID", docRef.id);
    } catch (error) {
        console.error("Error al registrtar usuario: ", error);
    }
};

export const editarUusario = async (usuarioId, nuevosDatos) => {
    try {
        const usuarioRef = doc(db, "usuarios", usuarioID);
        await updateDoc(usuarioRef, nuevosDatos);
        console.log("Uusuario actualizado correctamente");
    } catch (error) {
        console.error("Error al actualizar usuario: ", error);
    }
};

export const obtenerUusario = async (nombre) => {
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
