// EntradaModalContext.tsx
import React, { createContext, ReactNode, useContext, useState } from 'react';
import { ValoresEntrada } from './valores_entrada';

// Tipos para os dados da modal
export interface ModalData {
  description: string;
  value: string;
  measurement: string;
}

// Tipo do contexto da Modal
interface EntradaModalContextData {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  modalData: ModalData[];
  setModalData: React.Dispatch<React.SetStateAction<ModalData[]>>;
}

// Criando o contexto
const EntradaModalContext = createContext<EntradaModalContextData>({} as EntradaModalContextData);

export const EntradaModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState<ModalData[]>(ValoresEntrada);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <EntradaModalContext.Provider
      value={{
        isOpen,
        openModal,
        closeModal,
        modalData,
        setModalData,
      }}
    >
      {children}
    </EntradaModalContext.Provider>
  );
};

export const useEntradaModal = () => useContext(EntradaModalContext);
