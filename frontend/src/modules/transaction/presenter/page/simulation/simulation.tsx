/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect } from 'react';
import { ReactFlow, addEdge, Background, Controls, ReactFlowProvider, useReactFlow } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Box, Flex, useBreakpointValue, useColorModeValue } from '@chakra-ui/react';
import './styles.css';
import { SimulationElement } from '../../components/simulation_element/simulation_element';
import { DnDProvider } from '../../providers/drag_and_drop.provider';
import { SimulationProvider, useSimulation } from '../../providers/simulation.provider';
import SimulationModal from '../../components/simulation_modal/modal';
import Sidebar from '../../components/sidebar/sidebar';
import SE from '../../components/simulation_element/se';
import TransformerComponent from '../../transformers/transformer_component';
import MassBalance from '../../components/mass_balance/maas_balance';
import { EntradaModalProvider } from '../../components/entrada/entrada_modal.provider';
import EntradaModal from '../../components/entrada/entrada.modal';

const SimulationPage = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const { nodes, onNodesChange, edges, setEdges, onEdgesChange } = useSimulation();

  const onConnect = useCallback(
    (connection) => {
      setEdges((eds) => addEdge(connection, eds));
    },
    [setEdges],
  );

  const nodeTypes = {
    chemlogic: (props: { data: { id: string; element: SE } }) => (
      <SimulationElement key={props.data.id} data={props.data} />
    ),
    transformerComponent: (props: { data: any }) => <TransformerComponent key={props.data.id} data={props.data} />,
    massBalance: (props: { data: any }) => <MassBalance key={props.data.id} data={props.data} />,
  };

  return (
    <Flex>
      <Sidebar />

      <Box width={isMobile ? '100vw' : '85vw'} height={isMobile ? '85dvh' : 'calc(100dvh - 65px)'}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
          fitViewOptions={{
            padding: 0.3,
          }}
        >
          <Controls style={{ color: useColorModeValue('black', 'black') }} />
          <Background />
          <FlowInitializer />
        </ReactFlow>
      </Box>

      <SimulationModal />

      <EntradaModal />
    </Flex>
  );
};

const FlowInitializer = () => {
  const { setViewport } = useReactFlow();
  
  useEffect(() => {
    setTimeout(() => {
      const isLarge = window.innerWidth >= 1380;
      const viewport = isLarge ? { x: 50, y: 250, zoom: 0.9 } : { x: 20, y: 200, zoom: 0.65 };
      setViewport(viewport);
    });
  }, [setViewport]);

  return null;
};

const BuildSimulationPage: React.FC = () => (
  <ReactFlowProvider>
    <DnDProvider>
      <EntradaModalProvider>
        <SimulationProvider>
          <SimulationPage />
        </SimulationProvider>
      </EntradaModalProvider>
    </DnDProvider>
  </ReactFlowProvider>
);

export default BuildSimulationPage;
