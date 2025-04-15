import React, { createContext, useContext, useState, ReactNode } from "react";

// Define el tipo de las metas
interface Meta {
  nombre: string;
  dinero: number;
  color: number;
  icono: number;
  plazo: number;
}

// Define el tipo del usuario
interface Usuario {
  nombre: string;
  sexo: number;
  usuario: string;
  contrasena: string;
  metas: Meta[];
}

// Define el tipo de las props del UsuarioProvider
interface UsuarioProviderProps {
  children: ReactNode;
}

// Define el contexto del usuario
const UsuarioContext = createContext<any>(null);

export const UsuarioProvider: React.FC<UsuarioProviderProps> = ({ children }) => {
  const [usuario, setUsuario] = useState<Usuario>({
    nombre: "",
    sexo: 0,
    usuario: "",
    contrasena: "",
    metas: [], // Inicializa como un array vacío
  });

  const agregarMeta = (nuevaMeta: Meta) => {
    setUsuario((prevUsuario) => ({
      ...prevUsuario,
      metas: [...prevUsuario.metas, nuevaMeta], // Agrega la nueva meta al array
    }));
  };

  return (
    <UsuarioContext.Provider value={{ usuario, agregarMeta }}>
      {children}
    </UsuarioContext.Provider>
  );
};

export const useUsuario = () => {
  const context = useContext(UsuarioContext);
  if (!context) {
    throw new Error("useUsuario debe ser usado dentro de un UsuarioProvider");
  }
  return context;
};