import { Edge, EdgeMarkerType, MarkerType } from '@xyflow/react';
import { parshallElement } from '../../chemical_info/parshall/parshall_element';
import { floculadorElement } from '../../chemical_info/floculador/floculador_element';
import { ReactFlowNode } from '../../providers/simulation.provider';
import { decantacaoElement } from '../../chemical_info/decantacao/decantacao_element';
import { filtracaoElement } from '../../chemical_info/filtracao/filtracao_element';
import { dosagemElement } from '../../chemical_info/dosagem/dosagem_element';
import { captcaoElement } from '../../chemical_info/captacao/captacao_element';
import { distribuicaoElement } from '../../chemical_info/distribuicao/distribuicao_element';

export const elements = [
  captcaoElement,
  parshallElement,
  floculadorElement,
  decantacaoElement,
  filtracaoElement,
  dosagemElement,
  distribuicaoElement,
];

const simulationNodes: ReactFlowNode[] = elements.map((element) => ({
  id: element.id,
  data: { element },
  position: element.position,
  type: 'chemlogic',
}));

export const initialNodes: ReactFlowNode[] = [...simulationNodes];

const arrowClosed: EdgeMarkerType = {
  type: MarkerType.ArrowClosed,
  height: 45,
  width: 45,
  
}

export const initialEdges: Edge[] = [
  { id: 'ecaptacao-calha', source: 'captação', target: 'calha-parshall', animated: true, markerEnd: arrowClosed },
  { id: 'ecalha-floculacao', source: 'calha-parshall', target: 'floculação', animated: true, markerEnd: arrowClosed  },
  { id: 'efloculacao-decantacao', source: 'floculação', target: 'decantação', animated: true, markerEnd: arrowClosed },
  { id: 'edecantacao-filtracao', source: 'decantação', target: 'filtração', animated: true, markerEnd: arrowClosed },
  { id: 'efiltracao-dosagem', source: 'filtração', target: 'dosagem', animated: true, markerEnd: arrowClosed },
  { id: 'edosagem-distribuicao', source: 'dosagem', target: 'distribuição', animated: true, markerEnd: arrowClosed },
];
