import React, { useState, useEffect } from 'react';
import { InfoOutlineIcon } from '@chakra-ui/icons';
import { Card, CardHeader, IconButton } from '@chakra-ui/react';
import { Handle, Position } from '@xyflow/react';
import { useDnD } from '../../providers/drag_and_drop.provider';
import { useSimulation } from '../../providers/simulation.provider';
import SE from './se';
import SensorsList from '../sensors/sensors_list';
import TransformerList from '../transformer/transformer_list';
import { Transformer } from '../calculation/calculation.interface';
import { Sensor } from './se.interface';
import CalculationList from '../calculation/calculation_list';
import { availableTransformers } from '../sidebar/sidebar';

interface Props {
  data: {
    element: SE;
  };
}

export const SimulationElement = React.memo((props: Props) => {
  const { element } = props.data;
  const { object } = useDnD();

  const [draggingTransformer, setDraggingTransformer] = useState(element.events.isDraggingTransformer);
  const [draggingSensor, setDraggingSensor] = useState(element.events.isDraggingSensor);
  const [transformers, setTransformer] = useState(element.transformers);
  const [sensors, setSensors] = useState(element.sensors);

  const simulation = useSimulation();

  const onDrop = (event: React.DragEvent) => {
    event.preventDefault();
    const block = event.dataTransfer.getData('application/reactflow');
    const parsedItem: Transformer | Sensor | null = block ? JSON.parse(block) : null;

    if (parsedItem.type == 'transformer') {
      const isAvailable = element.availableTransformers.includes(parsedItem.id);
      const transformer = availableTransformers.find((t) => t.id === parsedItem.id);
      const alreadyUsed = element.transformers.find((t) => t.id === parsedItem.id);
      
      // calha parshall can have only one transformer and NaOH
      if (element.id == 'calha-parshall') {
        const canAttachWithOthers = transformer.id == 'NaOH' && element.transformers.length < 2
        const alreadyHaveAtransformer = element.transformers.filter((t) => t.id != 'NaOH').length > 0;
        const canAttachTransformer =  transformer.id != 'NaOH' && !alreadyHaveAtransformer;

        if (isAvailable && !alreadyUsed && (canAttachWithOthers || canAttachTransformer)) {
          element.transformers.push(transformer);
          setTransformer(element.transformers);
          transformer?.onCreated(element, simulation);
        }
        
        // other type of elements can have more than one transformer
      } else if (isAvailable && !alreadyUsed) {
        element.transformers.push(transformer);

        setTransformer(element.transformers);
        (transformer)?.onCreated(element, simulation);
      }
    }

    if (parsedItem.type == 'sensor') {
      element.sensors.push(parsedItem as Sensor);
      setSensors(element.sensors);
    }

    setDraggingTransformer(false);
    setDraggingSensor(false);
  };

  const deleteTransformer = (transformer: Transformer) => {
    const index = transformers.indexOf(transformer);
    transformers.splice(index, 1);

    setTransformer([...transformers]);
    transformer?.onDeleted(element, simulation);
  };

  const onDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    if (object.type === 'transformer') {
      setDraggingTransformer(true);
    } else if (object.type === 'sensor') {
      setDraggingSensor(true);
    }
  };

  const onDragLeave = (event: React.DragEvent) => {
    event.preventDefault();
    setDraggingTransformer(false);
    setDraggingSensor(false);
  };

  useEffect(() => {
    element.events.isDraggingTransformer = draggingTransformer;
  }, [draggingTransformer, element.events]);

  useEffect(() => {
    element.events.isDraggingSensor = draggingSensor;
  }, [draggingSensor, element.events]);

  useEffect(() => {
    element.transformers = transformers;
  }, [transformers, element.transformers, element]);

  useEffect(() => {
    element.sensors = sensors;
  }, [sensors, element.sensors, element]);

  return (
    <Card
      padding={2}
      minH="100px"
      variant={'unstyled'}
      textAlign="center"
      justifyContent="center"
      alignItems="center"
      minW={220}
      onClick={() => simulation.handleInfoClick(element)}
      onDropCapture={onDrop}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
    >
      {element.image.path && (
        <img src={element.image.path} alt={element.label} className="dcomponent-image" width={element.image.width} />
      )}
      {element.connections.right && <Handle type={element.connections.right} position={Position.Right} style={{ top: '50%', background: 'transparent' }} />}
      {element.connections.left && <Handle type={element.connections.left} position={Position.Left} style={{ top: '50%', background: 'transparent' }} />}
      {element.connections.bottom && <Handle type={element.connections.bottom} position={Position.Bottom} style={{ bottom: '0%', left: '48%', background: 'transparent' }} />}
      {element.connections.top && <Handle type={element.connections.top} position={Position.Top} style={{ top: '0%', left: '48%', background: 'transparent' }} />}
      <CardHeader fontSize={20} my={2}>
        {element.label}
      </CardHeader>
      {/* sensores */}
      <SensorsList sensors={element.sensors} draggingOver={draggingSensor} />
      {/* componentes de calculo */}
      <TransformerList
        transformers={element.transformers}
        draggingOver={draggingTransformer}
        availableTransformers={element.availableTransformers}
        deleteTransformer={deleteTransformer}
        transformerColor={element.transformerColor}
      />
      {!element.hideInfo && (
        <IconButton
          size="xs"
          position={'absolute'}
          left={'5%'}
          top={'5%'}
          bg={'transparent'}
          borderRadius={15}
          onClick={() => simulation.handleInfoClick(element)}
          fontSize={22}
          aria-label="Informações de Cálculos"
          icon={<InfoOutlineIcon color={'teal'} />}
        />
      )}
      <CalculationList calculations={element.calculations} transformers={element.transformers} />
    </Card>
  );
});
