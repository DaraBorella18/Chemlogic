/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useContext, useState, DragEvent, ReactNode } from 'react';

interface DnDContextType { 
  object: any;
  setObject: React.Dispatch<React.SetStateAction<any>>;
  onDragStart: (event: DragEvent, nodeType: any) => void;
}

const DnDContext = createContext<DnDContextType>({} as DnDContextType);

export const DnDProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [object, setObject] = useState<any>(null);

  const onDragStart = (event: DragEvent, nodeType: any) => {
    setObject(nodeType);
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(nodeType));
  };

  return (
    <DnDContext.Provider value={{object, setObject, onDragStart}}>
      {children}
    </DnDContext.Provider>
  );
};

export const useDnD = (): DnDContextType => useContext(DnDContext);
