import React, { createContext, ReactNode, useContext, useState } from 'react';
import SE from '../components/simulation_element/se';
import { initialEdges, initialNodes } from '../page/simulation/simulation.settings';
import { Edge, Node, OnEdgesChange, OnNodesChange, useEdgesState, useNodesState } from '@xyflow/react';
import { Transformer } from '../components/calculation/calculation.interface';
import { parshallElement } from '../chemical_info/parshall/parshall_element';
import { filtracaoElement } from '../chemical_info/filtracao/filtracao_element';
import { dosagemElement } from '../chemical_info/dosagem/dosagem_element';
import { decantacaoElement } from '../chemical_info/decantacao/decantacao_element';
import { floculadorElement } from '../chemical_info/floculador/floculador_element';
import { distribuicaoElement } from '../chemical_info/distribuicao/distribuicao_element';
import { captcaoElement } from '../chemical_info/captacao/captacao_element';

export type ReactFlowNode = Node<{ element: SE | Transformer }>;

export interface SimulationContextData {
  // react flow nodes
  nodes: ReactFlowNode[];
  setNodes: React.Dispatch<React.SetStateAction<ReactFlowNode[]>>;
  onNodesChange: OnNodesChange<ReactFlowNode>;

  // react flow edges
  edges: Edge[];
  setEdges: React.Dispatch<React.SetStateAction<Edge[]>>;
  onEdgesChange: OnEdgesChange<Edge>;

  // modal selection
  modelElement: SE | null;
  setModelElement: React.Dispatch<React.SetStateAction<SE> | null>;
  selectedNode: SE | null;
  setSelectedNode: React.Dispatch<React.SetStateAction<SE> | null>;
  handleInfoClick: (node: SE) => void;
  
  // global variables
  globalVariables: { [key: string]: number };
  setGlobalVariables: React.Dispatch<React.SetStateAction<{ [key: string]: number }>>;
  resetSimulation: () => void;
}

const SimulationContext = createContext<SimulationContextData>({} as SimulationContextData);

const origionaEdges = [...initialEdges];
const originalNodes = [...initialNodes];

export const SimulationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [selectedNode, setSelectedNode] = useState<SE | null>(null);
  const [modelElement, setModelElement] = useState<SE | null>(null);
  const [globalVariables, setGlobalVariables] = useState<{ [key: string]: number }>({
    // TO-DO: mudar para 1.2
    k: 1.84,
    Vj: 0.2,
  });

  const handleInfoClick = (node: SE) => {
    setSelectedNode(null);
    setModelElement(null);
    
    if(node.hideInfo) return;
    setTimeout(() => {
      setSelectedNode(node);
      setModelElement(node);
    }, 300);
  };

  const resetSimulation = () => {
    setEdges(origionaEdges);
    setNodes(originalNodes);
    setGlobalVariables({
      k: 1.84,
      Vj: 0.2,
      p: 0,
      q: 0,
    });
    
    setSelectedNode(null);
    setModelElement(null);
    
    parshallElement.transformers = [];
    filtracaoElement.transformers = [];
    dosagemElement.transformers = [];

    captcaoElement.sensors = [];
    parshallElement.sensors = [];
    floculadorElement.sensors = [];
    decantacaoElement.sensors = [];
    filtracaoElement.sensors = [];
    dosagemElement.sensors = [];
    distribuicaoElement.sensors = [];
    
  }

  return (
    <SimulationContext.Provider
      value={{
        resetSimulation,
        nodes,
        setNodes,
        onNodesChange,
        edges,
        setEdges,
        onEdgesChange,
        modelElement,
        setModelElement,
        selectedNode,
        setSelectedNode,
        handleInfoClick,
        globalVariables,
        setGlobalVariables,
      }}
    >
      {children}
    </SimulationContext.Provider>
  );
};

export const useSimulation = () => useContext(SimulationContext);
