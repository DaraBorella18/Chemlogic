import { IconButton, Text, Tooltip } from '@chakra-ui/react';
import { useDnD } from '../../providers/drag_and_drop.provider';
import { Sensor } from '../simulation_element/se.interface';

interface Props {
  sensor: Sensor;
  onDelete?: (event) => void;
  draggable?: boolean;
  shadow?: boolean;
}

const SensorItem: React.FC<Props> = ({ sensor, onDelete, draggable, shadow }) => {
  const { onDragStart } = useDnD();

  if (shadow) {
    return (
      <IconButton
        isRound={true}
        variant="solid"
        colorScheme="gray"
        aria-label="Done"
        mx={1}
        size={'sm'}
        icon={
          <Text fontSize={12} color={'transparent'}>
            SH
          </Text>
        }
      />
    );
  }

  return (
    <Tooltip label={sensor.tooltip} placement="right">
      <IconButton
        className={draggable && 'draggable_component'}
        onDragStart={draggable ? (event) => onDragStart(event, sensor) : undefined}
        draggable={draggable}
        onClick={(event) => {
          event.preventDefault();
          onDelete(event);
        }}
        isRound={true}
        variant="solid"
        colorScheme="teal"
        aria-label="Done"
        mx={1}
        size={'sm'}
        icon={
          <Text fontSize={12} fontWeight={400}>
            {sensor.name}
          </Text>
        }
      />
    </Tooltip>
  );
};

export default SensorItem;
